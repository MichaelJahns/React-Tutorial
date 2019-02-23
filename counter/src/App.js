import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        name: "Divine Protection",
        value: 0,
        levels: 10,
        prerequisite: 0
      },
      {
        id: 2,
        name: "Heal",
        value: 0,
        levels: 10,
        prerequisite: 0
      },
      {
        id: 3,
        name: "Aqua Benedicta",
        value: 0,
        levels: 1,
        prerequisite: 0
      },
      {
        id: 4,
        name: "Ruwach",
        value: 0,
        levels: 1,
        prerequisite: 0,
        description:
          "Summon a holy light around the caster that will detect hidden enemies within its range. Ruwach inflicts an amount of Holy Property Damage equal to 145% of the casters attack strength."
      },
      {
        id: 5,
        name: "Teleport",
        value: 0,
        levels: 2,
        prerequisite: "Ruwach Level 1",
        description:
          "Instantly move the caster to a different location. Can be used to move randomly or back to the casters save point."
      }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax call, once site has loaded, this is the place to make api calls
    // this.setState({ })
    console.log("App - Mounted");
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index] > 9 ? (counters[index] = 10) : (counters[index].value += 1);
    // counters[index] >= counters[index].prerequs
    //   ? (counters[index].prerequisite =0)
    //   : (counters[index].prerequisite =0e);
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
