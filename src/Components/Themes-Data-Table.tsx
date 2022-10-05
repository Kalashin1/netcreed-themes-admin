const ThemesDataTable = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="bootstrap snippet">
          <section id="portfolio" className="gray-bg padding-top-bottom">
            <div className="categories">
              <ul>
                <li className="active">
                  <a href="!#" data-filter="*">All Categories</a>
                </li>
                <li>
                  <a href="!#" data-filter=".web-design">Web Design</a>
                </li>
                <li>
                  <a href="!#" data-filter=".apps">Apps</a>
                </li>
                <li>
                  <a href="!#" data-filter=".psd">PSD</a>
                </li>
              </ul>
            </div>
            <div className="projects-container scrollimation in">
              <div className="row">
                <article className="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post4.png" alt=""/>
                        <span className="project-title">Title 1</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge cboxElement" href="!#" title="Bills Project"><i
                      className="fa fa-expand fa-fw"></i></a>
                    <a className="link" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item apps">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post5.png" alt=""/>
                        <span className="project-title">Title 2</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="link centered" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item web-design psd">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post6.png" alt=""/>
                        <span className="project-title">Title 3</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge centered cboxElement" href="!#" title="Get Colored"><i
                      className="fa fa-expand fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item apps">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post7.png" alt=""/>
                        <span className="project-title">Title 4</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge cboxElement" href="!#" title="Holiday Selector"><i
                      className="fa fa-expand fa-fw"></i></a>
                    <a className="link" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item web-design psd">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post8.png" alt=""/>
                        <span className="project-title">Title 5</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge cboxElement" href="!#" title="Scavenger Hunt"><i
                      className="fa fa-expand fa-fw"></i></a>
                    <a className="link" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item web-design apps">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post9.png" alt=""/>
                        <span className="project-title">Title 6</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge cboxElement" href="!#" title="Sonor"><i
                      className="fa fa-expand fa-fw"></i></a>
                    <a className="link" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post11.png" alt=""/>
                        <span className="project-title">Title 7</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge cboxElement" href="!#" title="Bills Project"><i
                      className="fa fa-expand fa-fw"></i></a>
                    <a className="link" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item apps">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post12.png" alt=""/>
                        <span className="project-title">Title 8</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="link centered" href="!#"><i className="fa fa-eye fa-fw"></i></a>
                  </div>
                </article>
                <article className="col-md-4 col-sm-6 portfolio-item web-design psd">
                  <div className="portfolio-thumb in">
                    <a href="!#" className="main-link">
                      <img className="img-responsive img-center" src="assets/img/posts/post13.png" alt=""/>
                        <span className="project-title">Title 9</span>
                        <span className="overlay-mask"></span>
                    </a>
                    <a className="enlarge centered cboxElement" href="!#" title="Get Colored"><i
                      className="fa fa-expand fa-fw"></i></a>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
};

export default ThemesDataTable;