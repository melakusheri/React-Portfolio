import React from 'react';
import one from '../../assets/images/one.PNG';
import two from '../../assets/images/two.png';
import Three from '../../assets/images/three.png';
import four from '../../assets/images/four.png';
import five from '../../assets/images/five.png';
import six from '../../assets/images/six.PNG';
import '../../assets/css/portfolio.css';


function Portfolio() {

    return ( <
        section class = "sub-section-project"
        id = "Project" >
        <
        h2 > Project < /h2> <
        div class = "project-container" >
        <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { one }
        alt = "project one" / >
        <
        h3 > Project One < /h3> <
        p class = "subtext" > Music Matcher < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/musicMatcher" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://melakusheri.github.io/musicMatcher/" > View Deployed app < /a> </p >

        <
        /div> <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { two }
        alt = "project two" / >
        <
        h3 > Project Two < /h3> <
        p class = "subtext" > RVA Parks and Museums Guide < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/RVA-P-M" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://whispering-earth-65833.herokuapp.com/" > View Deployed app < /a> </p >

        <
        /div> <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { Three }
        alt = "project three" / >
        <
        h3 > Project Three < /h3> <
        p class = "subtext" > Note Taker < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/Note-Taker" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://pacific-spire-47472.herokuapp.com/" > View Deployed app < /a> </p >

        <
        /div> <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { four }
        alt = "project four" / >
        <
        h3 > Project four < /h3> <
        p class = "subtext" > Day Planner < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/Day-Planner" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://melakusheri.github.io/Day-Planner/" > View Deployed app < /a> </p >

        <
        /div> <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { five }
        alt = "project five" / >
        <
        h3 > Project Five < /h3> <
        p class = "subtext" > Code Quiz < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/Code-Quiz" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://melakusheri.github.io/Code-Quiz/" > View Deployed app < /a> </p >

        <
        /div> <
        div class = "project-card" >
        <
        img className = "rectangel"
        id = "profile-pic"
        src = { six }
        alt = "project six" / >
        <
        h3 > Project Six < /h3> <
        p class = "subtext" > Workout Tracker < /p> <
        hr / >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://github.com/melakusheri/Workout-Tracker" > View Github Link < /a> </p >
        <
        p class = "subtext" > < a class = "project-link"
        href = "https://shielded-earth-14240.herokuapp.com/" > View Deployed app < /a> </p >

        <
        /div>

        <
        /div> <
        /section>


    );
};

export default Portfolio;