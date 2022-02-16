import Announcement from "../components/Announcement";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Home = () => {

  return (
    <div>
      <Navbar  bgColor="transparent" LogoColor="transparent" color="#fff"/>
      {/* <Announcement /> */}
      <Hero/>
      
      <Footer/>

    </div>
  );
};

export default Home;
