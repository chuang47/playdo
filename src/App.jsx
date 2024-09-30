import React, { useState } from "react";
import playdoLogo from './playdo-logo.png';
import playdoIcon from './icon.png';
import astronautImg from './astronaut.png';
import rocketImg from './rocket.png';
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nameless-shore-65210-cc473cb7b162.herokuapp.com/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setSubmitted(true);
        setError("");
      } else {
        setError("Failed to submit. Please try again.");
        console.error("Failed to submit email");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay },
    }),
  };

  const teamMembers = [
    { name: "Jesse Choe", title: "CEO, Co-Founder", linkedin: "https://www.linkedin.com/in/jc10/", profileLink: require('./JC.jpg') },
    { name: "Karn Kaura", title: "COO, Co-Founder", linkedin: "https://www.linkedin.com/in/karn-kaura/", profileLink: require('./KK.png') },
    { name: "Gautham Ramachandran", title: "CTO, Founding Engineer", linkedin: "https://www.linkedin.com/in/gautham-ramachandran-74b5712a4/", profileLink: require('./GR.png') },
    { name: "Neil Mehra", title: "Backend Engineer", linkedin: "https://www.linkedin.com/in/nemehra/", profileLink: require('./NM.png') },
    { name: "Joshua Chen", title: "Frontend Engineer", linkedin: "https://www.linkedin.com/in/josheewa/", profileLink: require('./JC2.png') },
    { name: "Swathi Pulipati", title: "Backend Intern", linkedin: "https://www.linkedin.com/in/swathi-pulipati-1b450b232/", profileLink: require('./SP.png') },
    { name: "Chris Huang", title: "Frontend Intern", linkedin: "https://www.linkedin.com/in/chrishuang47/", profileLink: require('./CH.png') },
    { name: "Pratishrut Kamal", title: "AI/ML Intern", linkedin: "https://www.linkedin.com/in/prat-kamal/", profileLink: require('./PK.png') },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-[#0a2540] bg-opacity-50 backdrop-blur-sm flex items-center py-4 px-12 z-50">
        <div className="w-full flex items-center justify-center relative">
          {/* Left: Playdo Logo */}
          <div className="absolute left-0 flex items-center logo hidden md:flex">
            <a href="/">
              <img src={playdoLogo} alt="Playdo Logo" className="h-8 cursor-pointer" />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex space-x-6 text-white text-sm">
            <a href="#home" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">Home</a>
            <a href="#about" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">About</a>
            <a href="#team" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">Team</a>
          </div>

          {/* Right: Icon */}
          <div className="absolute right-0 flex items-center logo hidden md:flex">
            <img src={playdoIcon} alt="Playdo Icon" className="h-8 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Top Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#0a2540] to-black flex flex-col items-center justify-center text-center text-white overflow-hidden" style={{ top: '-50px' }}>
        {/* Floating Astronaut and Rocket */}
        <img src={astronautImg} alt="Astronaut" className="absolute left-[20%] top-[35%] h-24 transform animate-float-astronaut" />
        <img src={rocketImg} alt="Rocket" className="absolute right-[20%] top-[25%] h-24 transform animate-float-rocket" />

        {/* Sliver Effect */}
        <div className="absolute bottom-0 w-[1900px] h-[210px] bg-white rounded-t-[100%] z-0" style={{ transform: 'translateY(0px)' }}></div>
        <div className="absolute bottom-0 w-[2000px] h-[200px] bg-black rounded-t-[100%] z-10" style={{ boxShadow: "0px 0px 30px 30px rgba(255, 255, 255, 0.8)" }}></div>

        <div className="bg-transparent border border-white rounded-full px-3 py-1 text-sm font-semibold border-[1px] z-20">Playdo.ai</div>

        <motion.div className="mt-4 z-20" initial="hidden" animate="visible" variants={textVariant} custom={0.3}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-600 text-4xl font-extrabold sm:text-5xl md:text-7xl">
            AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-600">Technical Interview Prep.</span>
          </h1>
        </motion.div>

        <motion.p className="mt-4 text-lg sm:text-xl z-20" initial="hidden" animate="visible" variants={textVariant} custom={0.6}>
          Get ready to elevate your technical interview game <br />
          with immersive, AI-driven practice.
        </motion.p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-8 space-y-4 md:space-y-0 md:space-x-2 z-20 pt-12 md:pt-10"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={0.9}
            style={{ maxWidth: '400px', margin: '0 auto' }}
          >
            <input
              className="w-auto p-2 md:p-3 bg-opacity-50 bg-[#0a2540] rounded-md text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address..."
              required
              style={{ width: 'fit-content' }}
            />
            <button
              className="w-auto bg-white text-black py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-200"
              type="submit"
              style={{ width: 'fit-content' }}
            >
              Join waitlist
            </button>
          </motion.form>
        ) : (
          <div className="mt-8 text-center text-lg text-green-400 z-20">Thank you for joining the Playdo.ai waitlist! Please check your email (and your spam) to stay updated.</div>
        )}

        {error && <p className="mt-4 text-lg text-red-500 z-20">{error}</p>}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          About Us
        </h2>

        <p className="max-w-3xl text-lg sm:text-xl text-gray-300 leading-relaxed text-center space-y-4">
          <span className="text-white font-semibold">Playdo.ai</span> is an <span className="text-blue-400 font-semibold">AI-powered interview prep platform</span> designed to help competitive coders, computer science students, and professionals excel in technical interviews.
          <br /><br />
          Playdo generates realistic <span className="text-green-400 font-semibold">interviewer avatars</span> and unique coding questions to simulate real interview environments, enhancing both <span className="text-yellow-400 font-semibold">problem-solving</span> and <span className="text-pink-400 font-semibold">communication skills</span>.
          <br /><br />
          Get ready to elevate your technical interview game with immersive, AI-driven practice.
        </p>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team!</h2>
        {/* Team Bio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#0a2540] p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
              {/* Profile Picture Placeholder */}
              <a href={member.profileLink}>
                <img src={member.profileLink} alt={`${member.name}'s Profile`} className="w-20 md:w-24 h-20 md:h-24 rounded-full mb-4 object-cover" />
              </a>

              {/* Team Member's Name */}
              <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>

              {/* Team Member's Position */}
              <p className="text-xs md:text-sm text-gray-300">{member.title}</p>

              {/* LinkedIn Icon */}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0a2540] py-6 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Email and LinkedIn Icons */}
          <div className="flex space-x-4 items-center mb-4 md:mb-0">
            <a href="mailto:playdoaibeta@gmail.com" className="text-xl hover:text-blue-400 transition-colors">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/company/playdoai/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>

          {/* Right Side: Copyright Information */}
          <div className="text-sm">
            © 2024 Playdo.ai Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
