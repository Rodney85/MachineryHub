import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ExcavatorIcon from './components/ExcavatorIcon';
import { navVariants, mobileMenuVariants, hoverScale } from './utils/animations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={hoverScale}
            >
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 text-orange-500">
                  <ExcavatorIcon />
                </div>
                <span className="text-white text-xl font-bold">MachineryHub</span>
              </Link>
            </motion.div>

            {/* Center Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <motion.div 
                className="flex items-baseline space-x-8"
                variants={navVariants}
              >
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('hero')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('about')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('listings')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Listings</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('contact')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</motion.button>
              </motion.div>
            </div>

            {/* Right side buttons */}
            <motion.div 
              className="hidden lg:flex items-center space-x-4"
              variants={navVariants}
            >
              <motion.div whileHover={hoverScale}>
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div whileHover={hoverScale}>
                <Link
                  to="/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={hoverScale}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden absolute w-full bg-[#0F172A]/95 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('hero')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('about')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('listings')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Listings</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Testimonials</motion.button>
                <motion.button whileHover={hoverScale} onClick={() => scrollToSection('contact')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</motion.button>
              </div>
              
              {/* Auth buttons with divider */}
              <div className="border-t border-gray-700 mt-4">
                <div className="px-2 py-4 space-y-3">
                  <motion.div whileHover={hoverScale}>
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium border border-gray-600 text-center"
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div whileHover={hoverScale}>
                    <Link
                      to="/register"
                      className="bg-orange-500 hover:bg-orange-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;