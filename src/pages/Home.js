import Announcement from "../components/Announcement";
import Hero from "../components/Hero"
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Home = () => {

  return (
    <div>
      <Navbar  bgColor="#191D1E" LogoColor="transparent" color="#fff"/>
      {/* <Announcement /> */}
      <Hero/>
      
      <Footer/>

    </div>
  );
};

export default Home;
