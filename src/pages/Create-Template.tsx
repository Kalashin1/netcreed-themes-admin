import CreateTemplateForm from "../Components/Create-Template-Form";
import Layout from "./Layout";

const CreateTemplate = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <CreateTemplateForm />
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default CreateTemplate
