import React from 'react';
import styled from '../styles/BannerHomePage.module.css';
import img from '../assets/img/qr-code.png'
import {Link} from "react-router-dom";
const BannerHomePage = ({videoPlaying}) => {

    return (
        <div className={styled.bannerBlock}>
            <h1>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
            <img src={img} alt="QR-CODE"/>
            <p>Сканируйте QR-код
                или нажмите ОК</p>
            <Link to='/numberEnter' className={styled.button}>OK</Link>

        </div>
    );
};

export default BannerHomePage;