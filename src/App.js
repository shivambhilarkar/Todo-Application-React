import './App.css';
import GridBoxDashboard from './Components/GridBoxDashboard';
import NavBar from './Components/NavBar';
import SingleBox from './Components/SingleBox';
import SingleDashboardBox from './Components/SingleDashboardBox';

function App() {
  return (
    
    <div>
       <NavBar/>
          
          <SingleBox/>

          <GridBoxDashboard/>
          
          {/* <SingleDashboardBox/> */}

    </div>
         
      

      
  );
}

export default App;
