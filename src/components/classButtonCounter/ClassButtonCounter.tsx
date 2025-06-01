import { Component } from "react";

type ClassButtonCounterProps = {
  btnText: string;
};
type ClassButtonCounterState = {
  count: number;
};
export default class ClassButtonCounter extends Component<
  ClassButtonCounterProps,
  ClassButtonCounterState
> {

  state = { count: 0 };

  buttonClicked = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  constructor(props: ClassButtonCounterProps) {
    super(props);
  }

  render() {
    return (
      <div className="flex gap-2 items-center justify-center">
        <p className="text-center font-bold text-2xl">{this.state.count}</p>
        <button
          className="px-2.5 py-1 cursor-pointer bg-gray-700 text-white font-bold rounded-full border border-white"
          onClick={this.buttonClicked}
          type="button"
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}