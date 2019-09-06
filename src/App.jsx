import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Admin from './components/admin'
import './styles/less/style.less';
import Backgrounds from '../src/assets/IPSOS_404.png';
import "./App.css";
import "./styles/less/style.less";
import Budgets from "./components/budgets";
import Brief from "./components/budgets/brief_cotizacion";
import Employees from '../src/components/module/HumanResources/Employees'
import Holidays from './components/module/HumanResources/Holidays';
import Trainers from './components/module/HumanResources/Trainers';
import TrainingRequest from './components/module/HumanResources/TrainingRequest';
import Trainings from './components/module/HumanResources/Trainings';
import Participants from './components/module/HumanResources/Participants';
import HolidaysCatalog from './components/module/HumanResources/HolidayCatalog';
import ReportF2F from './components/module/Budgets/ReportF2F';
import WeeklyReport from './components/module/Budgets/Weekly_report';
import ReportKPI from './components/module/Budgets/ReportKPI';
import DashboardRRHH from './components/module/HumanResources/Dashboard'
import DashboardBudgets from './components/module/Budgets/Dashboard'
import ButtonScroll from './components/commons/ButtonScroll'
const Routes = () => {
  return (
    <Fragment>
    <Router>
    <Switch>
      <Route exact path='/'  render={(props) => <Login {...props} />} ></Route> 
      <Route exact path='/admin' render={(props) => <Admin {...props} />}></Route> 
      <Route exact path="/brief" render={props => <Brief {...props} />}/>
      <Route exact path='/employees' render={(props) => <Employees {...props} />}></Route>
      <Route exact path='/holidays' render={(props) => <Holidays {...props} />}></Route>
      <Route exact path='/trainers' render={(props) => <Trainers {...props} />}></Route>
      <Route exact path='/trainingrequest' render={(props) => <TrainingRequest {...props} />}></Route>
      <Route exact path='/trainings' render={(props) => <Trainings{...props} />}></Route>
      <Route exact path='/participants' render={(props) => <Participants{...props} />}></Route>
      <Route exact path='/holidayscatalog' render={(props) => <HolidaysCatalog{...props} />}></Route>
      <Route exact path='/reportf2f' render={(props) => <ReportF2F{...props} />}></Route>
      <Route exact path='/weeklyreport' render={(props) => <WeeklyReport{...props} />}></Route>
      <Route exact path='/reportkpi' render={(props) => <ReportKPI{...props} />}></Route>
      <Route exact path='/dashboardrrhh' render={(props) => <DashboardRRHH{...props} />}></Route>
      <Route exact path='/dashboardbudgets' render={(props) => <DashboardBudgets{...props} />}></Route>
      {/* <Route exact path='/admin' component={Admin}></Route>  */}
        <Route exact path="/budgets" render={props => <Budgets {...props} />} />
        <Route component={error_404} />
    </Switch>    
    </Router>
     <ButtonScroll></ButtonScroll>
     </Fragment>
  );
};
const error_404 = () => {
  return (
    <div className="App">
      <div className="errors">
        <h1 className="error">ERROR PAGE NOT FOUND</h1>
      </div>
      <div className="contenedor">
      <div className="primer-numero">
        <h1>4</h1>
      </div>
        <img className="logo404" src={Backgrounds} alt=""/>
        <img className="logos404" src={Backgrounds} alt=""/>
       
        <div className="segundo-numero">
          
          <h1>4</h1>
        </div>
       
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default Routes;
