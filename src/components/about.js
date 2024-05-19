import React, { useEffect } from 'react';
import Navbar from './navbar'
import 'https://unpkg.com/@phosphor-icons/web'
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
        <Navbar/>
        <Helmet>
            <link rel='stylesheet' href='about.css'/>
        </Helmet>
        <div class="wrapper">

<div class="title">
    <h4>About Us!</h4>
</div>

<div class="card_Container">

    <div class="card">

        <div class="imbBx">
            <img src="../../img/hezki.jpeg" alt="" />
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Yehezkiel Natanael <br/><span>00000079871</span></h3>
            </div>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
            <img src="../../img/devin.jpeg" alt=""/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Fransiskus Devin Alvaro <br/><span>00000082030</span></h3>
            </div>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
            <img src="../../img/lifkie.jpeg" alt=""/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Lifkie Lie <br/><span>00000081835</span></h3>
            </div>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
            <img src="../../img/natan.jpeg" alt=""/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Natan Adi Chandra <br/><span>00000079860</span></h3>
            </div>
        </div>

    </div>
</div>

</div>
    </div>
  )
}

export default About