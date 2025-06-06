import { useState } from "react";
import Code from "../components/code/Code";
import LifeCycleComponent from "../components/lifeCycleClassComponent/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "../components/lifeCycleFunctionComponent/LifeCycleFunctionComponent";
import MemoExample from "../components/memoExample/MemoExample";
import Paragraph from "../components/paragraph/Paragraph";
import PureComponentExample from "../components/pureComponentExample/PureComponentExample";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function LifecycleMemoTopic() {
  const [
    isLifeCycleClassComponentVisible,
    setIsLifeCycleClassComponentVisible,
  ] = useState(false);
  const [
    isLifeCycleFunctionComponentVisible,
    setIsLifeCycleFunctionComponentVisible,
  ] = useState(false);
  const [isPureComponentExampleVisible, setIsPureComponentExampleVisible] =
    useState(false);
  const [isMemoExampleVisible, setIsMemoExampleVisible] = useState(false);

  return (
    <Topic title="Component Lifecycle. PureComponent & memo">
      <Title text="Що таке життєвий цикл?" />{" "}
      <Paragraph>
        Компонент проходить кілька етапів під час свого &quot;життя&quot; в DOM:
        створення, оновлення та знищення. Кожен з них має свої методи життєвого
        циклу.
      </Paragraph>
      <Title text="Життєвий цикл класового компонента" />{" "}
      <ul className="list-disc list-inside">
        <li>
          <code>constructor</code> — ініціалізація стану, викликається першим.
        </li>
        <li>
          <code>getDerivedStateFromProps</code> — (static) викликається перед
          рендером при оновленні props або state. Застосовується рідко, зазвичай
          для синхронізації state з props. Не має доступу до this, бо є
          статичним методом.
        </li>
        <li>
          <code>componentWillMount ⚠️</code> — застарілий метод, викликався
          перед render, але вилучений у Strict Mode. Його використовували для
          початкової логіки до першого рендеру, але зараз замінюється на
          constructor або getDerivedStateFromProps.
        </li>
        <li>
          <code>render</code> — обов&#39;язковий метод, повертає JSX.
        </li>
        <li>
          <code>componentDidMount</code> — викликається один раз після
          монтування компонента.
        </li>
        <li>
          <code>shouldComponentUpdate</code> — дає змогу оптимізувати оновлення
          (рідко використовується вручну).
        </li>
        <li>
          <code>componentDidUpdate</code> — викликається після оновлення props
          або state.
        </li>
        <li>
          <code>componentWillUnmount</code> — викликається перед видаленням
          компонента з DOM.
        </li>
      </ul>
      <Title text="Приклад життєвого циклу класового компонента" />{" "}
      <Paragraph>
        Нижче — приклад класового компонента, який демонструє ключові етапи:
      </Paragraph>
      <Code
        code={`class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  render() {
    console.log('render');
    return (
      <button onClick={() => this.setState({ value: this.state.value + 1 })}>
        {this.props.text} {this.state.value}
      </button>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}`}
      />
      <div className="flex">
        <button
          onClick={() => {
            setIsLifeCycleClassComponentVisible((prev) => !prev);
          }}
          className="p-2 bg-red-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
        >
          {isLifeCycleClassComponentVisible ? "Delete" : "Create"} Component
        </button>
      </div>
      {isLifeCycleClassComponentVisible && (
        <>
          <LifeCycleComponent text="Update Component" />
          <p className="text-center italic text-xs">check console</p>
        </>
      )}
      <Title text="Коли який метод викликається?" />{" "}
      <ul className="list-disc list-inside">
        <li>
          <strong>Mounting:</strong> constructor → getDerivedStateFromProps →
          render → componentDidMount
        </li>
        <li>
          <strong>Updating:</strong> getDerivedStateFromProps →
          shouldComponentUpdate → render → componentDidUpdate
        </li>
        <li>
          <strong>Unmounting:</strong> componentWillUnmount
        </li>
      </ul>
      <Title text="Навіщо це потрібно?" />{" "}
      <ul className="list-disc list-inside">
        <li>Отримувати дані з API після монтування (componentDidMount)</li>
        <li>Очищати таймери, підписки при видаленні (componentWillUnmount)</li>
        <li>Оптимізовувати рендери (shouldComponentUpdate)</li>
        <li>Реагувати на зміну props/state (componentDidUpdate)</li>
        <li>
          Синхронізувати стан зі змінами props (getDerivedStateFromProps) —
          викликається перед рендером, коли змінилися props або state.
          Застосовується для оновлення внутрішнього state на основі вхідних
          props.
        </li>
      </ul>
      <Title text="Життєвий цикл функціонального компонента" />{" "}
      <Paragraph>
        Функціональні компоненти не мають класичного життєвого циклу. Замість
        цього для виконання побічних ефектів використовується хук{" "}
        <code>useEffect</code>.
      </Paragraph>
      <ul className="list-disc ml-6">
        <li>
          <code>{`useEffect(() => { ... }, [])`}</code> виконується один раз
          після першого рендера (аналог componentDidMount).
        </li>
        <li>
          <code>{`useEffect(() => { ... })`}</code> або{" "}
          <code>{`useEffect(() => { ... }, [dependencies])`}</code> виконується
          після кожного рендера або при зміні залежностей відповідно (аналог
          componentDidUpdate).
        </li>
        <li>
          Функція, яка повертається з <code>useEffect</code>, виконується перед
          наступним викликом ефекту або при демонтажі компонента (аналог{" "}
          <code>componentWillUnmount</code>).
        </li>
      </ul>
      <Code
        code={`useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);

useEffect(() => {
  console.log("Updated or dependencies changed");
});`}
      />
      <Title text="Приклад життєвого циклу функціонального компонента" />{" "}
      <Code
        code={`import { useEffect, useState } from "react";
          
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
`}
      />
      <div className="flex">
        <button
          onClick={() => {
            setIsLifeCycleFunctionComponentVisible((prev) => !prev);
          }}
          className="p-2 bg-red-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
        >
          {isLifeCycleFunctionComponentVisible ? "Delete" : "Create"} Component
        </button>
      </div>
      {isLifeCycleFunctionComponentVisible && (
        <>
          <LifeCycleFunctionComponent text="Update Component" />
          <p className="text-center italic text-xs">check console</p>
        </>
      )}
      <Title text="Використання memo для оптимізації render" />{" "}
      <Paragraph>
        <code>memo</code> — це функція з React, яка оптимізує продуктивність
        функціональних компонентів, запобігаючи їх повторному рендеру, якщо
        пропси не змінилися.
      </Paragraph>
      <Paragraph>
        За замовчуванням React рендерить усі дочірні компоненти при кожному
        рендері батьківського, навіть якщо пропси дочірнього компонента не
        змінились. <code>memo</code> дозволяє уникнути цього, обгортаючи
        компонент і порівнюючи старі та нові пропси.
      </Paragraph>
      <Paragraph>
        Важливо розуміти: <code>memo</code> працює тільки з функціональними
        компонентами і порівнює лише пропси (не state або context). Також варто
        уникати передавання inline-функцій, обʼєктів або масивів у пропси, бо
        вони створюють нове посилання при кожному рендері і зводять оптимізацію
        нанівець.
      </Paragraph>
      <Paragraph>
        Якщо потрібна глибша або кастомна перевірка пропсів, <code>memo</code>{" "}
        приймає другим аргументом функцію{" "}
        <code>(prevProps, nextProps) =&gt; boolean</code> для ручного контролю,
        коли дозволяти перерендер.
      </Paragraph>
      <Title text="Приклад використання memo" />
      <Paragraph>MemoExample.tsx:</Paragraph>
      <Code
        code={`import { useState } from "react";
import classNames from "classnames";

import MemoExampleChild from "./MemoExampleChild";
import MemoExampleChild2 from "./MemoExampleChild2";

export default function MemoExample() {
  const [isBlack, setIsBlack] = useState(true);
  console.log("Parent Function Component rendered");
  const changeBtnColor = () => {
    setIsBlack((prev) => !prev);
  };

  return (
    <>
      <div className="py-2 flex items-center justify-center gap-3">
        <button
          onClick={changeBtnColor}
          className={classNames(
            "cursor-pointer p-2 rounded-lg",
            { "bg-black": isBlack },
            { "text-white": isBlack },
            { "bg-white": !isBlack },
            { "text-black": !isBlack }
          )}
        >
          Parent Function Component
        </button>
        <MemoExampleChild />
        <MemoExampleChild2 />
      </div>
    </>
  );
}
`}
      />
      <Paragraph>MemoExampleChild.tsx:</Paragraph>
      <Code
        code={`import { memo, useState } from "react";
          
function MemoExampleChild() {
  const [counter, setCounter] = useState(0);
  console.log("Child with memo rendered");

  const buttonClicked = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <button
      className="p-2 cursor-pointer bg-blue-500 rounded-lg"
      onClick={buttonClicked}
      type="button"
    >
      Child with memo: {counter}
    </button>
  );
}
MemoExampleChild.displayName = "MemoExampleChild";
export default memo(MemoExampleChild);`}
      />
      <Paragraph>MemoExampleChild2.tsx:</Paragraph>
      <Code
        code={`import { useState } from "react";

export default function MemoExampleChild2() {
  const [counter, setCounter] = useState(0);
  console.log("Child without memo rendered");

  const buttonClicked = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <button
      className="p-2 cursor-pointer bg-blue-500 rounded-lg"
      onClick={buttonClicked}
      type="button"
    >
      Child without memo: {counter}
    </button>
  );
}`}
      />
      <div className="flex">
        <button
          onClick={() => {
            setIsMemoExampleVisible((prev) => !prev);
          }}
          className="p-2 bg-red-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
        >
          {isMemoExampleVisible ? "Hide" : "Show"} Memo Example
        </button>
      </div>
      {isMemoExampleVisible && (
        <>
          <MemoExample />
          <p className="text-center italic text-xs">check console</p>
        </>
      )}
      <Title text="Використання PureComponent для оптимізації render" />{" "}
      <Paragraph>
        <code>PureComponent</code> — це спеціальний базовий клас у React для
        класових компонентів, який автоматично реалізує оптимізацію ререндеру на
        основі неглибокого порівняння <code>props</code> і <code>state</code>.
      </Paragraph>
      <Paragraph>
        На відміну від звичайного <code>Component</code>, який завжди викликає{" "}
        <code>render()</code> при зміні state або props,{" "}
        <code>PureComponent</code> пропускає ререндер, якщо нові значення{" "}
        <code>props</code> і <code>state</code> &quot;поверхнево&quot;
        збігаються зі старими.
      </Paragraph>
      <Paragraph>
        Це дозволяє уникати зайвих ререндерів, але потребує обережності: якщо
        передавати до компонента змінні з новими посиланнями (напр., нові
        масиви, обʼєкти або функції), <code>PureComponent</code> сприйме їх як
        зміну, навіть якщо дані фактично не змінилися.
      </Paragraph>
      <Paragraph>
        Також <code>PureComponent</code> не слід використовувати, якщо компонент
        покладається на глибоко вкладені структури або має побічні ефекти, які
        не повʼязані з пропсами чи стейтом.
      </Paragraph>
      <Title text="Приклад використання PureComponent" />{" "}
      <Paragraph>PureComponentExample.tsx:</Paragraph>
      <Code
        code={`import { Component } from "react";
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
`}
      />
      <Paragraph>PureComponentExampleChild.tsx:</Paragraph>
      <Code
        code={`import { PureComponent } from "react";
          
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

export default PureComponentChild;`}
      />
      <Paragraph>PureComponentExampleChild2.tsx:</Paragraph>
      <Code
        code={`import { Component } from "react";
          
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
`}
      />
      <div className="flex">
        <button
          onClick={() => {
            setIsPureComponentExampleVisible((prev) => !prev);
          }}
          className="p-2 bg-red-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
        >
          {isPureComponentExampleVisible ? "Hide" : "Show"} PureComponent
          Example
        </button>
      </div>
      {isPureComponentExampleVisible && (
        <>
          <PureComponentExample />
          <p className="text-center italic text-xs">check console</p>
        </>
      )}
    </Topic>
  );
}
