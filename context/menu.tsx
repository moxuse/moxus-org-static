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

const MenuContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<MenuState>("close");

  return (
    <MenuContext.Provider value={{ state, setState }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
