import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

export default (props) => {
  return (
    <Slider>
        <Slide image={<img alt={props} src='https://st2.depositphotos.com/4006379/10495/v/950/depositphotos_104959614-stock-illustration-cute-cartoon-black-white-pink.jpg'/>}>
          <Caption>
            <h3 className='card-panel purple lighten-5 light deep-purple-text text-darken-1'>
            Only quality products!
            </h3>
            <h5 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            for marriage we return the money.
            </h5>
          </Caption>
          </Slide>
          <Slide image={<img alt={props} src='https://img.elo7.com.br/product/original/1763C63/papel-de-parede-i-love-paises-coracao.jpg'/>}>
          <Caption placement="left">
            <h3 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            Frequent discounts.
            </h3>
            <h5 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            you can get things almost for nothing.
            </h5>
          </Caption>
          </Slide>
          <Slide image={<img alt={props} src="https://st2.depositphotos.com/4006379/10496/v/950/depositphotos_104960306-stock-illustration-black-white-pink-seamless-vector.jpg"/>}>
          <Caption placement="right">
            <h3 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            For the whole family.
            </h3>
            <h5 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            Each family member will be delighted!
            </h5>
          </Caption>
          </Slide>
          <Slide image={<img alt={props} src="https://st2.depositphotos.com/4006379/9560/v/950/depositphotos_95604198-stock-illustration-cartoon-black-and-white-lollipop.jpg"/>}>
          <Caption>
            <h3 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            Very soft to the touch!
            </h3>
            <h5 className="card-panel purple lighten-5 light deep-purple-text text-darken-1">
            Only in our store!
            </h5>
          </Caption>
          </Slide>
        </Slider>
  )
}