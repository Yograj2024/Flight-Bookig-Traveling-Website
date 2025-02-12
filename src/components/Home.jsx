import About from './sections/About';
import AirLines from './sections/AirLInes';
import Destination from './sections/Destination';
import ExclusiveOffers from './sections/ExclusiveOffers';
import Hero from './sections/Hero';
import Package from './sections/Package';
import Testimonial from './sections/Testimonial';

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Package/>
        <ExclusiveOffers/>
        <Destination/>
        <Testimonial/>
        <AirLines/>
    </>
)};

export default Home;