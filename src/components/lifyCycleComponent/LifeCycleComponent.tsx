import { Component } from "react";

type LifeCycleComponentProps = {
  text: string;
};
export default class LifeCycleComponent extends Component<LifeCycleComponentProps> {
  state: { value: number } = { value: 0 };
  constructor(props: LifeCycleComponentProps) {
    super(props);
    console.log("Component constructor");
  }

  // Застаріла версія getDerivedStateFromProps
  //   componentWillMount(): void {
  //     console.log("Component will mount");
  //   }

  static getDerivedStateFromProps(
    props: LifeCycleComponentProps,
    state: { value: number }
  ) {
    console.log("Component getDerivedStateFromProps", props, state);
    return state;
  }

  render() {
    console.log("Component render");
    return (
      <>
        <div className="flex">
          <button
            onClick={() => {
              this.setState({ value: this.state.value + 1 });
              console.log("UPDATE");
            }}
            className="p-2 bg-blue-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
          >
            {this.props.text}
          </button>
        </div>
      </>
    );
  }

  componentDidMount(): void {
    console.log("Component did mount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<LifeCycleComponentProps>,
    nextState: Readonly<{ value: number }>,
    nextContext: unknown
  ): boolean {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    return true;
  }

  componentDidUpdate(
    prevProps: Readonly<LifeCycleComponentProps>,
    prevState: Readonly<{ value: number }>,
    snapshot?: unknown
  ): void {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
    console.log("UPDATE IS DONE");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
}
