import { useState } from "react";
import { ShoppingCart, Filter } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    price: "₹499",
    image:
      "https://media.istockphoto.com/id/1029307974/photo/aswagandha-root-herbal-medicine.webp?a=1&b=1&s=612x612&w=0&k=20&c=TiYucLxunlJYIi9wxX2QelmNnKDMBt4wPqPgWhBMRsQ=",
    category: "Stress Relief",
  },
  {
    id: 2,
    name: "Triphala Powder",
    price: "₹349",
    image:
      "https://media.istockphoto.com/id/1371265812/photo/indian-ayurvedic-triphala-hard-is-ancient-medicine-for-indigestion-problems.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRwhm-pwBUS1mDtNXfmtsIlbb7ukSvLaDjUrd21H1wo=",
    category: "Digestion",
  },
  {
    id: 3,
    name: "Brahmi Syrup",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1709813610121-e2a51545e212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYWhtaSUyMHN5cnVwfGVufDB8fDB8fHww",
    category: "Brain Health",
  },
  {
    id: 4,
    name: "Chyawanprash",
    price: "₹399",
    image:
      "https://media.istockphoto.com/id/697805638/photo/indian-ayurvedic-dietary-supplement-called-chyawanprash-chyavanaprasha-is-a-cooked-mixture-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=RhiUQQ7PtDe1qQ2xX4IT_FJUqEiJJyXapv3hQLMF3sA=",
    category: "Immunity",
  },
];


export default function Shop() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24">

      {/* HEADER */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-green-800">
          Ayurvedic Products
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          Authentic herbal formulations personally recommended by
          <span className="font-medium text-green-700"> Dr. Shweta</span>
          for holistic wellness.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Filter size={18} className="text-green-700" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="All">All Categories</option>
            <option value="Stress Relief">Stress Relief</option>
            <option value="Digestion">Digestion</option>
            <option value="Brain Health">Brain Health</option>
            <option value="Immunity">Immunity</option>
          </select>
        </div>

        {/* CART PLACEHOLDER */}
        <button className="flex items-center gap-2 bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium shadow hover:bg-green-800 transition">
          <ShoppingCart size={18} />
          Cart (0)
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow hover:shadow-xl transition border border-slate-100 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-48 bg-slate-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-xs text-green-700 font-semibold uppercase tracking-wide">
                {product.category}
              </p>

              <h3 className="mt-2 font-semibold text-slate-900">
                {product.name}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-800 font-bold">
                  {product.price}
                </span>

                <button className="text-sm px-4 py-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FUTURE SECTIONS */}
      <div className="mt-32 grid md:grid-cols-3 gap-10 text-center">

        <div className="p-8 rounded-2xl bg-green-50">
          <h4 className="font-semibold text-green-800">
            Doctor Recommended
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            Every product is personally curated by Dr. Shweta
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-green-50">
          <h4 className="font-semibold text-green-800">
            Secure Payments
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            UPI, Cards & Net Banking via Stripe (Coming Soon)
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-green-50">
          <h4 className="font-semibold text-green-800">
            Pan-India Delivery
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            Fast & safe shipping across India
          </p>
        </div>

      </div>
    </div>
  );
}
