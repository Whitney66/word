import { NavLink, Outlet } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import './pages/pages.scss';

function App() {
  return (
    <div>
      <div className="header">
        <div className="brand">集团月度经营驾驶舱</div>
        <div className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>总体经营</NavLink>
          <NavLink to="/channels" className={({ isActive }) => isActive ? 'active' : ''}>渠道运营</NavLink>
          <NavLink to="/customers" className={({ isActive }) => isActive ? 'active' : ''}>客户运营</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>产品运营</NavLink>
        </div>
      </div>
      <FilterBar />
      <Outlet />
    </div>
  );
}

export default App;
