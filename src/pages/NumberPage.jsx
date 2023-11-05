import React from 'react';
import {Link} from "react-router-dom";
import styled from "../styles/NumberPage.module.css";
import InputMask from 'react-input-mask';

const NumberPage = () => {
    return (
        <div className={styled.numberPageBlock}>
            <div className={styled.panelNumber}>
               <div className={styled.numberBlock}>
                   <h1>Введите ваш номер
                       мобильного телефона</h1>
                   <InputMask mask="+7 (999) 999-99-99" maskChar="_" alwaysShowMask={true}>
                       {() => <input type="text" placeholder="+7 (_ _ _)_ _ _-_ _-_ _" className={styled.phoneInput} />}
                   </InputMask>
                   <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
               </div>
                <div className={styled.numpadNumber}>
                    <div className={styled.row}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div className={styled.row}>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div className={styled.row}>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div className={styled.row}>
                        <button className={styled.clearButton}>Стереть</button>
                        <button>0</button>
                    </div>
                </div>
                <div className={styled.checkBoxBlock}>
                    <label className={styled.checkboxLabel}>
                        <input type="checkbox" className={styled.checkboxInput} />
                        Согласие на обработку персональных данных
                    </label>
                </div>
                <button className={styled.submitNumber}>
                    ПОДТВЕРДИТЬ НОМЕР
                </button>
            </div>
            <div className={styled.closePageNumber}></div>
            <div className={styled.qrCode}></div>
        </div>
    );
};

export default NumberPage;