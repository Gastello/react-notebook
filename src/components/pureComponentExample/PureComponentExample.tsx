import { Component } from "react";
import classNames from "classnames";

import PureComponentExampleChild from "./PureComponentExampleChild";
import PureComponentExampleChild2 from "./PureComponentExampleChild2";

type PureComponentExampleState = {
  isBlack: boolean;
};
export default class PureComponentExample extends Component<unknown, PureComponentExampleState> {
  state = { isBlack: true };

  changeBtnColor = () => {
    this.setState((prev) => ({ isBlack: !prev.isBlack }));
  };

  render() {
    console.log("Parent Class Component rendered");
    const { isBlack } = this.state;
    return (
      <>
        <div className="py-2 flex items-center justify-center gap-3">
          <button
            onClick={this.changeBtnColor}
            className={classNames(
              "cursor-pointer p-2 rounded-lg",
              { "bg-black": isBlack },
              { "text-white": isBlack },
              { "bg-white": !isBlack },
              { "text-black": !isBlack }
            )}
          >
            Parent Class Component
          </button>
          <PureComponentExampleChild />
          <PureComponentExampleChild2 />
        </div>
      </>
    );
  }
}
