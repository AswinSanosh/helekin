export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      {/* Contact CTA */}
      <div className="bg-black/20 h-[300px] w-full flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-semibold font-poppins">Need Assistance?</h2>
        <p className="text-lg text-gray-300 mt-2">We’re just a message away. Reach out for help or queries.</p>
        <button className="mt-4 bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full font-medium transition duration-300">
          Contact Support
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full" />

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-300">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@helekin.com</p>
          <p>📍 Chennai, India</p>
        </div>

        {/* Help Desk */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <p>📄 <a href="#" className="hover:underline">FAQs</a></p>
          <p>📬 <a href="#" className="hover:underline">Raise a Complaint</a></p>
          <p>💬 <a href="#" className="hover:underline">Community Forum</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <p><a href="#" className="hover:underline">About Us</a></p>
          <p><a href="#" className="hover:underline">Projects</a></p>
          <p><a href="#" className="hover:underline">Services</a></p>
          <p><a href="#" className="hover:underline">Careers</a></p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook-f hover:text-blue-500"></i></a>
            <a href="#"><i className="fab fa-x-twitter hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
            <a href="#"><i className="fab fa-youtube hover:text-red-600"></i></a>
            <a href="#"><i className="fab fa-whatsapp hover:text-green-400"></i></a>
            <a href="#"><i className="fab fa-discord hover:text-indigo-400"></i></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 Helekin. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
