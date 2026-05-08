import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  TrendingUp, Users, DollarSign, Headset,
  CheckCircle2, ArrowRight, RefreshCw,
  BarChart3, GraduationCap, Wallet,
  Activity, Star, Lock, Monitor, CloudUpload, Tag,
  ShieldCheck, Zap, BookOpen, LineChart,
} from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import logoIcon from "@assets/Untitled_design_1778245677655.png";
import logoFull from "@assets/IMG_8204_1778245694582.png";
import heroBg from "@assets/ChatGPT_Image_May_8,_2026,_02_31_56_PM_1778247241504.png";

/* ─── Animation Variants ─────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease, delay: i * 0.08 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease, delay: i * 0.1 },
  }),
};

/* ─── Reusable animated section wrapper ────────────────── */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Component ─────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });
  const smoothScale = useSpring(heroScale, { stiffness: 80, damping: 20 });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="EP" className="w-10 h-10 object-contain" />
            <img src={logoFull} alt="Elite Trading Pit" className="h-10 object-contain hidden sm:block" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["home","courses","about","testimonials","contact"].map((s) => (
              <motion.a
                key={s}
                href={`#${s}`}
                whileHover={{ color: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
                className="capitalize transition-colors"
              >
                {s}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="https://t.me/elite_tradingpit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-nav-join"
            className="border border-primary text-primary hover:bg-primary hover:text-black font-semibold px-5 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            Join Elite
          </motion.a>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section
        id="home"
        ref={heroRef}
        className="relative overflow-hidden flex items-center min-h-screen"
      >
        {/* Parallax bg */}
        <motion.div
          className="absolute inset-0"
          style={{ y: smoothY, scale: smoothScale }}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/72 to-background/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-background/55 pointer-events-none" />

        {/* Glow pulses */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-primary/12 rounded-full blur-[90px] pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
          animate={{ top: ["105%", "-5%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        <motion.div
          className="container mx-auto px-4 relative z-10 pt-36 pb-28 md:pt-52 md:pb-36"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-sm font-bold px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              ELITE TRADING PIT
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.88] uppercase mb-7"
            >
              TRADE LIKE
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-300 to-primary"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                ELITE
              </motion.span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-white/65 max-w-xl mb-11 font-light leading-relaxed"
            >
              Professional trading signals, mentorship and funding to elevate your trading journey.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://t.me/elite_tradingpit"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-start"
                whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(0,255,106,0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 h-14 px-10 text-lg font-bold bg-primary text-black rounded-xl shadow-[0_0_28px_rgba(0,255,106,0.35)] hover:bg-primary/90 transition-colors"
              >
                <SiTelegram className="w-5 h-5" />
                Get Started
              </motion.a>
              <motion.a
                href="#courses"
                data-testid="button-hero-learn"
                whileHover={{ scale: 1.04, borderColor: "rgba(0,255,106,0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold border border-white/20 text-white rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── Stats ── */}
      <Section className="relative border-y border-border/35 bg-black/65 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/4 via-transparent to-secondary/4 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "+92%", label: "Win Rate",  icon: TrendingUp, color: "text-primary",   c: 0 },
              { value: "500+", label: "Traders",   icon: Users,      color: "text-secondary", c: 1 },
              { value: "$2M+", label: "Volume",    icon: DollarSign, color: "text-primary",   c: 2 },
              { value: "24/7", label: "Support",   icon: Headset,    color: "text-secondary", c: 3 },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={s.c}
                whileHover={{ scale: 1.06, backgroundColor: "rgba(0,255,106,0.04)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center text-center px-6 py-10 border-r border-border/25 last:border-r-0 cursor-default"
              >
                <s.icon className={`w-7 h-7 mb-3 ${s.color}`} />
                <span className={`font-display text-3xl md:text-4xl font-bold tracking-tight ${s.color}`}>{s.value}</span>
                <span className="text-xs text-muted-foreground font-semibold mt-1 uppercase tracking-[0.15em]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Courses Section ── */}
      <Section id="courses" className="py-28 relative overflow-hidden">
        {/* bg texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <motion.p variants={fadeIn} custom={0} className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-4">
              PIT TRADING ELITE
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4" dir="rtl">
              دورات تداول <span className="text-primary">مدفوعة</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg" dir="rtl">
              جميع دورات التداول في مكان واحد
            </motion.p>
            <motion.div variants={scaleIn} custom={3} className="h-px w-20 bg-gradient-to-r from-primary to-primary/0 mx-auto mt-5" />
          </div>

          {/* Course Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {[
              { icon: LineChart, title: "Smart Money",      sub: "SMC & Institutional Flow",  color: "from-primary/20 to-primary/5" },
              { icon: Activity,  title: "Price Action",     sub: "Pure Chart Reading",         color: "from-secondary/20 to-secondary/5" },
              { icon: BarChart3, title: "Supply & Demand",  sub: "Institutional Zones",        color: "from-primary/20 to-primary/5" },
              { icon: ShieldCheck,title:"Risk Management",  sub: "Capital Preservation",       color: "from-secondary/20 to-secondary/5" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.25 }}
                className="relative bg-card border border-border hover:border-primary/40 p-7 rounded-2xl overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative z-10"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <c.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-bold text-lg mb-1 relative z-10">{c.title}</h3>
                <p className="text-muted-foreground text-sm relative z-10">{c.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits + What you get — 2 col */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Benefits */}
            <motion.div variants={fadeUp} custom={0} dir="rtl" className="space-y-4">
              {[
                { icon: Star,        title: "دورات من أفضل المتداولين",       sub: "محتوى احترافي ومجرب" },
                { icon: SiTelegram,  title: "في قناتنا الخاصة على التلغرام",  sub: "وصول كامل لكل الدورات" },
                { icon: RefreshCw,   title: "تحديثات مستقيلية مستمرة",        sub: "دورات جديدة بشكل دوري" },
                { icon: Tag,         title: "بسعر مميز جداً",                 sub: "اشتراك واحد = وصول كامل" },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ x: -4, borderColor: "rgba(0,255,106,0.4)" }}
                  transition={{ duration: 0.22 }}
                  className="flex items-start gap-4 bg-background/70 border border-border/50 p-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{b.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{b.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* What you get + CTA */}
            <motion.div variants={fadeUp} custom={1} dir="rtl">
              <h3 className="text-xl font-bold text-white mb-5">ماذا ستحصل؟</h3>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { icon: Monitor,     title: "جميع الدورات",    sub: "وصول غير محدود" },
                  { icon: CloudUpload, title: "تحديثات مستمرة",  sub: "دورات جديدة إضافية" },
                  { icon: Zap,         title: "وصول مدى الحياة", sub: "بمجرد الاشتراك" },
                  { icon: Lock,        title: "قناة خاصة وأمنة", sub: "خصوصيتك محمية" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    custom={i}
                    whileHover={{ scale: 1.04, borderColor: "rgba(0,255,106,0.4)" }}
                    transition={{ duration: 0.2 }}
                    className="bg-card border border-border p-4 rounded-xl flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA banner */}
              <motion.div
                variants={scaleIn}
                custom={2}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-l from-primary/22 to-primary/5 border border-primary/30 p-6 rounded-2xl"
              >
                <p className="font-bold text-white text-lg mb-5 leading-relaxed">
                  اشترك مرة واحدة وتمتع بجميع الدورات والتحديثات في قناتنا الخاصة على التلغرام
                </p>
                <motion.a
                  href="https://t.me/elite_tradingpit"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-courses-join"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(0,255,106,0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-colors"
                >
                  <SiTelegram className="w-5 h-5" />
                  انضم الآن
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── About Us ── */}
      <Section id="about" className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/6 rounded-full blur-[90px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeUp} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                ABOUT US
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold mb-7 leading-tight">
                WHO WE ARE
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-9 leading-relaxed">
                Elite Trading Pit is more than just signals. We are a community of driven traders
                committed to financial freedom. Our mission is to provide the best tools, education
                and opportunities to help you trade like the elite.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <motion.a
                  href="https://t.me/elite_tradingpit"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: 4 }}
                  data-testid="button-about-learn"
                  className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary text-white hover:text-primary px-7 py-3 rounded-xl font-semibold transition-colors duration-200 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            {/* Animated visual */}
            <motion.div
              variants={scaleIn}
              custom={0}
              className="relative aspect-square max-w-sm mx-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/15 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-4 border border-white/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-10 border border-primary/25 rounded-full border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border border-secondary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BarChart3 className="w-20 h-20 text-primary opacity-80" />
                </motion.div>
              </div>
              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    top: "50%", left: "50%",
                    backgroundColor: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                    opacity: 0.7,
                  }}
                  animate={{
                    x: Math.cos((deg * Math.PI) / 180) * 100,
                    y: Math.sin((deg * Math.PI) / 180) * 100,
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    x: { duration: 22, repeat: Infinity, ease: "linear", delay: (i * 22) / 6 },
                    y: { duration: 22, repeat: Infinity, ease: "linear", delay: (i * 22) / 6 },
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Proven Performance ── */}
      <Section className="py-28 relative overflow-hidden bg-card/15">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span variants={fadeIn} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              OUR RESULTS
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
              PROVEN PERFORMANCE
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "+92%", sub: "WIN RATE",   color: "text-primary",   border: "border-primary/20",   bars: "bg-primary" },
              { label: "500+", sub: "TRADERS",    color: "text-secondary", border: "border-secondary/20", bars: "bg-secondary" },
              { label: "$2M+", sub: "VOLUME",     color: "text-primary",   border: "border-primary/20",   bars: "bg-primary" },
              { label: "24/7", sub: "SUPPORT",    color: "text-secondary", border: "border-secondary/20", bars: "bg-secondary" },
            ].map((s, i) => (
              <motion.div
                key={s.sub}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.22 }}
                className={`bg-card/60 border ${s.border} p-7 rounded-2xl flex flex-col justify-between min-h-[160px] group cursor-default`}
              >
                <div>
                  <span className={`font-display text-4xl font-bold ${s.color}`}>{s.label}</span>
                  <p className="text-xs text-muted-foreground font-semibold tracking-[0.15em] mt-1">{s.sub}</p>
                </div>
                <div className="h-10 mt-5 flex items-end gap-0.5 opacity-55 group-hover:opacity-80 transition-opacity">
                  {[65,40,75,55,90,45,80,35,70,50,85,60].map((h, j) => (
                    <motion.div
                      key={j}
                      className={`flex-1 rounded-t-sm ${s.bars}`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.03, duration: 0.4, ease }}
                      style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Join Community ── */}
      <Section className="py-28 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-black/10"
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{ left: `${i * 18}%`, top: "50%", translateY: "-50%" }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span variants={fadeIn} custom={0} className="font-bold tracking-[0.2em] text-xs uppercase mb-5 block text-black/55">
            JOIN THE ELITE COMMUNITY
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold mb-14 text-black leading-tight">
            TAKE YOUR TRADING<br className="hidden md:block" /> TO THE NEXT LEVEL
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-14">
            {[
              { label: "Exclusive Signals",    icon: Activity },
              { label: "Expert Mentorship",    icon: GraduationCap },
              { label: "Funding Opportunities",icon: Wallet },
              { label: "Elite Community",      icon: Users },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-black text-primary flex items-center justify-center shadow-xl">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="font-bold text-black text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://t.me/elite_tradingpit"
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleIn}
            custom={0}
            whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.96 }}
            data-testid="button-community-join"
            className="inline-flex items-center gap-3 h-16 px-14 text-xl font-bold bg-black text-white hover:bg-black/85 rounded-xl shadow-2xl transition-colors"
          >
            <SiTelegram className="w-6 h-6 text-primary" />
            Join Elite Now
          </motion.a>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section id="testimonials" className="py-28 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span variants={fadeIn} custom={0} className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              TESTIMONIALS
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
              WHAT OUR TRADERS SAY
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              { quote: "Elite Trading Pit changed my trading journey. Consistent profits and amazing support!", author: "Ahmed K.",  rating: 5 },
              { quote: "The mentorship is top notch. I've learned so much in a short time.",                   author: "Yassin B.", rating: 5 },
              { quote: "Best signals I've ever used. Highly recommended to all serious traders.",              author: "Karim D.",  rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6, borderColor: "rgba(0,255,106,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="flex gap-1 text-primary mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.07, duration: 0.3, ease: "backOut" }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-base mb-7 leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center font-bold text-primary text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-bold">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} custom={4} className="flex justify-center gap-2 mt-12">
            {[true, false, false].map((active, i) => (
              <div key={i} className={`rounded-full transition-all duration-300 ${active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-primary/25"}`} />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.span variants={fadeIn} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-5 block">
            GET IN TOUCH
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold mb-6">
            JOIN OUR COMMUNITY
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-14 max-w-xl mx-auto">
            Be part of a community that is serious about trading and building wealth.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a
              href="https://t.me/elite_tradingpit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(34,158,217,0.4)" }}
              whileTap={{ scale: 0.96 }}
              data-testid="link-telegram"
              className="flex items-center justify-center gap-4 bg-[#229ED9] hover:bg-[#1d8fc5] text-white px-9 py-5 rounded-xl font-bold text-lg transition-colors"
            >
              <SiTelegram className="w-6 h-6" />
              Join Telegram
            </motion.a>
            <motion.a
              href="https://www.instagram.com/elite_tradingpit?igsh=MWhrMmFvemxyM201cQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(188,24,136,0.4)" }}
              whileTap={{ scale: 0.96 }}
              data-testid="link-instagram"
              className="flex items-center justify-center gap-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-9 py-5 rounded-xl font-bold text-lg transition-opacity"
            >
              <SiInstagram className="w-6 h-6" />
              Follow Instagram
            </motion.a>
          </motion.div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="bg-black/90 py-12 border-t border-border/25">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="EP" className="w-8 h-8 object-contain" />
              <img src={logoFull} alt="Elite Trading Pit" className="h-8 object-contain" />
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              {[["#home","Home"],["#courses","Courses"],["#about","About"],["#testimonials","Testimonials"],["#contact","Contact"]].map(([href,label]) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }}
                  className="transition-colors"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/20 pt-8 text-sm text-muted-foreground gap-2">
            <p className="font-medium">Trade like elite. Live like a freedom.</p>
            <p>© 2024 Elite Trading Pit. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
