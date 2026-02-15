import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Summer bensa cool outfit",
        subtitle: "We follow trends. A high fashion is a part of our daily life with our ensemble.",
        // Greenish/Yellow Fashion Image
        mainImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        bgColor: "#d1e8d5",
        collection: [
            "https://images.unsplash.com/photo-1529139513065-07b3b1c5921c?q=80&w=200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1539109132314-347596167d7c?q=80&w=200&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Elegant Floral Style",
        subtitle: "Experience the transition of nature through our premium seasonal wear.",
        // Pinkish Fashion Image
        mainImg: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
        bgColor: "#f3d1d1",
        collection: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581067723546-69972063570b?q=80&w=200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=200&auto=format&fit=crop"
        ]
    }
];

const ExactVideoSlider = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);

    const transition = { duration: 0.9, ease: [0.32, 0.72, 0, 1] };

    return (
        <motion.div
            className="relative w-full h-[100dvh] md:h-screen flex flex-col items-center justify-center overflow-hidden font-sans select-none"
            animate={{ backgroundColor: slides[index].bgColor }}
            transition={{ duration: 0.8 }}
            onClick={handleNext}
        >
            {/* Navbar */}
            <div className="absolute top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 text-sm font-bold text-black/80">
                <div className="hidden md:flex gap-10 cursor-pointer">
                    <span className="hover:line-through">Women</span>
                    <span className="hover:line-through">Men</span>
                    <span className="hover:line-through">About us</span>
                </div>
                {/* Mobile Menu Icon Placeholder (Optional) */}
                <div className="md:hidden">
                    <span className="text-xl">☰</span>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <button className="border border-black/20 bg-white/40 backdrop-blur-md px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-white transition-all text-xs md:text-sm">Order Now</button>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">👤</div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={index} className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-16 md:pt-0">

                    {/* Left Text Block */}
                    <div className="w-full md:w-1/3 z-20 text-center md:text-left mb-6 md:mb-0">
                        <motion.h1
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={transition}
                            className="text-5xl md:text-[6rem] font-serif font-black leading-[0.9] md:leading-[0.8] mb-4 md:mb-6 tracking-tighter text-black/90"
                        >
                            {slides[index].title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-2 md:mr-0 md:block">{word}</span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.7 }}
                            transition={{ ...transition, delay: 0.2 }}
                            className="max-w-xs text-sm font-semibold leading-relaxed text-black/80 mx-auto md:mx-0"
                        >
                            {slides[index].subtitle}
                        </motion.p>
                    </div>

                    {/* Center Main Image */}
                    <div className="relative w-full md:w-1/3 flex justify-center items-center flex-1">
                        <motion.div
                            initial={{ rotate: 90, scale: 0.2, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: -90, scale: 0.2, opacity: 0 }}
                            transition={transition}
                            className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-[40px] md:rounded-[80px] overflow-hidden h-[40vh] md:h-[78vh] w-[80%] md:w-[450px] border-[8px] md:border-[12px] border-white/20"
                        >
                            <img
                                src={slides[index].mainImg}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                alt="High Fashion"
                                loading="eager"
                            />
                        </motion.div>

                        {/* Bottom Collection Row */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...transition, delay: 0.4 }}
                            className="absolute -bottom-6 md:-bottom-10 flex items-center gap-2 md:gap-4 bg-white/60 backdrop-blur-3xl p-2 md:p-4 rounded-full border border-white/50 shadow-xl scale-90 md:scale-100"
                        >
                            <span className="text-[8px] md:text-[10px] font-black uppercase ml-2 md:ml-4 mr-1 md:mr-2 text-black/40 tracking-widest">Collection</span>
                            {slides[index].collection.map((img, i) => (
                                <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-125">
                                    <img src={img} className="w-full h-full object-cover" alt="mini-thumb" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side Vertical 'STYLE' */}
                    <div className="hidden md:flex w-1/3 justify-end">
                        <motion.span
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 0.08 }}
                            transition={transition}
                            className="text-[20rem] font-black leading-none select-none text-black"
                            style={{ writingMode: 'vertical-rl' }}
                        >
                            STYLE
                        </motion.span>
                    </div>

                    {/* Floating Accents */}
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute top-24 right-4 md:right-[28%] text-6xl md:text-8xl drop-shadow-2xl opacity-50 z-0"
                    >
                        🌻
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-2 md:bottom-6 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30">
                Click to switch experience
            </div>
        </motion.div>
    );
};

export default ExactVideoSlider;