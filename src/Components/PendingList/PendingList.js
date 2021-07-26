import React from "react";
import "./PendingList.css";
import { BiCheckCircle } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import ListItem from "../ListItem/ListItem";

class PendingList extends React.Component {
  constructor(props) {
    super(props);
    this.createlistItem = this.createListItem.bind(this);
  }

  createListItem = (item) => {
    return (
      <ListItem
        itemId={"listItem"}
        itemKey={item.key}
        itemText={item.text}
        deleteItem={this.props.delete}
        UpdateItem={this.props.onUpdate}
      />
    );
  };
  render() {
    var list = this.props.list;
    var PendingList = list.map((item) => this.createListItem(item));

    return <ul id="tasklist">{PendingList}</ul>;
  }
}

export default PendingList;
