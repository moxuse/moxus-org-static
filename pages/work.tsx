
// import Work from "";
import { GetStaticProps } from 'next';
import { WorkPageProps, getWorklist } from '../services/work';
import Work from '../components/Work';


const WorkPage: React.FC<WorkPageProps> = (props): JSX.Element => {
  return (
    <div>
      { Work(props) }
    </div>
  );
};

export const getStaticProps: GetStaticProps<WorkPageProps> = async () =>  {
  const props = await getWorklist();
  if (!props || props.works.length <= 0) {
    throw new Error("post/[date].tsx > getStaticProps: Args are invalid.");
  }
  return { props: { works: props.works } };
}


export default WorkPage;
