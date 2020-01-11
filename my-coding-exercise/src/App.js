import React, { Component } from "react";
import DropDown from "./components/dropdown/DropDown";

class App extends Component {
  state = {
    data: [
      { value: "car", type: "mustang" },
      { value: "car", type: "F-40" },
      { value: "car", type: "charger" },
      { value: "car", type: "spider" },
      { value: "fruit", type: "apple" },
      { value: "fruit", type: "orange" },
      { value: "fruit", type: "grape" },
      { value: "fruit", type: "pinapple" },
      { value: "fruit", type: "banana" }
    ]
  };

  render() {
    return (
      <div className="App">
        <DropDown data={this.state.data} />
      </div>
    );
  }
}

export default App;
