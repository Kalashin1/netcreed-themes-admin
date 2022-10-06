import Layout from "./Layout";
import UserInfo from "../Components/UserInfo";

const User = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <UserInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User