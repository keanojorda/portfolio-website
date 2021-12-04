import React, { Component } from 'react';
import './App.css';
import Hero from './Sections/Hero';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';


class App extends Component {
  constructor(){
    super() 
    this.state = {
      heroName: ['.hero-name', 'fadeInUp', 'delay-1s'],
      heroRole: ['.hero-role', 'fadeInUp', 'delay-1s'],
      knowMore: ['.know-more', 'fadeInUp', 'delay-2s'],
    }
  }


  animateCSS = (element, animation, delay, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const delayTime = `${prefix}${delay}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName, delayTime);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName, delayTime);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
 

  componentDidMount(){
    const { heroName, heroRole, knowMore } = this.state;
    this.animateCSS(heroName[0],heroName[1],heroName[2]);
    this.animateCSS(heroRole[0],heroRole[1],heroRole[2]);
    this.animateCSS(knowMore[0],knowMore[1],knowMore[2]);
  }


  render(){
    return (
      <div className="tc">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
