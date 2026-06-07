import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { IMAGES } from "@/assets/images";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contato() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await emailjs.send(
      "service_oio9u4y",
      "template_o7kixmm",
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "q2ZosuYv2NwP8plAd"
    );

    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Nossa equipe retornará em breve.",
    });

    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.SMART_CITY_1} 
            alt="Fluxo Hub Infraestrutura"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fale com a <span className="text-primary">Fluxo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Estamos prontos para impulsionar sua transição para a mobilidade elétrica. Entre em contato com nossos especialistas.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={staggerItem}>
                <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Seja para suporte técnico, parcerias corporativas ou instalação de infraestrutura, nossa equipe está à disposição para ajudar.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sede Corporativa</h3>
                      <p className="text-muted-foreground">Av. Brás de Aguiar, 676</p>
                      <p className="text-muted-foreground">Belém - PA, CEP 66035-000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <p className="text-muted-foreground font-mono">+55 (91) 99112-8771</p>
                      <a
                        href="https://wa.me/5591991128771"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chamar no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">E-mail</h3>
                      <p className="text-muted-foreground">contato@fluxohubev.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 08:00 - 19:00</p>
                      <p className="text-muted-foreground">Sábados: 09:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem}>
                <h3 className="text-xl font-bold mb-6">Siga a FLUXO HUB</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/fluxohub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors text-foreground">
                    <SiLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/fluxohub.ev/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors text-foreground">
                    <SiInstagram size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_-6px_oklch(var(--primary)/0.1)]"
            >
              <h2 className="text-3xl font-bold mb-8">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Como podemos te chamar?"
                    className="bg-background/50"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="bg-background/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject" 
                    placeholder="Ex: Instalação de Eletroposto DC"
                    className="bg-background/50"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua necessidade em detalhes..."
                    className="min-h-[150px] bg-background/50 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold rounded-xl group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Enviar Mensagem
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-primary" />
                Pronto para Eletrificar sua Frota?
              </h3>
              <p className="text-muted-foreground">
                Consulte nossos planos especiais para empresas e condomínios. Oferecemos soluções completas de hardware, software de gestão e operação.
              </p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Falar com Vendas
            </Button>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2026 FLUXO HUB. Todos os direitos reservados. Infraestrutura para Mobilidade Elétrica.</p>
      </footer>
    </div>
  );
}
