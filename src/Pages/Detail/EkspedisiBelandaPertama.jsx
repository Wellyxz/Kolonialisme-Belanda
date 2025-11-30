import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- Data Detail Lengkap (Semua Peristiwa) ---
const detailData = {
  'ekspedisi-belanda-pertama': {
    title: 'Ekspedisi Belanda Pertama ke Nusantara',
    subtitle: 'Mencari Rempah, Menemukan Jalan',
    year: '1595 – 1597',
    image: '/Ekspedisi_Pertama_Belanda.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang dan Tujuan'
      },
      {
        type: 'paragraph',
        text: 'Ekspedisi pada tahun 1595 yang dipimpin oleh Cornelis de Houtman ini merupakan upaya Belanda untuk memecahkan monopoli perdagangan rempah-rempah yang saat itu dikuasai oleh Portugis dan Spanyol. Setelah jalur perdagangan melalui Mediterania terputus akibat penutupan pelabuhan oleh Spanyol, Belanda dipaksa mencari rute laut baru ke Timur.'
      },
      {
        type: 'list',
        items: [
          'Motivasi utama adalah rempah-rempah, terutama lada, cengkeh, dan pala.',
          'Belanda memanfaatkan informasi peta rahasia dari penjelajah Portugis.',
          'Misi ini didanai oleh sekelompok pedagang Amsterdam yang dikenal sebagai Compagnie van Verre.'
        ]
      },
      {
        type: 'heading',
        text: 'Perjalanan dan Kedatangan di Banten'
      },
      {
        type: 'paragraph',
        text: 'Belanda pertama kali datang ke Indonesia pada tahun 1596 dipimpin Cornelis de Houtman. Mereka tiba di Banten untuk mencari rempah-rempah. Pada awalnya hanya berdagang, tetapi lama-kelamaan mereka ikut campur dalam urusan politik kerajaan dan berusaha menguasai wilayah. Kontak awal ini menjadi titik masuk Belanda dalam proses penjajahan di Nusantara.'
      },
      {
        type: 'quote',
        text: 'Kedatangan di Banten tidak berjalan mulus karena sifat Cornelis de Houtman yang kasar dan kurang diplomatis, memicu konflik dengan penguasa lokal dan pedagang Portugis. Meskipun demikian, mereka berhasil membawa pulang muatan rempah yang, meskipun tidak terlalu banyak, membuktikan bahwa rute langsung ke Nusantara dapat ditempuh.',
      },
      {
        type: 'heading',
        text: 'Dampak dan Warisan'
      },
      {
        type: 'paragraph',
        text: 'Ekspedisi ini, meskipun merugi secara finansial dan merenggut banyak nyawa, memiliki dampak historis yang sangat besar, membuka jalan bagi puluhan ekspedisi lainnya yang pada akhirnya mengarah pada pendirian VOC pada tahun 1602 dan dimulainya masa penjajahan Belanda selama 350 tahun.'
      }
    ],
  },
  
  'pembentukan-voc': {
    title: 'Vereenigde Oostindische Compagnie (VOC)',
    subtitle: 'Kelahiran Raksasa Dagang dan Politik Kolonial',
    year: '20 Maret 1602',
    image: '/VOC_flag.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Kebutuhan akan Konsolidasi'
      },
      {
        type: 'paragraph',
        text: 'Setelah suksesnya Ekspedisi Pertama Belanda, banyak perusahaan kecil (Voorcompagnieën) berlomba-lomba mengirim kapal ke Timur, menyebabkan persaingan internal yang tidak sehat dan menaikkan harga rempah di Asia. Pemerintah Belanda menyadari bahwa persaingan ini melemahkan posisi mereka melawan Portugis dan Spanyol. Sehingga didirikanlah VOC, VOC adalah perusahaan dagang Belanda yang diberi kekuasaan sangat luas. Selain berdagang, VOC boleh membuat tentara, memungut pajak, membuat perjanjian politik, dan mendirikan benteng. Mereka melakukan monopoli rempah-rempah dan banyak kebijakan yang menindas rakyat Nusantara.'
      },
      {
        type: 'heading',
        text: 'Pendirian dan Hak Otoritas (Octrooi)'
      },
      {
        type: 'paragraph',
        text: 'Pada 20 Maret 1602, VOC resmi didirikan melalui penggabungan semua Voorcompagnieën. Parlemen Belanda (Staten-Generaal) memberikan Hak Otoritas (Octrooi) yang sangat luas, membuat VOC bukan hanya perusahaan dagang, tetapi entitas quasi-negara.'
      },
      {
        type: 'list',
        items: [
          'VOC memiliki hak monopoli perdagangan rempah di wilayah Timur (Asia).',
          'Hak untuk membentuk angkatan perang sendiri.',
          'Hak untuk mencetak mata uang dan membuat perjanjian dengan raja-raja lokal.',
          'Hak untuk membangun benteng dan menduduki wilayah.'
        ]
      },
      {
        type: 'quote',
        text: 'VOC adalah perusahaan multinasional pertama di dunia dan sering dianggap sebagai korporasi paling berharga dalam sejarah. Kekuatan ganda, ekonomi dan militer, inilah yang menjadikannya pondasi kuat kolonialisme Belanda di Indonesia.',
      },
      {
        type: 'heading',
        text: 'Organisasi'
      },
      {
        type: 'paragraph',
        text: 'Di Belanda, VOC diatur oleh tujuh belas direktur (Heeren XVII). Di Asia, kekuasaan dipegang oleh seorang Gubernur Jenderal, dengan Jan Pieterszoon Coen yang diangkat pada tahun 1619 sebagai tokoh yang paling agresif dalam memperluas kekuasaan teritorial VOC di Nusantara.'
      }
    ],
  },
    
  'pendirian-batavia': {
    title: 'Pendirian Batavia',
    subtitle: 'Penggantian Jayakarta menjadi Pusat Kekuatan VOC',
    year: '30 Mei 1619',
    image: '/Kota_Batavia.jfif', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang'
      },
      {
        type: 'paragraph',
        text: 'VOC memerlukan markas permanen yang strategis di Asia untuk menandingi kekuatan Portugis di Malaka dan mengelola monopoli rempah-rempah. Sebelumnya, kantor pusat VOC di Asia adalah Ambon, namun lokasinya dianggap kurang strategis untuk jalur perdagangan utama.'
      },
      {
        type: 'heading',
        text: 'Penaklukan Jayakarta'
      },
      {
        type: 'paragraph',
        text: 'Pada tahun 1618, Jan Pieterszoon Coen diangkat sebagai Gubernur Jenderal VOC yang keempat. Coen memilih kota pelabuhan Jayakarta (Jakarta) yang dikuasai oleh Banten sebagai lokasi yang ideal. Setelah konflik singkat dengan Banten dan Inggris, Coen berhasil merebut dan meluluhlantakkan Jayakarta pada tahun 1619.'
      },
      {
        type: 'quote',
        text: 'Coen dikenal dengan prinsipnya, "Jangan putus asa, jangan percaya pada siapa pun. Bertindak sendiri, berkuasa sendiri." Kekerasan dan ketegasan adalah ciri khasnya dalam membangun kekuasaan VOC.',
      },
      {
        type: 'heading',
        text: 'Pembentukan Batavia'
      },
      {
        type: 'paragraph',
        text: 'Di atas puing-puing Jayakarta, Coen membangun sebuah benteng yang dinamakan Batavia, diambil dari nama suku Batavieren, leluhur bangsa Belanda. Kota ini didirikan menyerupai kota-kota di Belanda dengan kanal dan arsitektur Eropa. Sejak saat itu, Batavia menjadi pusat pemerintahan, administrasi, dan perdagangan VOC selama lebih dari 300 tahun.'
      },
      {
        type: 'list',
        items: [
          'Tanggal resmi pendirian adalah 30 Mei 1619.',
          'Benteng utama yang dibangun dinamakan Kasteel Batavia.',
          'Batavia merupakan titik sentral dari jalur perdagangan rempah-rempah yang melintasi Asia Tenggara.'
        ]
      },
    ],
  },

  'perjanjian-giyanti': {
    title: 'Perjanjian Giyanti',
    subtitle: 'Pembagian Wilayah Kesultanan Mataram',
    year: '13 Februari 1755',
    image: '/Perjanjian_Giyanti.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang Konflik'
      },
      {
        type: 'paragraph',
        text: 'Perjanjian Giyanti lahir sebagai solusi atas konflik berkepanjangan yang dikenal sebagai Perang Suksesi Jawa III (1746–1757). Konflik ini melibatkan VOC yang mendukung Susuhunan Pakubuwana III di Surakarta, melawan pemberontakan yang dipimpin oleh Pangeran Mangkubumi dan Raden Mas Said (Pangeran Sambernyawa).'
      },
      {
        type: 'list',
        items: [
          'VOC memanfaatkan perpecahan internal Mataram untuk memperkuat kontrol politik mereka.',
          'Pangeran Mangkubumi menolak legitimasi Pakubuwana III yang diangkat VOC.',
          'Tujuan VOC adalah menciptakan kedamaian yang menguntungkan dan memecah kekuatan Mataram.'
        ]
      },
      {
        type: 'heading',
        text: 'Isi dan Dampak Perjanjian'
      },
      {
        type: 'paragraph',
        text: 'Perjanjian ini ditandatangani di Desa Giyanti (Karanganyar, Jawa Tengah). Poin terpenting dari perjanjian ini adalah pembagian resmi Kesultanan Mataram menjadi dua entitas utama:'
      },
      {
        type: 'list',
        items: [
          'Bagian Timur tetap diperintah oleh Susuhunan Pakubuwana III di Surakarta (Kasunanan Surakarta).',
          'Bagian Barat diserahkan kepada Pangeran Mangkubumi, yang kemudian bergelar Sultan Hamengkubuwana I di Yogyakarta (Kasultanan Yogyakarta).'
        ]
      },
      {
        type: 'quote',
        text: 'Perjanjian Giyanti, meskipun mengakhiri konflik bersenjata, secara efektif memecah kedaulatan Mataram dan menjadikannya di bawah pengawasan politik VOC, menerapkan strategi klasik kolonial Devide et Impera (Pecah Belah dan Kuasai).',
      },
      {
        type: 'heading',
        text: 'Warisan Historis'
      },
      {
        type: 'paragraph',
        text: 'Pembagian wilayah ini kemudian diperkecil lagi dengan adanya Perjanjian Salatiga (1757) yang memisahkan wilayah Raden Mas Said menjadi Mangkunegaran. Struktur empat pecahan Mataram (Yogyakarta, Surakarta, Pakualaman, dan Mangkunegaran) ini menjadi warisan politik kolonial yang bertahan hingga Indonesia merdeka.'
      }
    ],
  },

  'pembubaran-voc': {
    title: 'Pembubaran VOC',
    subtitle: 'Berakhirnya Perusahaan Dagang, Dimulainya Pemerintahan Kolonial Langsung',
    year: '31 Desember 1799',
    image: '/Pembubaran_VOC.jfif', 
    content: [
      {
        type: 'heading',
        text: 'Penyebab Internal dan Eksternal Kehancuran'
      },
      {
        type: 'paragraph',
        text: 'Meskipun VOC adalah perusahaan yang sangat kuat, pada akhir abad ke-18, perusahaan ini menghadapi berbagai masalah serius yang menyebabkan keruntuhan finansial dan administrasi. Penyebab utamanya bersifat internal dan eksternal:'
      },
      {
        type: 'list',
        items: [
          'Korupsi (Internal): Banyak pejabat tinggi VOC melakukan praktik korupsi dan penyelundupan pribadi (smokkelen), yang menggerogoti keuangan perusahaan secara besar-besaran.',
          'Beban Biaya Tinggi (Internal): Biaya militer untuk menghadapi perlawanan lokal dan menjaga wilayah kekuasaan menjadi sangat besar.',
          'Perubahan Politik di Belanda (Eksternal): Belanda jatuh ke tangan Prancis (menjadi Republik Batavia), dan pemerintah baru tidak tertarik untuk mempertahankan perusahaan dagang yang bangkrut.'
        ]
      },
      {
        type: 'heading',
        text: 'Utang dan Pembubaran Resmi'
      },
      {
        type: 'paragraph',
        text: 'VOC dinyatakan bangkrut karena terlilit utang yang sangat besar, diperkirakan mencapai 136 Juta Gulden. Setelah serangkaian upaya penyelamatan yang gagal, Parlemen Republik Batavia akhirnya memutuskan untuk mengambil alih aset dan hutang VOC.'
      },
      {
        type: 'quote',
        text: 'Kegagalan VOC adalah contoh klasik bagaimana monopoli, ketika dikombinasikan dengan administrasi yang buruk dan korupsi yang merajalela, dapat menghancurkan bahkan organisasi yang paling kaya dan berkuasa sekalipun.',
      },
      {
        type: 'heading',
        text: 'Dampak Historis'
      },
      {
        type: 'paragraph',
        text: 'Pada tanggal 31 Desember 1799, VOC resmi dibubarkan. Seluruh aset, utang, dan wilayah kekuasaan VOC di Nusantara diambil alih oleh Pemerintah Belanda (sebagai Republik Batavia, kemudian Kerajaan Belanda). Peristiwa ini menandai berakhirnya masa penjajahan oleh perusahaan dan dimulainya era Hindia Belanda (Nederlandsch-Indië) di bawah kontrol pemerintah pusat yang jauh lebih terorganisir.'
      }
    ],
  },

  'perang-jawa': {
    title: 'Perang Diponegoro (Perang Jawa)',
    subtitle: 'Perlawanan Besar Terhadap Kolonialisme Belanda di Tanah Jawa',
    year: '1825 – 1830',
    image: '/Perang_Diponegoro.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang dan Pemicu'
      },
      {
        type: 'paragraph',
        text: 'Perang ini dipicu oleh akumulasi kekecewaan terhadap campur tangan pemerintah kolonial Belanda (Hindia Belanda) dalam urusan Keraton Yogyakarta, terutama di bawah Pangeran Diponegoro. Beliau menentang kebijakan yang merugikan rakyat, seperti penarikan pajak yang tinggi dan eksploitasi tanah.'
      },
      {
        type: 'paragraph',
        text: 'Pemicu langsung perang adalah tindakan Belanda membangun jalan di atas tanah makam leluhur Diponegoro di Tegalrejo tanpa izin. Hal ini dipandang sebagai penghinaan besar terhadap kehormatan Jawa dan Islam.'
      },
      {
        type: 'heading',
        text: 'Jalannya Perang (Gerilya)'
      },
      {
        type: 'paragraph',
        text: 'Perang ini berlangsung selama lima tahun dan dikenal sebagai perang yang paling merugikan Belanda (baik secara finansial maupun korban jiwa). Pangeran Diponegoro menggunakan taktik perang gerilya yang efektif, memanfaatkan kondisi alam Jawa dan dukungan kuat dari para ulama serta rakyat, menjadikan perang ini sebagai perang suci (jihad).'
      },
      {
        type: 'quote',
        text: 'Untuk mengalahkan perlawanan yang berbasis luas ini, Jenderal De Kock menerapkan strategi Benteng Stelsel, yaitu mendirikan benteng-benteng kecil di setiap daerah yang berhasil dikuasai untuk memutus jalur logistik dan komunikasi pasukan Diponegoro.',
      },
      {
        type: 'heading',
        text: 'Penangkapan dan Dampak'
      },
      {
        type: 'paragraph',
        text: 'Pada tahun 1830, Belanda, yang semakin terdesak, menjebak Pangeran Diponegoro dalam perundingan di Magelang. Beliau ditangkap pada 28 Maret 1830 dan diasingkan, pertama ke Manado, kemudian ke Makassar hingga wafat. Penangkapan ini mengakhiri Perang Jawa.'
      },
      {
        type: 'list',
        items: [
          'Perang ini menewaskan sekitar 200.000 penduduk Jawa dan 8.000 tentara Belanda.',
          'Kerugian finansial Belanda sangat besar, yang mendorong mereka menerapkan sistem tanam paksa (Cultuurstelsel) untuk menutup defisit kas negara.',
          'Hampir seluruh wilayah Mataram, kecuali Yogyakarta dan Surakarta, jatuh ke tangan Belanda.'
        ]
      }
    ],
  },

  'sistem-tanam-paksa': {
    title: 'Sistem Tanam Paksa (Cultuurstelsel)',
    subtitle: 'Penerapan Monopoli Komoditas untuk Mengisi Kas Belanda',
    year: '1830 – 1870',
    image: '/Tanam_Paksa.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang dan Tujuan'
      },
      {
        type: 'paragraph',
        text: 'Sistem Tanam Paksa diinisiasi oleh Gubernur Jenderal Johannes van den Bosch pada tahun 1830. Tujuan utamanya adalah menyelamatkan Kerajaan Belanda dari kebangkrutan yang disebabkan oleh tingginya biaya perang, terutama Perang Diponegoro, dan kerugian dari Perang Belgia.'
      },
      {
        type: 'paragraph',
        text: 'Sistem ini memaksa petani di Jawa untuk menanam komoditas ekspor tertentu yang laku di pasar Eropa, seperti tebu, kopi, teh, tembakau, dan nila (indigo), sebagai pengganti pajak tanah.'
      },
      {
        type: 'heading',
        text: 'Aturan Resmi vs. Praktik Lapangan'
      },
      {
        type: 'paragraph',
        text: 'Secara resmi, aturan Cultuurstelsel menyebutkan bahwa petani hanya wajib menyediakan seperlima (1/5) dari lahan mereka untuk tanaman ekspor, dan kelebihan hasil panen akan dikembalikan. Namun, dalam praktiknya, aturan ini dilanggar secara masif:'
      },
      {
        type: 'list',
        items: [
          'Penyimpangan Tanah: Lahan yang digunakan seringkali lebih dari 1/5, kadang mencapai 1/3 atau bahkan lebih.',
          'Target Berlebihan: Kegagalan panen sepenuhnya ditanggung petani, dan waktu kerja melebihi 66 hari per tahun.',
          'Korupsi Lokal: Para bupati dan kepala desa dipaksa menekan rakyat karena adanya Cultuurprocenten (persentase keuntungan) yang diberikan Belanda, yang mendorong mereka melanggar aturan demi keuntungan pribadi.'
        ]
      },
      {
        type: 'quote',
        text: 'Sistem Tanam Paksa merupakan pilar utama kemakmuran Belanda pada abad ke-19, menghasilkan surplus kas yang luar biasa, dikenal sebagai Batig Slot. Namun, bagi rakyat Jawa, sistem ini menyebabkan kelaparan (seperti di Cirebon dan Grobogan) dan kemiskinan massal.',
      },
      {
        type: 'heading',
        text: 'Akhir Sistem'
      },
      {
        type: 'paragraph',
        text: 'Kritik keras, terutama dari kalangan liberal di Parlemen Belanda dan melalui publikasi novel Max Havelaar oleh Multatuli (Eduard Douwes Dekker), memaksa pemerintah Belanda untuk menghapusnya secara bertahap. Sistem Tanam Paksa secara resmi diakhiri pada tahun 1870 dengan disahkannya Undang-Undang Agraria, memulai era Liberalisasi Ekonomi.'
      }
    ],
  },

  'politik-etis': {
    title: 'Politik Etis (Ethische Politiek)',
    subtitle: 'Utang Kehormatan dan Lahirnya Kaum Intelektual Indonesia',
    year: '1901',
    image: '/Politik_Etis.png', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang Filosofi'
      },
      {
        type: 'paragraph',
        text: 'Politik Etis muncul sebagai respons terhadap kritik keras di Belanda mengenai praktik eksploitatif Sistem Tanam Paksa yang telah menguras kekayaan dan menyebabkan penderitaan di Jawa. Filosofi utamanya, yang dipopulerkan oleh C. Th. van Deventer melalui artikelnya Een Eereschuld (Utang Kehormatan) pada tahun 1899, adalah bahwa Belanda berutang kepada rakyat Hindia atas kekayaan yang telah mereka ambil.'
      },
      {
        type: 'paragraph',
        text: 'Politik ini secara resmi diterapkan pada tahun 1901, di masa Ratu Wilhelmina, dan bertujuan untuk meningkatkan kesejahteraan rakyat Hindia Belanda.'
      },
      {
        type: 'heading',
        text: 'Tiga Program Utama (Trias Van Deventer)'
      },
      {
        type: 'paragraph',
        text: 'Van Deventer mengusulkan tiga fokus kebijakan sebagai wujud pengembalian "utang" tersebut:'
      },
      {
        type: 'list',
        items: [
          'Edukasi (Pendidikan): Peningkatan akses pendidikan bagi masyarakat pribumi, yang kemudian melahirkan kaum intelektual terdidik yang menjadi pelopor pergerakan nasional.',
          'Irigasi (Pengairan): Pembangunan dan perbaikan jaringan irigasi untuk meningkatkan hasil pertanian, khususnya di Jawa.',
          'Emigrasi/Transmigrasi (Pemindahan Penduduk): Mengatasi kepadatan penduduk di Jawa dengan memindahkan penduduk ke pulau-pulau lain untuk bekerja di perkebunan (seperti Sumatera).'
        ]
      },
      {
        type: 'quote',
        text: 'Meskipun niat awalnya baik, pelaksanaan Politik Etis seringkali tetap berorientasi pada kepentingan kolonial. Irigasi lebih banyak untuk perkebunan Belanda, dan edukasi terbatas pada kalangan elit pribumi. Namun, program pendidikan inilah yang tanpa disengaja menciptakan musuh terbesarnya sendiri, yaitu kaum nasionalis terpelajar.',
      },
      {
        type: 'heading',
        text: 'Dampak Historis (Kelahiran Pergerakan Nasional)'
      },
      {
        type: 'paragraph',
        text: 'Dampak terpenting dari Politik Etis adalah munculnya generasi baru masyarakat pribumi yang terdidik. Mereka mulai menyadari kondisi kolonial dan mengorganisir diri untuk memperjuangkan hak-hak politik. Ini secara langsung memicu dimulainya Masa Pergerakan Nasional (berdirinya Budi Utomo pada tahun 1908).'
      }
    ],
  },

  'sumpah-pemuda': {
    title: 'Sumpah Pemuda',
    subtitle: 'Ikrar Persatuan Nasional dan Bahasa Indonesia',
    year: '28 Oktober 1928',
    image: '/Sumpah_Pemuda.jpg',
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang: Kongres Pemuda'
      },
      {
        type: 'paragraph',
        text: 'Politik Etis memunculkan organisasi-organisasi pemuda berbasis daerah, seperti Jong Java, Jong Sumatranen Bond, Jong Batak Bond, dan lain-lain. Kongres Pemuda I (1926) gagal mencapai kesepakatan kuat. Kongres Pemuda II diadakan pada tanggal 27-28 Oktober 1928 di Batavia (Jakarta) dengan tujuan untuk menyatukan organisasi-organisasi ini dan merumuskan cita-cita kemerdekaan.'
      },
      {
        type: 'heading',
        text: 'Ikrar Tiga Poin'
      },
      {
        type: 'paragraph',
        text: 'Pada penutupan Kongres Pemuda II, rumusan keputusan yang disusun oleh Mohammad Yamin dibacakan dan dikenal sebagai Sumpah Pemuda. Ikrar ini secara tegas mendobrak identitas kedaerahan dan menciptakan fondasi kebangsaan Indonesia. Sumpah Pemuda berisi tiga poin utama:'
      },
      {
        type: 'list',
        items: [
          'Satu tanah air: Tanah Air Indonesia',
          'Satu bangsa: Bangsa Indonesia',
          'Satu bahasa persatuan: Bahasa Indonesia'
        ]
      },
      {
        type: 'quote',
        text: 'Peristiwa ini bukan hanya tentang bersumpah, tetapi tentang memilih Bahasa Melayu sebagai Bahasa Indonesia sebagai alat pemersatu, menggantikan bahasa Belanda, Jawa, atau Sunda, yang secara politik dan kultural merupakan keputusan yang revolusioner dan strategis.',
      },
      {
        type: 'heading',
        text: 'Dampak dan Peran W.R. Supratman'
      },
      {
        type: 'paragraph',
        text: 'Sumpah Pemuda mengakhiri masa kedaerahan dan memulai masa pergerakan yang terpusat pada cita-cita kemerdekaan Indonesia Raya. Pada peristiwa bersejarah ini pula, untuk pertama kalinya lagu "Indonesia Raya" ciptaan Wage Rudolf Supratman diperdengarkan secara instrumental, menyuntikkan semangat nasionalisme yang mendalam bagi para pemuda yang hadir.'
      }
    ],
  },

  'proklamasi-kemerdekaan': {
    title: 'Proklamasi Kemerdekaan RI',
    subtitle: 'Puncak Perjuangan Bangsa dan Lahirnya Negara Indonesia',
    year: '17 Agustus 1945',
    image: '/Proklamasi_Kemerdekaan.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang: Vakum Kekuasaan'
      },
      {
        type: 'paragraph',
        text: 'Peristiwa ini terjadi setelah Jepang menyerah tanpa syarat kepada Sekutu pada 14 Agustus 1945, menyusul dijatuhkannya bom atom di Hiroshima dan Nagasaki. Situasi ini menciptakan vakum kekuasaan (Belanda belum kembali, Jepang sudah tak berdaya) yang dilihat oleh golongan pemuda Indonesia sebagai kesempatan emas untuk menyatakan kemerdekaan.'
      },
      {
        type: 'heading',
        text: 'Peristiwa Rengasdengklok'
      },
      {
        type: 'paragraph',
        text: 'Terjadi perbedaan pendapat tajam antara Golongan Tua (Soekarno-Hatta) yang ingin proklamasi melalui jalur PPKI yang dibentuk Jepang, dengan Golongan Muda (Chaerul Saleh, Sukarni, Wikana) yang ingin proklamasi segera dilakukan tanpa campur tangan Jepang. Pada 16 Agustus 1945, Golongan Muda menculik Soekarno dan Hatta ke Rengasdengklok (Karawang) untuk menjauhkan mereka dari pengaruh Jepang dan mendesak proklamasi secepatnya.'
      },
      {
        type: 'heading',
        text: 'Penyusunan Teks dan Pembacaan'
      },
      {
        type: 'paragraph',
        text: 'Setelah dicapai kesepakatan, Soekarno dan Hatta kembali ke Jakarta dan, pada malam 16 Agustus 1945, teks Proklamasi disusun di rumah Laksamana Tadashi Maeda (seorang perwira Jepang yang bersimpati). Tokoh perumus teks adalah Soekarno, Moh. Hatta, dan Ahmad Soebardjo.'
      },
      {
        type: 'quote',
        text: 'Teks Proklamasi yang singkat adalah hasil kompromi, ditulis tangan oleh Soekarno, lalu diketik oleh Sayuti Melik agar lebih rapi. Kata-kata "segera" dan "pemindahan kekuasaan" adalah poin kunci yang menunjukkan ketegasan bangsa Indonesia.',
      },
      {
        type: 'paragraph',
        text: 'Pada hari Jumat, 17 Agustus 1945, pukul 10.00 WIB, Proklamasi dibacakan oleh Soekarno didampingi Mohammad Hatta di halaman rumah Soekarno di Jalan Pegangsaan Timur 56, Jakarta. Bendera Merah Putih dijahit oleh Fatmawati dan dikibarkan oleh Latief Hendraningrat, dan berita disebarkan melalui radio dan telegraf ke seluruh dunia.'
      }
    ],
  },

  'pertempuran-surabaya': {
    title: 'Pertempuran Surabaya',
    subtitle: 'Hari Pahlawan: Perlawanan Rakyat terhadap Sekutu dan Belanda',
    year: '10 November 1945',
    image: '/Pertempuran_Surabaya.webp', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang: Kedatangan Sekutu dan NICA'
      },
      {
        type: 'paragraph',
        text: 'Setelah Proklamasi, tentara Sekutu (dibawah komando Inggris, AFNEI) tiba di Surabaya pada akhir Oktober 1945 dengan tugas melucuti tentara Jepang dan membebaskan tawanan perang. Namun, mereka diboncengi oleh NICA (Netherlands Indies Civil Administration), pemerintahan sipil Belanda, yang berniat mengambil alih kekuasaan kembali.'
      },
      {
        type: 'heading',
        text: 'Puncak Konflik: Tewasnya Jenderal Mallaby'
      },
      {
        type: 'paragraph',
        text: 'Ketegangan memuncak ketika Sekutu dan NICA memicu konflik bersenjata, termasuk insiden perobekan bendera Belanda di Hotel Yamato (Hotel Oranje). Pada tanggal 30 Oktober 1945, Jenderal A.W.S. Mallaby, komandan pasukan Sekutu untuk Jawa Timur, tewas dalam baku tembak. Kematian Mallaby menyebabkan Sekutu marah besar.'
      },
      {
        type: 'heading',
        text: 'Ultimatum dan Perlawanan 10 November'
      },
      {
        type: 'paragraph',
        text: 'Panglima Sekutu yang baru, Jenderal E.C. Mansergh, mengeluarkan ultimatum keras pada 9 November 1945, menuntut agar rakyat Surabaya menyerahkan semua senjata mereka paling lambat tanggal 10 November 1945 pukul 06.00, atau kota akan digempur habis-habisan. Ultimatum ini ditolak mentah-mentah oleh pemimpin Indonesia di Surabaya.'
      },
      {
        type: 'quote',
        text: 'Penolakan ini dipengaruhi oleh orasi berapi-api Sutomo (Bung Tomo) melalui radio. Slogannya yang membakar semangat, "Selama banteng-banteng Indonesia masih mempunyai darah merah, yang dapat membikin secarik kain putih menjadi merah, maka selama itu tidak akan kita mau menyerah kepada siapapun juga!" menggerakkan rakyat sipil, pelajar, dan pejuang laskar untuk melawan Sekutu.',
      },
      {
        type: 'paragraph',
        text: 'Pada hari 10 November 1945, Sekutu melancarkan serangan besar-besaran dari darat, laut, dan udara. Meskipun Surabaya jatuh ke tangan Sekutu setelah tiga minggu perlawanan, Pertempuran Surabaya menjadi simbol nasionalisme dan tekad bangsa Indonesia untuk mempertahankan kemerdekaan. Tanggal 10 November kemudian ditetapkan sebagai Hari Pahlawan.'
      }
    ],
  },

  // --- DATA BARU: Agresi Militer Belanda I & II (1947-1949) ---
  'agresi-militer-belanda': {
    title: 'Agresi Militer Belanda I & II',
    subtitle: 'Upaya Belanda untuk Menghancurkan Republik Indonesia Secara Militer',
    year: '1947 – 1949',
    image: '/Agresi_Militer_Belanda.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang'
      },
      {
        type: 'paragraph',
        text: 'Agresi Militer Belanda terjadi setelah Belanda menolak hasil perundingan, seperti Perjanjian Linggarjati. Belanda tetap berpegang teguh pada niatnya untuk mendirikan negara-negara federal boneka di Nusantara, sementara Republik Indonesia bersikeras mempertahankan kemerdekaan penuh.'
      },
      {
        type: 'heading',
        text: 'Agresi Militer I (Operasi Produk) — 21 Juli 1947'
      },
      {
        type: 'paragraph',
        text: 'Belanda melancarkan serangan serentak untuk merebut wilayah-wilayah yang kaya sumber daya alam, seperti perkebunan dan tambang, di Jawa dan Sumatera. Tujuannya adalah menguasai pusat ekonomi Republik. Serangan ini berhasil menguasai sebagian besar Jawa Barat, Jawa Timur, dan Sumatera Timur.'
      },
      {
        type: 'quote',
        text: 'Agresi Militer I mengundang kecaman keras dari dunia internasional, terutama India dan Australia. PBB kemudian mendesak gencatan senjata dan pembentukan Komisi Tiga Negara (KTN) untuk mediasi, yang berujung pada Perjanjian Renville (Januari 1948).',
      },
      {
        type: 'heading',
        text: 'Agresi Militer II (Operasi Kraai) — 19 Desember 1948'
      },
      {
        type: 'paragraph',
        text: 'Belanda kembali melanggar perjanjian dengan melancarkan serangan mendadak yang menargetkan Yogyakarta, yang saat itu menjadi Ibu Kota Republik. Belanda berhasil menangkap Presiden Soekarno, Wakil Presiden Moh. Hatta, dan para pemimpin lainnya.'
      },
      {
        type: 'paragraph',
        text: 'Meskipun para pemimpin ditangkap, Indonesia merespons dengan membentuk Pemerintahan Darurat Republik Indonesia (PDRI) di Sumatera yang dipimpin oleh Syafruddin Prawiranegara. Selain itu, serangan gerilya seperti Serangan Umum 1 Maret 1949 di Yogyakarta menunjukkan bahwa Republik Indonesia secara de facto masih eksis dan tidak dapat dihancurkan.'
      }
    ],
  },

  // --- DATA BARU: Pengakuan Kedaulatan (1949) ---
  'pengakuan-kedaulatan-belanda': {
    title: 'Pengakuan Kedaulatan RI',
    subtitle: 'Hasil Konferensi Meja Bundar (KMB)',
    year: '27 Desember 1949',
    image: '/Pengakuan_Kedaulatan_Belanda.jpg', 
    content: [
      {
        type: 'heading',
        text: 'Latar Belakang KMB'
      },
      {
        type: 'paragraph',
        text: 'Kegagalan Agresi Militer II untuk menghancurkan RI, tekanan kuat dari Dewan Keamanan PBB dan Amerika Serikat, serta kemenangan diplomasi Indonesia (termasuk PDRI dan Serangan Umum 1 Maret), memaksa Belanda untuk kembali ke meja perundingan. Diawali dengan Perjanjian Roem-Roijen, perundingan puncak diadakan dalam Konferensi Meja Bundar (KMB).'
      },
      {
        type: 'paragraph',
        text: 'KMB diselenggarakan di Den Haag, Belanda, dari 23 Agustus hingga 2 November 1949. Delegasi Indonesia dipimpin oleh Mohammad Hatta.'
      },
      {
        type: 'heading',
        text: 'Keputusan KMB dan Pengakuan'
      },
      {
        type: 'list',
        items: [
          'Pemerintah Belanda secara resmi dan tanpa syarat mengakui Kedaulatan Republik Indonesia Serikat (RIS) kepada Indonesia.',
          'Pengakuan kedaulatan berlaku efektif pada tanggal 27 Desember 1949.',
          'Isu Irian Barat (Papua) ditangguhkan dan akan diselesaikan dalam waktu satu tahun (yang kenyataannya baru selesai tahun 1962).',
          'Pembentukan Uni Indonesia-Belanda yang bersifat kerja sama, namun segera bubar.'
        ]
      },
      {
        type: 'quote',
        text: 'Pengakuan Kedaulatan 27 Desember 1949 adalah penyerahan penuh dan tanpa syarat yang secara hukum mengakhiri keberadaan kolonial Belanda. Walaupun bentuk negara saat itu adalah RIS, ini merupakan penutup resmi fase perjuangan fisik melawan Belanda setelah Perang Kemerdekaan.',
      },
      {
        type: 'heading',
        text: 'Setelah Pengakuan'
      },
      {
        type: 'paragraph',
        text: 'Meskipun kedaulatan diakui dalam bentuk RIS, dalam waktu kurang dari satu tahun (Agustus 1950), RIS bubar dan kembali menjadi Negara Kesatuan Republik Indonesia (NKRI).'
      }
    ],
  },

};


