import About from './Home_Page_Sections/About';
import AirLines from './Home_Page_Sections/AirLInes';
import Destination from './Home_Page_Sections/Destination';
import Hero from './Home_Page_Sections/Hero';
import Package from './Home_Page_Sections/Package';
import Testimonial from './Home_Page_Sections/Testimonial';
import Wispydeals from './Home_Page_Sections/Wispydeals';

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Package/>
        <Wispydeals/>
        <Destination/>
        <Testimonial/>
        <AirLines/>
    </>
)};

export default Home;