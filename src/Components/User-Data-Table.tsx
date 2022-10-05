import Pagination from "./Pagination";

const UserDataTable = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Users Table</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped" id="table-2">
            <thead>
              <tr>
                <th className="text-center pt-3">
                  <div className="custom-checkbox custom-checkbox-table custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                      className="custom-control-input" id="checkbox-all" />
                    <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                  </div>
                </th>
                <th>Task Name</th>
                <th>Progress</th>
                <th>Members</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center pt-2">
                  <div className="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                      id="checkbox-1" />
                    <label htmlFor="checkbox-1" className="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Create a mobile app</td>
                <td className="align-middle">
                  <div className="progress progress-xs">
                    <div className="progress-bar width-per-70"></div>
                  </div>
                </td>
                <td>
                  <img alt="src" src="assets/img/users/user-5.png" width="35" />
                </td>
                <td>2018-01-20</td>
                <td>
                  <div className="badge badge-success badge-shadow">Completed</div>
                </td>
                <td><a href="!#" className="btn btn-primary">Detail</a></td>
              </tr>
              <tr>
                <td className="text-center pt-2">
                  <div className="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                      id="checkbox-2" />
                    <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Redesign homepage</td>
                <td className="align-middle">
                  <div className="progress progress-xs">
                    <div className="progress-bar width-per-60"></div>
                  </div>
                </td>
                <td>
                  <img alt="src" src="assets/img/users/user-1.png" width="35" />
                  <img alt="src" src="assets/img/users/user-3.png" width="35" />
                  <img alt="src" src="assets/img/users/user-4.png" width="35" />
                </td>
                <td>2018-04-10</td>
                <td>
                  <div className="badge badge-info badge-shadow">Todo</div>
                </td>
                <td><a href="!#" className="btn btn-primary">Detail</a></td>
              </tr>
              <tr>
                <td className="text-center pt-2">
                  <div className="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                      id="checkbox-3" />
                    <label htmlFor="checkbox-3" className="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Backup database</td>
                <td className="align-middle">
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-warning width-per-70"></div>
                  </div>
                </td>
                <td>
                  <img alt="src" src="assets/img/users/user-1.png" width="35" />
                  <img alt="src" src="assets/img/users/user-2.png" width="35" />
                </td>
                <td>2018-01-29</td>
                <td>
                  <div className="badge badge-warning badge-shadow">In Progress</div>
                </td>
                <td><a href="!#" className="btn btn-primary">Detail</a></td>
              </tr>
              <tr>
                <td className="text-center pt-2">
                  <div className="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                      id="checkbox-4" />
                    <label htmlFor="checkbox-4" className="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Input data</td>
                <td className="align-middle">
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-success width-per-40"></div>
                  </div>
                </td>
                <td>
                  <img alt="src" src="assets/img/users/user-2.png" width="35" />
                  <img alt="src" src="assets/img/users/user-5.png" width="35" />
                  <img alt="src" src="assets/img/users/user-4.png" width="35" />
                  <img alt="src" src="assets/img/users/user-1.png" width="35" />
                </td>
                <td>2018-01-16</td>
                <td>
                  <div className="badge badge-success badge-shadow">Completed</div>
                </td>
                <td><a href="!#" className="btn btn-primary">Detail</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer text-right">
        <Pagination />
      </div>
    </div>
  )
}

export default UserDataTable;