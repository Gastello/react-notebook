import "./App.css";
import CodeSnippet from "./components/codeSnippet/CodeSnippet";
import Header from "./components/header/Header";
import Topic from "./components/topic/Topic";
import Code from "./components/code/Code";

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
      </div>
    </>
  );
}

export default App;
