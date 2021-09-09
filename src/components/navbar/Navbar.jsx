import { Search } from "@material-ui/icons"
import "./navbar.css"
import { useState } from "react";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://xemphimz.org/static/skin/logo-full.png" alt="" />
                    <Search className="icon" />
                    <span>Phim Lẻ</span>
                    <span>Phim Bộ</span>
                    <span>Series</span>
                    <span>Tất Cả Phim</span>
                </div>

                <div className="right">
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
