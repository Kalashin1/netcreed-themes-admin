import Layout from "./Layout";
import ThemeComponent from "../Components/Theme-Component";

const Theme = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <ThemeComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Theme;