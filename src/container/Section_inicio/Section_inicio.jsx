import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar.jsx';
import { HomeOfert } from '../../components/HomeOfert/HomeOfert';
import { NewProducts } from '../../components/NewProducts/NewProducts';




export const Section_inicio = () => {

return (
    <div>
        <Navbar/>
        <HomeOfert/>
        <NewProducts/>

    </div>
)
}
