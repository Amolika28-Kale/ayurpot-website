import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../../public/hero-doctor.png";
import aboutImg from "../../public/about-doctor.png";
import serviceConsultation from "../../public/ayurveda.jpg";
import serviceHerbal from "../../public/herbal.jpg";
import serviceWellness from "../../public/wellness.png";
import serviceChronic from "../../public/chronic.png";
import serviceWorkshop from "../../public/educational.png";
import servicePreventive from "../../public/preventive.png";
import { HeartPulse, Flower2, ShieldPlus, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="font-sans text-slate-900 antialiased">
      <Navbar />

 {/* HERO SECTION */}
<section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#F3FAF6] via-white to-white py-24 lg:py-36">

  {/* Decorative Blobs */}
  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-green-200/40 rounded-full blur-3xl" />
  <div className="absolute top-1/3 -right-32 w-[460px] h-[460px] bg-emerald-200/40 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-10">

      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-800 text-xs font-semibold tracking-widest uppercase">
        🌿 Authentic Ayurveda
      </span>

      {/* Heading */}
      <div>
        <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-semibold text-slate-900 leading-[1.05]">
          Holistic Healing with <br />
          <span className="text-green-700 font-bold">
            Dr. Shweta’s Ayurpot
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-600 italic">
          Dr. Shweta Shete • MD, BAMS <span className="mx-2">•</span> Mumbai
        </p>
      </div>

      {/* Description */}
      <p className="max-w-xl text-lg leading-relaxed text-slate-600">
        A trusted Ayurvedic wellness clinic blending ancient wisdom with
        modern diagnostics. Personalized care focused on root-cause healing
        and long-term well-being.
      </p>

      {/* CTA */}
      <div className="flex gap-5 flex-wrap">
        <a
          href="#contact"
          className="bg-green-700 hover:bg-green-800 text-white px-9 py-4 rounded-full font-semibold shadow-xl shadow-green-200 transition-all"
        >
          Book Consultation
        </a>

        <a
          href="#about"
          className="px-9 py-4 rounded-full border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-all"
        >
          Learn More
        </a>
      </div>

      {/* TRUST STRIP */}
      <div className="pt-10 border-t border-slate-200">
        <div className="flex flex-wrap items-center gap-12">

          <div>
            <h3 className="text-4xl font-extrabold text-green-800">3+</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
              Years of Experience
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "MD, BAMS Certified",
              "Panel Doctor",
              "Online & In-Clinic"
            ].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-sm text-slate-700 font-medium"
              >
                <span className="text-green-600">✔</span> {badge}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative group">

      {/* Decorative Frame */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-green-200 to-emerald-200 rotate-3 group-hover:rotate-0 transition-transform duration-500" />

      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
        <img
          src={heroImg}
          alt="Dr Shweta"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Tag */}
      <div className="absolute -bottom-6 left-6 bg-white px-6 py-3 rounded-2xl shadow-lg border border-slate-100">
        <p className="text-sm font-semibold text-green-700">
          Root-Cause Healing Approach
        </p>
        <p className="text-xs text-slate-500">
          Personalized Ayurvedic Care
        </p>
      </div>

    </div>

  </div>
</section>


