import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.journey": "Parcours",
    "nav.contact": "Contact",
    "nav.cv": "Mon CV",
    
    // Hero
    "hero.title": "Bilel Kaoulala",
    "hero.subtitle": "Étudiant en informatique passionné par la cybersécurité et le développement.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Contactez-moi",
    
    // About
    "about.title": "À propos",
    "about.text": "Profil débrouillard et passionné d'informatique, je maîtrise les bases du développement et des réseaux. Curieux et rigoureux, je m'intéresse particulièrement à la cybersécurité et à la protection des systèmes d'information.",
    
    // Skills
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.systems": "Systèmes & Réseaux",
    "skills.office": "Bureautique",
    "skills.soft": "Soft Skills",
    
    // Projects
    "projects.title": "Projets",
    "projects.backup.title": "Système de Backup",
    "projects.backup.desc": "Conception et déploiement d'une solution de sauvegarde robuste utilisant Veeam Backup & Replication et Acronis Cyber Protect. Mise en place de politiques de rétention, automatisation des sauvegardes incrémentales et tests de restauration pour garantir la continuité des services.",
    "projects.backup.date": "Septembre 2025",
    "projects.proxmox.title": "Plateforme de virtualisation Proxmox VE",
    "projects.proxmox.desc": "Mise en place et exploitation d'une plateforme de virtualisation complète avec Proxmox VE. Déploiement de serveurs physiques et virtuels, configuration de clusters haute disponibilité, gestion des ressources et création de templates pour optimiser l'infrastructure.",
    "projects.proxmox.date": "En cours",
    "projects.cybersecurity.title": "Infrastructure de cybersécurité",
    "projects.cybersecurity.desc": "Projet de conception d'une infrastructure sécurisée incluant la segmentation réseau avec OPNsense, la mise en place de pare-feu, l'implémentation de systèmes de détection d'intrusion (Wazuh, Fail2Ban), l'analyse des vulnérabilités avec Nessus et Exegol, et la configuration d'OpenVPN pour renforcer la posture de sécurité globale.",
    "projects.cybersecurity.date": "Juin 2025",
    "projects.virtualization.title": "Plateforme de virtualisation",
    "projects.virtualization.desc": "Déploiement d'une infrastructure de virtualisation complète avec Proxmox VE. Configuration de clusters haute disponibilité, gestion des ressources CPU/RAM, création de templates de machines virtuelles et mise en place de snapshots pour faciliter les tests et le développement.",
    "projects.virtualization.date": "Septembre 2025",
    "projects.viewDetails": "Voir les détails",
    "projects.modal.tools": "Outils utilisés",
    "projects.modal.architecture": "Architecture",
    
    // Journey
    "journey.title": "Parcours",
    "journey.education": "Formation",
    "journey.experience": "Expérience",
    "journey.bachelor": "Bachelor en Informatique",
    "journey.bachelor.details": "Cybersécurité, Cloud, Systèmes et Réseaux, Conception de Données et Applications",
    "journey.bachelor.school": "Geneva Institute of Technology",
    "journey.bachelor.period": "2024 – 2027",
    "journey.bac": "Baccalauréat Technologique",
    "journey.bac.details": "Sciences de l'industrie et du développement durable",
    "journey.bac.school": "Lycée International de Ferney-Voltaire",
    "journey.bac.period": "2022 – 2024",
    "journey.dnata": "DNATA",
    "journey.dnata.details": "Gestion logistique (Bagages) et coordination d'équipes dans un environnement international exigeant",
    "journey.dnata.location": "Genève Aéroport, Suisse, CDD",
    "journey.dnata.period": "Nov. 2024 – Avr. 2025",
    "journey.qatar": "Qatar Airways",
    "journey.qatar.details": "Stage d'observation",
    "journey.qatar.location": "Genève Aéroport, Suisse",
    "journey.qatar.period": "Jan. – Fév. 2021",
    
    // Contact
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "Télécharger mon CV",
    "contact.hackmd": "HackMD",
    "contact.form.title": "Contactez-moi",
    "contact.form.name": "Nom complet",
    "contact.form.namePlaceholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "votre.email@exemple.com",
    "contact.form.subject": "Sujet",
    "contact.form.subjectPlaceholder": "Objet de votre message",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Votre message...",
    "contact.form.send": "Envoyer le message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès ! Je vous répondrai bientôt.",
    "contact.form.error.general": "Une erreur s'est produite. Veuillez réessayer.",
    "contact.form.error.name": "Le nom est requis",
    "contact.form.error.email": "L'email est requis",
    "contact.form.error.emailInvalid": "Email invalide",
    "contact.form.error.subject": "Le sujet est requis",
    "contact.form.error.message": "Le message est requis",
    "contact.form.error.messageTooShort": "Le message doit contenir au moins 10 caractères",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.contact": "Contact",
    "nav.cv": "My CV",
    
    // Hero
    "hero.title": "Bilel Kaoulala",
    "hero.subtitle": "Computer science student passionate about cybersecurity and development.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",
    
    // About
    "about.title": "About",
    "about.text": "Resourceful and passionate about IT, I master the basics of development and networks. Curious and rigorous, I am particularly interested in cybersecurity and information systems protection.",
    
    // Skills
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.systems": "Systems & Networks",
    "skills.office": "Office Suite",
    "skills.soft": "Soft Skills",
    
    // Projects
    "projects.title": "Projects",
    "projects.backup.title": "Backup System",
    "projects.backup.desc": "Design and deployment of a robust backup solution using Veeam Backup & Replication and Acronis Cyber Protect. Implementation of retention policies, automation of incremental backups, and restoration testing to ensure business continuity.",
    "projects.backup.date": "September 2025",
    "projects.proxmox.title": "Proxmox VE Virtualization Platform",
    "projects.proxmox.desc": "Setup and operation of a complete virtualization platform with Proxmox VE. Deployment of physical and virtual servers, high-availability cluster configuration, resource management, and template creation to optimize infrastructure.",
    "projects.proxmox.date": "Ongoing",
    "projects.cybersecurity.title": "Cybersecurity Infrastructure",
    "projects.cybersecurity.desc": "Design project for a secure infrastructure including network segmentation with OPNsense, firewall implementation, intrusion detection systems (Wazuh, Fail2Ban), vulnerability analysis with Nessus and Exegol, and OpenVPN configuration to strengthen the overall security posture.",
    "projects.cybersecurity.date": "June 2025",
    "projects.virtualization.title": "Virtualization Platform",
    "projects.virtualization.desc": "Deployment of a complete virtualization infrastructure with Proxmox VE. Configuration of high-availability clusters, CPU/RAM resource management, creation of virtual machine templates, and implementation of snapshots to facilitate testing and development.",
    "projects.virtualization.date": "September 2025",
    "projects.viewDetails": "View details",
    "projects.modal.tools": "Tools used",
    "projects.modal.architecture": "Architecture",
    
    // Journey
    "journey.title": "Journey",
    "journey.education": "Education",
    "journey.experience": "Experience",
    "journey.bachelor": "Bachelor in Computer Science",
    "journey.bachelor.details": "Cybersecurity, Cloud, Systems and Networks, Data and Application Design",
    "journey.bachelor.school": "Geneva Institute of Technology",
    "journey.bachelor.period": "2024 – 2027",
    "journey.bac": "Technological Baccalaureate",
    "journey.bac.details": "Industrial Sciences and Sustainable Development",
    "journey.bac.school": "Lycée International de Ferney-Voltaire",
    "journey.bac.period": "2022 – 2024",
    "journey.dnata": "DNATA",
    "journey.dnata.details": "Logistics management (Baggage) and team coordination in a demanding international environment",
    "journey.dnata.location": "Geneva Airport, Switzerland, Fixed-term contract",
    "journey.dnata.period": "Nov. 2024 – Apr. 2025",
    "journey.qatar": "Qatar Airways",
    "journey.qatar.details": "Observation internship",
    "journey.qatar.location": "Geneva Airport, Switzerland",
    "journey.qatar.period": "Jan. – Feb. 2021",
    
    // Contact
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "Download my CV",
    "contact.hackmd": "HackMD",
    "contact.form.title": "Contact me",
    "contact.form.name": "Full name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "Message subject",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message...",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully! I'll get back to you soon.",
    "contact.form.error.general": "An error occurred. Please try again.",
    "contact.form.error.name": "Name is required",
    "contact.form.error.email": "Email is required",
    "contact.form.error.emailInvalid": "Invalid email",
    "contact.form.error.subject": "Subject is required",
    "contact.form.error.message": "Message is required",
    "contact.form.error.messageTooShort": "Message must be at least 10 characters",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
