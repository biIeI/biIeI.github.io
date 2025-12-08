import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.error.name");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.error.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.error.emailInvalid");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.form.error.subject");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.error.message");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.error.messageTooShort");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      // Configuration EmailJS
      // IMPORTANT: Remplacez ces valeurs par vos propres identifiants EmailJS
      // 1. Créez un compte sur https://www.emailjs.com/
      // 2. Créez un service email (Gmail, Outlook, etc.)
      // 3. Créez un template avec les variables: from_name, from_email, subject, message
      // 4. Récupérez votre Public Key dans Account > API Keys
      
      const SERVICE_ID = "service_ji8b0og";
      const TEMPLATE_ID = "template_75m1luh";
      const PUBLIC_KEY = "OJ4mCUhQ5rk_pU5qo";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");
      
      // Reset status après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-card border border-border rounded-xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-card-foreground mb-6">
          {t("contact.form.title")}
        </h3>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <p className="text-green-500 font-medium">{t("contact.form.success")}</p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-500 font-medium">{t("contact.form.error.general")}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border ${
                errors.name ? "border-red-500" : "border-border"
              } rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
              placeholder={t("contact.form.namePlaceholder")}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border ${
                errors.email ? "border-red-500" : "border-border"
              } rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
              placeholder={t("contact.form.emailPlaceholder")}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
              {t("contact.form.subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border ${
                errors.subject ? "border-red-500" : "border-border"
              } rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
              placeholder={t("contact.form.subjectPlaceholder")}
            />
            {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-background border ${
                errors.message ? "border-red-500" : "border-border"
              } rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
              placeholder={t("contact.form.messagePlaceholder")}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "sending" ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                {t("contact.form.sending")}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t("contact.form.send")}
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
