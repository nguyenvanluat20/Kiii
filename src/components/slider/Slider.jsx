import "./slider.css"
import Carousel from "react-elastic-carousel";
import Card from "../card/Card";
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://apiwebmovie.herokuapp.com",
});
export default axiosInstance;
const [values, setValues] = useState({
    moviename: '',
    trailerlink: '',
    movielink: '',
    imagelink: '',
    image: '',
    typemovie: '',
    national: '',
    actors: '',
    description: ''
});

export default function Slider() {
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get("/getallmovie");
            const data = await response.data;
            setValues(data);
            console.log(data);
        };
        fetchMovie();
    }, [id]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }

    ];
    return (
        <div className="slider">
            <span className="sliderTitle">Phim mới cập nhật</span>
            <Carousel breakPoints={breakPoints}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </div>
    )
}
