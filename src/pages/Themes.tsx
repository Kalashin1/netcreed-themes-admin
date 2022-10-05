import Layout from "./Layout";
import ThemesDataTable from "../Components/Themes-Data-Table";

const Themes = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <ThemesDataTable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Themes;