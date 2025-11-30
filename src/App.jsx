import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Timeline from './Pages/Timeline';
import Tokoh from './Pages/Tokoh';
import Galeri from './Pages/Galery';
import LatarBelakang from './Pages/LatarBelakang';
import Dampak from './Pages/Dampak';
import WarisanBudaya from './Pages/WarisanBudaya';
import Header from './Components/Navbar';
import Footer from './Components/Footer';

// CATATAN: Anda perlu membuat komponen DetailPage.jsx secara terpisah
// untuk menangani tampilan detail dari setiap item linimasa.
import DetailPage from './Pages/Detail/EkspedisiBelandaPertama'; 

function App() {
  return (
    <Router>
      
      {/* 1. Header (Navbar) - Fixed di Atas */}
      <Header />
      
      {/* 2. Konten Utama */}
      <main className="pt-20 min-h-screen"> 
        <Routes>
          {/* Rute Utama */}
          <Route path="/" element={<Home />} />
          
          {/* Rute Halaman Statis */}
          <Route path="/latarbelakang" element={<LatarBelakang />} /> 
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/tokoh" element={<Tokoh />} />
          <Route path="/galeri" element={<Galeri />} /> 
          <Route path="/dampak" element={<Dampak />} /> 
          <Route path="/warisan-budaya" element={<WarisanBudaya />} /> 

          {/* Rute Dinamis untuk Detail Linimasa */}
          {/* Path ini akan menangkap link seperti /detail/pembentukan-voc */}
          <Route path="/detail/:slug" element={<DetailPage />} /> 

        </Routes>
      </main>
      
      {/* 3. Footer */}
      <Footer /> 
      
    </Router>
  );
}

export default App;