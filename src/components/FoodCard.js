import React from 'react'

function FoodCard(props) {
  return (   
          <div class="col-md-4"  data-aos="flip-right" data-aos-delay="200">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img">
                <img src={props.img} alt={props.nama} class="img-responsive" />
              </div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span>{props.kategori}</span>
                </div>
                <div class="title-product">
                  <h3>{props.nama}</h3>
                </div>
                <div class="description-prod">
                  <p>{props.deskripsi}</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">{props.harga}</span></div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FoodCard