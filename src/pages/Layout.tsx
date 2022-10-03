import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { FC } from 'react';

type Props = {
  children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div id="app">
      <div className="main-wrapper main-wrapper-1">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <Header />
            { children }
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;