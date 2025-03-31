import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faGraduationCap, 
  faBriefcase, 
  faHeart, 
  faCertificate,
  faDumbbell,
  faPlane,
  faCoffee
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import shajaat from '../../assets/images/shajaat_cat.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'React', icon: faReact, level: 90 },
    { name: 'JavaScript', icon: faJs, level: 85 },
    { name: 'HTML5', icon: faHtml5, level: 90 },
    { name: 'CSS3', icon: faCss3Alt, level: 85 },
    { name: 'Node.js', icon: faNodeJs, level: 80 },
    { name: 'Python', icon: faPython, level: 75 }
  ];

  const experiences = [
    {
      title: 'Computer Science Student',
      institution: 'California State University, Sacramento',
      period: '2021 - 2025',
      description: 'Expected graduation: May 2025'
    }
  ];

  const interests = [
    { icon: faDumbbell, title: 'Working Out', description: 'Passionate about fitness and maintaining a healthy lifestyle' },
    { icon: faPlane, title: 'Traveling', description: 'Exploring new places and experiencing different cultures' },
    { icon: faCoffee, title: 'Coffee Enthusiast', description: 'Love trying different coffee shops and brewing methods' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <img 
              src={shajaat} 
              alt="Shajaat with cat" 
              className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-[Coolvetica] font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I am a first generation college student passionate about technology, fitness, and life experiences. 
              Currently pursuing Computer Science at California State University, Sacramento with an expected 
              graduation in May 2025.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/shajaatali" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/shajaatali/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg my-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={skill.icon} className="text-4xl mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          Experience & Education
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg my-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Personal Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={interest.icon} className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Let's Connect!
        </h2>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/shajaatali" 
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/shajaatali/" 
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;


