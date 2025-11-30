import React from 'react';
// Import hook yang diperlukan
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// --- Data Dampak (Tidak Berubah) ---
const dampakPositif = [
  { 
    icon: "🏗️", 
    title: "Pembangunan Infrastruktur", 
    description: "Belanda membangun jaringan jalan, jembatan, pelabuhan, dan rel kereta api, yang mempermudah transportasi dan komunikasi serta menjadi cikal bakal infrastruktur modern." 
  },
  { 
    icon: "☕", 
    title: "Pengenalan Tanaman Baru", 
    description: "Diperkenalkan tanaman perkebunan baru seperti kopi, teh, karet, dan tembakau, yang turut mengembangkan sektor pertanian dan perkebunan berorientasi ekspor." 
  },
  { 
    icon: "🎓", 
    title: "Pendidikan dan Ilmu Pengetahuan", 
    description: "Pemerintah kolonial mendirikan sekolah-sekolah modern dan memperkenalkan ilmu pengetahuan, sehingga memunculkan golongan terdidik di Indonesia (kaum intelektual)." 
  },
  { 
    icon: "🎭", 
    title: "Perkembangan Budaya dan Seni", 
    description: "Melalui interaksi dan pengaruh budaya Eropa, muncul jenis kesenian baru seperti musik, dansa, dan gaya arsitektur yang bercampur dengan kearifan lokal (Indische Architectuur)." 
  },
  { 
    icon: "🏦", 
    title: "Perkembangan Ekonomi Modern", 
    description: "Munculnya sistem perbankan modern, penggunaan uang kertas dan logam, serta peningkatan hubungan dagang dengan dunia luar yang lebih terstruktur." 
  },
];

const dampakNegatif = [
  { 
    icon: "⛓️", 
    title: "Eksploitasi Ekonomi & Kerja Rodi", 
    description: "Rakyat dipaksa bekerja tanpa upah layak melalui sistem kerja paksa (kerja rodi) yang memicu penderitaan, kemiskinan, dan kelaparan massal." 
  },
  { 
    icon: "💸", 
    title: "Monopoli Perdagangan", 
    description: "Belanda melakukan monopoli perdagangan yang sangat merugikan rakyat dan menguras kekayaan alam Indonesia secara tidak adil untuk kepentingan pemerintah kolonial." 
  },
  { 
    icon: "💔", 
    title: "Perpecahan dan Stratifikasi Sosial", 
    description: "Terbentuknya lapisan-lapisan sosial baru yang tidak adil (rasial), serta hilangnya kebebasan dan kekuasaan para penguasa lokal tradisional." 
  },
  { 
    icon: "🌳", 
    title: "Perusakan Lingkungan", 
    description: "Pembangunan perkebunan skala besar dan industri menyebabkan pembukaan lahan yang masif dan tidak berkelanjutan, merusak ekosistem alam." 
  },
  { 
    icon: "⚔️", 
    title: "Konflik dan Peperangan", 
    description: "Penjajahan memicu banyak konflik, pemberontakan, dan peperangan berkepanjangan yang memakan korban jiwa, serta memicu bibit-bibit perpecahan di masyarakat." 
  },
];


// --- Komponen Kartu Dampak yang Reusable (DENGAN ANIMASI SCROLL) ---
const DampakCard = ({ icon, title, description, colorClass, delay }) => {
    // 1. Panggil Hook Intersection Observer
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 

    const animationClasses = isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'; 

    return (
        <div 
            ref={ref}
            // Tambahkan animasi, transisi, dan shadow emas pada hover
            className={`p-6 bg-[#1c1d21] rounded-xl shadow-xl border border-gray-800
                        transition-all duration-700 ease-out transform hover:scale-[1.02]
                        hover:shadow-yellow-700/50 border-t-4 ${colorClass} ${animationClasses}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <span className={`text-4xl mb-3 block ${colorClass.replace('border-', 'text-')}`}>{icon}</span>
            <h4 className="text-2xl font-bold text-gray-100 mb-3">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

// --- Komponen Utama Dampak (DENGAN BACKGROUND BERTEKSTUR) ---
const Dampak = () => {
    
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
        // Menggunakan style={vintagePattern} untuk background gelap bertekstur
        <div className="py-20 min-h-screen" style={vintagePattern}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* === Header Halaman (Animasi Entrance) === */}
                <header 
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-500 font-serif leading-tight">
                        Dampak Kolonialisme Belanda di Indonesia
                    </h2>
                    {/* Garis dekoratif Emas */}
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full shadow-lg shadow-yellow-500/50"></div>
                </header>

                ---

                {/* === Section 1: Dampak Positif (Aksen Emas) === */}
                <section className="mb-16">
                    <h3 className="text-4xl font-bold mb-8 text-white border-b border-yellow-700 pb-2">
                        Warisan dan Peningkatan (Dampak Positif)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dampakPositif.map((item, index) => (
                            <DampakCard
                                key={`pos-${index}`}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                colorClass="border-yellow-600"
                                delay={index * 150} // Animasi berurutan
                            />
                        ))}
                    </div>
                </section>

                ---

                {/* === Section 2: Dampak Negatif (Aksen Merah) === */}
                <section>
                    <h3 className="text-4xl font-bold mb-8 text-white border-b border-red-700 pb-2">
                        Eksploitasi dan Penderitaan (Dampak Negatif)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dampakNegatif.map((item, index) => (
                            <DampakCard
                                key={`neg-${index}`}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                colorClass="border-red-600"
                                delay={index * 150} // Animasi berurutan
                            />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Dampak;