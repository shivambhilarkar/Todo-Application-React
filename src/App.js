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
        <Route path="/Todo_Application_React/" element={ <GridBoxDashboard/> } />
        <Route path='/Todo_Application_React/readnote' element={ <ReadDashboard/> } />
      </Routes>   

      </>   
  );
}

export default App;
