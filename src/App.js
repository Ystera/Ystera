import Navigasi from "./Komponen/Navigasi.jsx";
import Profil from "./Komponen/Profil";

import Online from "./Komponen/Online";
import Beranda from "./Halaman/Beranda.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <Navigasi />

      <div className="flex flex-row">
        <Profil/>
        <Beranda/>
        <Online />
      </div>
    </div>
  );
}

export default App;
