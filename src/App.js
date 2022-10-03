import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Autonomy from "./pages/Autonomy";
import CDM from "./pages/CDM";
import Clubs from "./pages/Clubs";
import EducationSupport from "./pages/EducationalSupport";
import FoodDonate from "./pages/FoodDonate";
import IDP from "./pages/IDP";
import Libraries from "./pages/Libraries";
import MasterPlan from "./pages/MasterPlan";
import News from "./pages/News";
import OtherClub from "./pages/OtherClub";
import Statements from "./pages/Statements";
import Strikes from "./pages/Strikes";
import StudentsAssociation from "./pages/StudentsAssociation";
import Support from "./pages/Support";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { navLinks, linkToPage } from "./data/navlinks";

const navKeys = Object.keys(navLinks);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/statements" element={<Statements />} />
        <Route path="/recent-news" element={<News />} />

        <Route path="/strikes" element={<Strikes />} />
        <Route path="/cdm" element={<CDM />} />
        <Route path="/idp" element={<IDP />} />
        <Route path="/supports" element={<Support />} />
        <Route path="/spring-libraries" element={<Libraries />} />
        <Route path="/educational-support" element={<EducationSupport />} />
        <Route path="/donate-food" element={<FoodDonate />} />

        <Route path="/student-association" element={<StudentsAssociation />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/other-clubs" element={<OtherClub />} />

        <Route path="/masterplan" element={<MasterPlan />} />
        <Route path="/autonomy" element={<Autonomy />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* {navKeys.map((navKey) => {
          return <Route path={navKey} element={navKeys[navKey]} />;
        })} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
