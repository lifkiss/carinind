import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import WisataCard from './WisataCard';
import DataWisata from './DataWisata';
import { Helmet } from 'react-helmet';

function Wisata() {
  const [searchInput, setSearchInput] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterButtonClick = (category) => {
    setCategoryFilter(category);
  };

  const filteredProducts = DataWisata.filter((product) => {
    if (categoryFilter === 'all' || product.Kategori === categoryFilter) {
      return product.nama.toUpperCase().includes(searchInput.toUpperCase());
    }
    return false;
  });

  const createCard = (data) => (
    <WisataCard
      key={data.id}
      id={data.id}
      img={data.imgURL}
      nama={data.nama}
      Kategori={data.Kategori}
    />
  );

  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.wisata-grid').forEach((element, index) => {
        element.setAttribute('data-aos-delay', `${index * 100}`);
      });
    }
  }, []);

  return (
    <div className='bodyWisata'>
      <Helmet>
        <link rel='stylesheet' href='wisata.css' />
      </Helmet>
      <Navbar />
      <section className='wisata-section' id='wisata'>
        <div className='wisata-wrapper'>
          <div id='search-container-wisata'>
            <input
              type='search'
              id='search-input'
              placeholder='Cari destinasi wisata . . .'
              value={searchInput}
              onChange={handleSearchInputChange}
              data-aos='fade-right'
              data-aos-delay='200'
            />
            <button id='search-wisata' data-aos='fade-left' data-aos-delay='200'>
              Search
            </button>
          </div>
          <div id='buttons-wisata'>
            {['all', 'Pantai', 'Bukit', 'Monumen', 'Pulau', 'Air terjun'].map((category, index) => (
              <div key={category} data-aos='fade-up' data-aos-delay={200 + index * 50}>
                <button
                  className={`button-value-wisata ${categoryFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilterButtonClick(category)}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              </div>
            ))}
          </div>
          <div id='products-wisata'>
            <div className='wisata-container wisata-grid'>
              {filteredProducts.map(createCard)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wisata;
