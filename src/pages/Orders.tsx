import Layout from "./Layout"
import OrdersDataTable from "../Components/Order-Data-Table"

const Orders = () => {
  return (
    <Layout>
      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <OrdersDataTable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Orders