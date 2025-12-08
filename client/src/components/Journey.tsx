import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Journey() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      title: t("journey.bachelor"),
      details: t("journey.bachelor.details"),
      institution: t("journey.bachelor.school"),
      period: t("journey.bachelor.period"),
      logo: "/genevainstitute.webp",
      logoAlt: "Geneva Institute of Technology",
    },
    {
      title: t("journey.bac"),
      details: t("journey.bac.details"),
      institution: t("journey.bac.school"),
      period: t("journey.bac.period"),
      logo: "/lycee.webp",
      logoAlt: "Lycée International de Ferney-Voltaire",
    },
  ];

  const experience = [
    {
      title: t("journey.dnata"),
      details: t("journey.dnata.details"),
      company: t("journey.dnata.location"),
      period: t("journey.dnata.period"),
      logo: "/dnata.webp",
      logoAlt: "DNATA",
    },
    {
      title: t("journey.qatar"),
      details: t("journey.qatar.details"),
      company: t("journey.qatar.location"),
      period: t("journey.qatar.period"),
      logo: "/qatar-airways.webp",
      logoAlt: "Qatar Airways",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          {t("journey.title")}
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t("journey.education")}</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h4>
                      </div>
                      <img
                        src={item.logo}
                        alt={item.logoAlt}
                        loading="lazy"
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 italic leading-relaxed">{item.details}</p>
                    <p className="text-muted-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-primary">{item.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t("journey.experience")}</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h4>
                      </div>
                      <img
                        src={item.logo}
                        alt={item.logoAlt}
                        loading="lazy"
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 italic leading-relaxed">{item.details}</p>
                    <p className="text-muted-foreground font-medium mb-1">{item.company}</p>
                    <p className="text-sm text-primary">{item.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
