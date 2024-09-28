import React, { useState } from "react";
import playdoIcon from './icon.png';
import astronautImg from './astronaut.png';
import rocketImg from './rocket.png';
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-[#0a2540] bg-opacity-50 backdrop-blur-sm flex justify-between items-center py-4 px-12 z-50">
        <div className="flex items-center">
          <a href="/">
            <img src={playdoIcon} alt="Playdo Icon" className="h-8 cursor-pointer" />
          </a>
        </div>

        <div className="flex space-x-6 text-white text-sm justify-center w-full">
          <a href="#about" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">01. ABOUT</a>
          <a href="#team" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">02. TEAM</a>
          <a href="#faq" className="px-3 py-1 hover:bg-[#1b3a57] rounded-lg transition-colors duration-300">03. FAQ</a>
        </div>

        <div className="flex items-center w-8" />
      </header>

      {/* Main Top Section with Gradient */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#0a2540] to-black flex flex-col items-center text-center text-white justify-start pt-24 overflow-hidden">
        
        {/* Larger White Semi-Circle Behind for Sliver Effect */}
        <div
          className="absolute bottom-0 w-[1800px] h-[205px] bg-white rounded-t-[100%] z-0"
          style={{
            transform: 'translateY(0px)', // Moves white circle slightly upwards to peek over the black one
          }}
        ></div>

        {/* Smaller Black Semi-Circle in Front with Glow Effects */}
        <div
          className="absolute bottom-0 w-[2000px] h-[200px] bg-black rounded-t-[100%] overflow-hidden z-10"
          style={{
            boxShadow: "0px 0px 30px 10px rgba(255, 255, 255, 0.8)", // Glow effects: outer and inner
          }}
        ></div>

        {/* Floating Astronaut and Rocket */}
        <img src={astronautImg} alt="Astronaut" className="absolute left-[20%] top-[35%] h-24 transform animate-float-astronaut" />
        <img src={rocketImg} alt="Rocket" className="absolute right-[20%] top-[35%] h-24 transform animate-float-rocket" />

        <div className="bg-transparent border border-white rounded-full px-3 py-1 text-sm font-semibold border-[0.5px]">Est. 2024</div>
        <motion.div className="mt-4" initial="hidden" animate="visible" variants={textVariant} custom={0.3}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-700 text-5xl font-extrabold sm:text-6xl md:text-7xl">
            AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-600">Technical Interview Prep.</span>
          </h1>
        </motion.div>

        <motion.p className="mt-8 text-xl sm:text-2xl" initial="hidden" animate="visible" variants={textVariant} custom={0.6}>
          Get ready to elevate your technical interview game <br />
          with immersive, AI-driven practice.
        </motion.p>

        {!submitted ? (
          <motion.form onSubmit={handleSubmit} className="flex items-center mt-12 space-x-2" initial="hidden" animate="visible" variants={textVariant} custom={0.9}>
            <input className="flex-grow p-4 bg-opacity-50 bg-[#0a2540] rounded-md text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address..." required />
            <button className="bg-white text-black py-4 px-6 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-200" type="submit">Join waitlist</button>
          </motion.form>
        ) : (
          <div className="mt-8 text-center text-lg text-green-400">Thank you for joining the Playdo.ai waitlist! Please check your email (and your spam) to stay updated.</div>
        )}

        {error && <p className="mt-4 text-lg text-red-500">{error}</p>}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="max-w-4xl text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, lorem id interdum gravida, ipsum velit imperdiet dui, sit amet egestas enim urna eu enim. Proin ac magna non odio luctus gravida. Ut et nunc nec lacus lacinia eleifend.</p>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-bold mb-6">Team</h2>
        <p className="max-w-4xl text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida magna in libero dictum, non ullamcorper velit interdum. Phasellus consequat justo vel purus venenatis, eget aliquam justo condimentum.</p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-bold mb-6">FAQ</h2>
        <p className="max-w-4xl text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia purus non nibh pulvinar, at ullamcorper erat tincidunt. Vivamus tincidunt metus ut magna placerat, eget sagittis mi efficitur.</p>
      </section>
    </div>
  );
};

export default App;
