import CodeSnippet from "./components/codeSnippet/CodeSnippet";
import Header from "./components/header/Header";
import Topic from "./components/topic/Topic";
import Code from "./components/code/Code";
import LifeCycleComponent from "./components/lifeCycleClassComponent/LifeCycleClassComponent";
import { useState } from "react";
import ClassButtonCounter from "./components/classButtonCounter/ClassButtonCounter";
import LifeCycleFunctionComponent from "./components/lifeCycleFunctionComponent/LifeCycleFunctionComponent";
import MemoExample from "./components/memoExample/MemoExample";
import PureComponentExample from "./components/pureComponentExample/PureComponentExample";
import MyRouter, { myRouterNavigate } from "./components/myRouter/MyRouter";
import MyRouterHome from "./components/myRouter/MyRouterHome";
import MyRouterCode from "./components/myRouter/MyRouterCode";
import MyRouterInfo from "./components/myRouter/MyRouterInfo";

function App() {
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
    <>
      <Header />
      <div className="wrapper py-[10px]">
        <Topic title="Початок">
          <div className="text-[20px] font-semibold mt-0">Документація</div>
          <p>
            Офіційна документація: <a href="https://react.dev/">react.dev</a>
          </p>
          <div className="text-[20px] font-semibold mt-[10px]">
            Створення проєкту
          </div>
          <p>npm create vite@latest</p>
        </Topic>
        <Topic title="Функціональні Компоненти і JSX">
          <div className="text-[20px] font-semibold mt-[10px]">
            Що таке компонент?
          </div>
          <p>
            Компонент — це функція, яка повертає JSX (розмітку схожу на HTML).
            Всі React-додатки складаються з компонентів.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Як створити компонент?
          </div>
          <p>Створи `.jsx` або `.tsx` файл і експортуй функцію:</p>
          <Code
            code="function Header() {
  return <header>...</header>;
}

export default Header;"
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Як використати компонент?
          </div>
          <p>Імпортуй і використовуй у JSX як HTML-тег:</p>
          <Code
            code='import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}'
          />

          <div className="text-[20px] font-semibold mt-[10px]">JSX</div>
          <p>
            JSX — це синтаксис, схожий на HTML, який компілюється у JavaScript
            функції. Він дозволяє писати розмітку прямо у JS.
          </p>
        </Topic>
        <Topic title="Props">
          <div className="text-[20px] font-semibold mt-0">Що таке props?</div>
          <p>
            Props (від &quot;properties&quot;) — це механізм передачі даних від
            батьківського компонента до дочірнього. Вони роблять компоненти
            гнучкими та багаторазово використовуваними.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Основні властивості
          </div>
          <ul className="list-disc list-inside">
            <li>Props передаються як атрибути JSX-елемента.</li>
            <li>Компонент приймає props як параметр функції.</li>
            <li>Props є незмінними (read-only).</li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад передачі props
          </div>

          <CodeSnippet
            code='export function Welcome(props: welcomeProps) {
  return <h1>Привіт, {props.name}!</h1>;
};

