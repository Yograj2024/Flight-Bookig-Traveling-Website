import About from './sections/About';
import AirLines from './sections/AirLInes';
import Destination from './sections/Destination';
import ExclusiveOffers from './sections/ExclusiveOffers';
import HeroSection from './sections/HeroSection';
import Package from './sections/Package';
import Testimonial from './sections/Testimonial';

const Home = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Package/>
        <ExclusiveOffers/>
        <Destination/>
        <Testimonial/>
        <AirLines/>
    </>
)};

export default Home;