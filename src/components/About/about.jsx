import './about.scss'
import shajaat from '../../assets/images/shajaat_cat.png'

const About = () => {

  return (
    <>
    <div className = "background"> 
      <div className="container">
        <img
        className="shajaat"
        src={shajaat}
        alt="Shajaat with cat"/>

        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <h2>
            I am a first generation student with my family being from Pakistan. 
            I am very passionate about working out
            traveling and just enjoying life. 
            I am currently a Computer Science Student at California State University, Sacramento  
          </h2>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default About
