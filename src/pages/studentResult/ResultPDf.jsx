import React from 'react';
import ReactToPrint from 'react-to-print';
import ResultTable from './ResultTable';
import Navbar from '../../components/studentDashboard/Navbar/Navbar';

 
 
class ResultPDf extends React.Component {
     
    render() {
      return (
        <>
          <Navbar />
        <div>

           <h1 className="text-center m-3 p-3">Clas Five First Term Result</h1> 

          <ResultTable ref={(response) => (this.componentRef = response)} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Dawnload a copy</button>}
          />
        </div>
        </>
      );
    }
}
 
export default ResultPDf;