import Code from "../../components/code/Code";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseRef() {
  return (
    <>
      <Topic title="✅ Хук useRef">
        <Paragraph>
          <strong>useRef</strong> — це хук, який повертає &quot;mutable
          object&quot;, що зберігається поза циклом ререндерів.
        </Paragraph>
        <Code
          code={`const ref = useRef(0);
// ref.current === 0`}
        />
        <Title text="Основні властивості useRef" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "Властивість",
              "Пояснення",
              "ref.current",
              "Саме тут зберігається значення",
              "useRef(...)",
              "Повертає обʼєкт { current: ... }, який НЕ оновлює компонент при зміні",
              "не викликає ререндер",
              "Зміна ref.current НЕ спричиняє повторного рендеру компонента",
              "постійне посилання",
              "Після першого рендеру ref не змінюється: зберігає одне й те саме посилання",
            ]}
          />
        </Paragraph>
        <Title text="Для чого useRef використовується?" />
        <Paragraph>
          <strong>Посилання на DOM-елемент</strong>
        </Paragraph>
        <Code
          code={`const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus(); // Фокусує інпут після рендеру
}, []);

return <input ref={inputRef} />;`}
        />
        <Paragraph>
          <strong>Збереження mutable значення між рендерами</strong> <br />
          Тут countRef.current зберігає останнє значення без повторного рендеру.
        </Paragraph>
        <Code
          code={`const countRef = useRef(0);

useEffect(() => {
  const id = setInterval(() => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  }, 1000);

  return () => clearInterval(id);
}, []);`}
        />
        <Paragraph>
          <strong>Зберігання попереднього значення</strong> <br />
          Корисно для порівняння prevCount і count.
        </Paragraph>
        <Code
          code={`const prevCount = useRef<number>();

useEffect(() => {
  prevCount.current = count;
}, [count]);`}
        />
        <Paragraph>
          <strong>Таймери, ідентифікатори, кеш, WebSocket посилання</strong>
        </Paragraph>
        <Code
          code={`const intervalId = useRef<number | null>(null);

useEffect(() => {
  intervalId.current = window.setInterval(...);
  return () => clearInterval(intervalId.current!);
}, []);`}
        />
        <Title text="Чого useRef НЕ робить?" />
        <Paragraph>
          <ul>
            <li>Він не запускає повторний рендер при зміні ref.current</li>
            <li>
              Він не призначений для збереження стану UI (для цього — useState)
            </li>
            <li>Не можна зловживати ним для обходу React-потоку даних</li>
          </ul>
        </Paragraph>
        <Title text="Коли вибирати useRef, а не useState?" />
        <Table
          columnsCount={3}
          elementsList={[
            "Хочеш зберегти ",
            "useState",
            "useRef",
            "Дані, які впливають на рендеринг",
            "✅",
            "❌",
            "Значення, яке не має викликати ререндер",
            "❌",
            "✅",
            "Посилання на DOM-елемент",
            "❌",
            "✅",
            "Створити 'stable' функцію/значення між рендерами",
            "❌",
            "✅",
          ]}
        />
        <Title text="Приклад: уникнення stale замикання" />
        <Paragraph>
          counter тут буде актуальним завжди. Якщо ти зробиш це через useState,
          виникне stale state (функція замкне старе значення).
        </Paragraph>
        <Code
          code={`const counter = useRef(0);

useEffect(() => {
  const id = setInterval(() => {
    counter.current++;
    console.log(counter.current);
  }, 1000);

  return () => clearInterval(id);
}, []);
`}
        />
      </Topic>
    </>
  );
}
