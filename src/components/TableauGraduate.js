import TableauReport from 'tableau-react';
import React, {Component} from 'react';

export default class TableauGrad extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (<div className="project-container">
      <div className="image-container">
        <div className="screenshot-container">

          <TableauReport url="
https://public.tableau.com/views/GradSchoolDark/Dashboard2?:embed=y&:display_count=yes " options={options}/>
        </div>
      </div>
      <div class="project-info">
        <h3>Background</h3>
        <div></div>
        <h3>Role</h3>
        <div></div>
      </div>
    </div>)

  }
}
const options = {
  width: '100%',
  height: 830,
  hideTabs: false
};
