import FeaturedSection from "../components/homePages/FeaturedSection";
import LatestBlog from "../components/homePages/LatestBlog";
import LatestSection from "../components/homePages/LatestSection";
import MainSection from "../components/homePages/MainSection";
import ShopexOffer from "../components/homePages/ShopexOffer";
import TrendingProducts from "../components/homePages/TrendingProducts";



const Home = () => {
  return (
    <>
     
<div className="space-y-16">
<MainSection/>
 <FeaturedSection/>
 <LatestSection/>
 <ShopexOffer/>
 <TrendingProducts/>
 <LatestBlog/>
</div>
    </>
  );
};

export default Home;
