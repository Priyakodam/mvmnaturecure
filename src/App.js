import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About2 from "./Components/About2/About2";
import MainService from "./Components/MainService/MainService";
import SpeechTherapy from "./Components/speech/SpeechTherapy";
import HearingTherapy from "./Components/speech/HearTherapy";

const firebaseConfig = {
  apiKey: "AIzaSyABbkHGeWQ8vxalMblUKBMM0aJhxUgAgVo",
  authDomain: "mvmnaturecure-1.firebaseapp.com",
  projectId: "mvmnaturecure-1",
  storageBucket: "mvmnaturecure-1.appspot.com",
  messagingSenderId: "344292815020",
  appId: "1:344292815020:web:c9641b8ae3ad3233206f09",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, getFirestore, auth };

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <ScrollBar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/MainService" element={<MainService />} />
          <Route path="/Speech-therapy" element={<SpeechTherapy />} />
          <Route path="/Hear-Therapy" element={<HearingTherapy />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
