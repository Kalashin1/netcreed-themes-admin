import Layout from "./Layout";
import { FC } from "react";
import InoviceComponent from "../Components/Invoice-Component";

const Order: FC = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <InoviceComponent />
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Order;