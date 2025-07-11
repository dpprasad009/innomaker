
import { motion } from "framer-motion";
import { MapPin, Home, Smartphone, Wifi, Battery, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "GPS Tracker Pro",
      category: "Tracking Solutions",
      description: "Advanced GPS tracking device with real-time location monitoring, geofencing, and long battery life.",
      image: "/placeholder.svg",
      features: [
        "Real-time tracking",
        "Geofencing alerts",
        "30-day battery life",
        "Waterproof design",
        "Mobile app control",
        "Historical routes"
      ],
      specs: {
        "Battery Life": "30 days",
        "Accuracy": "3-5 meters",
        "Connectivity": "4G LTE",
        "Water Rating": "IP67"
      },
      price: "$99",
      icon: MapPin
    },
    {
      id: 2,
      name: "Smart Home Hub",
      category: "Home Automation",
      description: "Central control hub for all your smart home devices with voice control and AI-powered automation.",
      image: "/placeholder.svg",
      features: [
        "Voice control",
        "AI automation",
        "Device management",
        "Energy monitoring",
        "Security integration",
        "Remote access"
      ],
      specs: {
        "Connectivity": "WiFi, Zigbee, Z-Wave",
        "Compatibility": "500+ devices",
        "Voice Support": "Alexa, Google",
        "Storage": "Local & Cloud"
      },
      price: "$299",
      icon: Home
    }
  ];

  const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 group"
    >
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-blue-600/20 to-green-500/20 flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1, rotateY: 15 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl flex items-center justify-center shadow-2xl"
        >
          <product.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500/30 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
        >
          <Wifi className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-green-500/30 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
        >
          <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
        </motion.div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs md:text-sm text-blue-300 bg-blue-500/20 px-2 md:px-3 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-xl md:text-2xl font-bold text-green-400">{product.price}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm md:text-base text-blue-200 mb-4 md:mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-6">
          {product.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
              className="text-xs md:text-sm text-green-300 flex items-center"
            >
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-white/5 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
          <h4 className="text-sm md:text-base text-white font-semibold mb-2 md:mb-3">Specifications</h4>
          <div className="space-y-1 md:space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs md:text-sm">
                <span className="text-blue-200">{key}:</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 py-4 md:py-6 text-sm md:text-lg font-semibold">
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="products" className="py-16 md:py-20 relative px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Cutting-edge technology solutions designed to enhance your life and business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-green-400/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your World?
            </h3>
            <p className="text-sm md:text-base text-blue-200 mb-4 md:mb-6 px-4">
              Get in touch with our experts to find the perfect solution for your needs
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg">
              Contact Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
