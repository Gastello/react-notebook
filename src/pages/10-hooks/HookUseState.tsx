import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseStateExample from "../../components/hooksExamples/HookUseStateExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";

export default function HookUseState() {
  return (
    <>
      <Title text="✅ Хук useState" />
      <Paragraph>
        React рендерить компоненти як чисті функції. Але іноді компонент має
        &quot;пам’ятати&quot; якусь інформацію між рендерами: наприклад,
        кількість кліків, значення інпута, прапор видимості модалки.
      </Paragraph>
      <Code
        code={`import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
};
`}
      />
      <Title text="Синтаксис" />
      <Code code={`const [state, setState] = useState(initialValue);`} />
      <Paragraph>
        <ul className="list-disc list-inside">
          <li>
            <strong>state</strong> — поточне значення
          </li>
          <li>
            <strong>setState</strong> — функція для оновлення
          </li>
          <li>
            <strong>initialValue</strong> — початкове значення (буде використане
            лише на першому рендері)
          </li>
        </ul>
      </Paragraph>
      <Title text="Що відбувається при setState?" />
      <Paragraph>
        Коли ти викликаєш <strong>setState(newValue)</strong>:
        <ul className="list-disc list-inside">
          <li>React оновлює внутрішній стан</li>
          <li>Перерендерює компонент</li>
          <li>Нове значення доступне на наступному рендері</li>
        </ul>
      </Paragraph>
      <Title text="Типізація useState у TypeScript" />
      <Paragraph>Простий випадок:</Paragraph>
      <Code code={`const [count, setCount] = useState<number>(0);`} />
      <Paragraph>Об’єкт:</Paragraph>
      <Code
        code={`type FormData = { name: string; age: number };
const [form, setForm] = useState<FormData>({ name: '', age: 0 });`}
      />
      <Title text="⚠️ Підводні камені" />
      <Paragraph>setState не зливає об’єкти як у класах:</Paragraph>
      <Code code={`setForm({ name: 'Ivan' }); // ❌ age пропаде!`} />
      <Paragraph>потрібно явно поширювати (spread):</Paragraph>
      <Code code={`setForm(prev => ({ ...prev, name: 'Ivan' }));`} />
      <Title text="Асинхронність" />
      <Code
        code={`setCount(count + 1);
setCount(count + 1);`}
      />
      <Paragraph>
        — обидва використають одне й те саме значення count → результат буде +1,
        а не +2.
        <br />
        <br />
        Рішення:
      </Paragraph>
      <Code code={`setCount(prev => prev + 1);`} />
      <Title text="Лінивий ініціалізатор у useState" />
      <Paragraph>
        Навіщо це потрібно? Коли твій початковий стан вимагає важких розрахунків
        (наприклад, парс JSON, локальне збереження, fetch з localStorage).{" "}
        <br />
        <br />
        Якщо написати без {`() =>`}, функція викликатиметься кожного разу,
        навіть коли це не треба (тобто коли state уже є і не треба заново
        обчислювати).
      </Paragraph>
      <Code
        code={`const [value, setValue] = useState(() => computeInitialValue());`}
      />
      <Paragraph>Це не те саме, що:</Paragraph>
      <Code
        code={`const [value, setValue] = useState(computeInitialValue());`}
      />
      <Paragraph>
        У чому різниця?
        <ul className="list-disc list-inside">
          <li>
            {`useState(computeInitialValue())`} — викликає функцію одразу, на
            кожному рендері компонента.
          </li>

          <li>
            {`useState(() => computeInitialValue())`} — викликає
            computeInitialValue лише один раз — тільки при першому рендері.
          </li>
        </ul>
      </Paragraph>
      <Title text="Приклад"/>
      <CodeSnippet code={`import { useState } from "react";
      
      export default function HookUseStateExample() {
        const [value, setValue] = useState("");
        return (
          <div className="flex gap-2.5 items-center justify-center">
            <input
              placeholder="Enter a value"
              className="border border-white p-2"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></input>
            <div>{value}</div>
          </div>
        );
      }`} result={<HookUseStateExample/>}/>
    </>
  );
}
