import CodeSnippet from "./components/codeSnippet/CodeSnippet";
import Header from "./components/header/Header";
import Topic from "./components/topic/Topic";
import Code from "./components/code/Code";
import LifeCycleComponent from "./components/lifyCycleComponent/LifeCycleComponent";
import { useState } from "react";

function App() {
  const [isLifeCycleComponentVisible, setIsLifeCycleComponentVisible] =
    useState(false);
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
        <Topic title="Компоненти і JSX">
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
        <Topic title="Class Component && Component Lifecycle">
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
            Приклад життєвого циклу
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
                setIsLifeCycleComponentVisible((prev) => !prev);
              }}
              className="p-2 bg-red-500 text-white rounded-md cursor-pointer mx-auto my-0 mt-2.5"
            >
              {isLifeCycleComponentVisible ? "Delete" : "Create"} Component
            </button>
          </div>
          {isLifeCycleComponentVisible && (
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
        </Topic>
      </div>
    </>
  );
}

export default App;
