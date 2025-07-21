import { motion } from "framer-motion";
import { memo } from "react";
import Lottie from "lottie-react";
import computer from "/src/lottie/computer.json"
import { FadeInText, BlurText, TypewriterText } from "./animations/TextReveal";
import { FloatingElement, ParallaxContainer } from "./animations/ScrollAnimations";
import { MagneticButton } from "./animations/InteractiveElements";
import { Button } from "./ui/button";
import { ArrowDown, Code, Sparkles } from "lucide-react";

// Fallback animation data for computer animation
const computerAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 90,
  "w": 500,
  "h": 500,
  "nm": "Computer Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Computer",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [
          {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
          {"t": 90, "s": [360]}
        ]},
        "p": {"a": 0, "k": [250, 250, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {"a": 0, "k": [200, 150]},
              "p": {"a": 0, "k": [0, 0]},
              "r": {"a": 0, "k": 10}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.2, 0.4, 0.8, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 90,
      "st": 0
    }
  ]
};

// Enhanced Computer Animation Component for better mobile support
const ComputerAnimation = memo(() => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-full h-full max-w-[500px] max-h-[500px]"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Lottie
          animationData={computer}
          loop={true}
          className="w-full h-full"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
          onError={() => {
            console.log("Lottie animation failed, using fallback");
          }}
        />
        
        {/* Fallback content if Lottie fails */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              💻
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

ComputerAnimation.displayName = 'ComputerAnimation';
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="WRAPPER mt-12 flex max-sm:flex-col gap-5 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="INTRO flex-1">
          <motion.div variants={itemVariants}>
            <FadeInText delay={0.2}>
              <h3 className="text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] text-[#00040f] dark:text-white">
                Hi, there! <br />I&apos;m
              </h3>
            </FadeInText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <BlurText delay={0.5} className="relative">
              <motion.span 
                className="text-[70px] leading-[80px] font-bold max-sm:text-[50px] max-sm:leading-[70px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 relative"
                whileHover={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Abhinav
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </motion.span>
            </BlurText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FadeInText delay={0.8}>
              <TypewriterText
                text="Full-stack developer building AI-powered solutions to solve real-world problems through innovative web applications."
                delay={1}
                className="text-xl max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-400 dark:to-slate-200 max-w-[470px] mt-5 pl-1 leading-relaxed"
              />
            </FadeInText>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex gap-4 max-sm:flex-col">
            <MagneticButton>
              <Button 
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
            </MagneticButton>
            
            <MagneticButton>
              <Button 
                variant="outline" 
                className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <ParallaxContainer speed={0.3}>
            <FloatingElement intensity={15} duration={4}>
              <motion.div
                className="relative w-full max-w-[650px] mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl" />
                
                {/* Main Container */}
                <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
                  {/* Responsive padding and sizing */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="aspect-square w-full max-w-[500px] mx-auto">
                      <ComputerAnimation />
                    </div>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          </ParallaxContainer>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default About;