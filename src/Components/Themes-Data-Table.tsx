import { FC } from "react";
import { ITheme } from "../types";
import Pagination from "./Pagination";
import { useNavigate } from 'react-router-dom'

type Props = {
  themes: ITheme[]
}

const ThemesDataTable: FC<Props> = ({ themes }) => {
  const navigate = useNavigate();

  console.log(themes)
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>Themes Table</h4>
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
                <th>Title</th>
                <th>Price</th>
                <th>Downloads</th>
                <th>Views</th>
                <th>Saves</th>
                <th>Action</th>
              </tr>
              {themes && themes.map(t => (
                <tr key={t.id}>
                  <td className="p-0 text-center">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                        id="checkbox-1" />
                      <label htmlFor="checkbox-1" className="custom-control-label">&nbsp;</label>
                    </div>
                  </td>
                  <td>{t.title}</td>
                  <td>{t.price}</td>
                  <td>{t.downloads ?? 0}</td>
                  <td>{t.views ?? 0}</td>
                  <td>{t.saves ?? 0}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={e => navigate(`/theme/${t.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              )
              )}

            </table>
          </div>
        </div>
        <div className="card-footer text-right">
          <Pagination />
        </div>
      </div>
    </>
  )
};

export default ThemesDataTable;