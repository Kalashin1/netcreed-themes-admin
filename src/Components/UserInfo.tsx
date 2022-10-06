import { FC } from "react";

const UserInfo: FC = () => {
  return (
    <div className="card profile-widget">
      <div className="profile-widget-header">
        <img alt="sec" src="/assets/img/users/user-1.png" className="rounded-circle profile-widget-picture" />
          <div className="profile-widget-items">
            <div className="profile-widget-item">
              <div className="profile-widget-item-label">Posts</div>
              <div className="profile-widget-item-value">225</div>
            </div>
            <div className="profile-widget-item">
              <div className="profile-widget-item-label">Followers</div>
              <div className="profile-widget-item-value">9,3K</div>
            </div>
            <div className="profile-widget-item">
              <div className="profile-widget-item-label">Following</div>
              <div className="profile-widget-item-value">3,7K</div>
            </div>
          </div>
      </div>
      <div className="profile-widget-description pb-0">
        <div className="profile-widget-name">Sarah Smith <div className="text-muted d-inline font-weight-normal">
          <div className="slash"></div> Web Developer
        </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </div>
      <div className="card-footer text-center pt-0">
        <div className="font-weight-bold mb-2 text-small">Follow Hasan On</div>
        <a href="!#" className="btn btn-social-icon mr-1 btn-facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="!#" className="btn btn-social-icon mr-1 btn-twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="!#" className="btn btn-social-icon mr-1 btn-github">
          <i className="fab fa-github"></i>
        </a>
        <a href="!#" className="btn btn-social-icon mr-1 btn-instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  )
};

export default UserInfo;