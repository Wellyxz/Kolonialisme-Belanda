import React from 'react';
import { Link } from 'react-router-dom';
// Import hook yang baru dibuat
import useIntersectionObserver from '../hooks/useIntersectionObserver'; 


// --- Data Linimasa (Tidak Berubah) ---
const timelineData = [
  { year: '1595–1596', title: 'Ekspedisi Belanda Pertama', description: 'Awal kontak dagang Belanda dengan Nusantara.', path: '/detail/ekspedisi-belanda-pertama', image: '/public/assets/Ekspedisi_Pertama_Belanda.jpg', },
  { year: '1602', title: 'Pembentukan VOC', description: 'VOC mendapat hak monopoli perdagangan di Asia.', path: '/detail/pembentukan-voc', image: '/public/assets/VOC_flag.jpg', },
  { year: '1619', title: 'Pendirian Batavia', description: 'Batavia jadi pusat administrasi dan militer VOC.', path: '/detail/pendirian-batavia', image: '/public/assets/Kota_Batavia.jfif', },
  { year: '1755', title: 'Perjanjian Giyanti', description: 'Pembagian kerajaan Mataram.', path: '/detail/perjanjian-giyanti', image: '/public/assets/Perjanjian_Giyanti.jpg', },
  { year: '1799', title: 'Pembubaran VOC', description: 'Aset dan wilayah VOC diambil alih negara Belanda.', path: '/detail/pembubaran-voc', image: '/public/assets/Pembubaran_VOC.jfif', },
  { year: '1825–1830', title: 'Perang Jawa (Diponegoro)', description: 'Salah satu pemberontakan besar terhadap kekuasaan kolonial.', path: '/detail/perang-jawa', image: '/public/assets/Perang_Diponegoro.jpg', },
  { year: '1830', title: 'Sistem Tanam Paksa', description: 'Penerapan kebijakan ekonomi yang memaksakan produksi ekspor.', path: '/detail/sistem-tanam-paksa', image: '/public/assets/Tanam_Paksa.jpg', },
  { year: '1901', title: 'Kebijakan Etis (Politik Etis)', description: 'Pengakuan formal atas tanggung jawab Belanda.', path: '/detail/politik-etis', image: '/public/assets/Politik_Etis.png', },
  { year: '1928', title: 'Sumpah Pemuda', description: 'Momen penting identitas nasional.', path: '/detail/sumpah-pemuda', image: '/public/assets/Sumpah_Pemuda.jpg', },
  { year: '1945 (17 Agustus)', title: 'Proklamasi Kemerdekaan', description: 'Awal Revolusi Nasional Indonesia.', path: '/detail/proklamasi-kemerdekaan', image: '/public/assets/Proklamasi_Kemerdekaan.jpg', },
  { year: '1945 (10 November)', title: 'Pertempuran Surabaya', description: 'Usaha perebutan kembali wilayah kekuasaan oleh kolonial.', path: '/detail/pertempuran-surabaya', image: '/public/assets/Pertempuran_Surabaya.webp', },
  { year: '1947-1949', title: 'Agresi Militer Belanda', description: 'Operasi militer besar untuk perebutan kembali wilayah kekuasaan.', path: '/detail/agresi-militer-belanda', image: '/public/assets/Agresi_Militer_Belanda.jpg', },
  { year: '1949 (27 Desember)', title: 'Pengakuan Kedaulatan Oleh Belanda', description: 'Pengakuan Kedaulatan Indonesia oleh Belanda secara de jure.', path: '/detail/pengakuan-kedaulatan-belanda', image: '/public/assets/Pengakuan_Kedaulatan_Belanda.jpg', },
];

