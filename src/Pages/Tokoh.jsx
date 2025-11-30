import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Fungsi bantuan untuk membuat URL Wikipedia
const createWikiUrl = (name) => {
    // Menghapus spasi dan menggantinya dengan underscore, lalu menambahkan URL dasar
    const encodedName = name.replace(/\s/g, '_');
    return `https://id.wikipedia.org/wiki/${encodedName}`;
};

// --- Data Tokoh (URL Wikipedia Ditambahkan) ---
const tokohData = [
  {
    category: "Tokoh Perlawanan (Anti-Kolonial)",
    icon: "🔥",
    color: "text-red-500", 
    figures: [
      { name: "Pangeran Diponegoro", description: "Pemimpin Perang Jawa (1825–1830), perlawanan terbesar terhadap Belanda.", image: "src/assets/Pangeran_Diponegoro.jfif", wikipediaUrl: createWikiUrl("Pangeran Diponegoro") },
      { name: "Tuanku Imam Bonjol", description: "Pemimpin Perang Padri, simbol perjuangan Sumatra Barat.", image: "src/assets/Tuanku_Imam_Bonjol.jpg", wikipediaUrl: createWikiUrl("Tuanku Imam Bonjol") },
      { name: "Cut Nyak Dien", description: "Pejuang Aceh yang gigih, ikon keberanian perempuan melawan kolonial.", image: "src/assets/Cut_Nyak_Dien.jpg", wikipediaUrl: createWikiUrl("Cut Nyak Dhien") }, // Catatan: Biasanya 'Dhien' di Wikipedia
      { name: "Sisingamangaraja XII", description: "Pemimpin perlawanan Batak selama puluhan tahun di Sumatra Utara.", image: "src/assets/Sisingamaraja_XII.jpg", wikipediaUrl: createWikiUrl("Sisingamangaraja XII") },
      { name: "Sultan Hasanuddin", description: "Raja Gowa yang menolak monopoli perdagangan VOC, dijuluki 'Ayam Jantan dari Timur'.", image: "src/assets/Sultan_Hasanuddin.jpg", wikipediaUrl: createWikiUrl("Sultan Hasanuddin") },
      { name: "Sultan Agung Mataram", description: "Menyerang VOC di Batavia (1628–1629).", image: "src/assets/Sultan_Agung_Mataram.jpg", wikipediaUrl: createWikiUrl("Sultan Agung dari Mataram") }, // Catatan: Judul artikel lengkap
      { name: "Pattimura", description: "Pemimpin perlawanan Maluku (1817).", image: "src/assets/Pattimura.jpg", wikipediaUrl: createWikiUrl("Pattimura") },
      { name: "Teuku Umar", description: "Strategi pura-pura bekerja sama dengan Belanda untuk memperoleh senjata.", image: "src/assets/Teuku_Umar.jpg", wikipediaUrl: createWikiUrl("Teuku Umar") },
    ],
  },
  {
    category: "Tokoh Kebangkitan Nasional & Pergerakan Modern",
    icon: "💡",
    color: "text-yellow-500", 
    figures: [
      { name: "R.A. Kartini", description: "Pelopor emansipasi perempuan & pembaruan pemikiran sosial melalui pendidikan.", image: "src/assets/R.A_Kartini.jpg", wikipediaUrl: createWikiUrl("Kartini") },
      { name: "Ki Hajar Dewantara", description: "Pendiri Taman Siswa, pendorong pendidikan nasional dan filosofi 'ing ngarso sung tulodo'.", image: "src/assets/Ki_Hajar_Dewantara.jpg", wikipediaUrl: createWikiUrl("Ki Hajar Dewantara") },
      { name: "Soekarno", description: "Pemimpin pergerakan anti-kolonial, proklamator & presiden pertama Republik Indonesia.", image: "src/assets/Soekarno.jfif", wikipediaUrl: createWikiUrl("Soekarno") },
      { name: "Mohammad Hatta", description: "Pemikir nasionalisme, Bapak Koperasi, dan strategis diplomasi menuju kemerdekaan.", image: "src/assets/Muhammad_Hatta.jpeg", wikipediaUrl: createWikiUrl("Mohammad Hatta") },
    ],
  },
  {
    category: "Tokoh dari Pihak Kolonial (Berpengaruh dalam Kebijakan)",
    icon: "⚓",
    color: "text-gray-400", 
    figures: [
      { name: "Jan Pieterszoon Coen", description: "Gubernur VOC, pendiri Batavia dan penguat awal kekuasaan kolonial Belanda di Nusantara.", image: "src/assets/Jan_Pieterszoon_Coen.webp", wikipediaUrl: createWikiUrl("Jan Pieterszoon Coen") },
      { name: "Daendels", description: "Gubernur Jenderal; membangun Jalan Raya Pos (1808–1811).", image: "src/assets/Daendels.webp", wikipediaUrl: createWikiUrl("Herman Willem Daendels") }, // Catatan: Nama lengkap
      { name: "Van den Bosch", description: "Penggagas Cultuurstelsel/tanam paksa (1830).", image: "src/assets/Van_den_Bosch.jpg", wikipediaUrl: createWikiUrl("Johannes van den Bosch") }, // Catatan: Nama lengkap
    ],
  },
];


