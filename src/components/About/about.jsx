import shajaat from '../../assets/images/shajaat_cat.png';

const About = () => {
  return (
    <>
      <div className="flex min-h-screen items-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center z-10">
          <img className="md:transform md:scale-75 w-full md:w-auto" src={shajaat} alt="Shajaat with cat" />
          <div className="text-center md:text-left mt-6 md:mt-0 md:ml-10">
            <h1 className="text-5xl md:text-8xl font-[Coolvetica] font-bold text-black">
              About Me
            </h1>
            <h2 className="text-xl md:text-4xl text-black m-1 font-[Coolvetica] font-normal">
              I am a first generation college student. I am very passionate about working out, traveling, and just enjoying life.
              I am currently a Computer Science Student at California State University, Sacramento
              with my graduation being May 2025. 
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;


