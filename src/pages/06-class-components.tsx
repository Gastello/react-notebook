import ClassButtonCounter from "../components/classButtonCounter/ClassButtonCounter";
import Code from "../components/code/Code";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function ClassComponentsTopic() {
  return (
    <Topic title="Class Components">
      <div className="text-[20px] font-semibold mt-0">
        Компоненти як функції та класи
      </div>
      <Paragraph>
        У React можна створювати компоненти двома способами:
      </Paragraph>
      <ul className="list-disc list-inside">
        <li>
          <strong>Функціональні компоненти</strong> — прості, короткі,
          використовуються в 95% випадків з хуками.
        </li>
        <li>
          <strong>Класові компоненти</strong> — старіший підхід, але все ще
          використовується, особливо для роботи з життєвим циклом.
        </li>
      </ul>
      <div className="text-[20px] font-semibold mt-0">
        Що таке класовий компонент?
      </div>
      <Paragraph>
        Класові компоненти — це старіший спосіб створення компонентів у React,
        який базується на класах ES6. Вони мають власний state, приймають props,
        і підтримують методи життєвого циклу.
      </Paragraph>
      <Title text="Основні особливості" />{" "}
      <ul className="list-disc list-inside">
        <li>
          Оголошуються як класи, що наслідують від <code>React.Component</code>.
        </li>
        <li>
          Обовʼязково мають метод <code>render()</code>, який повертає JSX.
        </li>
        <li>
          Можуть мати власний <code>state</code> та методи життєвого циклу.
        </li>
        <li>
          Props передаються через <code>this.props</code>.
        </li>
      </ul>
      <Title text="Передача props" />{" "}
      <Paragraph>
        Класовий компонент приймає props через конструктор і зберігає їх у{" "}
        <code>this.props</code>.
      </Paragraph>
      <Code
        code={`class Welcome extends React.Component {
  render() {
    return <h1>Привіт, {this.props.name}!</h1>;
  }
}`}
      />
      <Title text="Використання state" />{" "}
      <Paragraph>
        State — це приватні дані компонента. Змінюється через{" "}
        <code>this.setState()</code>.
      </Paragraph>
      <Code
        code={`class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Клікнули: {this.state.count}
      </button>
    );
  }
}`}
      />
      <Title text="Ініціалізація через constructor" />{" "}
      <Paragraph>
        Якщо потрібно ініціалізувати state або отримати доступ до props у класі
        — це робиться у <code>constructor</code>:
      </Paragraph>
      <Code
        code={`class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.initialText };
  }

  render() {
    return <p>{this.state.text}</p>;
  }
}`}
      />
      <Title text="Типізація з TypeScript" />{" "}
      <Paragraph>
        У TypeScript класовий компонент можна типізувати так:
      </Paragraph>
      <Code
        code={`type MessageProps = { initialText: string };
type MessageState = { text: string };

class Message extends React.Component<MessageProps, MessageState> {
  constructor(props: MessageProps) {
    super(props);
    this.state = { text: props.initialText };
  }

  render() {
    return <p>{this.state.text}</p>;
  }
}`}
      />
      <div className="text-[20px] font-semibold mt-[10px]">
        Особливості методів класового компонента та робота з контекстом{" "}
        <code>this</code>
      </div>
      <Paragraph>
        У класових компонентах методи за замовчуванням не прив’язані до
        екземпляру класу, тому потрібно правильно працювати з контекстом{" "}
        <code>this</code>, особливо у обробниках подій.
      </Paragraph>
      <ul className="list-disc list-inside">
        <li>
          <strong>Стрілочні методи</strong> (наприклад,{" "}
          <code>{`buttonClicked = () => {}`}</code>) автоматично прив’язують{" "}
          <code>this</code> до екземпляра класу. Це найпростіший та безпечний
          спосіб.
        </li>
        <li>
          Якщо метод оголошений як звичайна функція{" "}
          <code>{`buttonClicked() {}`}</code>, тоді потрібно вручну прив’язувати
          контекст у конструкторі:{" "}
          <code>this.buttonClicked = this.buttonClicked.bind(this)</code>.
        </li>
        <li>
          Використання стрілочної функції безпосередньо у JSX, як{" "}
          <code>{`onClick={() => this.buttonClicked()}`}</code>, створює нову
          функцію на кожен рендер і може погіршувати продуктивність.
        </li>
      </ul>
      <Paragraph>
        Тому рекомендовано оголошувати обробники як стрілочні методи або
        прив’язувати їх у конструкторі.
      </Paragraph>
      <Paragraph>Приклад правильного оголошення обробника:</Paragraph>
      <Code
        code={`class ButtonCounter extends React.Component {
  state = { count: 0 };

  // Прив’язка this автоматично
  buttonClicked = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.buttonClicked}>
        Клікнули: {this.state.count}
      </button>
    );
  }
}`}
      />
      <Paragraph>
        Якщо ж обробник не стрілочний, потрібна прив’язка в конструкторі:
      </Paragraph>
      <Code
        code={`class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.buttonClicked = this.buttonClicked.bind(this); // Прив’язка контексту
  }

  buttonClicked() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  render() {
    return (
      <button onClick={this.buttonClicked}>
        Клікнули: {this.state.count}
      </button>
    );
  }
}`}
      />
      <Title text="Приклад Button Counter:" />{" "}
      <Code
        code={`import { Component } from "react";
            
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
}`}
      />
      <div className="mt-[10px]">
        <ClassButtonCounter btnText="Add 1" />
      </div>
      <Title text="Якщо state має кілька полів" />{" "}
      <Paragraph>
        У класових компонентах <strong>state — це завжди один обʼєкт</strong>.
        Тому, якщо потрібно зберігати кілька значень, їх слід обʼєднувати у
        загальний обʼєкт:
      </Paragraph>
      <Code
        code={`type State = {
  count: number;
  isLoading: boolean;
  name: string;
};

class Example extends React.Component<{}, State> {
  state = {
    count: 0,
    isLoading: false,
    name: "",
  };

  render() {
    return <div>{this.state.name}</div>;
  }
}`}
      />
      <Paragraph>
        <strong>setState</strong> не замінює повністю state, а <em>мерджить</em>{" "}
        частинами:
      </Paragraph>
      <Code
        code={`this.setState({ count: this.state.count + 1 });
// Оновить тільки count, інші поля залишаться без змін`}
      />
      <Paragraph>
        Якщо state має вкладену структуру — слід уникати мутацій, і оновлювати
        глибокі поля через копіювання:
      </Paragraph>
      <Code
        code={`this.setState(prev => ({
  user: {
    ...prev.user,
    name: "New Name"
  }
}))`}
      />
      <Paragraph>
        Якщо state дуже великий, його можна логічно розбити на блоки (наприклад:{" "}
        <code>formState</code>, <code>uiState</code>, <code>dataState</code>), і
        використовувати окремі хелпери для оновлення.
      </Paragraph>
      <Paragraph>
        Саме складність роботи зі складним state є однією з причин, чому класові
        компоненти все рідше використовуються — у функціональних компонентах{" "}
        <code>useState</code> або <code>useReducer</code> дають більше
        гнучкості.
      </Paragraph>
    </Topic>
  );
}
