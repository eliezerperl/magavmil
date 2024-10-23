import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <div className="app-content">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
