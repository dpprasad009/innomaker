
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wifi, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const floatingIcons = [
    { Icon: Cpu, delay: 0, x: 100, y: 50 },
    { Icon: Wifi, delay: 0.5, x: -80, y: 80 },
    { Icon: Shield, delay: 1, x: 120, y: -60 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      {/* Background 3D Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(400px) rotateX(45deg)',
        }} />
      </div>

      {/* Floating 3D Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotateY: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1, 
            rotateY: 360,
            x: [0, x, 0],
            y: [0, y, 0]
          }}
          transition={{
            delay,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="absolute hidden md:block"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500/30 to-green-400/30 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto text-center z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight"
            style={{ perspective: "1000px" }}
          >
            <motion.span
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block"
            >
              Future
            </motion.span>
            <span className="mx-2 md:mx-4">of</span>
            <motion.span
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block"
            >
              Automation
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Innovative solutions for GPS tracking and smart home automation. 
            Transform your world with cutting-edge technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group w-full sm:w-auto"
            >
              Explore Products
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, rotateY: -5 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4"
        >
          {[
            { label: "Projects Completed", value: "150+" },
            { label: "Happy Clients", value: "98%" },
            { label: "Years Experience", value: "5+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
