import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  TrendingUp, Users, DollarSign, Headset, 
  CheckCircle2, ArrowRight, Lock, RefreshCw, 
  ShieldCheck, BarChart3, GraduationCap, Wallet,
  Activity, Star, ChevronRight
} from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import logoImg from "@assets/175c4b4f-94f8-4d7a-b4e1-7d6c70bb099e_1778244939041.png";

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
  // Ensure dark mode is active
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
      
      {/* 1. Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-black flex items-center justify-center border border-primary overflow-hidden rounded">
              {/* Optional: Use the real logo if it works better, or CSS mark */}
              <img src={logoImg} alt="Elite Trading Pit" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen" />
              <span className="relative z-10 font-display font-bold text-xl tracking-tighter">
                <span className="text-primary">E</span><span className="text-secondary">P</span>
              </span>
            </div>
            <span className="font-display font-bold text-xl tracking-wider hidden sm:block">
              ELITE TRADING <span className="text-primary">PIT</span>
            </span>
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
        {/* Background Grid / Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
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

      {/* 4. Paid Trading Courses Section (Arabic) */}
      <section id="courses" className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block" dir="ltr">PIT TRADING ELITE</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">دورات تداول مدفوعة</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" dir="ltr">
            {[
              { title: "Smart Money", desc: "SMC Concepts" },
              { title: "Price Action", desc: "Pure Chart Reading" },
              { title: "Supply & Demand", desc: "Institutional Zones" },
              { title: "Risk Management", desc: "Capital Preservation" }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border/50 p-6 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <BookOpenIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Key Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-white">لماذا تختار دوراتنا؟</h3>
              {[
                { text: "دورات من أفضل المتداولين | محتوى احترافي ومجرب", icon: Star },
                { text: "في قناتنا الخاصة على التلغرام | وصول كامل لكل الدورات", icon: SiTelegram },
                { text: "تحديثات مستقبلية مستمرة | دورات جديدة بشكل دوري", icon: RefreshCw },
                { text: "بسعر مميز جدا | اشتراك واحد = وصول كامل", icon: CheckCircle2 }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-background/50 border border-border/50 p-4 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 ml-4">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-lg">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            {/* What you get */}
            <div className="bg-black border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]" />
              <h3 className="text-2xl font-bold mb-8 text-white">ماذا ستحصل؟</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "جميع الدورات", subtitle: "All Courses" },
                  { title: "تحديثات مستمرة", subtitle: "Continuous Updates" },
                  { title: "وصول مدى الحياة", subtitle: "Lifetime Access" },
                  { title: "قناة خاصة وآمنة", subtitle: "Private Channel" }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border p-4 rounded-lg text-center">
                    <div className="text-primary mb-2 flex justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground" dir="ltr">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 p-8 rounded-2xl text-center flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-xl md:text-2xl font-bold text-white max-w-2xl text-right">
              اشترك مرة واحدة وتمتع بجميع الدورات والتحديثات في قناتنا الخاصة على التلغرام
            </p>
            <Button size="lg" className="h-14 px-10 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 w-full md:w-auto" data-testid="button-courses-join">
              انضم الآن
            </Button>
          </motion.div>
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
              <div className="w-8 h-8 bg-black flex items-center justify-center border border-primary rounded">
                <span className="font-display font-bold text-sm">
                  <span className="text-primary">E</span><span className="text-secondary">P</span>
                </span>
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                ELITE TRADING <span className="text-primary">PIT</span>
              </span>
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

// Minimal missing icons
function BookOpenIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