{/* ABOUT SECTION */}
<section id="about" className="relative py-28 bg-gradient-to-b from-white to-[#F7FBF8] overflow-hidden">

  {/* Soft Decorative Glow */}
  <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-green-100/60 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-emerald-100/50 rounded-full blur-3xl" />

  <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* IMAGE SIDE */}
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-green-200 to-emerald-200 rotate-2" />

      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
        <img
          src={aboutImg}
          alt="Ayurvedic herbs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Philosophy Card */}
      <div className="absolute -bottom-8 left-8 bg-white px-7 py-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
        <p className="text-green-700 font-bold text-xl">
          Root-Cause Healing
        </p>
        <p className="text-slate-500 text-sm mt-1">
          Ayurveda Beyond Symptoms
        </p>
      </div>
    </div>

    {/* CONTENT SIDE */}
    <div className="space-y-10">

      {/* Heading */}
      <div>
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
          About the Doctor
        </span>

        <h2 className="text-[40px] font-semibold text-slate-900 leading-tight">
          Meet <span className="text-green-700 font-bold">Dr. Shweta Shete</span>
        </h2>

        <p className="mt-3 text-slate-600 italic">
          MD (Ayurveda), BAMS • Mumbai
        </p>
      </div>

      {/* Description */}
      <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
        <p>
          Dr. Shweta Shete is a renowned Ayurvedic wellness influencer,
          practicing physician, and a trusted medical companion for patients
          seeking natural and sustainable healing.
        </p>
        <p>
          With qualifications of <strong>MD and BAMS</strong>, she specializes
          in personalized Ayurvedic consultations, combining classical wisdom
          with modern diagnostic understanding.
        </p>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          "MD, BAMS Certified",
          "Panel Doctor",
          "Root-Cause Healing",
          "Patient-Centered Care",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm"
          >
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs">
              ✔
            </div>
            <span className="text-slate-700 font-medium text-sm">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Highlight Card */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-700 p-9 rounded-[2rem] text-white shadow-2xl">
        <h3 className="text-xl font-semibold mb-5 italic text-green-100">
          “Why Choose Dr. Shweta?”
        </h3>

        <ul className="grid gap-3 text-sm leading-relaxed opacity-95">
          <li>• Personalized treatment plans tailored to individual health needs</li>
          <li>• Integrates classical Ayurveda with modern medical understanding</li>
          <li>• Strong focus on counseling, diet & lifestyle correction</li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* SERVICES SECTION */}
<section
  id="services"
  className="relative py-28 bg-gradient-to-b from-[#F3F8F5] to-white overflow-hidden"
