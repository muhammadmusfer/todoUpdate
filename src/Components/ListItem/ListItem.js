import React from "react";
import { GoTrashcan } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import "./ListItem.css";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li id={this.props.itemId} key={this.props.itemKey}>
        {this.props.itemText}
        <button
          id="delbtn"
          onClick={() => this.props.deleteItem(this.props.itemKey)}
        >
          <GoTrashcan className="deletebtn" />
        </button>
        <div className="vl"></div>
        <button id="cmpletebtn">
          {this.props.itemId === "doneItem" ? (
            <AiFillCheckCircle className="completebtn" />
          ) : (
            <BiCheckCircle
              className="completebtn"
              onClick={() => {
                this.props.deleteItem(this.props.itemKey);
                this.props.UpdateItem(this.props.itemKey);
              }}
            />
          )}
        </button>
      </li>
    );
  }
}

export default ListItem;
