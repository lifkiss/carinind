import React from 'react'
import { Link } from 'react-router-dom'

function HomeDestination() {
  return (
    <div>      
      <section className='wisata' id='wisata'>
    <div className='judulWisata' data>
      <span><p  data-aos="fade-left" data-aos-delay="200">Wisata terbaik </p></span>
      <h1 data-aos="fade-right" data-aos-delay="350">Nikmati Nusantara</h1>
    </div>

    <div className='box-container'>
      <div className='box' data-aos="zoom-in" data-aos-delay="100">
        <div className='image'>
          <img src='/wisataAsset/Picture4.png' alt='Tanjong Bajau' />
        </div>
        <div className='content'>
          <h3>Tanjong Bajau</h3>
          <p>
          Tanjung Bajau atau biasa disebut Rindu alam ini terletak di Kota Singkawang. Rindu Alam hanya berjarak 18 km dari wisata Pasir Panjang dan Palm Beach, objek wisata alam yang sudah sangat terkenal di Kalimantan Barat
          </p>
          <Link to='/tour/view/4'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>

      <div className='box' data-aos="zoom-in" data-aos-delay="150">
        <div className='image'>
          <img src='/wisataAsset/Picture5.png' alt='Pantai Batu Nenek' />
        </div>
        <div className='content'>
          <h3>Pantai Batu Nenek</h3>
          <p>
          Walaupun namanya terkesan aneh, namun objek wisata ini disebut-sebut sebagai surga tersembunyi yang baru saja ditemukan.Pantai Batu Nenek memiliki pemandangan gugusan bebatuan yang berhiaskan air laut yang biru dan jernih.Pada saat air laut sedang surut, wisatawan bisa menjelajah jauh ke tengah pantai untuk eksplore karang laut dan binatang laut yang terjebak di bebatuan.
          </p>
          <Link to='/tour/view/5'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>

      <div className='box' data-aos="zoom-in" data-aos-delay="200">
        <div className='image'>
          <img src='/wisataAsset/Picture17A.png' alt='Pulau Lemukutan' />
        </div>
        <div className='content'>
          <h3>Pulau Lemukutan</h3>
          <p>
          salah satu pulau di Kalimantan Barat yang cukup terkenal, terletak tak jauh dari Kota Singkawang, Anda dapat menuju ke Pulau Lemukutan menggunakan perahu motor selama 1 jam sampai dengan 2 jam perjalanan.
          </p>
          <Link to='/tour/view/17'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>

      <div className='box' data-aos="zoom-in" data-aos-delay="50">
        <div className='image'>
          <img src='/wisataAsset/Picture18.png' alt='Pulau Randayan' />
        </div>
        <div className='content'>
          <h3>Pulau Randayan</h3>
          <p>
          Pulau Randayan berjarak 32 kilometer dari Kota Singkawang, di sini Anda dapat menikmati gabungan keindahan alam dari jernihnya air laut, hijaunya pepohonan, serta putihnya hamparan pasir yang memanjakan mata.
          </p>
          <Link to='/tour/view/18'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>

      <div className='box' data-aos="zoom-in" data-aos-delay="100">
        <div className='image'>
          <img src='/wisataAsset/Picture7.png' alt='foto1' />
        </div>
        <div className='content'>
          <h3>Riam Marum</h3>
          <p>
          Riam Marum merupakan salah satu air terjun yang sangat indah di Kalimantan Barat. Akses jalan yang terjangkau serta dikelilingi hutan yang masih asri akan memberikan kepuasan batin yang tidak akan terlupakan bagi pengunjung. 
          </p>
          <Link to='/tour/view/7'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>

      <div className='box' data-aos="zoom-in" data-aos-delay="150">
        <div className='image'>
          <img src='/wisataAsset/Picture10.png' alt='Bukit Jamur' />
        </div>
        <div className='content'>
          <h3>Bukit Jamur</h3>
          <p>
          Punya nama unik sekaligus menarik, Bukit Jamur nyatanya menyimpan pesona keindahan alam yang tak bisa terelakkan. Terletak di Kabupaten Bengkayang, bukit ini kerap menjadi incaran penduduk setempat untuk menikmati keindahan kota dari atas ketinggian. 
          </p>
          <Link to='/tour/view/10'>Read More <i className='fas fa-angle-right'></i></Link>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default HomeDestination