import Featured from "../components/featured/Featured"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Slider from "../components/slider/Slider"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <Slider />
            <Slider />
            <Slider />
            <Footer />
        </div>
    )
}

export default Home
