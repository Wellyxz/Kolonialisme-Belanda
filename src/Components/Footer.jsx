import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    // Background Footer: Menggunakan warna gelap kartu (#1c1d21) agar sedikit berbeda dari body, 
    // dan border atas aksen emas yang tipis
    <footer className="bg-[#1c1d21] text-white border-t border-yellow-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-2">
        
        {/* === Hak Cipta & Informasi Bawah === */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} IndoHistory. Proyek Dokumentasi Sejarah Kolonial.
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer