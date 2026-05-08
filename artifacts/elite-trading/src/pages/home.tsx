import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  TrendingUp, Users, DollarSign, Headset,
  ArrowRight, RefreshCw,
  BarChart3, GraduationCap, Wallet,
  Activity, Star, Lock, Monitor, CloudUpload, Tag,
  ShieldCheck, Zap, LineChart, Target,
} from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

import logoIcon from "@assets/Untitled_design_1778245677655.png";
import logoFull from "@assets/IMG_8204_1778245694582.png";
import heroBg from "@assets/ChatGPT_Image_May_8,_2026,_02_31_56_PM_1778247241504.png";

/* ─── Animation Variants ─────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
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
    opacity: 1, scale: 1,
    transition: { duration: 0.65, ease, delay: i * 0.1 },
  }),
};

/* ─── Section wrapper ────────────────────────────────────── */
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section id={id} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.section>
  );
}

/* ─── NAV LABELS ─────────────────────────────────────────── */
const navItems = [
  { id: "home",         label: "الرئيسية" },
  { id: "courses",      label: "الدورات" },
  { id: "about",        label: "من نحن" },
  { id: "testimonials", label: "آراء المتداولين" },
  { id: "contact",      label: "تواصل معنا" },
];

/* ─── Course data with ICT + expand descriptions ─────────── */
const COURSES = [
  {
    icon: LineChart,
    title: "Smart Money",
    sub: "تدفق المؤسسات والسيولة",
    color: "from-primary/20 to-primary/5",
    accent: "border-primary/40",
    desc: "تعلّم كيف تقرأ تحركات الأموال الذكية: Order Blocks، FVG، BOS وCHoCH. ادخل السوق مع المؤسسات لا ضدها.",
  },
  {
    icon: Activity,
    title: "Price Action",
    sub: "قراءة الشارت الخالص",
    color: "from-secondary/20 to-secondary/5",
    accent: "border-secondary/40",
    desc: "تحليل الشموع اليابانية، أنماط الانعكاس، وقراءة السوق بدون مؤشرات. الأسلوب الأقدم والأثبت في التداول.",
  },
  {
    icon: BarChart3,
    title: "Supply & Demand",
    sub: "مناطق العرض والطلب",
    color: "from-primary/20 to-primary/5",
    accent: "border-primary/40",
    desc: "تحديد مناطق العرض والطلب المؤسسية بدقة، وكيفية الدخول منها مع أفضل نقاط وقف الخسارة والهدف.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    sub: "إدارة رأس المال والمخاطر",
    color: "from-secondary/20 to-secondary/5",
    accent: "border-secondary/40",
    desc: "نسب المخاطرة الصحيحة، حساب حجم الصفقة، وإدارة الحساب لتبقى في السوق على المدى الطويل.",
  },
  {
    icon: Target,
    title: "ICT",
    sub: "Inner Circle Trader",
    color: "from-green-500/15 to-green-500/5",
    accent: "border-green-400/40",
    desc: "منهج ICT الكامل: Killzones، Liquidity Sweeps، NWOG/NDOG، AMD Cycles. من أعمق المناهج في تداول الفوركس والمؤشرات.",
  },
] as const;

