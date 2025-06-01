import { useEffect, useState } from "react";

type LifeCycleFunctionComponentProps = {
  text: string;
};
function LifeCycleFunctionComponent({ text }: LifeCycleFunctionComponentProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Mounted"); // componentDidMount
  }, []);

  useEffect(() => {
    return () => console.log("Unmounted"); // componentWillUnmount
  }, []);

  useEffect(() => {
    console.log("Updated (any render)"); // render cycle
  });

  useEffect(() => {
    console.log("Counter changed"); // componentDidUpdate(counter)
  }, [counter]);

  const updateCounterValue = (): void => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="flex">
        <button
          onClick={updateCounterValue}
          className="p-2 bg-blue-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
        >
          {text}
        </button>
      </div>
    </>
  );
}
export default LifeCycleFunctionComponent;
