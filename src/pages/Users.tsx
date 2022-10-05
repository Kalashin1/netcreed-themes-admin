import Layout from "./Layout";
import UserDataTable from "../Components/User-Data-Table";

const Users = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <UserDataTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;