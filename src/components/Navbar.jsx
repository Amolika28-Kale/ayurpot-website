import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="bg-green-600 text-white p-2 rounded-xl shadow-sm">
            <Leaf size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">
              Dr. Shweta's Ayurpot
            </h1>
            <p className="text-xs text-green-700 font-medium">
              MD, BAMS | Mumbai
            </p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-slate-600 font-medium">
          {["Home","About","Services","Expertise","Testimonials","Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-700 transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
          >
            Book Consultation
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          bg-white border-t border-slate-100
        `}
      >
        <div className="px-6 py-6 space-y-5 text-slate-700 font-medium">

          {["Home","About","Services","Expertise","Testimonials","Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-green-700 transition"
              >
                {item}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-green-600 text-white text-center py-3 rounded-xl font-semibold"
          >
            Book Consultation
          </a>

        </div>
      </div>
    </nav>
  );
}
