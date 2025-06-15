import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseMemoExample from "../../components/hooksExamples/HookUseMemoExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseMemo() {
  return (
    <>
      <Topic title="✅ Хук useMemo">
        <Paragraph>
          <strong>useMemo</strong> — це один із оптимізаційних хукiв React, який
          дозволяє уникати зайвих обчислень. Він працює аналогічно useCallback,
          але замість збереження функції, він зберігає результат обчислення.
        </Paragraph>
        <Title text="Синтаксис" />
        <Code
          code={`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>computeExpensiveValue(a, b) — довге або затратне обчислення</li>
            <li>
              [a, b] — залежності. Обчислення відбудеться лише якщо a або b
              зміняться
            </li>
          </ul>
        </Paragraph>
        <Title text="Для чого потрібен useMemo" />
        <Paragraph>
          <ul className="list-inside list-decimal">
            <li>
              <strong>Оптимізувати складні обчислення</strong> → Якщо ти робиш
              фільтрацію, сортування, чи щось CPU-важке — не хочеш це
              повторювати на кожному рендері
            </li>
            <li>
              <strong>
                Уникнути зайвих ререндерів дочірніх компонентів, які залежать
                від об&apos;єктів/масивів у пропсах
              </strong>{" "}
              → Наприклад, передаєш {`{ x: 1 }`} — кожного разу нова reference →
              мемо-компонент ререндериться → {`useMemo(() => ({ x: 1 }), [])`}{" "}
              фіксує цю reference
            </li>
          </ul>
        </Paragraph>
        <Title text="Приклад №1 — важке обчислення" />
        <Code
          code={`const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
};

const MyComponent = ({ count }: { count: number }) => {
  const result = useMemo(() => expensiveCalculation(count), [count]);
  return <div>Result: {result}</div>;
};`}
        />
        <Paragraph>
          🔁 Без useMemo: обчислення буде на кожному рендері <br />✅ З useMemo:
          обчислення тільки при зміні count
        </Paragraph>
        <Title text="Приклад №2 — стабільна reference об'єкта" />
        <Code
          code={`const MyComponent = ({ items }: { items: string[] }) => {
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return <List items={sortedItems} />;
};`}
        />
        <Paragraph>
          Без useMemo, sortedItems кожного разу буде новим масивом — навіть якщо
          items не змінилися → дочірній компонент отримає нові пропси і буде
          ререндер
        </Paragraph>
        <Title text="useMemo vs useCallback" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "useCallback",
              "useMemo",
              "Зберігає функцію",
              "Зберігає значення (результат обчислень)",
              "useCallback(() => fn, [deps])",
              "useMemo(() => compute(), [deps])",
              "Часто використовується для пропсів",
              "Часто використовується для оптимізації обчислень",
            ]}
          />
        </Paragraph>
        <Title text="Коли не треба використовувати useMemo?" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>Якщо обчислення дешеве — ти тільки додаєш складність</li>
            <li>Якщо не маєш проблем з продуктивністю</li>
            <li>
              Якщо не передаєш результат в memo-компоненти або не хочеш уникнути
              re-render
            </li>
          </ul>
        </Paragraph>
        <Title text="Реальний приклад" />
        <CodeSnippet
          code={`import { useEffect, useState, memo, useMemo } from "react";
        
export default function HookUseMemoExample() {
  const [array] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const filteredArray = useMemo(() => {
    return array.filter((x) => x % 2 == 0);
  }, [array]); // мемоїзований результат виконання ф-ї

  useEffect(() => {
    console.log("Parent rendered!");
  });
  return (
    <div className="flex justify-center items-center">
      <button
        className="py-2 px-3 font-bold cursor-pointer bg-white text-gray-900 rounded"
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
      <HookUseMemoExampleChild array={filteredArray} />
    </div>
  );
}

export const HookUseMemoExampleChild = memo(function HookUseMemoExampleChild({
  array,
}: {
  array: number[];
}) {
  useEffect(() => {
    console.log("Array rendered!");
  });

  return (
    <>
      <ul className="flex gap-1">
        {array.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </>
  );
});`}
          result={<HookUseMemoExample />}
        />
      </Topic>
    </>
  );
}
