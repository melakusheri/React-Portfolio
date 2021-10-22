import React from 'react';
import melaku from '../../assets/images/melaku.jpg';
import '../../assets/css/about.css';

function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className="text-center w100 mb-2">about<span className="text-primary">Me</span></h2>
                <div className="text-center" id="my-picture">
                    <img className="circle" id="profile-pic" src={melaku} alt="melaku pic" />
                </div>
                <div className="w75" id="about-me">
                    <p>
                        Hello! My name is <span className="bold text-primary">Melaku Sheri</span>. I am a full stack developer.
                    </p>
                    
                    <p>
                        I born in Ethiopia and I’ve Lived in 8 countries around the world. I moved to the United States in 2008. My interest are reading bible, swimming, scuba diving and Traveling.
                    </p>
                    <p>Previously I studied Microbiology, and Medical laboratory technician at J sergeant Reynolds community college.
                         In May 2021, I embarked on a 24-week journey to become a full stack developer. This is an exciting career with plenty of challenge. In this career learning never stop.
                I have been learning at a very fast pace in the program. When I look back to my first works I am amazed at what I can do now.   
                    </p>
                </div>
                <div className="w30" id="about-mebold">
                    <p>
                        <span className="bold text-primary">Melaku Sheri</span> Full Stack Developer
                    </p>
                      
                </div>
            </div>
        </section>
    );
}

export default About;