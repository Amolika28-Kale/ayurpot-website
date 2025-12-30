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
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Section from "../components/Section";
import ProductSlider from "../components/ProductSlider";

export default function Landing() {
// Mouse Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
  };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

  return (
    <div className="font-sans text-slate-900 antialiased">
      <Navbar />


{/* HERO SECTION */}
<section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#F3FAF6] via-white to-white py-24 lg:py-32"
    >
      {/* 1. ANIMATED BACKGROUND PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-400/10 rounded-full blur-3xl"
            animate={{
              y: [0, -80, 0],
              x: [0, 40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-20 text-green-300 text-3xl hidden md:block"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-10 md:right-20 text-emerald-300 text-4xl hidden md:block"
      >
        🌿
      </motion.div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-widest uppercase shadow-sm border border-green-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Authentic Ayurveda
          </motion.span>

          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-slate-800 leading-tight">
              Holistic Healing with
            </h2>
            <h1 className="text-[42px] md:text-[60px] lg:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500 leading-none">
              Dr. Shweta’s Ayurpot
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 font-medium italic flex items-center gap-3">
            Dr. Shweta Shete <span className="text-green-300">•</span> MD, BAMS <span className="text-green-300">•</span> Mumbai
          </motion.p>

          <motion.p variants={itemVariants} className="max-w-xl text-lg leading-relaxed text-slate-600">
            Blending ancient wisdom with modern diagnostics. Our personalized care 
            focuses on root-cause healing and sustainable long-term well-being.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap pt-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(21, 128, 61, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="relative overflow-hidden group bg-green-700 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all"
            >
              <span className="relative z-10">Book Consultation</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(21, 128, 61, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              href="#about"
              className="px-10 py-4 rounded-full border-2 border-green-700 text-green-700 font-bold transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* TRUST STRIP */}
          <motion.div variants={itemVariants} className="pt-10 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div>
                <motion.h3 className="text-5xl font-black text-green-800">3+</motion.h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Years Experience</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["MD, BAMS Certified", "Online & In-Clinic"].map((badge) => (
                  <span key={badge} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-sm text-slate-700 font-semibold">
                    <span className="text-green-600 text-lg">✓</span> {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div 
          className="relative group perspective-1000"
          onMouseMove={handleMouse}
          onMouseLeave={resetMouse}
          style={{ rotateX, rotateY }}
        >
          {/* Animated Background Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border-2 border-dashed border-green-100 rounded-full"
          />
          
          {/* Main Decorative Frame */}
          <motion.div 
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-green-200 via-emerald-100 to-green-300 opacity-50 blur-sm" 
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-[8px] border-white"
          >
            <img
              src={heroImg}
              alt="Dr Shweta"
              className="w-full h-[500px] lg:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:right-0 bg-white/90 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-white/50 z-20"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-lg">🌿</div>
              <div>
                <p className="text-sm font-bold text-green-800 leading-none">Root-Cause Specialist</p>
                <p className="text-[11px] text-slate-500 mt-1 uppercase font-semibold">100% Natural Treatment</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-green-600 to-transparent rounded-full" />
      </motion.div>
    </section>
{/* ABOUT SECTION */}
<Section
  id="about"
  className="bg-gradient-to-b from-white to-[#F7FBF8]"
>

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
  <ProductSlider/>
</Section>
{/* Services */}
    <section
      id="services"
      className="relative py-28 bg-gradient-to-b from-[#F3F8F5] to-white overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-emerald-100/50 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="relative max-w-[1200px] mx-auto px-6"
      >
        {/* HEADER */}
        <motion.div
          variants={card}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
            Our Expertise
          </span>

          <h2 className="text-[40px] font-semibold text-slate-900">
            Services &{" "}
            <span className="text-green-700 font-bold">Treatments</span>
          </h2>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Comprehensive Ayurvedic care tailored to your unique health needs,
            combining ancient wisdom with modern lifestyle guidance.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-3 gap-10 mt-20"
        >
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
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              className="group relative bg-white/80 backdrop-blur rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM HIGHLIGHT */}
        <motion.div
          variants={card}
          className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-green-800 to-emerald-700 rounded-[2.5rem] p-12 text-center text-white shadow-2xl"
        >
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
        </motion.div>
      </motion.div>
    </section>


    <section id="expertise" className="py-[120px] bg-[#F7FBF8] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="max-w-[1200px] mx-auto px-6"
      >
        {/* HEADING */}
        <motion.div variants={card} className="max-w-2xl">
          <h2 className="text-[40px] font-semibold text-green-800 leading-tight">
            Areas of Expertise
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive Ayurvedic care addressing root causes, restoring
            balance, and promoting long-term holistic wellness.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
        >
          {[
            {
              icon: <Flower2 size={22} />,
              title: "Wellness & Lifestyle",
              items: [
                "Stress Management",
                "Digestive Health",
                "Sleep Disorders",
                "Immunity Boosting",
              ],
            },
            {
              icon: <HeartPulse size={22} />,
              title: "Women’s Health",
              items: [
                "PCOS & Hormonal Balance",
                "Menstrual Health",
                "Pregnancy Care",
                "Menopause",
              ],
            },
            {
              icon: <ShieldPlus size={22} />,
              title: "Chronic Conditions",
              items: [
                "Diabetes",
                "Hypertension",
                "Arthritis",
                "Skin Disorders",
              ],
            },
            {
              icon: <Sparkles size={22} />,
              title: "Specialized Care",
              items: [
                "Panchakarma",
                "Hair & Skin Rejuvenation",
                "Pediatric Care",
                "Geriatric Care",
              ],
            },
          ].map((cardItem, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-8 shadow hover:shadow-2xl transition-all duration-500"
            >
              {/* ICON */}
              <div className="bg-green-100 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                {cardItem.icon}
              </div>

              <h4 className="mt-6 font-semibold text-lg text-green-800 group-hover:text-green-700 transition">
                {cardItem.title}
              </h4>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {cardItem.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* PHILOSOPHY STRIP */}
        <motion.div
          variants={card}
          className="mt-20 bg-green-700 text-white rounded-3xl p-10 md:p-12 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold">
            Personalized Ayurvedic Philosophy
          </h3>
          <p className="mt-4 max-w-3xl text-green-100 leading-relaxed">
            Every treatment plan is thoughtfully designed based on your unique
            body constitution (Prakriti), current imbalances (Vikriti), and
            lifestyle. Dr. Shweta blends classical Ayurvedic wisdom with modern
            medical insights to deliver sustainable, long-term healing outcomes.
          </p>
        </motion.div>
      </motion.div>
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