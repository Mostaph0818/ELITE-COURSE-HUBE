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
import heroBg from "@assets/ChatGPT_Image_May_8,_2026,_02_31_56_PM_1778247241504.png";

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
            <a href="#home" className="hover:text-primary transition-colors duration-200">Home</a>
            <a href="#courses" className="hover:text-primary transition-colors duration-200">Courses</a>
            <a href="#about" className="hover:text-primary transition-colors duration-200">About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
          </nav>

          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold" data-testid="button-nav-join">
            Join Elite
          </Button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="home" className="relative overflow-hidden flex items-center min-h-screen">
        {/* Chart image background with ken-burns zoom animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <img
            src={heroBg}
            alt="Trading Chart"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Pulsing green glow bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/15 blur-[80px] animate-pulse" />

        {/* Floating scan line */}
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
          initial={{ top: "100%" }}
          animate={{ top: "0%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-24 md:pt-48 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            {/* Label badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ELITE TRADING PIT
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase mb-6"
            >
              TRADE LIKE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-300 to-primary drop-shadow-[0_0_40px_rgba(0,255,106,0.5)]">
                ELITE
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed"
            >
              Professional trading signals, mentorship and funding to elevate your trading journey.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://t.me/elite_tradingpit"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-start"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-black rounded-xl shadow-[0_0_30px_rgba(0,255,106,0.4)] hover:shadow-[0_0_50px_rgba(0,255,106,0.6)] transition-all duration-300 hover:scale-105"
              >
                <SiTelegram className="w-5 h-5" />
                Get Started
              </a>
              <a
                href="#courses"
                data-testid="button-hero-learn"
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold border border-white/20 hover:border-primary/50 text-white hover:bg-white/5 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* 3. Stats Bar */}
      <section className="relative border-y border-border/40 bg-black/70 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: "+92%", label: "Win Rate", icon: TrendingUp, color: "text-primary" },
              { value: "500+", label: "Traders", icon: Users, color: "text-secondary" },
              { value: "$2M+", label: "Volume", icon: DollarSign, color: "text-primary" },
              { value: "24/7", label: "Support", icon: Headset, color: "text-secondary" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-border/30 last:border-r-0"
              >
                <stat.icon className={`w-7 h-7 mb-3 ${stat.color}`} />
                <span className={`font-display text-3xl md:text-4xl font-bold tracking-tight ${stat.color}`}>{stat.value}</span>
                <span className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-widest">{stat.label}</span>
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

