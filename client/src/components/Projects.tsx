import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Database, Server, Shield } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Database,
      title: t("projects.backup.title"),
      description: t("projects.backup.desc"),
      color: "from-blue-500/20 to-blue-600/20",
      diagramUrl: "/diagram-backup.png",
      date: t("projects.backup.date"),
      tools: ["Veeam Backup & Replication", "Acronis Cyber Protect"],
    },
    {
      icon: Server,
      title: t("projects.virtualization.title"),
      description: t("projects.virtualization.desc"),
      color: "from-primary/20 to-blue-500/20",
      diagramUrl: "/diagram-virtualization.png",
      date: t("projects.virtualization.date"),
      tools: ["Proxmox VE", "KVM", "QEMU", "ZFS"],
    },
    {
      icon: Shield,
      title: t("projects.cybersecurity.title"),
      description: t("projects.cybersecurity.desc"),
      color: "from-blue-600/20 to-primary/20",
      diagramUrl: "/diagram-cybersecurity.png",
      date: t("projects.cybersecurity.date"),
      tools: ["OPNsense", "Wazuh", "Fail2Ban", "Nessus", "Exegol", "OpenVPN"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className={`h-full bg-gradient-to-br ${project.color} backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] flex flex-col`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
                      <span className="text-xs text-primary font-medium">{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow line-clamp-4">{project.description}</p>
                  
                  <Button
                    onClick={() => setSelectedProject(index)}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    {t("projects.viewDetails")}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projects[selectedProject].title}
          description={projects[selectedProject].description}
          diagramUrl={projects[selectedProject].diagramUrl}
          date={projects[selectedProject].date}
          tools={projects[selectedProject].tools}
        />
      )}
    </section>
  );
}
