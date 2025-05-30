import "./App.css";
import Header from "./components/header/Header";
import Topic from "./components/topic/Topic";

function App() {
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
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Welcome(props) {
  return <h1>Привіт, {props.name}!</h1>;
}

<Welcome name="Gastello" />`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">
            Деструктуризація props
          </div>
          <p>
            Замість <code>props.name</code> часто використовують
            деструктуризацію:
          </p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Welcome({ name }) {
  return <h1>Привіт, {name}!</h1>;
}`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">
            Що таке children?
          </div>
          <p>
            <code>children</code> — це спеціальний проп, який містить вкладений
            JSX-контент, переданий між відкриваючим і закриваючим тегом
            компонента.
          </p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Card({ children }) {
    return <div className="card">{children}</div>;
  }

  <Card>
    <p>Привіт зсередини!</p>
  </Card>`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">
            Типізація props у TypeScript
          </div>
          <p>
            Для безпечної роботи з props у TypeScript використовують інтерфейси
            або типи:
          </p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`type TopicProps = {
    title: string;
    children: React.ReactNode;
  };`}</code>
          </pre>
          <p>І передають у компонент так:</p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Topic({ title, children }: TopicProps) {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }`}</code>
          </pre>
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
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`const [state, setState] = useState(initialValue);`}</code>
          </pre>

          <div className="text-[20px] font-semibold mt-[10px]">
            Приклад: розгортання/згортання вмісту
          </div>
          <p>
            Ми можемо використати <code>useState</code>, щоб показувати або
            приховувати контент при кліку:
          </p>
          <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
            <code>{`function Topic({ title, children }: TopicProps) {
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
}`}</code>
          </pre>

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
      </div>
    </>
  );
}

export default App;
