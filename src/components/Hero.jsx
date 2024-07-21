import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/BNProfilePic2.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
  opacity: 1,
  transition: { duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
            >
              Benjamin Nguyen
            </motion.h1>
            <motion.span 
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Aspiring Software Developer
            </motion.span>
            <motion.p
              variants={container(.6)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div  
             initial={{ x: 100, opacity: 0 }} 
             animate={{ x: 0, opacity: 1 }}   
             transition={{ duration: 0.5, delay: 0.5 }} 
            className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-48 h-48 lg:w-80 lg:h-80 rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

