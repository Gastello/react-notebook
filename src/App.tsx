import "./App.css";
import Header from "./components/header/Header";
import Topic from "./components/topic/Topic";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper py-[10px]">
        <Topic title="Початок">
          <div className="text-[20px] font-semibold mt-0">
            Документація
          </div>
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
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Header() {
            return <header>...</header>;
          }

export default Header;`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">
            Як використати компонент?
          </div>
          <p>Імпортуй і використовуй у JSX як HTML-тег:</p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
    </>
  );
}`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">JSX</div>
          <p>
            JSX — це синтаксис, схожий на HTML, який компілюється у JavaScript
            функції. Він дозволяє писати розмітку прямо у JS.
          </p>
        </Topic>
      </div>
    </>
  );
}

export default App;
