import aboutImage from "../assets/BNProfilePic.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion";

const About = () => {
  return ( 
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}   
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center">
                <img className="w-80 h-65 rounded-2xl"src={aboutImage} alt="about"/>
            </motion.div>           
        </div>
        <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p
                      initial={{ x: 100, opacity: 0 }} 
                      animate={{ x: 0, opacity: 1 }}   
                      transition={{ duration: 0.5, delay: 0.5 }} 
                      className="my-2 maxw-xl py-6">{ABOUT_TEXT}
                    </motion.p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
