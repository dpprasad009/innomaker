
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg flex items-center justify-center"
          >
            <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </motion.div>
          <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            InnoMakers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex space-x-3 lg:space-x-4">
          <Link to="/login">
            <Button variant="outline" className="bg-transparent border-white/20 text-white text-sm lg:text-base px-3 lg:px-4 py-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-blue-500 to-green-400 text-sm lg:text-base px-3 lg:px-4 py-2">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-white py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent border-white/20 text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-400">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
