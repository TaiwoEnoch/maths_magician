import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <div className="flex-header">
      <h1 style={{ color: 'red' }}>Maths App</h1>
      <nav className="nav">
        <ul style={{ display: 'flex', gap: '2rem' }} className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>

    <Outlet />
  </div>
);

export default Header;
