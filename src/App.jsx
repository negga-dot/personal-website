import { motion, AnimatePresence } from "framer-motion";
import { memo, useMemo } from "react";
import SplitText from "./components/SplitText";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";

const LoadingScreen = memo(({ loading }) => {
  const backgroundElements = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  ), []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#00040f] via-[#001122] to-[#000811]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {backgroundElements}

          <div className="relative z-10 text-center px-4 w-full max-w-sm sm:max-w-md">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <SplitText
                text="Abhinav"
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {"<abhinav.phi/>"}
            </motion.h1>

            {/* Loader */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <HashLoader
                color="#0891b2"
                loading={loading}
                size={typeof window !== 'undefined' && window.innerWidth < 640 ? 40 : 60}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-cyan-400 text-base sm:text-lg font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Transforming ideas into code...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  const backgroundElements = useMemo(() => (
    <>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#e2e2e2] via-[#f0f0f0] to-[#e8e8e8] dark:from-[#00040f] dark:via-[#001122] dark:to-[#000811] -z-10" />

      {/* Moving Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </>
  ), []);

  return (
    <>
      <LoadingScreen loading={loading} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {backgroundElements}

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Achievements />
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;