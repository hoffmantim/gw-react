import React from 'react'
// import './card.css'

export default function Card() {
  return (
    <div>
        <div class="card">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <h2>Front of Card</h2>
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">
                        <div class="card__header">
                            <img src="Abbey.jpg" alt="" class="pp"/>
                            <h2>Back of Card</h2>
                        <div class="card__body">
                            <h3>Back of Card</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi ex delectus nobis consectetur, commodi suscipit asperiores voluptas sequi aspernatur corrupti possimus ipsam consequatur? Minima excepturi ullam magnam deleniti inventore?</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
