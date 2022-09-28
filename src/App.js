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

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/autonomy" component={Autonomy} />
        <Route exact path="/cdm" component={CDM} />
        <Route exact path="/clubs" component={Clubs} />
        <Route exact path="/education-support" component={EducationSupport} />
        <Route exact path="/donate-food" component={FoodDonate} />
        <Route exact path="/idp" component={IDP} />
        <Route exact path="/libraries" component={Libraries} />
        <Route exact path="/masterplan" component={MasterPlan} />
        <Route exact path="/news" component={News} />
        <Route exact path="/other-clubs" component={OtherClub} />
        <Route exact path="/statements" component={Statements} />
        <Route exact path="/strikes" component={Strikes} />
        <Route
          exact
          path="/student-association"
          component={StudentsAssociation}
        />
        <Route exact path="/support" component={Support} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
