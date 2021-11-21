import React from "react";
import "./resultTable.css"

class ResultTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
              <th>Code No</th>
            <th>Subject Name</th>
            <th>Letter Grade</th>
            <th>Grade Point</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bangla102</td>
            <td>Bangla 1st</td>
            <td>4.oo</td>
            <td>A+</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Bangla102</td>
            <td>Bangla 1st</td>
            <td>4.oo</td>
            <td>A+</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Bangla102</td>
            <td>Bangla 1st</td>
            <td>4.oo</td>
            <td>A+</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Bangla102</td>
            <td>Bangla 1st</td>
            <td>4.oo</td>
            <td>A+</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Bangla102</td>
            <td>Bangla 1st</td>
            <td>4.oo</td>
            <td>A+</td>
            <td>80</td>
          </tr>
         
        </tbody>
      </table>
    );
  }
}

export default ResultTable;