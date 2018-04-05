import tableau from "tableau-api";
import React, {Component} from 'react';

export default class TableauAPI extends Component {
  constructor(props) {
    super(props)
  }

  initTableau() {
    const vizUrl = "https://public.tableau.com/views/VacationHome/VacationHome?:embed=y&:display_count=yes";

    const options = {
      hideTabs: true,
      width: "700px",
      height: "800px",
      onFirstInteractive: () => {
        const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
        const options = {
          ignoreAliases: false,
          ignoreSelection: false,
          includeAllColumns: false
        };
        sheet.getUnderlyingDataAsync(options).then((t) => {
          const tableauData = t.getData();
          let data = [];
          const pointCount = tableauData.length;
          for (let a = 0; a < pointCount; a++) {
            data = data.concat({x: tableauData[a][0].value,
              y: Math.round(tableauData[a][3].value, 2)
            })
          };
          this.setState({victoryData: data});
        })
      }
    };

    let viz = new tableau.Viz(this.container, vizUrl, options);
    this.setState({viz: viz})
  }

  render() {

    return (<div className="project-container">
      <div className="image-container">
        <div className="screenshot-container">
          <div ref= {c => (this.container = c)}></div>
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
  componentDidMount() {
    this.initTableau();
  }
}
