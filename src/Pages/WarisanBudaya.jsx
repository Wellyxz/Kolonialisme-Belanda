import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Pastikan hook ini tersedia

// --- Data Warisan dan Budaya (Warna Orange-400 untuk Budaya) ---
const warisanData = [
  {
    title: "Sistem Pemerintahan dan Hukum",
    icon: "⚖️",
    color: "text-yellow-500", // Emas
    points: [
      "Pengenalan sistem pemerintahan modern seperti jabatan gubernur, bupati, camat, dan lurah.",
      "Hukum perdata dan pidana diadaptasi dari hukum Belanda (Burgerlijk Wetboek dan Wetboek van Strafrecht).",
      "Sistem administrasi dan pencatatan sipil (akta kelahiran, nikah, kematian).",
      "Struktur birokrasi yang rapi dan teratur menjadi dasar pemerintahan modern Indonesia.",
    ],
  },
  {
    title: "Pendidikan",
    icon: "🎓",
    color: "text-yellow-500", // Emas
    points: [
      "Didirikannya sekolah-sekolah modern seperti ELS, HBS, MULO, dan STOVIA.",
      "Bahasa Belanda digunakan dalam pendidikan tinggi dan pemerintahan.",
      "Lahirnya kaum terpelajar (intelektual) yang menjadi pelopor pergerakan nasional.",
      "Sistem pendidikan berjenjang (SD–SMP–SMA) merupakan adaptasi dari sistem pendidikan kolonial.",
    ],
  },
  {
    title: "Arsitektur dan Infrastruktur",
    icon: "🏗️",
    color: "text-yellow-500", // Emas
    points: [
      "Bangunan bergaya arsitektur kolonial: Lawang Sewu, Gedung Sate, Benteng Vredeburg, dan Kota Tua Jakarta.",
      "Pembangunan jalan raya pos (De Grote Postweg) dari Anyer hingga Panarukan.",
      "Pengembangan sistem irigasi, pelabuhan, dan rel kereta api.",
      "Tata kota modern: adanya alun-alun, pasar, gereja, dan kantor pemerintahan dalam satu area.",
    ],
  },
  {
    title: "Sistem Ekonomi dan Pertanian",
    icon: "💰",
    color: "text-yellow-500", // Emas
    points: [
      "Sistem tanam paksa (cultuurstelsel) dan perkebunan besar untuk kopi, tebu, teh, dan tembakau.",
      "Diperkenalkannya ekonomi uang dan ekspor-impor.",
      "Pengenalan sistem pajak tanah (landrente) dan penggunaan alat serta teknik pertanian dari Eropa.",
    ],
  },
  {
    title: "Bahasa dan Istilah",
    icon: "💬",
    color: "text-yellow-500", // Emas
    points: [
      "Banyak kata dalam Bahasa Indonesia berasal dari bahasa Belanda, contohnya: kantor (kantoor), polisi (politie), gratis (gratis), pensil (potlood), asuransi (assurantie), koran (courant).",
      "Bahasa Belanda juga berpengaruh pada istilah hukum, pendidikan, dan administrasi.",
    ],
  },
];

const budayaData = [
  {
    title: "Kuliner",
    icon: "🍽️",
    color: "text-orange-400", // Oranye
    points: [
      "Munculnya makanan campuran Belanda–Indonesia seperti: Risoles, kroket, pastel, selat Solo, spekkoek (lapis legit), klappertaart.",
      "Kebiasaan minum kopi atau teh di sore hari juga berasal dari budaya Belanda.",
    ],
  },
  {
    title: "Gaya Hidup dan Kebiasaan",
    icon: "👗",
    color: "text-orange-400", // Oranye
    points: [
      "Pengaruh gaya berpakaian Eropa: jas, rok panjang, dan topi.",
      "Etika sopan santun dalam pergaulan modern.",
      "Penggunaan perabot rumah tangga dan meja makan gaya Barat.",
      "Kebiasaan administrasi rapi dan disiplin waktu (efisiensi kerja).",
    ],
  },
  {
    title: "Sosial dan Pergerakan Nasional",
    icon: "✊",
    color: "text-orange-400", // Oranye
    points: [
      "Munculnya golongan priyayi modern dari kalangan bumiputera terdidik.",
      "Kesadaran akan nasionalisme dan kebangsaan tumbuh akibat ketidakadilan kolonial.",
      "Berdirinya organisasi modern seperti Budi Utomo (1908) dan Sarekat Islam (1911).",
    ],
  },
  {
    title: "Seni dan Arsitektur Campuran",
    icon: "🎨",
    color: "text-orange-400", // Oranye
    points: [
      "Gaya bangunan rumah dan gedung yang menggabungkan unsur Eropa dan Nusantara (misalnya jendela besar, ventilasi lebar, dan atap tinggi).",
      "Pengaruh seni lukis dan sastra bergaya realisme Eropa mulai dikenal di Indonesia.",
    ],
  },
];


// --- Komponen Item Collapsible (DENGAN ANIMASI SCROLL) ---
const WarisanItem = ({ data, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = data.color.replace('text-', 'border-'); 
  
    // Animasi Scroll Reveal
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 
    const animationClasses = isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'; 

  return (
    <div 
        ref={ref}
        className={`bg-[#1c1d21] rounded-xl shadow-xl mb-4 transition-all duration-700 ease-out transform 
                    border-l-4 ${borderColor} hover:shadow-yellow-700/30 ${animationClasses}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Tombol Header */}
      <button
        className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className={`text-2xl mr-4 ${data.color}`}>{data.icon}</span>
          <h4 className="text-xl font-bold text-gray-100">{data.title}</h4>
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          <svg className={`w-6 h-6 ${data.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      {/* Konten Detail */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: isOpen ? '999px' : '0' }}
      >
        <div className="p-5 pt-0 border-t border-gray-800">
          <ul className="space-y-3 pl-5 text-gray-400 list-disc">
            {data.points.map((point, index) => (
              <li key={index} className="text-sm">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


// --- Komponen Utama Warisan & Budaya (DENGAN BACKGROUND BERTEKSTUR) ---
const WarisanBudaya = () => {
    
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
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-500 font-serif leading-tight">
            Warisan dan Budaya Kolonial
          </h2>
            {/* Garis dekoratif Emas */}
            <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full shadow-lg shadow-yellow-500/50"></div>
        </header>

        ---

        {/* === Section 1: Warisan Struktural (Aksen Emas) === */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold mb-8 text-white border-b border-yellow-700 pb-2">
            Peninggalan Struktural Masa Penjajahan
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {warisanData.map((item, index) => (
                <WarisanItem 
                    key={`warisan-${index}`} 
                    data={item} 
                    delay={index * 150} // Animasi berurutan
                />
            ))}
          </div>
        </section>

        ---

        {/* === Section 2: Pengaruh Budaya dan Sosial (Aksen Oranye) === */}
        <section>
          <h3 className="text-4xl font-bold mb-8 text-white border-b border-gray-700 pb-2">
            Asimilasi Budaya dan Gaya Hidup
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {budayaData.map((item, index) => (
                <WarisanItem 
                    key={`budaya-${index}`} 
                    data={item} 
                    delay={index * 150} // Animasi berurutan
                />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default WarisanBudaya;