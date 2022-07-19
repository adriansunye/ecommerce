import React from 'react'

import { Titlebig } from '../Titles/Titlebig';
import { TitleMedium } from '../Titles/TitleMedium';
import {TextBasic} from '../Titles/TextBasic';
import banner from '../../Images/BannerProduct.jpg'
import './HomeOfert.scss'





export const HomeOfert = () => {

return (
    <div className="container_ofert">
        <Titlebig text="Inicio"/>
        <TextBasic text="Productos del momento"/>
        <TitleMedium text="Ponle color al verano"/>
        <img className="banner" src={banner}/>
    </div>
)
}
