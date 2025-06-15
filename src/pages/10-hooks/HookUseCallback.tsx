import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseCallbackExample from "../../components/hooksExamples/HookUseCallbackExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseCallback() {
  return (
    <>
      <Topic title="✅ Хук useCallback">
        <Paragraph>
          <strong>useCallback</strong> — це хук для мемоізації функції. <br />
          Це як useMemo, але замість значення повертає функцію.
        </Paragraph>
        <Code
          code={`const memoizedFn = useCallback(() => {
  // тіло функції
}, [deps]);`}
        />
        <Title text="Навіщо?" />
        <Paragraph>
          Щоб не створювати нову функцію на кожен рендер, якщо її залежності не
          змінились. <br />
          Бо в React кожен рендер створює нову копію функції, і це ламає:
          <ul className="list-disc list-inside">
            <li>React.memo</li>

            <li>залежності в useEffect</li>

            <li>оптимізації в дочірніх компонентах</li>
          </ul>
        </Paragraph>
        <Title text="Приклад проблеми" />
        <Code
          code={`function Parent() {
  const handleClick = () => console.log("click");

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("render Child");
  return <button onClick={onClick}>Click</button>;
});`}
        />
        <Paragraph>
          Проблема: handleClick створюється заново на кожен рендер → Child
          завжди думає, що проп onClick змінився → Child ререндериться.
        </Paragraph>
        <Title text="Рішення з useCallback" />
        <Code
          code={`function Parent() {
  const handleClick = useCallback(() => {
    console.log("click");
  }, []); // Залежності: нічого не залежить — не змінюється

  return <Child onClick={handleClick} />;
}`}
        />
        <Paragraph>
          Тепер handleClick має стабільну адресу в памʼяті, доки не зміняться
          залежності.
        </Paragraph>
        <Title text="Синтаксис" />
        <Code
          code={`const fn = useCallback(() => {
  // тіло функції
}, [a, b, c]);`}
        />
        <Paragraph>
          fn буде перегенеровано, тільки якщо змінився a, b, або c.
        </Paragraph>
        <Title text="Реальні кейси застосування" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "Сценарій",
              "Використовуй useCallback",
              "Передаєш функцію в React.memo компонент",
              "✅",
              "Використовуєш функцію в залежностях useEffect",
              "✅",
              "Часто ререндериш компонент і хочеш уникнути лишнього",
              "✅",
              "Просто хочеш 'оптимізувати' все",
              "❌",
            ]}
          />
        </Paragraph>
        <Title text="⚠️ Часті помилки" />
        <Paragraph>
          <strong>Без useCallback:</strong> <br />
          На кожен рендер — нова функція → Child завжди ререндериться.
        </Paragraph>
        <Code code={`<Child onClick={() => doStuff(id)} />`} />
        <Paragraph>
          <strong>Надмірне використання:</strong> <br />
          Якщо ця функція не передається в memo компонент або не залежить від
          чогось — useCallback не дає користі.
        </Paragraph>
        <Code
          code={`const useless = useCallback(() => console.log("hi"), []);`}
        />
        <Paragraph>
          <strong>Забув залежності:</strong> <br />
          Як і useEffect, useCallback треба коректно заповнювати залежності.
        </Paragraph>
        <Code
          code={`const fn = useCallback(() => {
  doSomething(a); // але 'a' не вказав у []!
}, []); // ❌ BUG: fn бачить старе 'a'`}
        />
        <Title text="Порівняння з useMemo" />
        <Paragraph>
          <Table
            columnsCount={3}
            elementsList={[
              "Хук",
              "Повертає",
              "Тип значення",
              "useCallback(fn, deps)",
              "memoizedFn",
              "() => void",
              "useMemo(fn, deps)",
              "memoizedValue",
              "any",
            ]}
          />
        </Paragraph>
        <Title text="Приклад" />
        <CodeSnippet
          code={`import React, { useCallback } from "react";
import { useEffect, useState } from "react";

export default function HookUseCallbackExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent render!");
  });

  const clickFn = () => {
    console.log("Click!");
  };

  const clickFnMemoized = useCallback(clickFn, []);

  return (
    <div className="flex justify-center gap-2">
      <button
        className="p-1 bg-white text-gray-900"
        onClick={() => setCount((c) => c + 1)}
      >
        Update {\`{count: \${count}}\`} of Parent Component
      </button>
      <HookUseCallbackExampleButton
        text="without useCallback"
        callback={clickFn}
      />
      <HookUseCallbackExampleButton
        text="with useCallback"
        callback={clickFnMemoized}
      />
    </div>
  );
}

type HookUseCallbackExampleButtonProps = {
  text: string;
  callback: () => void;
};

const HookUseCallbackExampleButton = React.memo(
  function HookUseCallbackExampleButton({
    text,
    callback,
  }: HookUseCallbackExampleButtonProps) {
    useEffect(() => {
      console.log(\`Child \${text} render!\`);
    });
    return (
      <button
        type="button"
        className="p-1 bg-white text-gray-900"
        onClick={callback}
      >
        Child component {text}
      </button>
    );
  }
);`}
          result={<HookUseCallbackExample />}
        />
      </Topic>
    </>
  );
}
