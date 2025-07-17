    import { motion } from "framer-motion";
    import { ModernCard } from "./ui/ModernCard";
    import { FadeInText, BlurText } from "./animations/TextReveal";
    import { RevealOnScroll } from "./animations/ScrollAnimations";
    import { TiltCard, HoverGlow, MagneticButton } from "./animations/InteractiveElements";
    import { Button } from "./ui/button";
    import { Trophy, Award, Medal, Calendar, ExternalLink, Sparkles } from "lucide-react";

    // Import your award images
    import pic1 from '../assets/awards/21-22.jpg';
    import pic2 from '../assets/awards/23-24.jpg';

    const awards = [
    {
        title: "Meritorious Student Award (Class 12th)",
        organization: "Govt. of India Secretariat Co-operative Thrift & Credit Society Ltd.",
        date: "October 2024",
        description: "Honored to receive the Meritorious Student Award for securing 90% in CBSE Class 12th exams with focus on Physics, Chemistry, and Mathematics. Awarded to students scoring 90% and above, along with ₹1,500 appreciation cheque.",
        category: "Academic",
        type: "Achievement",
        img: pic2, 
        link: "", 
        },
        {
        title: "Meritorious Student Award (Class 10th)",
        organization: "Govt. of India Secretariat Co-operative Thrift & Credit Society Ltd.",
        date: "October 2022",
        description: "Received the Meritorious Student Award for securing 94% in CBSE Class 10th exams while studying at ML Khanna DAV Public School. Awarded to students scoring 90% and above, along with ₹1,500 appreciation cheque.",
        category: "Academic",
        type: "Achievement",
        img: pic1, 
        link: "", 
        }
    ];

    const AwardCard = ({ award, index }) => {
    const getIcon = () => {
        switch (award.type) {
        case "Winner":
            return <Trophy className="w-6 h-6" />;
        case "Achievement":
            return <Award className="w-6 h-6" />;
        case "Medal":
            return <Medal className="w-6 h-6" />;
        default:
            return <Award className="w-6 h-6" />;
        }
    };

    const getIconColor = () => {
        switch (award.type) {
        case "Winner":
            return "text-yellow-500";
        case "Achievement":
            return "text-blue-500";
        case "Medal":
            return "text-purple-500";
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
                award.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
            >
                {/* Featured Badge */}
                {award.featured && (
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
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                />

                <div className="relative z-10 p-6">
                {/* Award Icon/Image */}
                <motion.div
                    className="relative mb-6 overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl overflow-hidden flex items-center justify-center">
                    {award.img ? (
                        <img
                        src={award.img}
                        alt={award.title}
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
                        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl">
                            {getIcon()}
                        </div>
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Overlay Button */}
                    {award.link && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                    >
                        <MagneticButton>
                        <Button
                            size="sm"
                            className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                            onClick={() => window.open(award.link, '_blank')}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                        </Button>
                        </MagneticButton>
                    </motion.div>
                    )}
                </motion.div>

                {/* Award Info */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                    <motion.h3 
                        className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        {award.title}
                    </motion.h3>
                    
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-sm whitespace-nowrap">
                        {award.category}
                    </span>
                    </div>

                    {/* Organization & Date */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">{award.organization}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{award.date}</span>
                    </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {award.description}
                    </p>

                    {/* Award Type Badge */}
                    <div className="flex items-center gap-2">
                    <motion.div
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${getIconColor()}`}>
                        {getIcon()}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {award.type}
                        </span>
                    </motion.div>
                    </div>

                    {/* Action Button */}
                    {award.link && (
                    <div className="pt-2">
                        <MagneticButton className="w-full">
                        <Button
                            className="w-full group/btn bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 shadow-lg"
                            onClick={() => window.open(award.link, '_blank')}
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

    const Awards = () => {
    return (
        <section
        id="awards"
        className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
        >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
            animate={{
                scale: [1, 1.2, 1],
                x: [0, -50, 0],
                y: [0, 30, 0],
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
                    AWARDS
                </BlurText>
                </motion.h1>
            </FadeInText>
            
            <FadeInText delay={0.3}>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Recognition for achievements
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
            {awards.map((award, index) => (
                <AwardCard 
                key={index} 
                award={award} 
                index={index}
                />
            ))}
            </motion.div>
        </div>
        </section>
    );
    };

    export default Awards;
