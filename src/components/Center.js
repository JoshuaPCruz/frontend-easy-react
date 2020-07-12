import React from 'react'
import '../components/styles/center.css'
import obama from '../img/obama.jpg' 
import Image from '../img/cuadro.jpg'

function Center() {
  return (
    <div className="center__content">
      <div className="center--top">
        <img src={obama} className="image__obama" alt="" />
      </div>
      <div className="center--description">
        <h4>Hammry and Obama Brishk From Start</h4>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat quisquam corporis perspiciatis neque odit cumque quae quos nostrum, modi eius at facere voluptatum quis, quia voluptas facilis accusantium repudiandae!</p>
      </div>
      <hr/>
      <div className="center--center">
        <h3 className="title__cursive">
          <i className="title__cursive--form">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </i>
        </h3>
      <div className="main__center">
          <div className="main__center--detail">
            <hr className="main--line" />
            <h6 className="main__line--title">Lorem ipsum dolor</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, delectus explicabo assumenda iste deserunt dignissimos, accusamus sequi quod quibusdam aliquam nulla quasi perspiciatis quis unde fugit reiciendis vero obcaecati quae?</p>
          </div>
          <div className="main__center--detail">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, delectus explicabo assumenda iste deserunt dignissimos, accusamus sequi quod quibusdam aliquam nulla quasi perspiciatis quis unde fugit reiciendis vero obcaecati quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
          <div className="main__center--detail">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, delectus explicabo assumenda iste deserunt dignissimos, accusamus sequi quod quibusdam aliquam nulla quasi perspiciatis quis unde fugit reiciendis vero obcaecati quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="main__center--detail">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, delectus explicabo assumenda iste deserunt dignissimos, accusamus sequi quod quibusdam aliquam nulla quasi perspiciatis quis unde fugit reiciendis vero obcaecati quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
    </div>
    </div>
    <div className="center--center">
      <h3 className="title__cursive">
        <i className="title__cursive--form">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </i>
      </h3>
    <div className="content__final">
      <div className="content__final--details">
        <p className="content__final--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex aliquid consectetur numquam vitae voluptates labore. Vel sapiente quidem perspiciatis explicabo, quaerat velit? Vero quidem veniam eaque maiores. Dolorum, unde.
        Consequuntur earum voluptas cumque molestias atque, recusandae laboriosam harum eveniet voluptate odio modi quos officia minus, at, quod expedita reiciendis ut porro a facilis ullam debitis dolor nobis? Soluta, ea!
        Neque consequuntur rerum cupiditate corrupti hic facilis eius dolorum mollitia, fugit maxime alias ullam quaerat debitis molestias, tempora, impedit voluptate! Voluptatum tempora illo explicabo error quia odio illum provident praesentium.</p>
        <div className="float">
          <h3 className="title__float">
            Lorem ipsum
            <br/>
            <hr className="final"/> 
          </h3>
          <p className="content__final--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae. Dignissimos, repudiandae esse hic reprehenderit quia fuga consectetur? Cum sed doloribus quisquam deleniti. Quas porro deleniti ullam expedita, iste harum!
          Aut voluptatum in iste, ipsam qui eos eveniet vero nemo accusantium modi sapiente distinctio maiores totam! Alias, nesciunt eaque maiores quibusdam a animi magnam deserunt quae quod, tempora odio at.
          Fugit maiores quos debitis quisquam cum aut temporibus nostrum perspiciatis. Iste illo consequatur, magni rem, quam porro officiis debitis dolorem corrupti nostrum unde tenetur voluptates quidem cupiditate est cumque dignissimos!</p>
      </div>
                </div>
                    <figure>
                        <img src={Image} className="cuadro" alt="" /> 
                    </figure>
                </div>
    </div>
  </div>
  )
}

export default Center;