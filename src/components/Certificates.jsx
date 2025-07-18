    import { motion } from "framer-motion";
    import { ModernCard } from "./ui/ModernCard";
    import { FadeInText, BlurText } from "./animations/TextReveal";
    import { RevealOnScroll } from "./animations/ScrollAnimations";
    import { TiltCard, HoverGlow, MagneticButton } from "./animations/InteractiveElements";
    import { Button } from "./ui/button";
    import { Award, Calendar, Trophy, ExternalLink, Sparkles } from "lucide-react";

    
    import certificate1 from '/assets/certificates/photo.jpg';
    import certificate2 from '/assets/certificates/r1.jpg';

    const certificates = [
            {
        title: "CodeClash - The Battle of Logic & Code (11th Rank)",
        issuer: "Lets Code Community",
        date: "July 2025",
        description: "Achieved 11th rank in DSA MasterMind - MCQ Elimination Round of CodeClash competition organized by Lets Code Community, demonstrating strong problem-solving skills in data structures and algorithms.",
        category: "Programming",
        type: "Achievement",
        img: certificate2,
        link: "https://unstop.com/certificate-preview/7a5f1540-aa78-4412-8156-c613f8b6eda5", 
        featured: true
        },
        {
        title: "Frontend Battle 2.0 Participation",
        issuer: "WebD, IIT Bhubaneswar",
        date: "June 2025",
        description: "Participated in Frontend Battle 2.0 competition with CarbonTrack - a carbon footprint tracking platform built with React and TypeScript. The project features interactive charts, emission calculations, and smart sustainability tips, demonstrating advanced frontend development skills.",
        category: "Frontend",
        type: "Participation",
        img: certificate1,
        link: "", 
        featured: false
        }
    ];

    const CertificateCard = ({ certificate, index }) => {
    const getIcon = () => {
        switch (certificate.type) {
        case "Winner":
            return <Trophy className="w-6 h-6" />;
        case "Achievement":
            return <Award className="w-6 h-6" />;
        default:
            return <Award className="w-6 h-6" />;
        }
    };

    const getIconColor = () => {
        switch (certificate.type) {
        case "Winner":
            return "text-yellow-500";
        case "Achievement":
            return "text-blue-500";
        default:
            return "text-gray-500";
        }
    };

    return (
        <RevealOnScroll delay={index * 0.1} direction="up">
        <TiltCard maxTilt={5}>
            <HoverGlow>
            <ModernCard 
                variant="glass" 
                className={`h-full group cursor-pointer overflow-hidden relative ${
                certificate.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
            >
                {/* Featured Badge */}
                {certificate.featured && (
                <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Featured
                    </div>
                </motion.div>
                )}

                {/* Background Gradient */}
                <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                />

                <div className="relative z-10 p-6">
                {/* Certificate Icon/Image */}
                <motion.div
                    className="relative mb-6 overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden flex items-center justify-center">
                    {certificate.img ? (
                        <img
                        src={certificate.img}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                        />
                    ) : (
                        <motion.div
                        className={`${getIconColor()} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                        >
                        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl">
                            {getIcon()}
                        </div>
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Overlay Button */}
                    {certificate.link && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                    >
                        <MagneticButton>
                        <Button
                            size="sm"
                            className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                            onClick={() => window.open(certificate.link, '_blank')}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                        </Button>
                        </MagneticButton>
                    </motion.div>
                    )}
                </motion.div>

                {/* Certificate Info */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                    <motion.h3 
                        className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        {certificate.title}
                    </motion.h3>
                    
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm whitespace-nowrap">
                        {certificate.category}
                    </span>
                    </div>

                    {/* Issuer & Date */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{certificate.date}</span>
                    </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {certificate.description}
                    </p>

                    {/* Certificate Type Badge */}
                    <div className="flex items-center gap-2">
                    <motion.div
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${getIconColor()}`}>
                        {getIcon()}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {certificate.type}
                        </span>
                    </motion.div>
                    </div>

                    {/* Action Button */}
                    {certificate.link && (
                    <div className="pt-2">
                        <MagneticButton className="w-full">
                        <Button
                            className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                            onClick={() => window.open(certificate.link, '_blank')}
                        >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            View Certificate
                        </Button>
                        </MagneticButton>
                    </div>
                    )}
                </div>
                </div>
            </ModernCard>
            </HoverGlow>
        </TiltCard>
        </RevealOnScroll>
    );
    };

    const Certificates = () => {
    return (
        <section
        id="certificates"
        className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
        >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />
        </div>

        <div className="relative z-10">
            <div className="text-center mb-16">
            <FadeInText>
                <motion.h1 
                className="text-6xl max-sm:text-4xl font-extrabold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                >
                <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                    CERTIFICATES
                </BlurText>
                </motion.h1>
            </FadeInText>
            
            <FadeInText delay={0.3}>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Certified achievements and professional recognitions
                </p>
            </FadeInText>
            </div>

            <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
            {certificates.map((certificate, index) => (
                <CertificateCard 
                key={index} 
                certificate={certificate} 
                index={index}
                />
            ))}
            </motion.div>
        </div>
        </section>
    );
    };

    export default Certificates;
