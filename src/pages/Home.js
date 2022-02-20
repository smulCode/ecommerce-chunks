import Announcement from "../components/Announcement";
import Hero from "../components/Hero"
import FlavorSection from "../components/FlavorSection"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Home = () => {

  return (
    <div>
      <Navbar  bgColor="transparent" LogoColor="transparent" color="#fff"/>
      {/* <Announcement /> */}
      <Hero/>
      <FlavorSection/>
      
      
      <Footer/>

    </div>
  );
};

export default Home;
