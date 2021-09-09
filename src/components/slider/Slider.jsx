import "./slider.css"
import Carousel from "react-elastic-carousel";
import Card from "../card/Card";
export default function Slider() {
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
