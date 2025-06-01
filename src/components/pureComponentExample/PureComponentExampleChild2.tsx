import { Component } from "react";

type PureComponentChild2State = {
  counter: number;
};

export default class PureComponentChild2 extends Component<
  unknown,
  PureComponentChild2State
> {
  state = { counter: 0 };

  buttonClicked = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    console.log("Child with Component rendered");
    return (
      <button
        className="p-2 cursor-pointer bg-blue-500 rounded-lg"
        onClick={this.buttonClicked}
        type="button"
      >
        Child with Component: {counter}
      </button>
    );
  }
}
