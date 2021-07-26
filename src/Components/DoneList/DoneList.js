import React from "react";
import ListItem from "../ListItem/ListItem";
import "./DoneList.css";

class DoneList extends React.Component {
  constructor(props) {
    super(props);
    this.createDoneList = this.createDoneList.bind(this);
  }

  createDoneList = (doneItem) => {
    return (
      <ListItem
        itemId={"doneItem"}
        itemKey={doneItem.key}
        itemText={doneItem.text}
        deleteItem={this.props.deleteDone}
      />
    );
  };

  render() {
    var donelist = this.props.donelist;
    var doneli = donelist.map((e) => this.createDoneList(e));

    return <ul id="donelist">{doneli}</ul>;
  }
}

export default DoneList;
