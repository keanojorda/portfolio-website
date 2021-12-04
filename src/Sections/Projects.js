import React from 'react';
import project0 from '../Assets/Images/project0.jpg';
import project1 from '../Assets/Images/project1.png';
import project2 from '../Assets/Images/project2.png';
import '../Assets/css/Projects.css';
import Tilt from 'react-parallax-tilt';




const Projects = () => {

    const onEnterProjectRow = (event) => {
        const element = event.currentTarget;
        const imgElement = element.querySelector(".grayscale-100");
        imgElement.classList.add("grayscale-0");
    }
    
    const onExitProjectRow = (event) => {
        const element = event.currentTarget;
        const imgElement = element.querySelector(".grayscale-0");
        imgElement.classList.remove("grayscale-0");
    }

    return (
        <section className="projects">
             <div className="bg-ec flex flex-column min-vh-100">
                <div className="fl dn dib-l w-20 pa2"></div>
                <div className="fl flex flex-column w-80 w-60-l pa2 center">
                <h1 className="f2 f1-l tc-l ttu fc-42">Projects</h1>
                
                    {/* Project Row */}
                    <div className="project-row w-100 flex flex-column flex-row-l bg-df shadow-1 grow mv3" onMouseEnter={onEnterProjectRow} onMouseLeave={onExitProjectRow} >
                        <div className="fl w-100 w-30-l pa2">
                        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="right">
                            <img src={ project0 } alt="project banner" className="ba b--gray grayscale-100 v-mid" 
                            style={{ Width:"100%", height: "auto"}} />
                        </Tilt>
                        </div>
                        <div className="fl w-100 w-70-l pa2 tc tl-l mr0 mr3-l" >
                            <div className="fl w-100">
                                <h2 className="fc-42 mt0 mb2 ttu">Smart Brain</h2>
                            </div>
                            <div className="fl w-100 mb2">
                            <p className="fc-42 mh1">A web application that analyzes an image and detects the person within the image.</p>
                            </div>
                            <div className="project-buttons mt4 fl w-100 ">
                            <a href="https://keanojorda.github.io/smart-brain" aria-labelledby="See Live" target="_blank" rel="noreferrer noopener" 
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">See Live</a>
                            <a href="https://github.com/keanojorda/smart-brain" aria-labelledby="Source Code" target="_blank" rel="noreferrer noopener"
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">Source Code</a>
                            </div>
                        </div>
                    </div>
                    {/* Project Row --END */}
                    {/* Project Row */}
                    <div className="project-row w-100 flex flex-column flex-row-l bg-df shadow-1 grow mv3" onMouseEnter={onEnterProjectRow} onMouseLeave={onExitProjectRow}>
                        <div className="fl w-100 w-30-l pa2">
                        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="right">
                            <img src={ project1 } alt="project banner" className="ba b--gray grayscale-100 v-mid" 
                            style={{ Width:"100%", height: "auto"}} />
                        </Tilt>
                        </div>
                        <div className="fl w-100 w-70-l pa2 tc tl-l mr0 mr3-l">
                            <div className="fl w-100">
                                <h2 className="fc-42 mt0 mb2 ttu">Robofriends</h2>
                            </div>
                            <div className="fl w-100 mb2">
                                <p className="fc-42 mh1">A fun and responsive web application that generates
                                 a random robot based on the names given with a dynamic search function.</p>
                            </div>
                            <div className="project-buttons mt4 fl w-100 ">
                            <a href="https://keanojorda.github.io/robofriends/" aria-labelledby="See Live" target="_blank" rel="noreferrer noopener"
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">See Live</a>
                            <a href="https://github.com/keanojorda/robofriends" aria-labelledby="Source Code" target="_blank" rel="noreferrer noopener"
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">Source Code</a>
                            </div>
                        </div>
                    </div>
                    {/* Project Row --END */}
                    {/* Project Row */}
                    <div className="project-row w-100 flex flex-column flex-row-l bg-df shadow-1 grow mv3" onMouseEnter={onEnterProjectRow} onMouseLeave={onExitProjectRow}>
                        <div className="fl w-100 w-30-l pa2 ">
                        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="right">
                            <img src={ project2 } alt="project banner" className="ba b--gray grayscale-100 v-mid" 
                            style={{ Width:"100%", height: "auto"}} />
                        </Tilt>
                        </div>
                        <div className="fl w-100 w-70-l pa2 tc tl-l mr0 mr3-l">
                            <div className="fl w-100">
                                <h2 className="fc-42 mt0 mb2 ttu">Background Generator</h2>
                            </div>
                            <div className="fl w-100 mb2">
                                <p className="fc-42 mh1"> A web application that creates and displays a preview of a linear gradient, which can be really useful when desigining a website.</p>
                            </div>
                            <div className="project-buttons mt4 fl w-100 ">
                            <a href="https://keanojorda.github.io/background-generator" aria-labelledby="See Live" target="_blank" rel="noreferrer noopener"
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">See Live</a>
                            <a href="https://github.com/keanojorda/background-generator" aria-labelledby="Source Code" target="_blank" rel="noreferrer noopener"
                                className="f6 fc-42 link ba ph3 pv2 mb3 mh4 mb2-l ml0-l mr3-l db dib-l dark-gray ttu bg-animate hover-bg-gray hover-white">Source Code</a>
                            </div>
                        </div>
                    </div>
                    {/* Project Row --END */}
                </div>
                <div className="fl dn dib-l w-20 pa2"></div>
            </div>
        </section>

        );
}

export default Projects;