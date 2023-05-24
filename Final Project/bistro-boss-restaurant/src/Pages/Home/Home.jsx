import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;