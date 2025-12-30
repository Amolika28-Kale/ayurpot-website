import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white p-2 rounded-xl">
              <Leaf size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight">
                Dr. Shweta's Ayurpot
              </h2>
              <p className="text-xs text-green-200 font-medium">
                MD, BAMS | Mumbai
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-green-100 leading-relaxed">
            Dr. Shweta Shete – Your trusted Ayurvedic wellness companion.
            Bringing ancient wisdom to modern healing.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#expertise" className="hover:text-white">Expertise</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-green-100">
            <li>Ayurvedic Consultations</li>
            <li>Herbal Treatments</li>
            <li>Wellness Counseling</li>
            <li>Chronic Disease Management</li>
            <li>Panchakarma Therapy</li>
            <li>Preventive Care</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-green-100">
            Mumbai, Maharashtra<br />
            India
          </p>
          <p className="mt-2 text-sm text-green-100">
            📞 +91 XXXXX XXXXX
          </p>
          <p className="mt-2 text-sm text-green-100">
            ✉ dr.shwetas.ayurpot@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-green-800 mt-12 pt-6 px-6 text-center">
        <p className="text-xs text-green-200">
          © {new Date().getFullYear()} Dr. Shweta’s Ayurpot. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-4 text-xs text-green-200 flex-wrap">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Disclaimer</a>
        </div>

        <p className="mt-4 max-w-3xl mx-auto text-[11px] leading-relaxed text-green-300">
          Disclaimer: The information provided on this website is for educational
          purposes only. Always consult with a qualified healthcare professional
          before starting any treatment.
        </p>
      </div>
    </footer>
  );
}
