import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, Users, DollarSign, Headset, 
  CheckCircle2, ArrowRight, RefreshCw, 
  BarChart3, GraduationCap, Wallet,
  Activity, Star, Lock, Infinity, Monitor, CloudUpload, Tag
} from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import logoIcon from "@assets/Untitled_design_1778245677655.png";
import logoFull from "@assets/IMG_8204_1778245694582.png";
import coursesPhoto from "@assets/photo_2026-05-08_13-47-44_1778244975286.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">

      {/* 1. Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="EP" className="w-10 h-10 object-contain" />
            <img src={logoFull} alt="Elite Trading Pit" className="h-10 object-contain hidden sm:block" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold" data-testid="button-nav-join">
            Join Elite
          </Button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Animated Candlestick Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
          {/* Animated candlesticks */}
          <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1200 200" preserveAspectRatio="none">
            {[
              [50,30,170,10],[100,80,50,20],[150,60,140,15],[200,90,110,25],[250,40,160,10],
              [300,70,130,20],[350,50,150,12],[400,85,115,22],[450,45,155,8],[500,65,135,18],
              [550,35,165,10],[600,75,125,20],[650,55,145,14],[700,80,120,25],[750,42,158,9],
              [800,68,132,16],[850,52,148,11],[900,78,122,22],[950,38,162,8],[1000,72,128,19],
              [1050,48,152,13],[1100,82,118,24],[1150,45,155,10]
            ].map(([x, bodyTop, bodyH, wickH], i) => (
              <g key={i}>
                <line x1={x} y1={bodyTop - wickH} x2={x} y2={bodyTop + bodyH + wickH} stroke={i % 2 === 0 ? "#00ff6a" : "#ff2d2d"} strokeWidth="1.5" />
                <rect x={x - 8} y={bodyTop} width="16" height={bodyH} fill={i % 2 === 0 ? "#00ff6a" : "#ff2d2d"} />
              </g>
            ))}
          </svg>
          {/* Moving line chart overlay */}
          <svg className="absolute bottom-0 left-0 w-full h-48 opacity-15" viewBox="0 0 1200 160" preserveAspectRatio="none">
            <polyline
              points="0,120 100,100 200,110 300,80 400,95 500,60 600,75 700,50 800,65 900,40 1000,55 1100,30 1200,45"
              fill="none" stroke="#00ff6a" strokeWidth="2"
            />
            <polyline
              points="0,140 100,130 200,145 300,120 400,135 500,110 600,125 700,100 800,115 900,90 1000,105 1100,80 1200,95"
              fill="none" stroke="#ff2d2d" strokeWidth="1.5" strokeDasharray="6 3"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] uppercase mb-6">
              TRADE LIKE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 drop-shadow-[0_0_25px_rgba(0,255,106,0.3)]">ELITE</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light">
              Professional trading signals, mentorship and funding to elevate your trading journey.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,255,106,0.3)]" data-testid="button-hero-start">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-border hover:bg-white/5" data-testid="button-hero-learn">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="border-y border-border/50 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border/50">
            {[
              { label: "+92% Win Rate", icon: TrendingUp, color: "text-primary" },
              { label: "500+ Traders", icon: Users, color: "text-secondary" },
              { label: "$2M+ Volume", icon: DollarSign, color: "text-primary" },
              { label: "24/7 Support", icon: Headset, color: "text-secondary" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <stat.icon className={`w-8 h-8 mb-4 ${stat.color} opacity-80`} />
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Paid Trading Courses Section */}
      <section id="courses" className="py-24 bg-card/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={coursesPhoto}
                  alt="دورات تداول مدفوعة"
                  className="relative rounded-2xl shadow-2xl shadow-primary/20 max-w-sm w-full object-cover border border-primary/20"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              dir="rtl"
            >
              {/* Title */}
              <motion.div variants={fadeInUp} className="mb-10">
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2" dir="ltr">PIT TRADING ELITE</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-1">
                  دورات تداول <span className="text-primary">مدفوعة</span>
                </h2>
                <p className="text-muted-foreground text-lg mt-2">جميع دورات التداول في مكان واحد</p>
                <div className="h-1 w-16 bg-primary mt-4 rounded-full" />
              </motion.div>

              {/* Benefits */}
              <motion.div variants={staggerContainer} className="space-y-4 mb-10">
                {[
                  { icon: Star, title: "دورات من أفضل المتداولين", sub: "محتوى احترافي ومجرب" },
                  { icon: SiTelegram, title: "في قناتنا الخاصة على التلغرام", sub: "وصول كامل لكل الدورات" },
                  { icon: RefreshCw, title: "تحديثات مستقيلية مستمرة", sub: "دورات جديدة بشكل دوري" },
                  { icon: Tag, title: "بسعر مميز جداً", sub: "اشتراك واحد = وصول كامل" },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-background/60 border border-border/50 p-4 rounded-xl hover:border-primary/40 transition-colors"
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

              {/* ماذا ستحصل */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">ماذا ستحصل؟</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Monitor, title: "جميع الدورات", sub: "وصول غير محدود" },
                    { icon: CloudUpload, title: "تحديثات مستمرة", sub: "دورات جديدة إضافية" },
                    { icon: Infinity, title: "وصول مدى الحياة", sub: "بمجرد الاشتراك" },
                    { icon: Lock, title: "قناة خاصة وأمنة", sub: "خصوصيتك محمية" },
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border p-4 rounded-xl flex flex-col items-center text-center gap-2 hover:border-primary/40 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-l from-primary/20 to-primary/5 border border-primary/30 p-6 rounded-2xl">
                <p className="font-bold text-white text-lg mb-4 leading-relaxed">
                  اشترك مرة واحدة وتمتع بجميع الدورات والتحديثات في قناتنا الخاصة على التلغرام
                </p>
                <a
                  href="https://t.me/elite_tradingpit"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-courses-join"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-105"
                >
                  <SiTelegram className="w-5 h-5" />
                  انضم الآن
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. About Us Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">ABOUT US</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold mb-6">WHO WE ARE</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Elite Trading Pit is more than just signals. We are a community of driven traders committed to financial freedom. Our mission is to provide the best tools, education and opportunities to help you trade like the elite.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" className="h-12 px-8 group border-primary/50 hover:bg-primary/10" data-testid="button-about-learn">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Abstract decorative network/trading graphic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50" />
              <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-12 border border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-white opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Services Section */}
      <section id="services" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">OUR SERVICES</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">WHAT WE OFFER</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SIGNALS",
                desc: "High quality trading signals delivered in real-time with high accuracy.",
                icon: Activity,
                features: ["Real-time Alerts", "Entry & Exit Levels", "Risk Management", "24/7 Support"]
              },
              {
                title: "MENTORSHIP",
                desc: "Learn from experienced traders and improve your skills.",
                icon: GraduationCap,
                features: ["Live Sessions", "Trading Strategies", "Mindset & Psychology", "Private Community"]
              },
              {
                title: "FUNDING",
                desc: "Get funded and trade with our capital. Keep up to 80% of the profits.",
                icon: Wallet,
                features: ["Up to $200K Funding", "Profit Split up to 80%", "No Personal Risk", "Fast Payouts"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,106,0.1)] group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 min-h-[60px]">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Proven Performance */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">OUR RESULTS</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">PROVEN PERFORMANCE</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "+92% WIN RATE", color: "text-primary", border: "border-primary/20", line: "bg-primary" },
              { label: "500+ TRADERS", color: "text-secondary", border: "border-secondary/20", line: "bg-secondary" },
              { label: "$2M+ VOLUME", color: "text-primary", border: "border-primary/20", line: "bg-primary" },
              { label: "24/7 SUPPORT", color: "text-secondary", border: "border-secondary/20", line: "bg-secondary" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card/50 border ${stat.border} p-6 rounded-xl flex flex-col justify-between min-h-[140px]`}
              >
                <span className={`font-display text-2xl font-bold ${stat.color}`}>{stat.label}</span>
                {/* Fake Sparkline/Chart */}
                <div className="h-8 mt-4 flex items-end gap-1 opacity-60">
                  {[...Array(12)].map((_, j) => (
                    <div 
                      key={j} 
                      className={`w-full rounded-t-sm ${stat.line}`}
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Join Elite Community Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="font-bold tracking-widest text-sm uppercase mb-4 block text-black/70">JOIN THE ELITE COMMUNITY</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-12 text-black">TAKE YOUR TRADING TO THE NEXT LEVEL</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { label: "Exclusive Signals", icon: Activity },
              { label: "Expert Mentorship", icon: GraduationCap },
              { label: "Funding Opportunities", icon: Wallet },
              { label: "Elite Community", icon: Users }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-black text-primary flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-black">{item.label}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-black text-white hover:bg-black/90 shadow-2xl hover:scale-105 transition-transform" data-testid="button-community-join">
            Join Elite Now
          </Button>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section id="testimonials" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">TESTIMONIALS</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">WHAT OUR TRADERS SAY</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Elite Trading Pit changed my trading journey. Consistent profits and amazing support!", author: "Ahmed K." },
              { quote: "The mentorship is top notch. I've learned so much in a short time.", author: "Yassin B." },
              { quote: "Best signals I've ever used. Highly recommended to all serious traders.", author: "Karim D." }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-background border border-border p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-bold">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
          </div>
        </div>
      </section>

      {/* 10. Contact / Community Section */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">GET IN TOUCH</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">JOIN OUR COMMUNITY</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Be part of a community that is serious about trading and building wealth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://t.me/elite_tradingpit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#229ED9] hover:bg-[#1c88ba] text-white px-8 py-5 rounded-xl font-bold text-lg transition-transform hover:scale-105"
            >
              <SiTelegram className="w-6 h-6" />
              Join Telegram
            </a>
            <a 
              href="https://www.instagram.com/elite_tradingpit?igsh=MWhrMmFvemxyM201cQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-8 py-5 rounded-xl font-bold text-lg transition-transform hover:scale-105"
            >
              <SiInstagram className="w-6 h-6" />
              Follow Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-black py-12 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="EP" className="w-8 h-8 object-contain" />
              <img src={logoFull} alt="Elite Trading Pit" className="h-8 object-contain" />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#courses" className="hover:text-primary transition-colors">Courses</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center border-t border-border/20 pt-8 text-sm text-muted-foreground">
            <p className="mb-4 md:mb-0 font-medium">Trade like elite. Live like a freedom.</p>
            <p>© 2024 Elite Trading Pit. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

