import { ayurvedicProducts } from "../data/products";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductSlider() {
  return (
    <section className="mt-28 relative">

      {/* Soft Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-100/60 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-green-700">
            Ayurvedic Products
          </span>

          <h3 className="text-3xl font-semibold text-slate-900 mt-2">
            Natural & Authentic{" "}
            <span className="text-green-700">Herbal Products</span>
          </h3>

          <p className="mt-3 text-slate-600 max-w-xl">
            Carefully curated Ayurvedic formulations recommended by
            Dr. Shweta for holistic healing and daily wellness.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50 transition"
        >
          View All Products →
        </Link>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

          {ayurvedicProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[260px] snap-start bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100"
            >
              {/* Image */}
              <div className="h-52 rounded-t-2xl overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-semibold text-slate-900">
                  {product.name}
                </h4>

                <p className="mt-2 text-green-700 font-bold">
                  {product.price}
                </p>

                {/* <Link
                  to={`/shop/${product.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-green-700 hover:underline"
                >
                  View Details →
                </Link> */}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Mobile Hint */}
        <p className="mt-3 text-xs text-slate-400 md:hidden text-center">
          ← Swipe to explore products →
        </p>
      </div>
    </section>
  );
}
