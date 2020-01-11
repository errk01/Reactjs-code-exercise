import React, { Component } from "react";
import "./style.css";
class DropDown extends Component {
  state = {
    items: this.props.data,
    itemsSelect: [],
    textChange: "",
    isChecked: [{ value: "" }, { value: "car" }, { value: "fruit" }],
    arrSort: [],
    isOrder: false
  };

  filterList = e => {
    let filterList = this.props.data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].includes(this.state.textChange)
      );
    });
    let typeList = filterList.map(({ type }) => `\n${type}`);
    this.setState({ itemsSelect: typeList });
  };
  handelChange = e => {
    this.setState({ textChange: e.target.value }, () => {
      this.filterList();
    });
  };

  handleSort = () => {
    let _self = this.state;
    let arr = this.state.itemsSelect;
    _self.isOrder = !_self.isOrder;
    arr.sort(function(a, b) {
      return _self.isOrder ? a.localeCompare(b) : b.localeCompare(a);
    });
    this.setState({ itemsSelect: arr });
  };
  render() {
    return (
      <div className="container">
        <div className="inner_container">
          <h1 className="header">ReactJS coding exercise</h1>
          <div className="dropdown_btn">
            <div className="dropdown">
              <select
                className="select_drop"
                value={this.state.textChange}
                onChange={this.handelChange}
              >
                {this.state.isChecked.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="sort_btn">
              <button
                className="btn"
                value={this.state.itemsSelect}
                onClick={this.handleSort}
              >
                {!this.state.isOrder ? "sort+" : "sort-"}
              </button>
            </div>
          </div>
        </div>
        <div className="render_text" value={this.state.itemsSelect}>
          {this.state.itemsSelect.map(key => (
            <ul key={key}>
              <li>{key}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default DropDown;
