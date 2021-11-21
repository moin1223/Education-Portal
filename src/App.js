import  StudentRoutin from "../src/pages/studentRoutin/StudentRoutin"
import StudentHome from "../src/pages/studentHome/StudentHome";
import Syllabus  from "../src/pages/syllabus/Syllabus";
import ResultPDf from "../src/pages/studentResult/ResultPDf";
import Payment from "../src/pages/payment/Payment";
import Home from "./components/Home/Home/Home"
import NewLogin from "./Firebase/NewLogin/NewLogin";
// import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//from tanvir

function App() {
  return (
    <>
      <Router>
      
        <Switch>
         
          <Route path='/' exact component={ Home } />
          <Route path='/login' component={ NewLogin} />
           <Route path='/studentHome'component={StudentHome} />
          <Route path='/routin' component={ StudentRoutin} />
          <Route path='/shyllabus' component={ Syllabus } />
          <Route path='/payment' component={ Payment } />
          <Route path='/result' component={ ResultPDf } />

        
        </Switch>
      </Router>
    </>
  );
}

export default App;
