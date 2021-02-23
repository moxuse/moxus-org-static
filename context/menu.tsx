import * as React from "react";

export const MenuContext = React.createContext<{
  state: MenuState;
  setState: (state: MenuState) => void;
}>({
  state: "close",
  setState: (state) => {
    console.log('in context:',state);
  },
});

const MenuContextProvider: React.FC<React.Props<{}>> = ({ children }) => {
  const [state, setState] = React.useState<MenuState>("close");

  // 初期化処理
  React.useEffect(() => {
    // localStorageから読み出し
    const savedMenu = window.localStorage.getItem("menu");
    if (savedMenu !== null) {
      setState(savedMenu as MenuState);
    }
  }, []);


  // menu更新時処理
  React.useEffect(() => {
    // localStorageに保存
    window.localStorage.setItem("menu", state);

    // body要素のクラスを変更
    document.body.className = state;
  }, [state]);

  return (
    <MenuContext.Provider value={{ state, setState }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
