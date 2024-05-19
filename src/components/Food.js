import React from 'react'
import Navbar from './navbar'
import FoodCard from './FoodCard'
import DataFood from './DataFood';
import { Helmet } from 'react-helmet'

function Food() {
    const createCard = (data) => (
        <FoodCard
        img={data.img}
        kategori={data.kategori}
        nama={data.nama}
        deskripsi={data.deskripsi}
        harga={data.harga}
        />
      );
  return (
    <div>
        <Navbar />
    <Helmet>
        <link rel='stylesheet' href='FoodCard.css'/>
        <link rel='stylesheet' href='navbar.css'/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    </Helmet>
        <div class="shell">
            <div class="container">
                <div class="row">
        {DataFood.map(createCard)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food