import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, FileText, BookOpen } from "lucide-react";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "bilel@mail.com",
      link: "mailto:bilel@mail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+33 7 67 10 37 50",
      link: "tel:+33767103750",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "bilel-kaoulala",
      link: "https://linkedin.com/in/bilel-kaoulala",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "biIeI",
      link: "https://github.com/biIeI",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-card-foreground font-medium break-words">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );

              return item.link ? (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <a href="/cv-bk.pdf" download>
                <FileText className="w-5 h-5 mr-2" />
                {t("contact.cv")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <a href="https://hackmd.io/@bkh" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2" />
                {t("contact.hackmd")}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
