import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseImperativeHandleExample from "../../components/hooksExamples/HookUseImperativeHandleExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseImperativeHandle() {
  return (
    <>
      <Topic title="✅ Хук useImperativeHandle">
        <Paragraph>
          <strong>useImperativeHandle</strong> — це просунутий хук, який
          використовується разом із <strong>forwardRef</strong>, коли ти хочеш
          впливати на внутрішню поведінку компонента ззовні. Це контрольований
          вихід за межі «чистої» React-моделі даних.
        </Paragraph>
        <Title text="Навіщо useImperativeHandle?" />
        <Paragraph>
          Звичайний ref дозволяє доступ до DOM-елементів або
          компонентів-контейнерів, але не дозволяє викликати кастомні методи
          компонентів. <br />
          <br />А useImperativeHandle дозволяє:
          <ul className="list-disc list-inside">
            <li>керувати тим, що саме буде доступне через ref</li>
            <li>
              експортувати з компонента не DOM-елемент, а власні методи або
              об&apos;єкти
            </li>
          </ul>
        </Paragraph>
        <Title text="Приклад: інпут з кастомним методом focus" />
        <Code
          code={`import { forwardRef, useImperativeHandle, useRef } from "react";

type InputHandle = {
  focus: () => void;
};

const MyInput = forwardRef<InputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} type="text" />;
});`}
        />
        <Paragraph>
          Тепер ти можеш ззовні викликати .focus() на своєму компоненті MyInput:
        </Paragraph>
        <Code
          code={`function ParentComponent() {
  const inputRef = useRef<InputHandle>(null);

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus input</button>
    </div>
  );
}`}
        />
        <Title text="Сигнатура" />
        <Code
          code="useImperativeHandle(
  ref,            // ref, переданий через forwardRef
  createHandle,   // () => об'єкт з методами
  deps?           // залежності (як в useMemo / useEffect)
);"
        />
        <Title text="Для чого це корисно?" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "Використання",
              "Пояснення",
              "Імперативне управління",
              "focus(), scroll(), clear(), shake(), reset() тощо",
              "Контрольоване API компонента",
              "Ти вирішуєш, що саме буде доступне через ref",
              "Інкапсуляція",
              "Не віддаєш внутрішній DOM напряму — лише методи",
              "Кастомна поведінка форм / полів вводу",
              "Наприклад, validate(), reset(), scrollIntoView()",
            ]}
          />
        </Paragraph>
        <Title text="Антипатерн?" />
        <Paragraph>
          Якщо ти застосовуєш useImperativeHandle — зупинись і подумай:
          <ul className="list-disc list-inside">
            <li>Чи можна це зробити декларативно?</li>
            <li>
              Це унікальний випадок — коли імперативна логіка неминуча
              (DOM-фокус, скрол, анімації, сторонні бібліотеки тощо)
            </li>
          </ul>
        </Paragraph>
        <Title text="Правильне використання" />
        <ul className="list-disc list-inside">
          <li>Використовуй лише з forwardRef</li>
          <li>Винось useImperativeHandle якомога ближче до потреби</li>
          <li>
            Не повертай &quot;все підряд&quot; — тільки те, що справді потрібно
            ззовні
          </li>
        </ul>
        <Title text="Приклад: очищення інпуту ззовні" />
        <Code
          code={`const MyInput = forwardRef((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} />;
});

// Використання:
const parentRef = useRef<{ clear: () => void }>(null);
<MyInput ref={parentRef} />
<button onClick={() => parentRef.current?.clear()}>Clear</button>
`}
        />
        <Title text="Реальний приклад" />
        <CodeSnippet
          code={`import { forwardRef, useImperativeHandle, useRef } from "react";
          
export default function HookUseImperativeHandleExample() {
  // Це ref, який отримає доступ до .focus() з MyInput
  const inputRef = useRef<MyInputRef>(null);

  return (
    <div className="flex gap-2">
      <MyInput ref={inputRef} />
      <button
        className="p-2 bg-white text-gray-900 rounded"
        onClick={() => inputRef.current?.focus()}
      >
        Focus on input
      </button>
    </div>
  );
}

// Описуємо, ЯКИЙ метод буде доступний ззовні
type MyInputRef = {
  focus: () => void;
};

const MyInput = forwardRef<MyInputRef>(function MyInput(_, ref) {
  // внутрішній ref до реального <input>
  const inputRef = useRef<HTMLInputElement>(null);

  // ЦЕ і є useImperativeHandle:
  // ми вказуємо, що ref буде мати об'єкт з методом focus
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <input
      className="p-2 rounded"
      onChange={() => {
        console.log(inputRef);
      }}
      ref={inputRef}
      placeholder="Я окремий компонент!"
    />
  );
});`}
          result={<HookUseImperativeHandleExample />}
        />
        <Paragraph>
          <strong>Що тут відбувається крок за кроком:</strong> <br />
          <ul className="list-disc list-inside">
            <li>{`App створює inputRef, який буде містити об'єкт типу { focus: () => void }`}</li>
            <li>MyInput отримує цей ref через forwardRef</li>
            <li>{`	У MyInput є useImperativeHandle(ref, () => ({ focus })), який контролює, що саме буде в ref`}</li>
            <li>{`	Коли юзер тисне кнопку, ми викликаємо inputRef.current?.focus() — і воно працює`}</li>
          </ul>
        </Paragraph>
      </Topic>
    </>
  );
}
