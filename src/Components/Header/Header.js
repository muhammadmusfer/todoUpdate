import React from "react";
import Todolist from "../TodoList/Todolist";
import { GoPlusSmall } from "react-icons/go";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      taskList: [],
      completetask: [],
    };
    this.OnInputSubmit = this.OnInputSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateDoneList = this.updateDoneList.bind(this);
    this.deleteDoneItem = this.deleteDoneItem.bind(this);
  }

  render() {
    return (
      <div id="main">
        <div id="header-div">
          <input
            type="text"
            id="inputField"
            value={this.state.text}
            onChange={this.onInputChange}
            placeholder="Enter an activity..."
          />
          <button id="addButton" style={{ marginTop: "10px" }}>
            <GoPlusSmall onClick={this.OnInputSubmit} className="addIcon" />
          </button>
        </div>
        <Todolist
          list={this.state.taskList}
          delete={this.deleteItem}
          deleteDone={this.deleteDoneItem}
          onUpdate={this.updateDoneList}
          donelist={this.state.completetask}
        />
      </div>
    );
  }

  onInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  OnInputSubmit = (e) => {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      key: Math.floor(Math.random() * 10000),
    };
    this.setState({
      taskList: [...this.state.taskList, newItem],
      text: "",
    });
  };

  updateDoneList = (key) => {
    var selected = this.state.taskList.filter((item) => {
      return key === item.key;
    });
    var select = selected[0];
    console.log("Select");
    console.log(select);
    this.setState({
      completetask: [...this.state.completetask, select],
    });
  };

  deleteItem = (key) => {
    var filterList = this.state.taskList.filter((item) => {
      return key !== item.key;
    });

    this.setState({
      taskList: filterList,
    });
  };

  deleteDoneItem = (completekey) => {
    console.log("Complete key" + completekey);
    var filterList = this.state.completetask.filter((item) => {
      console.log("Item key" + item);
      return completekey !== item.key;
    });

    this.setState({
      completetask: filterList,
    });
  };
}

export default Header;
