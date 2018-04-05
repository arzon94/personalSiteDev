import React from 'react';
import ReactDOM from 'react-dom';
import LazyHero from 'react-lazy-hero';
import ComponentScroll from '../components/Scroll.js';
// import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll'
var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;

export default function Hero() {
  return (<div className="heroContainer">
    <LazyHero imageSrc="https://source.unsplash.com/collection/1937555/2000x1000" parallaxOffset={100} minHeight='100vh' opacity={0} color="rgb(0, 0, 0)">
<div className="darkBackground">
      <h1 className="heroTitle">Andrew Perkins</h1>
      <p className="heroText">Software Developer</p>
      <a className="test1" to="test1" onClick={() => scroller.scrollTo('test1', {
          duration: 1000,
          delay: 100,
          smooth: "easeInOutQuint",
        })}><i className="downArrow"></i></a>
      </div>
      {/* <a className="test1" to="test1" onClick={() => window.scrollTo(0, ReactDOM.findDOMNode(this.refs.scrollToContent))} >Scroll to element</a> */}

    </LazyHero>
    {/* ... */}
  </div>);

}
// https://unsplash.it/2000/1000
//https://picsum.photos/2000/1000/?random
// https://picsum.photos/4000/2660?image=992
