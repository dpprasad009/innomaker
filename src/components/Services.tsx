
import { motion } from "framer-motion";
import { Zap, Settings, Smartphone, Cloud, Shield, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Smart Home Automation",
      description: "Transform your home with intelligent automation solutions that learn your preferences and optimize energy usage.",
      features: ["Voice Control", "Energy Optimization", "Security Integration", "Remote Monitoring"]
    },
    {
      icon: Settings,
      title: "Industrial Automation",
      description: "Streamline your industrial processes with cutting-edge automation technology for maximum efficiency.",
      features: ["Process Control", "Quality Assurance", "Predictive Maintenance", "Real-time Analytics"]
    },
    {
      icon: Smartphone,
      title: "IoT Solutions",
      description: "Connect everything with our comprehensive IoT platform for seamless device communication.",
      features: ["Device Management", "Data Analytics", "Cloud Integration", "Mobile Apps"]
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity for all your automation needs with enterprise-grade security.",
      features: ["Scalable Infrastructure", "Data Backup", "Global Access", "API Integration"]
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Advanced security solutions with real-time monitoring and intelligent threat detection.",
      features: ["24/7 Monitoring", "Threat Detection", "Access Control", "Emergency Response"]
    },
    {
      icon: Cpu,
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your unique business requirements.",
      features: ["Custom Development", "System Integration", "Consulting", "Support & Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 relative px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Automation Services
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Comprehensive automation solutions tailored to transform your business and lifestyle
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25"
              >
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-blue-200 mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="text-sm md:text-base text-green-300 flex items-center"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