// --- Komponen Renderer Konten (Ditingkatkan Estetikanya) ---
const ContentRenderer = ({ content }) => {
// ... (Bagian ContentRenderer tidak berubah)
  return content.map((block, index) => {
    switch (block.type) {
      case 'heading':
        return <h3 key={index} className="text-3xl font-bold mt-10 mb-5 text-gray-100 border-b-2 border-yellow-700 pb-2">{block.text}</h3>;
      case 'paragraph':
        return <p key={index} className="text-lg text-gray-300 mb-6 leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-yellow-500 first-letter:mr-1">{block.text}</p>;
      case 'list':
        return (
          <ul key={index} className="list-none space-y-3 text-gray-400 mb-6 pl-4 border-l-4 border-yellow-800">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-yellow-500 text-xl mr-3">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-yellow-500 pl-6 py-4 italic text-gray-200 my-8 bg-[#1c1d21] p-6 rounded-r-xl shadow-lg">
            <span className="text-3xl font-serif text-yellow-500 mr-2">❝</span>
            {block.text}
            {block.source && <footer className="mt-3 text-sm font-semibold text-yellow-600">— {block.source}</footer>}
          </blockquote>
        );
      default:
        return null;
    }
  });
};


// --- Komponen Utama DetailPage ---
const DetailPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchedData = detailData[slug];
    setData(fetchedData || null);
    setLoading(false);
  }, [slug]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="py-20 bg-[#0f1724] min-h-screen flex justify-center items-center">
        <p className="text-3xl text-yellow-500 animate-pulse">Memuat Detail Sejarah...</p>
      </div>
    );
  }

  // --- Not Found State ---
  if (!data) {
    return (
      <div className="py-20 bg-[#0f1724] min-h-screen text-center text-gray-100">
        <h2 className="text-5xl pt-20 text-red-500">404 - Peristiwa Tidak Ditemukan</h2>
        <p className="text-xl mt-4">Detail untuk `{slug}` tidak tersedia. Silakan periksa URL Anda.</p>
        <Link to="/timeline" className="mt-8 inline-flex items-center text-yellow-500 hover:text-yellow-400 underline transition duration-300 text-lg">
          &larr; Kembali ke Garis Waktu
        </Link>
        
      </div>
    );
  }

  // --- Tampilan Detail Peristiwa ---
  return (
    <div className="py-20 bg-[#0f1724] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Kembali ke Linimasa */}
        <Link 
            to="/timeline" 
            className="text-yellow-600 hover:text-yellow-500 transition duration-300 flex items-center mb-12 group"
        >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali ke Garis Waktu
        </Link>

        {/* HEADER KONTEN (Gambar dijadikan latar belakang/header terpadu) */}
        <header className="relative mb-16 rounded-xl overflow-hidden shadow-2xl border-b-4 border-yellow-600 min-h-[300px]">
          
          {/* Gambar Utama sebagai Latar Belakang */}
          <img 
            src={data.image} 
            alt={data.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-30 transition duration-500" 
          />
          
          {/* Overlay Gelap untuk Teks Agar Terbaca */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Teks Header di Atas Gambar */}
          <div className="relative p-8 z-10 text-gray-100">
            <p className="text-xl font-medium text-yellow-400">{data.year}</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-3 font-serif leading-tight tracking-tight">{data.title}</h1>
            <p className="text-2xl mt-4 text-yellow-500 italic border-t border-gray-700/50 pt-4 max-w-2xl">{data.subtitle}</p>
          </div>
        </header>

        {/* Konten Detail (Area Baca Utama) */}
        <div className="p-8 bg-[#1c1d21] rounded-xl shadow-2xl">
          <ContentRenderer content={data.content} />
        </div>

      </div>
      
    </div>
  );
};


export default DetailPage;