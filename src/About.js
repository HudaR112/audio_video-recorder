import React from 'react'
import "./About.css"
import Huda from "./imgs/img1.jpeg"
import Sarfaraz from "./imgs/img2.jpg"
import Danish from "./imgs/img3.jpeg"

function About() {
  return (
    <div class="wrapper">
    <h1>Our Team</h1>
    <div class="team">
      <div class="team_member">
        <div class="team_img" style={{backgroundImage: `url(${Huda})` }}>
        </div>
        <h3>Huda Rauf</h3>
        <p class="role">UI/UX developer</p>
        <p> I'm currently pursuing my Computer Science degree from DHA SUFFA University. 
         I am an enthusiastic, self-motivated individual with strong communication skills. I am an aspiring UI/UX developer.
         My areas of interest are web/app development, UI/UX design. Always keen and eager to 
         acquire new skills and learn new things in life. Apart from being a tech-enthusiast, 
         I've been a public speaker from past 6 years.</p>
      </div>
      <div class="team_member">
        <div class="team_img" style={{backgroundImage: `url(${Danish})`}}>
        </div>
        <h3>Danish Baloch</h3>
        <p class="role">Data Enthusiast</p>
        <p>I am an aspiring Data Scientist with strong math background skill including predictive modeling, data processing, 
        and data mining algorithms to solve challenging business problems. Involved in github open source community and passionate about machine learning.</p></div>
      <div class="team_member">
        <div class="team_img" style={{backgroundImage: `url(${Sarfaraz})`}}> 
        </div>
        <h3>Sarfaraz Ahmed</h3>
        <p class="role">Front-End Developer</p>
        <p>Hi, I am undergraduat of DHA SUFFA University currently perusing a degree in Computer Science. My interests are in Front End Engineering,
        and I love to create beautiful and performant products with delightful user experiences.</p>
      </div>
    </div>
    <h1>Our Mission</h1>
    <div class="wrapper1">
    <p>We at Noice-recs will help you in removing that annoying background noises from your recorded videos and audios. 
    We know how hectic the process of re-recording is because of the obnoxious background noise and after witnessing it ourself
    we realised there is a need for a simple yet powerful webapplication that will help you denoising your videos and audios. </p>
    </div>
  </div>
  );
}

export default About