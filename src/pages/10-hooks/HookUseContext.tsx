import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseContextExample from "../../components/hooksExamples/HookUseContextExample/HookUseContextExample";
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
        <Title text="Реальний приклад" />
        <Paragraph>
          <strong>HookUseContextExample.tsx:</strong>
        </Paragraph>
        <Code
          code={`import { createContext, useState } from "react";
import HookUseContextContainer from "./HookUseContextContainer";

export const themes = {
  light: {
    backgroundColor: "white",
    text: "black",
  },
  dark: {
    backgroundColor: "black",
    text: "white",
  },
};
export type UserContextType = {
  user: string;
  setUser: (user: string) => void;
};
export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function HookUseContextExample() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HookUseContextContainer></HookUseContextContainer>
    </UserContext.Provider>
  );
}`}
        />
        <Paragraph>
          <strong>HookUseContextContainer.tsx:</strong>
        </Paragraph>
        <Code
          code={`import HookUseContextButton from "./HookUseContextButton";
import HookUseContextText from "./HookUseContextText";

export default function HookUseContextContainer() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <HookUseContextText />
      <HookUseContextButton />
    </div>
  );
}`}
        />
        <Paragraph>
          <strong>HookUseContextButton.tsx:</strong>
        </Paragraph>
        <Code
          code={`import { useContext } from "react";
import { UserContext } from "./HookUseContextExample";

export default function HookUseContextButton() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("UserContext is missing");
  return (
    <button
      className="bg-white rounded p-2 text-gray-900 cursor-pointer"
      onClick={() => userContext.setUser("Gastello")}
    >
      Log In
    </button>
  );
}`}
        />
        <Paragraph>
          <strong>HookUseContextText.tsx:</strong>
        </Paragraph>

        <CodeSnippet
          code={`import { useContext } from "react";
import { UserContext } from "./HookUseContextExample";

export default function HookUseContextText() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("UserContext is missing");
  return (
    <span className="font-bold">
      {userContext.user ? userContext.user : "Guest"}
    </span>
  );
}`}
          result={<HookUseContextExample />}
        />
        <Paragraph>
          У прикладі створено контекст UserContext, який містить user (ім’я
          користувача) та setUser (функцію його оновлення). Контекст
          ініціалізується зі значенням undefined, щоб гарантувати помилку, якщо
          хтось спробує використати його поза межами Provider. У компоненті
          HookUseContextExample створюється стан користувача і передається через
          UserContext.Provider. Дочірні компоненти (HookUseContextText і
          HookUseContextButton) використовують useContext для читання і зміни
          значення. Таким чином, контекст дозволяє зручно передавати стан без
          прокидування props на кожному рівні.
        </Paragraph>
      </Topic>
    </>
  );
}