// --- Komponen Kartu Tokoh (Memperbaiki Tombol Link) ---
const TokohCard = ({ name, description, image, colorClass, delay, wikipediaUrl }) => { // wikipediaUrl ditambahkan
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 

    const animationClasses = isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'; 
        
    const getColorHex = (className) => {
        if (className.includes('red-500')) return '#ef4444'; 
        if (className.includes('yellow-500')) return '#f59e0b'; 
        if (className.includes('gray-400')) return '#9ca3af'; 
        return '#f59e0b'; 
    };

    return (
        <div 
            ref={ref}
            className={`bg-[#1c1d21] rounded-xl shadow-2xl hover:shadow-yellow-700/50 
                        transition-all duration-700 ease-out overflow-hidden border border-gray-800 
                        transform hover:scale-[1.02] ${animationClasses}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            
            <div className="h-64 bg-gray-900 overflow-hidden">
                <img 
                    src={image} 
                    alt={`Foto ${name}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                />
            </div>
            
            <div className="p-6 border-t-4" style={{ borderColor: getColorHex(colorClass) }}> 
                <h4 className={`text-2xl font-bold mb-1 ${colorClass} font-serif`}>{name}</h4> 
                <p className="text-gray-300 line-clamp-3 text-sm">{description}</p>
                
                {/* Tombol Link ke Wikipedia */}
                <a 
                    href={wikipediaUrl} 
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Praktik keamanan
                    className={`inline-flex items-center mt-4 text-sm font-medium border-b hover:border-b-2 transition duration-300 ${colorClass}`}
                >
                    Lihat Profil &rarr;
                </a>
            </div>
        </div>
    );
};


// --- Komponen Utama Halaman Tokoh (Mengoper URL Wikipedia) ---
const Tokoh = () => {
    
    // Pattern CSS yang konsisten (Noise + Vignette) dari halaman lain
    const vintagePattern = {
        backgroundColor: '#0c131d', 
        backgroundImage: `
          radial-gradient(circle at center, rgba(12, 19, 29, 0.7) 0%, rgba(12, 19, 29, 1) 70%),
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px),
          repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px)
        `,
    };
    
    return (
        <div className="py-20 min-h-screen" style={vintagePattern}> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <header 
                    className="text-center mb-16 " 
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-500 font-serif leading-tight">
                        Tokoh Kunci Era Kolonialisme Belanda
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full shadow-lg shadow-yellow-500/50"></div>
                </header>

                {tokohData.map((section, sectionIndex) => (
                    <section key={sectionIndex} className="mb-16">
                        <h3 className={`text-4xl font-bold mb-8 ${section.color} border-b border-gray-700 pb-2 flex items-center`}>
                            <span className="text-3xl mr-3">{section.icon}</span>
                            {section.category}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {section.figures.map((figure, figureIndex) => (
                                <TokohCard
                                    key={`figure-${figureIndex}`}
                                    name={figure.name}
                                    description={figure.description}
                                    image={figure.image}
                                    colorClass={section.color} 
                                    delay={figureIndex * 150} 
                                    wikipediaUrl={figure.wikipediaUrl} // <-- Oper data URL di sini
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Tokoh;