>
  {/* Decorative Glows */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-emerald-100/50 rounded-full blur-3xl" />

  <div className="relative max-w-[1200px] mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
        Our Expertise
      </span>

      <h2 className="text-[40px] font-semibold text-slate-900">
        Services & <span className="text-green-700 font-bold">Treatments</span>
      </h2>

      <p className="mt-4 text-slate-600 text-lg leading-relaxed">
        Comprehensive Ayurvedic care tailored to your unique health needs,
        combining ancient wisdom with modern lifestyle guidance.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-3 gap-10 mt-20">
      {[
        {
          title: "Ayurvedic Consultations",
          image: serviceConsultation,
          desc:
            "Detailed assessment based on your body constitution (Prakriti) and imbalances (Vikriti).",
        },
        {
          title: "Herbal Treatments",
          image: serviceHerbal,
          desc:
            "Natural, customized herbal remedies using time-tested Ayurvedic formulations.",
        },
        {
          title: "Wellness Counseling",
          image: serviceWellness,
          desc:
            "Lifestyle, diet, and daily routine guidance for long-term health and balance.",
        },
        {
          title: "Chronic Disease Management",
          image: serviceChronic,
          desc:
            "Holistic management of diabetes, arthritis, digestive and lifestyle disorders.",
        },
        {
          title: "Educational Workshops",
          image: serviceWorkshop,
          desc:
            "Interactive sessions to spread Ayurvedic knowledge and preventive healthcare awareness.",
        },
        {
          title: "Preventive Care Programs",
          image: servicePreventive,
          desc:
            "Proactive wellness programs focused on disease prevention and vitality enhancement.",
        },
      ].map((service, i) => (
        <div
          key={i}
          className="group relative bg-white/80 backdrop-blur rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
        >
          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
          </div>

          {/* CONTENT */}
          <div className="p-8">
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-green-700 transition">
              {service.title}
            </h3>

            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {service.desc}
            </p>

          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM HIGHLIGHT */}
    <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-green-800 to-emerald-700 rounded-[2.5rem] p-12 text-center text-white shadow-2xl">
      <h3 className="text-2xl font-semibold mb-4">
        Holistic Approach to Healthcare
      </h3>

      <p className="text-green-100 leading-relaxed text-lg">
        Every treatment plan is carefully designed after understanding your
        body constitution (Prakriti), current imbalances (Vikriti), and
        lifestyle factors. Dr. Shweta integrates Ayurvedic therapies, diet
        guidance, counseling, and preventive care to ensure sustainable,
        long-term healing.
      </p>
    </div>

  </div>
</section>


{/* EXPERTISE */}
<section id="expertise" className="py-[120px] bg-[#F7FBF8]">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* HEADING */}
    <div className="max-w-2xl">
      <h2 className="text-[40px] font-semibold text-green-800 leading-tight">
        Areas of Expertise
      </h2>
      <p className="mt-4 text-gray-600">
        Comprehensive Ayurvedic care addressing root causes, restoring balance,
        and promoting long-term holistic wellness.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
        <div className="bg-green-100 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center">
          <Flower2 size={22} />
        </div>
        <h4 className="mt-6 font-semibold text-lg text-green-800">
          Wellness & Lifestyle
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• Stress Management</li>
          <li>• Digestive Health</li>
          <li>• Sleep Disorders</li>
          <li>• Immunity Boosting</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
        <div className="bg-green-100 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center">
          <HeartPulse size={22} />
        </div>
        <h4 className="mt-6 font-semibold text-lg text-green-800">
          Women’s Health
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• PCOS & Hormonal Balance</li>
          <li>• Menstrual Health</li>
          <li>• Pregnancy Care</li>
          <li>• Menopause</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
        <div className="bg-green-100 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center">
          <ShieldPlus size={22} />
        </div>
        <h4 className="mt-6 font-semibold text-lg text-green-800">
          Chronic Conditions
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• Diabetes</li>
          <li>• Hypertension</li>
          <li>• Arthritis</li>
          <li>• Skin Disorders</li>
        </ul>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
        <div className="bg-green-100 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center">
          <Sparkles size={22} />
        </div>
        <h4 className="mt-6 font-semibold text-lg text-green-800">
          Specialized Care
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• Panchakarma</li>
          <li>• Hair & Skin Rejuvenation</li>
          <li>• Pediatric Care</li>
          <li>• Geriatric Care</li>
        </ul>
      </div>

    </div>

    {/* PHILOSOPHY STRIP */}
    <div className="mt-20 bg-green-700 text-white rounded-3xl p-10 md:p-12 shadow-xl">
      <h3 className="text-2xl font-semibold">
        Personalized Ayurvedic Philosophy
      </h3>
      <p className="mt-4 max-w-3xl text-green-100 leading-relaxed">
        Every treatment plan is thoughtfully designed based on your unique body
        constitution (Prakriti), current imbalances (Vikriti), and lifestyle.
        Dr. Shweta blends classical Ayurvedic wisdom with modern medical insights
        to deliver sustainable, long-term healing outcomes.
      </p>
    </div>

  </div>
</section>


{/* TESTIMONIALS */}
<section
  id="testimonials"
  className="relative py-32 bg-gradient-to-b from-[#F3F8F5] via-white to-white overflow-hidden"
>
  {/* Soft background accents */}
  <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-emerald-100/50 rounded-full blur-3xl" />

  <div className="relative max-w-[1200px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block text-xs tracking-widest font-semibold uppercase text-green-700 mb-3">
        Patient Experiences
      </span>

      <h2 className="text-[42px] font-semibold text-slate-900">
        Healing Stories from <span className="text-green-700 font-bold">Our Patients</span>
      </h2>

      <p className="mt-5 text-slate-600 text-lg leading-relaxed">
        Real journeys of recovery, balance, and wellness through authentic
        Ayurvedic care.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-10 mt-20">
      {[
        {
          name: "Priya Sharma",
          issue: "PCOS & Hormonal Imbalance",
          review:
            "Dr. Shweta's holistic approach transformed my health completely. After struggling with PCOS for years, her personalized Ayurvedic treatment plan helped me achieve hormonal balance naturally. Her counseling sessions were incredibly supportive and informative.",
        },
        {
          name: "Rajesh Kumar",
          issue: "Chronic Digestive Issues",
          review:
            "I was suffering from chronic digestive problems for over 5 years. Dr. Shweta's expertise in Ayurveda and her compassionate approach made all the difference. Within 3 months, I saw significant improvement. Highly recommend her services!",
        },
        {
          name: "Anita Desai",
          issue: "Stress & Anxiety",
          review:
            "As one of the best counselors I've met, Dr. Shweta helped me manage my stress and anxiety through Ayurvedic treatments and lifestyle changes. Her knowledge and caring nature make her an exceptional doctor.",
        },
        {
          name: "Vikram Patel",
          issue: "Diabetes Management",
          review:
            "Dr. Shweta's integrative approach to diabetes management has been life-changing. She combines traditional Ayurvedic wisdom with modern medical practices. My blood sugar levels are now well-controlled, and I feel healthier than ever.",
        },
        {
          name: "Meera Iyer",
          issue: "Skin & Hair Issues",
          review:
            "I consulted Dr. Shweta for chronic skin issues and hair fall. Her herbal treatments and dietary recommendations worked wonders. She truly understands the root cause of problems and addresses them holistically.",
        },
        {
          name: "Amit Malhotra",
          issue: "Weight Management",
          review:
            "Dr. Shweta's personalized weight management program helped me lose 15 kgs in a healthy, sustainable way. Her expertise in Ayurvedic nutrition and lifestyle counseling is unmatched. Grateful for her guidance!",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="group relative bg-white/80 backdrop-blur rounded-[2.2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
        >
          {/* Quote icon */}
          <div className="absolute -top-6 left-8 text-green-700 text-[64px] leading-none opacity-20">
            “
          </div>

          {/* Review */}
          <p className="text-slate-700 text-sm leading-relaxed relative z-10">
            {t.review}
          </p>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

          {/* Author */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.issue}</p>
            </div>

            {/* Rating */}
            <div className="flex gap-1 text-green-600 text-sm">
              ★★★★★
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Footer */}
    <div className="mt-24 text-center">
      <p className="text-slate-600 text-lg">
        Trusted by patients across Mumbai and beyond for holistic Ayurvedic care
      </p>

      <p className="mt-4 text-green-700 font-semibold text-xl">
        Rated 4.9 / 5 ⭐⭐⭐⭐⭐
      </p>
    </div>

  </div>
</section>

  {/* CONTACT */}
<section id="contact" className="py-[120px] bg-gradient-to-b from-green-50 to-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="grid lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">

      {/* LEFT – INFO */}
      <div className="bg-green-800 text-white p-12 lg:p-16 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-semibold">
            Get in Touch
          </h2>
          <p className="mt-4 text-green-100 text-sm leading-relaxed">
            Schedule your consultation and begin your journey to holistic wellness
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium">Mumbai, Maharashtra, India</p>
                <p className="text-green-200 text-sm">
                  Available for in-person and online consultations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium">+91 XXXXX XXXXX</p>
                <p className="text-green-200 text-sm">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-medium">dr.shwetas.ayurpot@gmail.com</p>
                <p className="text-green-200 text-sm">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-green-700 pt-6 text-sm text-green-200">
          <p className="font-semibold">Consultation Hours</p>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 6:00 PM (By Appointment)</p>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="p-12 lg:p-16">
        <h3 className="text-2xl font-semibold text-green-800">
          Book Your Consultation
        </h3>

        <form className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 border-b-2 border-gray-200 focus:border-green-700 py-3 outline-none transition"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full mt-2 border-b-2 border-gray-200 focus:border-green-700 py-3 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 border-b-2 border-gray-200 focus:border-green-700 py-3 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message / Health Concern
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your health concerns or questions..."
              className="w-full mt-2 border-b-2 border-gray-200 focus:border-green-700 py-3 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-xl shadow-lg transition"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our privacy policy
          </p>
        </form>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}