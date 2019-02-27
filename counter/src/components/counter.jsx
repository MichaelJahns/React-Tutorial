import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <aside className="counter">
        {this.props.children}
        <h3> {this.props.counter.name} </h3>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}/{this.props.counter.levels}
        </span>
        <button
          disabled={this.getDisabled()}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <p> Description: {this.props.counter.description} </p>
        <p>
          Prerequisites:{" "}
          {this.props.counter.prerequisite === 0
            ? "No Prerequisites"
            : this.props.counter.prerequisite}
        </p>
      </aside>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  getDisabled() {
    let disabled = true;
    if (
      this.props.counter.value < this.props.counter.levels &&
      this.props.counter.locked === false
    ) {
      disabled = false;
    }
    return disabled;
  }
}
