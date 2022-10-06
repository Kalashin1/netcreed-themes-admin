const Reviews = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Reviews</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled list-unstyled-border list-unstyled-noborder">
          <li className="media">
            <img alt="src" className="mr-3 rounded-circle" width="70" src="/assets/img/users/user-1.png" />
            <div className="media-body">
              <div className="media-right">
                <div className="text-primary">Approved</div>
              </div>
              <div className="media-title mb-1">Cara Stevens</div>
              <div className="text-time">Yesterday</div>
              <div className="media-description text-muted">Duis aute irure dolor in reprehenderit in voluptate
                velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <div>
                <a href="!#" className="dropdown-item has-icon text-danger"><i className="far fa-star"></i></a>
              </div>
              <div className="media-links">
                <a href="!#">View</a>
                <div className="bullet"></div>
                <a href="!#">Edit</a>
                <div className="bullet"></div>
                <a href="!#" className="text-danger">Trash</a>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Reviews;