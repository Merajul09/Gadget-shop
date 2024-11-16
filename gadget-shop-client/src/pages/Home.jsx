import Banner from "../components/home/Banner";
import Faq from "../components/home/Faq";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="my-24">
          <h1 className="text-center text-3xl font-bold mb-6">
            Featured Products
          </h1>
          <FeaturedProducts />
        </div>
        <div className="my-24">
          <h1 className="text-center text-3xl font-bold mb-6">User Reviews</h1>
          <UserReview />
        </div>
        <div className="my-24">
          <h1 className="text-center text-3xl font-bold mb-6">
            Frequently Asked Question
          </h1>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Home;
