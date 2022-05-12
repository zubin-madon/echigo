
import './App.css';
import logo from "./images/logo192.png";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Launch from './pages/Launch';
import Tokenomics from './pages/Tokenomics';
import Roadmap from './pages/Roadmap';
import Metamask from './pages/Metamask';
import Team from './pages/Team';

function App() {
  return (
    <div className="EchigoApp">
     <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='https://echigo.tech'>
      <img className="w-3/4" src={logo} alt="Echigo logo"></img>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center text-xl">
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="/Home">Launch</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="/Tokenomics">Tokenomics</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="/Roadmap">Roadmap</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="/Metamask">Setup Metamask</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="https://twitter.com/echigotoken" target="_blank">Twitter</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="https://t.me/+rRjyGQv-AGswOTc9" target="_blank">Telegram</a>
      <a className="mr-5 text-echigo-pink hover:text-red-600/[.6]" href="/Team">Team</a>
    </nav>
    <a href="https://explorer.ech.network/" target="_blank">
    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-echigo-pink/[0.5] bg-echigo-pink/[0.8] text-white hover:text-gray-600 rounded text-base mt-4 md:mt-0">Echelon Scan
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>
  </div>
</header>

<div className="flex justify-center items-center gap-2">
<Router>
      <Routes>
          <Route path="/" exact element={<Launch />} />
          <Route path="/Home" exact element={<Launch />} />
          <Route path="/Tokenomics" exact element={<Tokenomics />} />
          <Route path="/Roadmap" exact element={<Roadmap />} />
          <Route path="/Metamask" exact element={<Metamask />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
</Router>
      </div>
    </div>
  );
}

export default App;
