import Announcement from "../components/Announcement";
import Hero from "../components/Hero"
import FlavorSection from "../components/FlavorSection"
import ExtraFlavor from "../components/ExtraFlavor"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";




const Home = () => {


console.log(Intro)

  return (
    <div>


      <Navbar  bgColor="transparent" LogoColor="transparent" color="#fff"/>
  
      {/* <Announcement /> */}
    
      <Hero/>
      <FlavorSection/>

      <ExtraFlavor/>
      
      
      <Footer/>

    </div>
  );
};

export default Home;