<Welcome name="Gastello"/>
'
            result="Привіт, Gastello!"
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Деструктуризація props
          </div>
          <p>
            Замість <code>props.name</code> часто використовують
            деструктуризацію:
          </p>
          <CodeSnippet
            code={`function Welcome({ name }) {
  return <h1>Привіт, {name}!</h1>;
}`}
            result="Привіт, Gastello!"
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Що таке children?
          </div>
          <p>
            <code>children</code> — це спеціальний проп, який містить вкладений
            JSX-контент, переданий між відкриваючим і закриваючим тегом
            компонента.
          </p>
          <CodeSnippet
            code={`function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <p>Привіт зсередини!</p>
</Card>`}
            result={
              <div className="card">
                <p>Привіт зсередини!</p>
              </div>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Типізація props у TypeScript
          </div>
          <p>
            Для безпечної роботи з props у TypeScript використовують інтерфейси
            або типи:
          </p>
          <Code
            code="type TopicProps = {
    title: string;
    children: React.ReactNode;
  };"
          />
          <p>І передають у компонент так:</p>
          <Code
            code="function Topic({ title, children }: TopicProps) {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }"
          />
        </Topic>
        <Topic title="useState і керування станом">
          <div className="text-[20px] font-semibold mt-0">
            Що таке useState?
          </div>
          <p>
            <code>useState</code> — це хук React, який дозволяє додавати
            локальний стан до функціонального компонента.
          </p>
          <p>
            Він повертає масив з двох значень: поточне значення стану і функцію
            для його оновлення:
          </p>
          <Code code="const [state, setState] = useState(initialValue);" />

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад: розгортання/згортання вмісту
          </div>
          <p>
            Ми можемо використати <code>useState</code>, щоб показувати або
            приховувати контент при кліку:
          </p>
          <Code
            code="function Topic({ title, children }: TopicProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div onClick={toggleVisibility}>
        {title} {isOpen ? '▼' : '▶'}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}"
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Чому краще <code>setIsOpen(prev =&gt; !prev)</code>, а не{" "}
            <code>setIsOpen(!isOpen)</code>?
          </div>
          <p>
            У React оновлення стану асинхронне — тобто, нове значення{" "}
            <code>isOpen</code> може бути не відразу доступне після виклику{" "}
            <code>setIsOpen</code>. Тому, коли нове значення залежить від
            попереднього, слід використовувати функціональний варіант:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <code>setIsOpen(!isOpen)</code> може дати некоректний результат,
              якщо в черзі вже є оновлення.
            </li>
            <li>
              <code>setIsOpen(prev =&gt; !prev)</code> гарантує, що ми працюємо
              з актуальним станом.
            </li>
          </ul>
          <p>
            Це критично важливо, коли кілька оновлень стану можуть відбуватися
            швидко або одночасно.
          </p>
        </Topic>
        <Topic title="React Developer Tools">
          <div className="text-[20px] font-semibold mt-0">
            Що таке React Developer Tools?
          </div>
          <p>
            Це офіційне розширення для браузера (Chrome / Firefox), яке дозволяє
            досліджувати React-компоненти прямо на сторінці.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Як встановити?
          </div>
          <ul className="list-disc list-inside">
            <li>Перейди в Chrome Web Store або Firefox Add-ons.</li>
            <li>
              Знайди <strong>React Developer Tools</strong>.
            </li>
            <li>Встанови як звичайне розширення.</li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">
            Що дозволяє робити?
          </div>
          <ul className="list-disc list-inside">
            <li>
              Переглядати дерево React-компонентів у вкладці{" "}
              <code>⚛️ Components</code>.
            </li>
            <li>Дивитися значення props і state кожного компонента.</li>
            <li>
              Редагувати props/state в реальному часі (для тестування UI).
            </li>
            <li>
              Аналізувати performance у вкладці <code>⚛️ Profiler</code>.
            </li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">
            Чому це важливо?
          </div>
          <p>
            Без цього інструменту ти як React-розробник працюєш «наосліп». Він
            критично важливий для налагодження і розуміння, як реально
            поводиться твій код.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Швидкий приклад
          </div>
          <p>Якщо у тебе є компонент з пропами:</p>
          <CodeSnippet
            code={`function Welcome({ name }) {
  return <>Привіт, {name}!</>;
}

<Welcome name="Gastello" />`}
            result="Привіт, Gastello!"
          />
          <p>
            У React Developer Tools ти побачиш компонент <code>Welcome</code> і
            проп <code>name: &quot;Gastello&quot;</code> прямо в браузері.
          </p>
        </Topic>
        <Topic title="CSS у React">
          <div className="text-[20px] font-semibold mt-0">
            Основні способи стилізації
          </div>
          <p>У React існує кілька підходів до стилізації компонентів:</p>
          <ul className="list-disc list-inside">
            <li>CSS Modules</li>
            <li>Бібліотека classnames</li>
            <li>Styled-components</li>
            <li>UI-бібліотеки (Bootstrap, MUI)</li>
            <li>Utility-first CSS (Tailwind CSS)</li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">CSS Modules</div>
          <p>
            Дає можливість інкапсулювати стилі для кожного компонента окремо.
            Імпортується як об&apos;єкт, а класи використовуються через{" "}
            <code>className={`{classes["ім'я-класу"]}`}</code>.
          </p>
          <CodeSnippet
            code={`// Button.module.css
.button {
  background-color: blue;
  color: white;
}

// Button.tsx
import classes from './Button.module.css';

function Button() {
  return <button className={classes["button"]}>Натисни</button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Натисни
              </button>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            classnames (npm)
          </div>
          <p>
            Дозволяє динамічно формувати <code>className</code> зі змінних. У
            React це корисно для умовного застосування стилів.
          </p>
          <CodeSnippet
            code={`import classNames from 'classnames';

function Button({ primary }) {
  const btnClass = classNames('btn', { 'btn-primary': primary });
  return <button className={btnClass}>Натисни</button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Натисни
              </button>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Styled-components
          </div>
          <p>
            Підхід CSS-in-JS. Стилі описуються прямо в JS-файлі. Працює лише
            після встановлення бібліотеки <code>styled-components</code>.
          </p>
          <CodeSnippet
            code={`import styled from 'styled-components';

const Button = styled.button\`
  background-color: blue;
  color: white;
\`;

function App() {
  return <Button>Натисни</Button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Натисни
              </button>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Bootstrap (npm)
          </div>
          <p>
            Bootstrap — популярна CSS-бібліотека. У JSX клас прописується через{" "}
            <code>className</code>, напр.{" "}
            <code>&quot;btn btn-primary&quot;</code>.
          </p>
          <CodeSnippet
            code={`function Button() {
  return <button className="btn btn-primary">Натисни</button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Натисни
              </button>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Material UI (MUI)
          </div>
          <p>
            MUI — компонентна UI-бібліотека з вбудованими стилями. Працює після
            підключення через npm.
          </p>
          <CodeSnippet
            code={`import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Натисни</Button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Натисни
              </button>
            }
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Tailwind CSS
          </div>
          <p>
            Tailwind — utility-first підхід, коли стилі задаються напряму в{" "}
            <code>className</code> через утилітні класи.
          </p>
          <CodeSnippet
            code={`function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">Натисни</button>;
}`}
            result={
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Натисни
              </button>
            }
          />
        </Topic>
        <Topic title="Class Components">
          <div className="text-[20px] font-semibold mt-0">
            Компоненти як функції та класи
          </div>
          <p>У React можна створювати компоненти двома способами:</p>
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
          <p>
            Класові компоненти — це старіший спосіб створення компонентів у
            React, який базується на класах ES6. Вони мають власний state,
            приймають props, і підтримують методи життєвого циклу.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Основні особливості
          </div>
          <ul className="list-disc list-inside">
            <li>
              Оголошуються як класи, що наслідують від{" "}
              <code>React.Component</code>.
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Передача props
          </div>
          <p>
            Класовий компонент приймає props через конструктор і зберігає їх у{" "}
            <code>this.props</code>.
          </p>
          <Code
            code={`class Welcome extends React.Component {
  render() {
    return <h1>Привіт, {this.props.name}!</h1>;
  }
}`}
          />

          <div className="text-[20px] font-semibold mt-[10px]">
            Використання state
          </div>
          <p>
            State — це приватні дані компонента. Змінюється через{" "}
            <code>this.setState()</code>.
          </p>
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Ініціалізація через constructor
          </div>
          <p>
            Якщо потрібно ініціалізувати state або отримати доступ до props у
            класі — це робиться у <code>constructor</code>:
          </p>
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Типізація з TypeScript
          </div>
          <p>У TypeScript класовий компонент можна типізувати так:</p>
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
          <p>
            У класових компонентах методи за замовчуванням не прив’язані до
            екземпляру класу, тому потрібно правильно працювати з контекстом{" "}
            <code>this</code>, особливо у обробниках подій.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Стрілочні методи</strong> (наприклад,{" "}
              <code>{`buttonClicked = () => {}`}</code>) автоматично прив’язують{" "}
              <code>this</code> до екземпляра класу. Це найпростіший та
              безпечний спосіб.
            </li>
            <li>
              Якщо метод оголошений як звичайна функція{" "}
              <code>{`buttonClicked() {}`}</code>, тоді потрібно вручну
              прив’язувати контекст у конструкторі:{" "}
              <code>this.buttonClicked = this.buttonClicked.bind(this)</code>.
            </li>
            <li>
              Використання стрілочної функції безпосередньо у JSX, як{" "}
              <code>{`onClick={() => this.buttonClicked()}`}</code>, створює
              нову функцію на кожен рендер і може погіршувати продуктивність.
            </li>
          </ul>
          <p>
            Тому рекомендовано оголошувати обробники як стрілочні методи або
            прив’язувати їх у конструкторі.
          </p>
          <p>Приклад правильного оголошення обробника:</p>

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
          <p>
            Якщо ж обробник не стрілочний, потрібна прив’язка в конструкторі:
          </p>
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад Button Counter:
          </div>
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
          <div className="text-[20px] font-semibold mt-[10px]">
            Якщо state має кілька полів
          </div>
          <p>
            У класових компонентах{" "}
            <strong>state — це завжди один обʼєкт</strong>. Тому, якщо потрібно
            зберігати кілька значень, їх слід обʼєднувати у загальний обʼєкт:
          </p>
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
          <p>
            <strong>setState</strong> не замінює повністю state, а{" "}
            <em>мерджить</em> частинами:
          </p>
          <Code
            code={`this.setState({ count: this.state.count + 1 });
// Оновить тільки count, інші поля залишаться без змін`}
          />
          <p>
            Якщо state має вкладену структуру — слід уникати мутацій, і
            оновлювати глибокі поля через копіювання:
          </p>
          <Code
            code={`this.setState(prev => ({
  user: {
    ...prev.user,
    name: "New Name"
  }
}))`}
          />

          <p>
            Якщо state дуже великий, його можна логічно розбити на блоки
            (наприклад: <code>formState</code>, <code>uiState</code>,{" "}
            <code>dataState</code>), і використовувати окремі хелпери для
            оновлення.
          </p>

          <p>
            Саме складність роботи зі складним state є однією з причин, чому
            класові компоненти все рідше використовуються — у функціональних
            компонентах <code>useState</code> або <code>useReducer</code> дають
            більше гнучкості.
          </p>
        </Topic>
        <Topic title="Component Lifecycle. PureComponent & memo">
          <div className="text-[20px] font-semibold mt-[10px]">
            Що таке життєвий цикл?
          </div>
          <p>
            Компонент проходить кілька етапів під час свого &quot;життя&quot; в
            DOM: створення, оновлення та знищення. Кожен з них має свої методи
            життєвого циклу.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Життєвий цикл класового компонента
          </div>
          <ul className="list-disc list-inside">
            <li>
              <code>constructor</code> — ініціалізація стану, викликається
              першим.
            </li>
            <li>
              <code>getDerivedStateFromProps</code> — (static) викликається
              перед рендером при оновленні props або state. Застосовується
              рідко, зазвичай для синхронізації state з props. Не має доступу до
              this, бо є статичним методом.
            </li>
            <li>
              <code>componentWillMount ⚠️</code> — застарілий метод, викликався
              перед render, але вилучений у Strict Mode. Його використовували
              для початкової логіки до першого рендеру, але зараз замінюється на
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
              <code>shouldComponentUpdate</code> — дає змогу оптимізувати
              оновлення (рідко використовується вручну).
            </li>
            <li>
              <code>componentDidUpdate</code> — викликається після оновлення
              props або state.
            </li>
            <li>
              <code>componentWillUnmount</code> — викликається перед видаленням
              компонента з DOM.
            </li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад життєвого циклу класового компонента
          </div>
          <p>
            Нижче — приклад класового компонента, який демонструє ключові етапи:
          </p>

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
          <div className="text-[20px] font-semibold mt-[10px]">
            Коли який метод викликається?
          </div>
          <ul className="list-disc list-inside">
            <li>
              <strong>Mounting:</strong> constructor → getDerivedStateFromProps
              → render → componentDidMount
            </li>
            <li>
              <strong>Updating:</strong> getDerivedStateFromProps →
              shouldComponentUpdate → render → componentDidUpdate
            </li>
            <li>
              <strong>Unmounting:</strong> componentWillUnmount
            </li>
          </ul>

          <div className="text-[20px] font-semibold mt-[10px]">
            Навіщо це потрібно?
          </div>
          <ul className="list-disc list-inside">
            <li>Отримувати дані з API після монтування (componentDidMount)</li>
            <li>
              Очищати таймери, підписки при видаленні (componentWillUnmount)
            </li>
            <li>Оптимізовувати рендери (shouldComponentUpdate)</li>
            <li>Реагувати на зміну props/state (componentDidUpdate)</li>
            <li>
              Синхронізувати стан зі змінами props (getDerivedStateFromProps) —
              викликається перед рендером, коли змінилися props або state.
              Застосовується для оновлення внутрішнього state на основі вхідних
              props.
            </li>
          </ul>
          <div className="text-[20px] font-semibold mt-[10px]">
            Життєвий цикл функціонального компонента
          </div>
          <p>
            Функціональні компоненти не мають класичного життєвого циклу.
            Замість цього для виконання побічних ефектів використовується хук{" "}
            <code>useEffect</code>.
          </p>

          <ul className="list-disc ml-6">
            <li>
              <code>{`useEffect(() => { ... }, [])`}</code> виконується один раз
              після першого рендера (аналог componentDidMount).
            </li>
            <li>
              <code>{`useEffect(() => { ... })`}</code> або{" "}
              <code>{`useEffect(() => { ... }, [dependencies])`}</code>{" "}
              виконується після кожного рендера або при зміні залежностей
              відповідно (аналог componentDidUpdate).
            </li>
            <li>
              Функція, яка повертається з <code>useEffect</code>, виконується
              перед наступним викликом ефекту або при демонтажі компонента
              (аналог <code>componentWillUnmount</code>).
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад життєвого циклу функціонального компонента
          </div>
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
              {isLifeCycleFunctionComponentVisible ? "Delete" : "Create"}{" "}
              Component
            </button>
          </div>
          {isLifeCycleFunctionComponentVisible && (
            <>
              <LifeCycleFunctionComponent text="Update Component" />
              <p className="text-center italic text-xs">check console</p>
            </>
          )}
          <div className="text-[20px] font-semibold mt-[10px]">
            Використання memo для оптимізації render
          </div>
          <p className="mb-[10px]">
            <code>memo</code> — це функція з React, яка оптимізує продуктивність
            функціональних компонентів, запобігаючи їх повторному рендеру, якщо
            пропси не змінилися.
          </p>

          <p className="mb-[10px]">
            За замовчуванням React рендерить усі дочірні компоненти при кожному
            рендері батьківського, навіть якщо пропси дочірнього компонента не
            змінились. <code>memo</code> дозволяє уникнути цього, обгортаючи
            компонент і порівнюючи старі та нові пропси.
          </p>

          <p className="mb-[10px]">
            Важливо розуміти: <code>memo</code> працює тільки з функціональними
            компонентами і порівнює лише пропси (не state або context). Також
            варто уникати передавання inline-функцій, обʼєктів або масивів у
            пропси, бо вони створюють нове посилання при кожному рендері і
            зводять оптимізацію нанівець.
          </p>

          <p>
            Якщо потрібна глибша або кастомна перевірка пропсів,{" "}
            <code>memo</code> приймає другим аргументом функцію{" "}
            <code>(prevProps, nextProps) =&gt; boolean</code> для ручного
            контролю, коли дозволяти перерендер.
          </p>
          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад використання memo
          </div>
          <p>MemoExample.tsx:</p>
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
          <p className="mt-[10px]">MemoExampleChild.tsx:</p>
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
          <p className="mt-[10px]">MemoExampleChild2.tsx:</p>
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

          <div className="text-[20px] font-semibold mt-[10px]">
            Використання PureComponent для оптимізації render
          </div>
          <p className="mb-[10px]">
            <code>PureComponent</code> — це спеціальний базовий клас у React для
            класових компонентів, який автоматично реалізує оптимізацію
            ререндеру на основі неглибокого порівняння <code>props</code> і{" "}
            <code>state</code>.
          </p>

          <p className="mb-[10px]">
            На відміну від звичайного <code>Component</code>, який завжди
            викликає <code>render()</code> при зміні state або props,{" "}
            <code>PureComponent</code> пропускає ререндер, якщо нові значення{" "}
            <code>props</code> і <code>state</code> &quot;поверхнево&quot;
            збігаються зі старими.
          </p>

          <p className="mb-[10px]">
            Це дозволяє уникати зайвих ререндерів, але потребує обережності:
            якщо передавати до компонента змінні з новими посиланнями (напр.,
            нові масиви, обʼєкти або функції), <code>PureComponent</code>{" "}
            сприйме їх як зміну, навіть якщо дані фактично не змінилися.
          </p>

          <p>
            Також <code>PureComponent</code> не слід використовувати, якщо
            компонент покладається на глибоко вкладені структури або має побічні
            ефекти, які не повʼязані з пропсами чи стейтом.
          </p>

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад використання PureComponent
          </div>
          <p className="mt-[10px]">PureComponentExample.tsx:</p>
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
          <p className="mt-[10px]">PureComponentExampleChild.tsx:</p>
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

          <p className="mt-[10px]">PureComponentExampleChild2.tsx:</p>
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
        <Topic title="Routing">
          <div className="flex gap-2.5 justify-center">
            <button
              className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
              type="button"
              onClick={() => myRouterNavigate("/")}
            >
              Go to MyRouterHome
            </button>
            <button
              className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
              type="button"
              onClick={() => myRouterNavigate("/info")}
            >
              Go to MyRouterInfo
            </button>
            <button
              className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
              type="button"
              onClick={() => myRouterNavigate("/code")}
            >
              Go to MyRouterCode
            </button>
          </div>
          <MyRouter
            routes={[
              { path: "/", component: MyRouterHome },
              { path: "/info", component: MyRouterInfo },
              { path: "/code", component: MyRouterCode },
            ]}
          />
        </Topic>
      </div>
    </>
  );
}

export default App;
