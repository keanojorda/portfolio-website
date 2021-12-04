import React from 'react';
import AboutImage from '../Assets/Images/about.png';


const AboutMe = () => {
    return (
        <section id="about" className="about bg-66">
            <div className="ma0 min-vh-100 cover bg-right" style={{ backgroundImage: `url(${ AboutImage })` }}>
            
                <div className="fl flex center w-100 h-100">
                    <div className="fl flex flex-column w-100 h-100 tc">
                        <div className="fl w-100 center pt4">
                            <h1 className="f2 pa2 center fc-ec ttu">About Me</h1>
                        </div>
                        <div className="fl dn db-l center w-20 flex mb4 bb-l bw1-l white ba-l bg-white"></div>
                        <div className="fl flex flex-column w-100 pa2">
                            <div className="about-text center tl-l">
                                <p className="f6 f4-l lh-copy measure-l pl2 bg-black-30 mt0 white">
                                I am a Web Developer based in the Philippines. 
                                Photography has been one of my passion and it has allowed me to be creative and view ordinary things in a different perspective to
                                get unique shots.
                                </p>
                                <p className="f6 f4-l lh-copy measure-l pl2 bg-black-30 white">
                                I like travelling since it is a way for me to experience new things and enjoy life more. During my free time, I enjoy 
                                reading books especially non-fiction ones, since it's a way for me to learn something new that could help in my daily activities or 
                                in a skill that I've been wanting to improve on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutMe;