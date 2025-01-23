import { Star, Users, Clock, Shield, MapPin, Phone, Mail } from 'lucide-react';
import ExcavatorIcon from '../components/ExcavatorIcon';

// Mock data for listings
const listings = [
  {
    id: 1,
    title: 'CAT 320 Excavator',
    image: '/excavator1.jpg',
    price: '$250/day',
    location: 'Nairobi, Kenya',
    specs: ['2019 Model', '20 Ton', 'Available Now']
  },
  {
    id: 2,
    title: 'JCB Backhoe Loader',
    image: '/backhoe1.jpg',
    price: '$180/day',
    location: 'Mombasa, Kenya',
    specs: ['2020 Model', '8 Ton', 'Available Now']
  },
  {
    id: 3,
    title: 'Komatsu Bulldozer',
    image: '/bulldozer1.jpg',
    price: '$300/day',
    location: 'Kisumu, Kenya',
    specs: ['2021 Model', '15 Ton', 'Available Now']
  }
];

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'Smith Construction Ltd',
    image: '/testimonial1.jpg',
    text: 'MachineryHub has transformed how we source equipment. The process is seamless and reliable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Johnson Builders',
    image: '/testimonial2.jpg',
    text: 'Outstanding service! Found exactly what we needed within hours.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Brown',
    company: 'Brown & Associates',
    image: '/testimonial3.jpg',
    text: 'The quality of equipment and service is consistently excellent.',
    rating: 4
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Find and Rent Construction Equipment
              </h1>
              <p className="text-gray-400 text-lg lg:text-xl mb-8">
                Connect with trusted equipment owners and rent the machinery you need for your construction projects.
              </p>

              {/* Rating Section */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0F172A]" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0F172A]" />
                  <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0F172A]" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-gray-800 flex items-center justify-center text-white text-sm">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-500">★★★★★</div>
                  <div className="text-gray-400 text-sm">Trusted by 2,000+ contractors</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
                  Browse Equipment
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg text-sm font-medium">
                  List Equipment
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-last">
              <img
                src="/tractor.png"
                alt="Construction machinery at sunset"
                className="w-full h-auto rounded-lg object-cover max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose MachineryHub?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're revolutionizing the construction equipment rental industry with our innovative platform
              that connects equipment owners with contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExcavatorIcon />
              </div>
              <h3 className="text-white font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-400">Access to a diverse range of construction equipment</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-gray-400">All equipment providers are thoroughly vetted</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Quick Process</h3>
              <p className="text-gray-400">Fast and efficient equipment rental process</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-400">Safe and secure transactions guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our selection of high-quality construction equipment available for rent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{listing.title}</h3>
                  <p className="text-orange-500 font-semibold mb-4">{listing.price}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {listing.location}
                  </div>
                  <div className="space-y-2">
                    {listing.specs.map((spec, index) => (
                      <div key={index} className="text-gray-400 text-sm">• {spec}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors duration-200">
              View All Equipment
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions? We're here to help. Send us a message and we'll respond as soon as possible
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                      <span>123 Construction Ave, Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 mr-3 text-orange-500" />
                      <span>+254 123 456 789</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-5 h-5 mr-3 text-orange-500" />
                      <span>info@machineryhub.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 text-orange-500">
                  <ExcavatorIcon />
                </div>
                <span className="text-white text-xl font-bold">MachineryHub</span>
              </div>
              <p className="mb-6">
                Connecting construction professionals with the right equipment for success.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-white transition-colors">Hero</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#listings" className="hover:text-white transition-colors">Equipment</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Equipment Rental</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MachineryHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
