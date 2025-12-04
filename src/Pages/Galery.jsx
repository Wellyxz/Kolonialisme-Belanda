import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Pastikan hook ini tersedia

// --- Data Galeri (Didefinisikan di sini) ---
export const galeriData = [
  {
    id: 1,
    caption: "Ekspedisi Pertama Belanda",
    year: "1595",
    image: "/public/assets/Ekspedisi_Pertama_Belanda.jpg", 
  },
  {
    id: 2,
    caption: "Awal Mula VOC Terbentuk",
    year: "1602",
    image: "/public/assets/Pendirian_VOC.webp", 
  },
  {
    id: 3,
    caption: "Perang Diponegoro",
    year: "1825-1830",
    image: "/public/assets/Perang_Jawa.jpg", 
  },
  {
    id: 4,
    caption: "Sistem Tanam Paksa",
    year: "1830-1870",
    image: "/public/assets/Sistem_Tanam_Paksa.jpg", 
  },
  {
    id: 5,
    caption: "Sumpah Pemuda",
    year: "1928",
    image: "/public/assets/Hari_Sumpah_Pemuda.jpg", 
  },
  {
    id: 6,
    caption: "Proklamasi Kemerdekaan",
    year: "1945",
    image: "/public/assets/Proklamasi_Kemerdekaan.jpg", 
  },
   {
    id: 7,
    caption: "Pertempuran Surabaya",
    year: "10 November 1945",
    image: "/public/assets/Surabaya.jpg", 
  },
  {
    id: 8,
    caption: "Agresi Militer Belanda",
    year: "1947-1949",
    image: "/public/assets/Militer_Belanda.jpg", 
  },
  {
    id: 9,
    caption: "Pengakuan Kedaulatan Indonesia Oleh Belanda",
    year: "27 Desember 1949",
    image: "/public/assets/Pengakuan_Kedaulatan_Belanda.jpg", 
  },
];

// --- Komponen Item Galeri (DENGAN ANIMASI SCROLL) ---
const GaleriItem = ({ caption, year, image, delay }) => {
    // 1. Panggil Hook Intersection Observer
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 

    const animationClasses = isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'; 

    return (
        <div 
            ref={ref}
            // Item Galeri: Tambahkan Animasi Scroll Reveal
            className={`group relative overflow-hidden rounded-lg shadow-xl cursor-pointer bg-[#1c1d21] 
                        transition-all duration-700 ease-out border border-gray-800 
                        transform hover:scale-[1.03] hover:shadow-yellow-700/50 hover:border-yellow-600 
                        ${animationClasses}`}
            style={{ transitionDelay: `${delay}ms` }} // Jeda animasi berurutan
        >
            <img 
                src={image} 
                alt={caption} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90 aspect-[4/3] bg-gray-900 grayscale group-hover:grayscale-0" 
            />
            {/* Overlay gelap di bawah */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white">
                    {/* Aksen Kuning pada hover */}
                    <p className="text-xl font-semibold mb-0 font-serif group-hover:text-yellow-400 transition duration-300">{caption}</p>
                    <p className="text-sm font-light text-gray-300">Tahun: {year}</p>
                </div>
            </div>
        </div>
    );
};

// --- Komponen Utama Galeri (DENGAN BACKGROUND BERTEKSTUR) ---
const Galeri = () => {
    
    // Pattern CSS yang konsisten (Noise + Vignette)
    const vintagePattern = {
        backgroundColor: '#0c131d', 
        backgroundImage: `
          radial-gradient(circle at center, rgba(12, 19, 29, 0.7) 0%, rgba(12, 19, 29, 1) 70%),
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px),
          repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px)
        `,
    };
    
    return (
        // Menerapkan background bertekstur
        <div className="py-20 min-h-screen" style={vintagePattern}> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* === Header Halaman (Animasi Entrance) === */}
                <header 
                    className="text-center mb-16" 
                >
                    <h2 className="text-5xl font-extrabold mb-4 text-yellow-500 font-serif leading-tight">
                        Arsip Visual Kolonialisme
                    </h2>
                    {/* Garis dekoratif Emas */}
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full shadow-lg shadow-yellow-500/50"></div>
                </header>
                
                {/* Grid Galeri */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {galeriData.map((item, index) => (
                        <GaleriItem 
                            key={item.id} 
                            {...item} 
                            delay={index * 150} // Jeda 150ms antar item
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Galeri;