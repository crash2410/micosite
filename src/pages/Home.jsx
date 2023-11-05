import YouTube from "react-youtube";
import VideoPlayer from "../components/VideoPlayer";
import styled from "../styles/HomePage.module.css";
import BannerHomePage from "../components/BannerHomePage";
import {useEffect, useState} from "react";
const Home = () => {
    const [showBanner, setShowBanner] = useState(false);

    const changeShowBanner = (data) => {
        // Функция обратного вызова для получения данных от дочернего компонента
        setShowBanner(data);
    }

    useEffect(() => {
        console.log(showBanner)
    }, [showBanner])

    return (
        <div className={styled.homeBlockVideo}>
            <VideoPlayer changeVideoPlaying={changeShowBanner}/>
            {
                showBanner && <BannerHomePage videoPlaying={showBanner}/>
            }
        </div>
    );
};

export default Home;