/* ─── Component ─────────────────────────────────────────── */
export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.dir = "rtl";
    const t = setTimeout(() => setIntroVisible(false), 100);
    return () => {
      clearTimeout(t);
      document.documentElement.dir = "ltr";
    };
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: pageProgress } = useScroll();

  const heroY       = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale   = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const smoothY     = useSpring(heroY,     { stiffness: 80, damping: 20 });
  const smoothScale = useSpring(heroScale, { stiffness: 80, damping: 20 });
  const progressW   = useSpring(useTransform(pageProgress, [0, 1], ["0%", "100%"]), { stiffness: 120, damping: 25 });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden" dir="rtl">

      {/* ── Intro Overlay ── */}
      <AnimatePresence>
        {introVisible && (
          <motion.div key="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
          >
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-4"
            >
              <img src={logoIcon} alt="EP" className="w-16 h-16 object-contain" />
              <motion.div className="h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }} animate={{ width: 120 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scroll Progress ── */}
      <motion.div
        className="fixed top-0 right-0 h-0.5 bg-gradient-to-l from-primary via-green-300 to-primary z-[60] origin-right"
        style={{ width: progressW }}
      />

      {/* ── Navbar ── */}
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="EP" className="w-10 h-10 object-contain" />
            <img src={logoFull} alt="Elite Trading Pit" className="h-10 object-contain hidden sm:block" />
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {navItems.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="relative py-1 transition-colors duration-200 hover:text-primary"
                style={{ color: activeSection === s.id ? "hsl(var(--primary))" : undefined }}
              >
                {s.label}
                <AnimatePresence>
                  {activeSection === s.id && (
                    <motion.span layoutId="nav-indicator" key="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary rounded-full"
                      initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </nav>

          <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="border border-primary text-primary hover:bg-primary hover:text-black font-semibold px-5 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            انضم الآن
          </motion.a>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section id="home" ref={heroRef} className="relative overflow-hidden flex items-center min-h-screen">
        <motion.div className="absolute inset-0" style={{ y: smoothY, scale: smoothScale }}>
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }} className="absolute inset-0"
          >
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/72 to-background/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-background/55 pointer-events-none" />
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-primary/12 rounded-full blur-[90px] pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
          animate={{ top: ["105%", "-5%"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        <motion.div className="container mx-auto px-4 relative z-10 pt-36 pb-28 md:pt-52 md:pb-36"
          style={{ opacity: heroOpacity }}
        >
          <motion.div initial="hidden" animate="visible"
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-sm font-bold px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <motion.span className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              />
              ELITE TRADING PIT
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1}
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

            <motion.p variants={fadeUp} custom={2}
              className="text-lg md:text-xl text-white/65 max-w-xl mb-11 font-light leading-relaxed"
            >
              إشارات تداول احترافية، تدريب متخصص ومحتوى مدفوع يرفع مستواك في الأسواق المالية.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(0,255,106,0.5)" }}
                whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 h-14 px-10 text-lg font-bold bg-primary text-black rounded-xl shadow-[0_0_28px_rgba(0,255,106,0.35)] hover:bg-primary/90 transition-colors"
              >
                <SiTelegram className="w-5 h-5" />
                ابدأ الآن
              </motion.a>
              <motion.a href="#courses"
                whileHover={{ scale: 1.04, borderColor: "rgba(0,255,106,0.5)" }}
                whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold border border-white/20 text-white rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors"
              >
                اعرف أكثر
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════ */}
      <Section className="relative border-y border-border/35 bg-black/65 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/4 via-transparent to-secondary/4 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "+92%", label: "نسبة الربح",    icon: TrendingUp, color: "text-primary",   c: 0 },
              { value: "500+", label: "متداول",         icon: Users,      color: "text-secondary", c: 1 },
              { value: "$2M+", label: "حجم التداول",   icon: DollarSign, color: "text-primary",   c: 2 },
              { value: "24/7", label: "دعم متواصل",    icon: Headset,    color: "text-secondary", c: 3 },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} custom={s.c}
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

      {/* ══════════════════════════════════════════════════════
          COURSES
      ══════════════════════════════════════════════════════ */}
      <Section id="courses" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <motion.p variants={fadeIn} custom={0} className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-4">
              ELITE TRADING PIT
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1}
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              دورات تداول <span className="text-primary">مدفوعة</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg">
              جميع دورات التداول في مكان واحد داخل قناتنا على التيليغرام
            </motion.p>
            <motion.div variants={scaleIn} custom={3} className="h-px w-20 bg-gradient-to-r from-primary to-primary/0 mx-auto mt-5" />
          </div>

          {/* Course Cards — click to expand */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {COURSES.map((c, i) => {
              const isOpen = expandedCard === i;
              return (
                <motion.div
                  key={c.title}
                  variants={scaleIn}
                  custom={i}
                  layout
                  onClick={() => setExpandedCard(isOpen ? null : i)}
                  whileHover={!isOpen ? { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" } : {}}
                  transition={{ duration: 0.25, layout: { duration: 0.4, ease } }}
                  className={`relative bg-card border ${isOpen ? c.accent : "border-border"} p-7 rounded-2xl overflow-hidden group cursor-pointer select-none`}
                >
                  {/* hover / open gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-opacity duration-400 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`} />

                  {/* icon + chevron row */}
                  <div className="flex items-start justify-between relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                      animate={{ rotate: isOpen ? 12 : 0, scale: isOpen ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <c.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="text-muted-foreground mt-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="font-bold text-lg mb-1 relative z-10">{c.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10">{c.sub}</p>

                  {/* expandable description */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="h-px w-full bg-primary/20 mb-4" />
                        <p className="text-foreground/80 text-sm leading-relaxed">{c.desc}</p>
                        <motion.a
                          href="https://t.me/elite_tradingpit"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.18, duration: 0.3 }}
                          className="inline-flex items-center gap-2 mt-4 text-primary font-bold text-sm hover:underline"
                        >
                          <SiTelegram className="w-4 h-4" />
                          احصل على الدورة في القناة
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} custom={0} className="space-y-4">
              {[
                { icon: Star,        title: "دورات من أفضل المتداولين",       sub: "محتوى احترافي ومجرب في الأسواق" },
                { icon: SiTelegram,  title: "في قناتنا الخاصة على التيليغرام", sub: "وصول كامل لكل الدورات فور الاشتراك" },
                { icon: RefreshCw,   title: "تحديثات مستمرة",                  sub: "دورات ومحتوى جديد بشكل دوري" },
                { icon: Tag,         title: "بسعر مميز جداً",                  sub: "اشتراك واحد = وصول لكل المحتوى" },
              ].map((b, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
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

            <motion.div variants={fadeUp} custom={1}>
              <h3 className="text-xl font-bold text-white mb-5">ماذا ستحصل عليه؟</h3>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { icon: Monitor,     title: "جميع الدورات",     sub: "وصول غير محدود" },
                  { icon: CloudUpload, title: "تحديثات مستمرة",   sub: "دورات جديدة إضافية" },
                  { icon: Zap,         title: "وصول مدى الحياة",  sub: "بمجرد الاشتراك" },
                  { icon: Lock,        title: "قناة خاصة وآمنة",  sub: "خصوصيتك محمية" },
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleIn} custom={i}
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

              <motion.div variants={scaleIn} custom={2} whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-primary/22 to-primary/5 border border-primary/30 p-6 rounded-2xl"
              >
                <p className="font-bold text-white text-lg mb-5 leading-relaxed">
                  اشترك مرة واحدة واستمتع بجميع الدورات والتحديثات في قناتنا الخاصة
                </p>
                <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
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

      {/* ══════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════ */}
      <Section id="about" className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/6 rounded-full blur-[90px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeUp} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                من نحن
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold mb-7 leading-tight">
                فريق <span className="text-primary">Elite</span> Trading Pit
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-9 leading-relaxed">
                نحن مجموعة من المتداولين المحترفين المتخصصين في مفهوم Smart Money و ICT.
                هدفنا تقديم تعليم حقيقي وقابل للتطبيق لكل من يريد الوصول لمستوى احترافي في التداول.
                من خلال قناتنا المدفوعة، تحصل على دورات شاملة وإشارات يومية ومتابعة مستمرة.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, x: -4 }}
                  className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary text-white hover:text-primary px-7 py-3 rounded-xl font-semibold transition-colors duration-200 group"
                >
                  اعرف أكثر
                  <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
                </motion.a>
              </motion.div>
            </div>

            {/* Animated visual */}
            <motion.div variants={scaleIn} custom={0} className="relative aspect-square max-w-sm mx-auto">
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/15 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div className="absolute inset-4 border border-white/10 rounded-full"
                animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.div className="absolute inset-10 border border-primary/25 rounded-full border-dashed"
                animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              <motion.div className="absolute inset-16 border border-secondary/20 rounded-full"
                animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <BarChart3 className="w-20 h-20 text-primary opacity-80" />
                </motion.div>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div key={i} className="absolute w-2.5 h-2.5 rounded-full"
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

      {/* ══════════════════════════════════════════════════════
          PERFORMANCE
      ══════════════════════════════════════════════════════ */}
      <Section className="py-28 relative overflow-hidden bg-card/15">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span variants={fadeIn} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              نتائجنا
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
              أرقام حقيقية
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "+92%", sub: "نسبة الربح",   color: "text-primary",   border: "border-primary/20",   bars: "bg-primary" },
              { label: "500+", sub: "متداول",        color: "text-secondary", border: "border-secondary/20", bars: "bg-secondary" },
              { label: "$2M+", sub: "حجم التداول",  color: "text-primary",   border: "border-primary/20",   bars: "bg-primary" },
              { label: "24/7", sub: "دعم متواصل",   color: "text-secondary", border: "border-secondary/20", bars: "bg-secondary" },
            ].map((s, i) => (
              <motion.div key={s.sub} variants={scaleIn} custom={i}
                whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.22 }}
                className={`bg-card/60 border ${s.border} p-7 rounded-2xl flex flex-col justify-between min-h-[160px] group cursor-default`}
              >
                <div>
                  <span className={`font-display text-4xl font-bold ${s.color}`}>{s.label}</span>
                  <p className="text-xs text-muted-foreground font-semibold tracking-[0.15em] mt-1">{s.sub}</p>
                </div>
                <div className="h-10 mt-5 flex items-end gap-0.5 opacity-55 group-hover:opacity-80 transition-opacity">
                  {[65,40,75,55,90,45,80,35,70,50,85,60].map((h, j) => (
                    <motion.div key={j} className={`flex-1 rounded-t-sm ${s.bars}`}
                      initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
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

      {/* ══════════════════════════════════════════════════════
          COMMUNITY BANNER
      ══════════════════════════════════════════════════════ */}
      <Section className="py-28 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="absolute w-64 h-64 rounded-full bg-black/10"
              animate={{ x: [Math.random()*200-100, Math.random()*200-100], y: [Math.random()*100-50, Math.random()*100-50] }}
              transition={{ duration: 8+i*2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{ left: `${i * 18}%`, top: "50%", translateY: "-50%" }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span variants={fadeIn} custom={0} className="font-bold tracking-[0.2em] text-xs uppercase mb-5 block text-black/55">
            انضم للمجتمع
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold mb-14 text-black leading-tight">
            ارتقِ بمستواك<br className="hidden md:block" /> في التداول
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-14">
            {[
              { label: "إشارات حصرية",   icon: Activity },
              { label: "تدريب متخصص",    icon: GraduationCap },
              { label: "فرص تمويل",       icon: Wallet },
              { label: "مجتمع النخبة",    icon: Users },
            ].map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} custom={i}
                whileHover={{ scale: 1.1, y: -4 }} transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-black text-primary flex items-center justify-center shadow-xl">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="font-bold text-black text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
            variants={scaleIn} custom={0}
            whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 h-16 px-14 text-xl font-bold bg-black text-white hover:bg-black/85 rounded-xl shadow-2xl transition-colors"
          >
            <SiTelegram className="w-6 h-6 text-primary" />
            انضم الآن
          </motion.a>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS — بالدارجة الجزائرية
      ══════════════════════════════════════════════════════ */}
      <Section id="testimonials" className="py-28 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span variants={fadeIn} custom={0} className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              آراء المتداولين
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
              واش قالوا فينا ؟
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                quote: "والله من نهار ما دخلت القناة تبدّلت طريقة تفكيري في التريدينغ. الإشارات صحيحة ومحمد يشرح بزاف مليح، صحابي كيفاش ما نوصيش بيهم!",
                author: "أحمد ك.",
                city: "الجزائر العاصمة",
                rating: 5,
              },
              {
                quote: "كنت نخسر في كل صفقة وما فهمتش ليه. بعد ما تعلمت ICT في القناة بدأت نربح بالزبط. جاد هذا مو كلام فاضي.",
                author: "ياسين ب.",
                city: "وهران",
                rating: 5,
              },
              {
                quote: "السعر مقارنةً بالمحتوى ما فيه كلام — رخيص وفيه بزاف. الدورات مرتبة وسهلة الفهم حتى لي هو مبتدئ. بارك الله فيكم.",
                author: "كريم د.",
                city: "قسنطينة",
                rating: 5,
              },
            ].map((t, i) => (
              <motion.div key={i} variants={scaleIn} custom={i}
                whileHover={{ y: -6, borderColor: "rgba(0,255,106,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="flex gap-1 text-primary mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div key={j}
                      initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
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
                  <div>
                    <p className="font-bold text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
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

      {/* ══════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════ */}
      <Section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.span variants={fadeIn} custom={0} className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-5 block">
            تواصل معنا
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold mb-6">
            انضم لمجتمعنا
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-14 max-w-xl mx-auto">
            كن جزءاً من مجتمع جادّ في التداول وبناء الثروة بطريقة احترافية.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a href="https://t.me/elite_tradingpit" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(34,158,217,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-4 bg-[#229ED9] hover:bg-[#1d8fc5] text-white px-9 py-5 rounded-xl font-bold text-lg transition-colors"
            >
              <SiTelegram className="w-6 h-6" />
              تيليغرام
            </motion.a>
            <motion.a href="https://www.instagram.com/elite_tradingpit?igsh=MWhrMmFvemxyM201cQ==" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(188,24,136,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-9 py-5 rounded-xl font-bold text-lg transition-opacity"
            >
              <SiInstagram className="w-6 h-6" />
              إنستغرام
            </motion.a>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="bg-black/90 py-12 border-t border-border/25">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="EP" className="w-8 h-8 object-contain" />
              <img src={logoFull} alt="Elite Trading Pit" className="h-8 object-contain" />
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              {navItems.map(({ id, label }) => (
                <motion.a key={id} href={`#${id}`}
                  whileHover={{ color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }} className="transition-colors"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/20 pt-8 text-sm text-muted-foreground gap-2">
            <p className="font-medium">تداول مثل النخبة. عيش بحرية.</p>
            <p>© 2024 Elite Trading Pit. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
