import './App.css';
import GridBoxDashboard from './Components/GridBoxDashboard';
import NavBar from './Components/NavBar';
import SingleBox from './Components/SingleBox';
import SingleDashboardBox from './Components/SingleDashboardBox';
import { Routes, Route } from "react-router-dom"
import ReadDashboard from './Components/ReadDashboard';


function App() {
  return (
      <> 

      <NavBar/>
      <SingleBox/>
      <Routes>
        <Route path="/" element={ <GridBoxDashboard/> } />
        <Route path='/readnote' element={ <ReadDashboard/> } />
      </Routes>   

      </>   
  );
}

export default App;
