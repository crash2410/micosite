import React, {useEffect, useRef, useState} from "react";
import VideoFrame from '../assets/video/BackVideo.mp4';
import "video-react/dist/video-react.css";// Импортируйте стили
import "../styles/VideoPlayer.css";

const VideoPlayer = ({changeVideoPlaying}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (currentTime >= 5) {
            changeVideoPlaying(true);
        }
    }, [currentTime]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('playing', handleVideoPlaying);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('playing', handleVideoPlaying);
            }
        };
    }, []);

    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            intervalId = setInterval(() => {
                if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime);
                }
            }, 500); // Здесь 500 миллисекунд (половина секунды)
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    const handleVideoPlaying = () => {
        if (videoRef.current) {
            setIsPlaying(true);
        }
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <div className="video-container">
            <video ref={videoRef} onClick={handleVideoClick}>
                <source src={VideoFrame} type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
            </video>
        </div>
    );
};

export default VideoPlayer;