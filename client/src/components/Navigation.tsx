import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: "hero", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "skills", label: t("nav.skills") },
    { key: "projects", label: t("nav.projects") },
    { key: "journey", label: t("nav.journey") },
    { key: "contact", label: t("nav.contact") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-white cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("hero")}
            >
              Bilel Kaoulala
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.key)}
                  className="text-white/80 hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
                href="/cv-bk.pdf"
                download="Bilel_Kaoulala_CV.pdf"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 font-medium"
              >
                {t("nav.cv")}
              </motion.a>

              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => setLanguage("fr")}
                  className={`transition-all duration-300 hover:scale-110 ${
                    language === "fr" ? "opacity-100 ring-2 ring-primary rounded-full" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <picture>
                    <source srcSet="/france.webp" type="image/webp" />
                    <img src="/france.png" alt="Français" loading="lazy" className="w-6 h-6 rounded-full" />
                  </picture>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`transition-all duration-300 hover:scale-110 ${
                    language === "en" ? "opacity-100 ring-2 ring-primary rounded-full" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <picture>
                    <source srcSet="/united-kingdom.webp" type="image/webp" />
                    <img src="/united-kingdom.png" alt="English" loading="lazy" className="w-6 h-6 rounded-full" />
                  </picture>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="/cv-bk.pdf"
                download="Bilel_Kaoulala_CV.pdf"
                className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                {t("nav.cv")}
              </motion.a>
              <button
                onClick={() => setLanguage("fr")}
                className={`transition-all duration-300 ${
                  language === "fr" ? "opacity-100 ring-2 ring-primary rounded-full" : "opacity-50"
                }`}
              >
                <picture>
                  <source srcSet="/france.webp" type="image/webp" />
                  <img src="/france.png" alt="Français" loading="lazy" className="w-6 h-6 rounded-full" />
                </picture>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-all duration-300 ${
                  language === "en" ? "opacity-100 ring-2 ring-primary rounded-full" : "opacity-50"
                }`}
              >
                <picture>
                  <source srcSet="/united-kingdom.webp" type="image/webp" />
                  <img src="/united-kingdom.png" alt="English" loading="lazy" className="w-6 h-6 rounded-full" />
                </picture>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-black/95 backdrop-blur-lg border-l border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-2 p-8 pt-24">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => scrollToSection(item.key)}
                  className="text-left text-lg text-white/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navItems.length }}
                href="/cv-bk.pdf"
                download="Bilel_Kaoulala_CV.pdf"
                className="text-left text-lg text-white/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-white/5 block"
              >
                {t("nav.cv")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
