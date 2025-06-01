import { PureComponent } from "react";

type PureComponentChildState = {
  counter: number;
};

class PureComponentChild extends PureComponent<unknown, PureComponentChildState> {
  state = { counter: 0 };

  buttonClicked = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    console.log("Child with PureComponent rendered");
    return (
      <button
        className="p-2 cursor-pointer bg-blue-500 rounded-lg"
        onClick={this.buttonClicked}
        type="button"
      >
        Child with PureComponent: {counter}
      </button>
    );
  }
}

export default PureComponentChild;