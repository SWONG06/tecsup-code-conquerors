import { useState, useEffect } from "react";
import { Zap, Star } from "lucide-react";
import segundologo from "../assets/segundologo.png";
import modonoche from "../assets/modonoche.png";
import calendario from "../assets/Calendario.png";
import laptop from "../assets/Laptop.png";


// 🔢 Animated Counter
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: {
  end: number; duration?: number; prefix?: string; suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return <span>{prefix}{count}{suffix}</span>;
};

// ⏳ Countdown Timer
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date("2025-03-15T09:00:00").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400 capitalize mt-1">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// 🌌 Floating Particles
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="floating-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      >
        <div
          className={`w-1 h-1 bg-gradient-to-r ${
            i % 3 === 0
              ? "from-purple-400 to-blue-400"
              : i % 3 === 1
              ? "from-blue-400 to-cyan-400"
              : "from-cyan-400 to-purple-400"
          } rounded-full opacity-60`}
        />
      </div>
    ))}
  </div>
);

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* 🌌 Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 dark:from-purple-900/30 dark:to-blue-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-purple-900/10 dark:from-cyan-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-400/15 dark:bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      {/* ✨ Floating Particles */}
      <FloatingParticles />

      {/* 📍 Main Content */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
          {/* 🔹 Left */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 backdrop-blur-xl animate-pulse-glow">
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                EVENTO OFICIAL TECSUP 2025
              </span>
              <Star className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>

            {/* 🔹 Title */}
            <h1 className="text-center lg:text-left">
              <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient leading-none">
                EDUHACK
              </span>
              <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-extralight bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient mt-2">
                2025
              </span>
            </h1>

            {/* 🔹 Description */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 leading-relaxed">
              “Educación Superior sin deserción estudiantil: El poder de los agentes de IA”
            </p>

            {/* 🟪 Tarjetas individuales */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              {/* 📅 Fecha */}
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl
                              bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl 
                              border border-purple-500/20 shadow-lg 
                              hover:border-purple-500/40 transition-all duration-300">
                <img src={calendario} alt="Calendario" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <span className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  1 de noviembre
                </span>
              </div>

              {/* 💻 Modalidad */}
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl
                              bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl 
                              border border-purple-500/20 shadow-lg 
                              hover:border-purple-500/40 transition-all duration-300">
                <img src={laptop} alt="Laptop" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <span className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Modalidad Virtual
                </span>
              </div>
            </div>

            {/* 🔹 Countdown */}
            <div className="relative p-6 rounded-3xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-purple-500/20 shadow-lg">
              <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-4 font-medium">
                COMIENZA EN
              </p>
              <CountdownTimer />
            </div>
          </div>

          {/* 🔹 Right */}
          <div className="flex justify-center lg:justify-end relative">
            <img
              src={modonoche}
              alt="Logo TECSUP Claro"
              className="relative w-[300px] sm:w-[400px] md:w-[500px] object-contain transition-transform duration-500 hover:scale-110 dark:hidden"
            />
            <img
              src={segundologo}
              alt="Logo TECSUP Oscuro"
              className="relative w-[300px] sm:w-[400px] md:w-[500px] object-contain transition-transform duration-500 hover:scale-110 hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
