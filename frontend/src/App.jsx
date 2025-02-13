/* eslint-disable no-unused-vars */
import LandingPage from "./components/LandingPage"
import DinoDisplay from "./components/DinoDisplay/DinoDisplay";
import Quiz from "./components/Quiz";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import News from "./components/News";
import Ecommerce from "./components/Ecommerce/EcommerceDisplay";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="font-body">
      <LandingPage />
      <DinoDisplay />
      <Timeline />
      <News />
      <Quiz />
      <Ecommerce />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
