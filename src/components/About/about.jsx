import shajaat from '../../assets/images/shajaat_cat.png'

const About = () => {
  return (
    <>
      <div className="flex min-h-screen items-center">
        <div className="container mx-auto flex flex-row justify-center items-center z-10">
          <img className="transform scale-75" src={shajaat} alt="Shajaat with cat" />
          <div className="max-w-7xl max-h-72 relative ml-10">
            <h1 className="text-black text-8xl font-[Coolvetica] font-bold">
              About Me
            </h1>
            <h2 className="text-black text-4xl m-1 font-[Coolvetica] font-normal">
              I am a first generation college student.
              I am very passionate about working out, traveling, and just enjoying life.
              I am currently a Computer Science Student at California State University, Sacramento
              with my gradutation being December 2024. I am currently looking for to get into front end software development
              but I am also willing to go down any other route as long as I can keep learning. 
            </h2>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default About
