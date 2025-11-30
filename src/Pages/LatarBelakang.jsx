// src/pages/LatarBelakang.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Pastikan hook ini tersedia

// --- Komponen Kartu 3G (DENGAN ANIMASI SCROLL) ---
const GCard = ({ emoji, title, description, delay }) => {
    // Gunakan hook untuk scroll reveal
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 }); 

    const animationClasses = isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'; 

    return (
        <div 
            ref={ref}
            // Tambahkan transisi, durasi, dan kelas animasi
            className={`p-6 bg-[#1c1d21] rounded-xl shadow-xl border-t-4 border-yellow-600 
                        hover:shadow-yellow-700/50 transition duration-700 ease-out 
                        transform hover:-translate-y-2 ${animationClasses}`}
            style={{ transitionDelay: `${delay}ms` }} // Jeda animasi berurutan
        >
            <span className="text-5xl text-yellow-500 mb-3 block">{emoji}</span>
            <h4 className="text-2xl font-bold text-gray-100 mb-2">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

// --- Komponen Utama Latar Belakang ---
const LatarBelakang = () => {
    
    // Pattern CSS yang lebih kompleks (Noise + Vignette/Fokus) - Sama dengan Timeline
    const vintagePattern = {
        backgroundColor: '#0c131d', 
        backgroundImage: `
          radial-gradient(circle at center, rgba(12, 19, 29, 0.7) 0%, rgba(12, 19, 29, 1) 70%),
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px),
          repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px)
        `,
    };

    return (
        // Background utama menggunakan pattern vintage
        <div className="py-20 min-h-screen" style={vintagePattern}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* === Header Halaman (Animasi Fade-in) === */}
                <header className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-500 font-serif leading-tight">
                        Latar Belakang Sejarah Kolonial
                    </h2>
                    {/* Garis dekoratif Emas */}
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full shadow-lg shadow-yellow-500/50"></div>
                </header>

                {/* === Konten Utama: Motivasi Kolonial (3G) === */}
                <section className="mb-16">
                    <h3 className="text-4xl font-bold mb-10 text-gray-100 text-center relative">
                        Motif Kedatangan Bangsa Eropa (3G)
                        {/* Garis dekoratif di bawah judul 3G */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-gray-700"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        
                        {/* Card 3G: Gold */}
                        <GCard 
                            emoji="💰" 
                            title="Gold (Ekonomi)" 
                            description="Pencarian sumber rempah-rempah yang sangat berharga (lada, cengkeh, pala) setelah jalur dagang ke Timur Tengah terputus. Monopoli rempah adalah motif utama VOC."
                            delay={0}
                        />
                        
                        {/* Card 3G: Gospel */}
                        <GCard 
                            emoji="✝️" 
                            title="Gospel (Agama)" 
                            description="Penyebaran ajaran agama Kristen, yang menjadi salah satu misi yang mendampingi perjalanan dagang dan penemuan wilayah baru."
                            delay={200} // Jeda 0.2 detik setelah card sebelumnya
                        />
                        
                        {/* Card 3G: Glory */}
                        <GCard 
                            emoji="🏆" 
                            title="Glory (Kejayaan)" 
                            description="Ambisi untuk mencapai kejayaan, kekuasaan, dan pengakuan sebagai bangsa maritim yang superior di mata dunia."
                            delay={400} // Jeda 0.4 detik setelah card pertama
                        />
                    </div>
                </section>

                {/* === Konten Detail: VOC & Hindia Belanda === */}
                <section className="mb-16">
                    {/* Wadah Detail dengan Shadow Kuat & Border Emas */}
                    <div className="bg-[#1c1d21] p-8 md:p-12 rounded-xl shadow-2xl shadow-yellow-900/40 border-l-4 border-yellow-600 transition duration-500 hover:shadow-yellow-700/60">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            
                            {/* Kolom Kiri: Fokus pada VOC */}
                            <div className="border-b md:border-b-0 md:border-r border-gray-700 md:pr-6 pb-4 md:pb-0">
                                <h4 className="text-2xl font-semibold mb-3 text-yellow-500">Awal Kedatangan</h4>
                                <p className="text-gray-300 mb-4 text-lg">
                                    Berabad-abad sebelum orang-orang Eropa tiba, wilayah kepulauan Indonesia dihuni berbagai entitas, termasuk kerajaan-kerajaan perdagangan. Bangsa Eropa pertama yang tiba adalah Portugis pada tahun 1512. Setelah menemui gangguan terhadap akses rempah-rempah di Eropa, Belanda melakukan ekspedisi pelayaran pertama ke Hindia Timur pada tahun 1595 untuk mendapatkan rempah-rempah secara langsung dari Asia.
                                </p>
                            </div>
                            
                            {/* Kolom Kanan: Transisi ke Hindia Belanda */}
                            <div>
                                <h4 className="text-2xl font-semibold mb-3 text-yellow-500">Berdirinya VOC (1602)</h4>
                                <p className="text-gray-300 mb-4 text-lg">
                                    Ketika ekspedisi Belanda menghasilkan keuntungan hingga 400%, ekspedisi lainnya segera menyusul. Menyadari potensi perdagangan Hindia Timur, pemerintah Belanda menggabungkan para perusahaan pesaing ke Perusahaan Hindia Timur Belanda (Vereenigde Oost-Indische Compagnie atau VOC). VOC diberi hak Octrooi, termasuk hak untuk memonopoli, mencetak mata uang, bahkan membentuk tentara sendiri di Asia.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Panggilan ke Aksi (CTA) */}
                <div className="text-center pt-8 border-t border-gray-700">
                    <Link 
                        to="/timeline" 
                        className="px-8 py-3 text-lg font-semibold rounded-lg bg-yellow-600 hover:bg-yellow-700 transition duration-300 shadow-xl border-2 border-yellow-600 text-[#0f1724] 
                                   transform hover:scale-[1.05] hover:shadow-yellow-500/80" // Efek CTA yang lebih kuat
                    >
                        Lihat Kronologi Peristiwa &rarr;
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LatarBelakang;