import React from 'react';
import Navbar from './navbar';
import DataWisata from './DataWisata';
import { useParams } from 'react-router-dom';
import './wisatadetail.css'

function WisataDetail() {
  const { id } = useParams();
  const wisata = DataWisata.find(item => item.id === parseInt(id, 10));

  if (!wisata) {
    return <div>Wisata not found</div>;
  }

  return (
    <div className='bodyWD'>
      <Navbar />
      <section className='post-header'>
        <a href="/tour" style={{ textDecoration: 'none' }}>

          <h1 className='back-from-detail'><i className='fas fa-angle-left'></i> BACK</h1>
        </a>
        <div className='header-content post-container'>
            <h1 className='header-title' data-aos="fade-in" data-aos-delay="100">{wisata.nama}</h1>

            <img src={wisata.imgURL} alt={wisata.nama} className='header-img'data-aos="fade-in" data-aos-delay="150"/>
        </div>
      </section>

      <section className='post-content post-container'>
        <h2 className='sub-heading' data-aos="fade-left" data-aos-delay="200">
            {wisata.lokasi}
        </h2>
        <p className='post-text' data-aos="fade-right" data-aos-delay="250">{wisata.Deskripsi}</p>

        <iframe src={wisata.map} width="100%" height="400px" data-aos="fade-up" data-aos-delay="100"></iframe>

      </section>
    </div>
  );
}

export default WisataDetail;
