
import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                InnoMakers
              </span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Transforming the future with innovative automation solutions and cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Smart Home", "GPS Tracking", "IoT Solutions", "Custom Development"].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span>info@innomakers.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span>+91 9874563210</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span>Innovation Hub, Tech City</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2024 InnoMakers. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
