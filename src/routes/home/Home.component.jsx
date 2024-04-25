import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/directory.component";
const Home = () => {
  

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
