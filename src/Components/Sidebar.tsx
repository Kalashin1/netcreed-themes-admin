const Sidebar = () => {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html"> <img alt="src" src="/assets/img/logo.png" className="header-logo" /> <span
            className="logo-name">Otika</span>
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="dropdown active">
            <a href="index.html" className="nav-link"><i className="fas fa-home"></i><span>Home</span></a>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i className="fas fa-image"></i><span>Themes</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="widget-chart.html">Create Theme</a></li>
              <li><a className="nav-link" href="widget-data.html">View Themes</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i className="fas fa-credit-card"></i><span>Orders</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="widget-chart.html">Pending Orders</a></li>
              <li><a className="nav-link" href="widget-chart.html">Processed Orders</a></li>
              <li><a className="nav-link" href="widget-data.html">Canceled Orders</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i
              className="fas fa-user-alt"></i><span>Users</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="widget-data.html">View Themes</a></li>
              <li><a className="nav-link" href="widget-chart.html">Create User</a></li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  )
}


export default Sidebar;