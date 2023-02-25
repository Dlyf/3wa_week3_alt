import { useParams } from "react-router-dom";

const PageHome = () => {
  const params = useParams();
  console.log(params);
  return <div>Vous êtes à la page {params.page_id} </div>;
};

export default PageHome;
