import { FC } from "react"

const Pagination: FC = () => {
  return (
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
  )
}

export default Pagination;