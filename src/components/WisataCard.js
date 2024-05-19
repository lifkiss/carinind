import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function WisataCard(props) {
  return (
    <div data-aos="flip-left" data-aos-delay="200">
        <article className='wisata-card' >
        <Link to={`/tour/view/${props.id}`}>
          <div className='wisata-image'>
            <img src={props.img} className='wisata-img'/>
            <div className='wisata-shadow'></div>
          </div>
          </Link>
          <h2 className='wisata-title'>{props.nama}</h2>

          <div className='wisata-lokasi'>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#E6F0DC' }} />

            <span> {props.Kategori}</span>
          </div>
        </article>
    </div>
  )
}

export default WisataCard