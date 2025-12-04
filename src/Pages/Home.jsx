import React from 'react';
import { Link } from 'react-router-dom';

// Import gambar Peta VOC / Nusantara Klasik
import mapImage from '/public/assets/VOC_MAP.jfif'; // GANTI dengan path gambar Peta VOC Anda!

const Home = () => {
  return (
    // Background utama menggunakan warna gelap mode elegan
    <div className="min-h-screen bg-[#0f1724]">
      
      {/* === Hero Section === */}
      <section 
        className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden"
      >
        {/* 1. Background Gambar dengan Transisi Zoom Ringan */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] hover:scale-105" // Durasi 4 detik
          style={{
            backgroundImage: `url(${mapImage})`,
          }}
        ></div>
        
        {/* 2. Dark Overlay & Blur (Sederhana) */}
        <div 
          className="absolute inset-0 bg-[#0f1724] opacity-80 backdrop-blur-sm" // Hanya menggunakan class bawaan
        ></div>
        
        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          
          {/* Judul Utama (Menggunakan Efek Shadow Teks Emas) */}
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-serif text-yellow-500 transition duration-500 hover:scale-[1.02]"
            style={{ 
                // Shadow Teks tipis untuk kesan kuno/dokumen
                textShadow: '0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 193, 7, 0.5)' 
            }}
          >
            Jejak Nusantara
          </h1>

          {/* Sub Judul */}
          <h2 className="text-2xl md:text-4xl font-light mb-10 italic text-gray-300 transition duration-500 delay-100 hover:text-white">
             Era Kolonialisme Belanda
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            
            {/* Tombol Aksi Utama (Aksen Emas Glowing) */}
            <Link 
              to="/timeline" 
              className="px-8 py-3 text-lg font-semibold rounded-lg bg-yellow-600 hover:bg-yellow-700 transition duration-300 shadow-xl text-[#0f1724] 
                         hover:shadow-yellow-500/80 hover:shadow-2xl transform hover:-translate-y-1" // <-- Efek Hover
            >
              Jelajahi Garis Waktu &rarr;
            </Link>
            
            {/* Tombol Aksi Sekunder (Glow Outline) */}
            <Link 
              to="/tokoh" 
              className="px-8 py-3 text-lg font-semibold rounded-lg bg-transparent transition duration-300 border-2 border-white text-white 
                         hover:border-yellow-500 hover:bg-white/10 hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1" // <-- Efek Hover
            >
              Lihat Tokoh Kunci
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;