// --- Komponen Item Linimasa (Kembali ke Aksen Emas) ---
const TimelineItem = ({ data, index }) => {
  const isOdd = index % 2 !== 0; 
  
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 

  const animationClasses = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-16'; 

  const contentPlacement = isOdd ? 'md:col-start-3 md:text-left' : 'md:col-start-1 md:text-right';
  const yearPlacement = isOdd ? 'md:col-start-1 md:text-right md:pr-8' : 'md:col-start-3 md:text-left md:pl-8';
  
  const cardBgColor = '#1c1d21'; // Warna background kartu gelap
  const arrowStyle = isOdd 
    ? `md:border-r-[15px] md:border-r-[${cardBgColor}] md:left-[-15px]` 
    : `md:border-l-[15px] md:border-l-[${cardBgColor}] md:right-[-15px]`;
    
  // Aksen utama kembali ke Kuning/Emas
  const primaryAksenColor = 'text-yellow-500'; 
  const hoverAksenColor = 'hover:text-yellow-400'; 

  return (
    <div 
        ref={ref} 
        className={`relative mb-16 md:grid md:grid-cols-[1fr_4px_1fr] md:gap-8 items-center transition-all duration-1000 ease-out ${animationClasses}`}
    >
      
      {/* 1. Tahun (Desktop) */}
      <div 
        className={`hidden md:block md:col-span-1 text-2xl font-extrabold ${primaryAksenColor} font-serif ${yearPlacement}`}
      >
        {data.year}
      </div>
      
      {/* 2. Garis & Titik Tengah (Titik Radial Gradient Emas) */}
      <div className="md:col-start-2 md:row-start-1 relative flex flex-col items-center">
        {/* Titik Tengah: Shadow Emas Kuat */}
        <div 
            className="w-6 h-6 rounded-full border-4 border-yellow-800 z-20 shadow-xl shadow-yellow-500/50"
            style={{ 
                backgroundImage: 'radial-gradient(circle, #fcd34d, #b45309)', // Kuning ke Orange gelap
                animation: isVisible ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none', 
            }}
        ></div>
        {/* Garis Vertikal Mobile */}
        <div className="absolute left-2 md:left-auto md:w-full md:h-full md:top-0 md:bottom-0 md:bg-transparent">
          <div className="w-1 h-full bg-yellow-700 absolute left-0 md:hidden"></div>
        </div>
      </div>
      
      {/* 3. Kartu Konten */}
      <Link 
        to={data.path} 
        className={`block relative p-0 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.03] hover:shadow-yellow-700/80 hover:z-30 ${contentPlacement} md:col-span-1 overflow-hidden transform hover:-translate-y-1`}
        style={{ backgroundColor: cardBgColor }}
      >
        
        {/* Gambar */}
        <div className="h-40 bg-gray-900 overflow-hidden">
            <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 hover:shadow-lg hover:shadow-yellow-500/30"
            />
        </div>

        {/* Konten Teks */}
        <div className="p-4 border-t-4 border-yellow-600"> 
            {/* Tahun (Mobile) */}
            <p className={`text-xl font-extrabold ${primaryAksenColor} mb-1 md:hidden`}>{data.year}</p>
            
            {/* Judul menggunakan warna terang, hover ke Emas */}
            <h4 className={`text-xl font-bold text-gray-100 mb-2 ${hoverAksenColor} transition duration-300`}>{data.title}</h4>
            <p className="text-gray-300 text-sm">{data.description}</p>
        </div>
        
        {/* Panah */}
        <div 
            className={`hidden md:block absolute top-[20%] transform -translate-y-1/2 w-0 h-0 border-y-[15px] border-y-transparent border-solid ${arrowStyle}`}
            style={{ 
                borderRightColor: isOdd ? cardBgColor : 'transparent',
                borderLeftColor: isOdd ? 'transparent' : cardBgColor,
            }}
        ></div>
      </Link>
    </div>
  );
};


// --- Komponen Utama Linimasa (REVISI BACKGROUND VINTAGE BERLAPIS) ---
const Timeline = () => {
  
  // Pattern CSS yang lebih kompleks (Noise + Vignette/Fokus)
  const vintagePattern = {
    // Warna dasar yang sangat gelap
    backgroundColor: '#0c131d', 
    // Menggabungkan dua layer background: 
    backgroundImage: `
      /* Layer 1: Vignette/Radial Shadow (Membuat sudut lebih gelap) */
      radial-gradient(circle at center, rgba(12, 19, 29, 0.7) 0%, rgba(12, 19, 29, 1) 70%),
      /* Layer 2: Noise Texture (Garis-garis halus) */
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px),
      repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px)
    `,
  };
  
  return (
    // Terapkan style pattern pada div utama
    <div className="py-20 min-h-screen" style={vintagePattern}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Halaman */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-yellow-500 font-serif leading-tight">
          Garis Waktu Kolonialisme
        </h2>
        {/* Kontainer Linimasa */}
        <div className="relative pt-4 pb-12">
            {/* Garis Vertikal Utama (Desktop): Gradient Emas Vertikal */}
            <div 
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full top-0 shadow-xl shadow-yellow-500/50"
                style={{ 
                    // Gradient Vertikal dari Emas Kuno ke Kuning Terang
                    background: 'linear-gradient(to top, #854d0e, #d97706, #fcd34d)' 
                }}
            ></div>

            {timelineData.map((item, index) => (
              <TimelineItem data={item} index={index} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;