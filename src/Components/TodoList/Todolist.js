import React from "react";
import "./Todolist.css";
import PendingList from "../PendingList/PendingList";
import DoneList from "../DoneList/DoneList";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="listItemDiv">
        <div id="inCompletTask">
          <PendingList
            list={this.props.list}
            delete={this.props.delete}
            onUpdate={this.props.onUpdate}
          />
        </div>
        <div className="hr">
          <hr></hr>
        </div>
        <div id="CompletTask">
          <DoneList
            deleteDone={this.props.deleteDone}
            donelist={this.props.donelist}
          />
        </div>
      </div>
    );
  }
}

export default Todolist;
