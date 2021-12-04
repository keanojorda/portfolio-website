import ContactImage from '../Assets/Images/contact.png';

const backToTop = (e) =>{
    e.preventDefault();
    const element = document.getElementById("home");
    element.scrollIntoView({behavior: "smooth", block: "start"});
}

const Contact = () => {
    return (
        <section id="contact" className="contact items-center">
            <div className="bg-66 vh-100 ma0 cover bg-left bg-center-l" style={{ backgroundImage: `url(${ ContactImage })`}}>
                <div className="fl pa2 ma0 w-100 h-100 flex flex-column">
                <div className="fl pa2 ma0 w-100 h-50 flex flex-column-reverse">
                    <h1 className="f3 f2-l mt2 mb4 tc-l fc-ec ttu">Let's create awesome things together</h1>
                    </div>
                    <div className="fl pa2 w-100 h-50 flex flex-column db items-center">
                        <div className="w-100 pa3 ma2 h-25 center self-start">
                            <a className="f4 link ba bw1 w-80 w-20-l bg-animate hover-bg-black-90 no-underline white mt2 mb5-l pv2 ph3 ba ttu" href="mailto:keanojorda@gmail.com" aria-labelledby="Let's Talk" target="_blank" rel="noreferrer noopener" >Message Me</a> 
                        </div>
                        <div className="w-100 pa3 ma2 h-50"></div>
                        <div className="w-100 pa3 ma2 h-25 center self-end">
                            <button className="f5 fw4 center bg-transparent b--transparent mt2-l mb2 self-end pointer grow-large" aria-label="Back to the top" onClick={backToTop}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="black" stroke="gray" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;