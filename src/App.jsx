import { Outlet, Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import './App.css';
import { useState } from "react";
import Home from "./pages/Home";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className='home-container'>
      <header className='home-header'>
        <nav className='home-nav'>
          <div className="logo-name">
          <h1>WorldPitch</h1>
          </div>
          <ul className='home-ul'>
            <li><Link className="a" to="/">Home</Link></li>
            <li><Link className="a" to="/clubs">Clubs</Link></li>
            <li><Link className="a" to="/players">Players</Link></li>
            <li><Link className="a" to="/favorites">Favorites</Link></li>
          </ul>
          <div className='home-search'>
            <Search className="search"/>
          </div>
          <div className='home-signing'>
            <div className='login'>
              <button>Login</button>
            </div>
            <div className='register'>
              <button>Register</button>
            </div>
          </div>
          <div className="menu-icon" onClick={toggleClick}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
          <div className={`mobile-nav ${isOpen ? 'open' : 'close'}`}>
          <ul className="navs">
          <li><Link to="/" className="b" onClick={toggleClick}>Home</Link></li>
          <li><Link to="/clubs" className="b" onClick={toggleClick}>Clubs</Link></li>
          <li><Link to="/players" className="b" onClick={toggleClick}>Players</Link></li>
         <li><Link to="/favorites" className="b" onClick={toggleClick}>Favorites</Link></li>
         </ul>
         <div className="buttons">
          <button className="log">Login</button>
          <button className="reg">Register</button>
         </div>
         </div>
         </nav>
        <p>Welcome to WorldPitch — your all-in-one football hub where you can explore <br/>
         clubs, follow players, and track your favorites from every corner of the globe.<br/>
         Whether you're a die-hard supporter or a curious fan, everything you need is right here.</p>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
