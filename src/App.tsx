import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import './index.scss';
import Achievements from './components/Achievements';


function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        {/* Floating background decorations */}
        <div className="float-decoration blob-1" />
        <div className="float-decoration blob-2" />
        <div className="float-decoration blob-3" />

        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Main/>
        <Expertise/>
        <Achievements />
        <Timeline/>
        <Project/>
        <Contact/>
        <Footer />
    </div>
    );
}

export default App;