const UserTable = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>User Table</h4>
        <div className="card-header-form">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-btn">
                <button className="btn btn-primary"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped">
            <tr>
              <th className="text-center">
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
            <tr>
              <td className="p-0 text-center">
                <div className="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                    id="checkbox-1" />
                  <label htmlFor="checkbox-1" className="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Create a mobile app</td>
              <td className="align-middle">
                <div className="progress" data-height="4" data-toggle="tooltip" title="100%">
                  <div className="progress-bar bg-success" data-width="100"></div>
                </div>
              </td>
              <td>
                <img alt="src" src="/assets/img/users/user-5.png" className="rounded-circle" width="35"
                  data-toggle="tooltip" title="Wildan Ahdian" />
              </td>
              <td>2018-01-20</td>
              <td>
                <div className="badge badge-success">Completed</div>
              </td>
              <td><a href="!#" className="btn btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td className="p-0 text-center">
                <div className="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                    id="checkbox-2" />
                  <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Redesign homepage</td>
              <td className="align-middle">
                <div className="progress" data-height="4" data-toggle="tooltip" title="40%">
                  <div className="progress-bar" data-width="40"></div>
                </div>
              </td>
              <td>
                <img alt="src" src="/assets/img/users/user-1.png" className="rounded-circle" width="35"
                  data-toggle="tooltip" title="Nur Alpiana" />
                <img alt="src" src="/assets/img/users/user-3.png" className="rounded-circle" width="35"
                  data-toggle="tooltip" title="Hariono Yusup" />
                <img alt="src" src="/assets/img/users/user-4.png" className="rounded-circle" width="35"
                  data-toggle="tooltip" title="Bagus Dwi Cahya" />
              </td>
              <td>2018-04-10</td>
              <td>
                <div className="badge badge-info">Todo</div>
              </td>
              <td><a href="!#" className="btn btn-primary">Detail</a></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="card-footer text-right">
        <nav className="d-inline-block">
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <a className="page-link" href="!#" tabIndex={-1}><i className="fas fa-chevron-left"></i></a>
            </li>
            <li className="page-item active"><a className="page-link" href="!#">1 <span
              className="sr-only">(current)</span></a></li>
            <li className="page-item">
              <a className="page-link" href="!#">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="!#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="!#"><i className="fas fa-chevron-right"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserTable