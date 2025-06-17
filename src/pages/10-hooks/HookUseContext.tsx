import Code from "../../components/code/Code";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseContext() {
  return (
    <>
      <Topic title="✅ Хук useContext">
        <Paragraph>
          <strong>React Context</strong> — це механізм для глобального
          передавання даних у дерево компонентів без пропс-дрилінгу (коли
          доводиться передавати пропси через багато рівнів).
        </Paragraph>
        <Code
          code={`<MyContext.Provider value={"some data"}>
  <ComponentA />
</MyContext.Provider>`}
        />
        <Paragraph>
          Будь-який компонент всередині ComponentA може отримати &quot;some
          data&quot; через useContext.
        </Paragraph>
        <Title text="Як це працює (спрощено)" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>Ти створюєш контекст через createContext(defaultValue)</li>
            <li>Обгортаєш дерево в Provider і передаєш value</li>
            <li>
              Будь-який нащадок може дістати value через useContext(Context)
            </li>
          </ul>
        </Paragraph>
        <Title text="Синтаксис" />
        <Paragraph>
          <strong>1. Створити контекст:</strong>
        </Paragraph>
        <Code
          code={`import { createContext } from "react";

export const ThemeContext = createContext<"light" | "dark">("light");`}
        />
        <Paragraph>
          <strong>2. Дати значення через Provider:</strong>
        </Paragraph>
        <Code
          code={`<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>`}
        />
        <Paragraph>
          <strong>3. Дістати значення в компоненті:</strong>
        </Paragraph>
        <Code code={`const theme = useContext(ThemeContext); // "dark"`} />
        <Title text="Коли використовувати Context" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "Випадок",
              "Контекст",
              "Тема (dark/light)",
              "✅ Так",
              "Аутентифікація (isLoggedIn)",
              "✅ Так",
              "Мова/локалізація (locale)",
              "✅ Так",
              "Вибраний продукт/товар",
              "❌ Ні — краще state в ближчому компоненті або Zustand",
              "Масив складних даних",
              "❌ Ні — обережно, може спричинити ререндери",
            ]}
          />
        </Paragraph>
        <Title text="Проблема з Context: ререндери" />
        <Paragraph>
          Весь компонент, що використовує useContext, перерендериться, якщо
          value зміниться — навіть якщо частини значення не змінились.
        </Paragraph>
        <Code
          code="const MyContext = createContext({ a: 1, b: 2 });

const App = () => {
  const [val, setVal] = useState({ a: 1, b: 2 });

  return (
    <MyContext.Provider value={val}>
      <Child />
    </MyContext.Provider>
  );
};

// 🔻 Це перерендериться при кожній зміні val — навіть якщо b не зміниться
const Child = () => {
  const ctx = useContext(MyContext);
  return <div>{ctx.b}</div>;
};
"
        />
        <Paragraph>
          Оптимізація: або розділяй контексти, або мемоізуй значення, або краще
          — використовуй Zustand / Redux.
        </Paragraph>
        <Title text="useContext vs Zustand/Redux" />
        <Paragraph>
          <Table
            columnsCount={3}
            elementsList={[
              "",
              "Context + useContext",
              "Zustand / Redux",
              "Простота",
              "✅ Простий",
              "❌ Складніше",
              "Ререндер контроль",
              "❌ Слабкий",
              "✅ Потужний",
              "Масштабування",
              "❌ Складно",
              "✅ Легко",
              "DevTools",
              "❌ Немає",
              "✅ Так (Redux/Zustand)",
            ]}
          />
        </Paragraph>
        <Title text="Типові граблі:" />
        <Paragraph>
          <strong>1. Передача нового об&apos;єкта кожного разу:</strong>
        </Paragraph>
        <Code
          code={`<MyContext.Provider value={{ a: 1 }} /> // ❌
// Новий об'єкт кожен рендер → всі useContext → rerender
`}
        />
        <Paragraph>✅ Виправлення:</Paragraph>
        <Code
          code={`const value = useMemo(() => ({ a: 1 }), []);
<MyContext.Provider value={value} />`}
        />
        <Paragraph>
          <strong>2. Неправильне використання без Provider:</strong>
        </Paragraph>
        <Code
          code={`const ctx = useContext(MyContext); // Отримає defaultValue, не поточне`}
        />
        <Paragraph>
          <strong>3. useContext у неправильному порядку:</strong> <br />
          Не можна викликати useContext умовно. Завжди має бути на верхньому
          рівні функції-компонента.
        </Paragraph>
      </Topic>
    </>
  );
}
