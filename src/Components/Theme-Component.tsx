import Reviews from "./Reviews";
import { ITheme } from "../types";
import { FC } from "react";

type Props = {
  theme: ITheme
}

const ThemePage: FC<Props> = ({ theme }) => {
  console.log(theme)
  return (
    <div className="card card-danger">
      <div className="card-header">
        <h4>{ theme?.title }</h4>
        <div className="card-header-action">
          <a href="!#" className="btn btn-primary">View All</a>
          <div className="dropdown">
            <a href="!#" data-toggle="dropdown" className="btn btn-warning dropdown-toggle">Options</a>
            <div className="dropdown-menu">
              <a href="!#" className="dropdown-item has-icon"><i className="fas fa-eye"></i> View</a>
              <a href="!#" className="dropdown-item has-icon"><i className="far fa-edit"></i> Edit</a>
              <div className="dropdown-divider"></div>
              <a href="!#" className="dropdown-item has-icon text-danger"><i className="far fa-trash-alt"></i>
                Delete</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <img src={theme?.coverImage?.url} alt="src" className="img-fluid" />
        <p>
          {theme?.description}.
        </p>

        <Reviews />
      </div>
    </div>
  );
};

export default ThemePage