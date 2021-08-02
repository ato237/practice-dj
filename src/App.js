import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SubNavbar from './components/SubNavbar';
import Htmltuto from './pages/Htmltuto';

function App() {
  return (
    <div >
      <Navbar/>
      <SubNavbar/>
      <div className ='App'>
      <Sidebar/>
      <Htmltuto/>
      </div>
      

    </div>
  );
}

export default App;
