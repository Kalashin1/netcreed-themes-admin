import Reviews from "./Reviews";

const ThemePage = () => {
  return (
    <div className="card card-danger">
      <div className="card-header">
        <h4>Dropdown Button</h4>
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
        <img src="/assets/img/image-gallery/3.png" alt="src" className="img-fluid" />
        <p>Write something here</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit sodales quis mus vel, blandit enim donec platea class. Interdum ornare vestibulum consequat commodo nullam semper ante erat suspendisse dignissim urna, purus cursus tellus nam curae mi conubia tincidunt lectus tempus. Lacus maecenas nunc suscipit porttitor commodo eros urna, at tristique non litora congue rhoncus habitant accumsan, neque montes purus faucibus molestie pulvinar. Facilisi urna phasellus mauris ante rutrum tempor porttitor justo, commodo eros tortor diam molestie accumsan sem potenti, consequat viverra pellentesque pulvinar nibh venenatis ut. Class posuere nulla nibh facilisis eu justo ultrices enim dis habitant, platea etiam sollicitudin torquent penatibus blandit massa duis viverra, mollis phasellus ut felis nisl imperdiet vel et senectus. Eleifend dictumst primis rhoncus potenti mollis blandit torquent vitae augue pharetra, mauris ante mus ultrices ridiculus imperdiet pretium fermentum lacus felis, convallis velit volutpat aptent tempor parturient eu orci viverra.
        </p>

        <Reviews />
      </div>
    </div>
  );
};

export default ThemePage