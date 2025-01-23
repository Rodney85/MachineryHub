import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ExcavatorIcon from './components/ExcavatorIcon';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 text-orange-500">
                  <ExcavatorIcon />
                </div>
                <span className="text-white text-xl font-bold">MachineryHub</span>
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-8">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#listings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Listings</a>
                <a href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-[#0F172A]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#listings" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Listings</a>
              <a href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
            
            {/* Auth buttons with divider */}
            <div className="border-t border-gray-700 mt-4">
              <div className="px-2 py-4 space-y-3">
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium border border-gray-600 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;