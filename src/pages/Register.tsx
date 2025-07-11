
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-8">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
              Join InnoMakers
            </h1>
            <p className="text-blue-200">Create your account and start innovating</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="text-white font-medium mb-2 block">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-white font-medium mb-2 block">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="text-white font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="text-white font-medium mb-2 block">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12"
                  placeholder="Phone number"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="text-white font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12 pr-12"
                  placeholder="Create password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="text-white font-medium mb-2 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 pl-12 pr-12"
                  placeholder="Confirm password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className="flex items-start text-blue-200 text-sm">
                <input type="checkbox" className="mr-3 mt-1 rounded border-white/20" required />
                I agree to the{" "}
                <a href="#" className="text-blue-300 hover:text-white mx-1">Terms of Service</a>
                and{" "}
                <a href="#" className="text-blue-300 hover:text-white ml-1">Privacy Policy</a>
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 py-6 text-lg font-semibold"
              >
                Create Account
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-blue-200">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-blue-300 hover:text-white font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
            
            <Link 
              to="/" 
              className="text-blue-300 hover:text-white text-sm transition-colors mt-4 inline-block"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
