import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand navbar-light bg-dark border-bottom" >
          <div className="nav navbar-nav sticky-top">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/movies/create">
              Create Film
            </NavLink>
          </div>
        </nav>
      </header>
    </>

  );
}