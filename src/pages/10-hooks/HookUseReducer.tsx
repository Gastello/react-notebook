import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseReducerExample from "../../components/hooksExamples/HookUseLayoutEffectExample/HookUseReducerExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseReducer() {
  return (
    <>
      <Topic title="✅ Хук useReducer">
        <Paragraph>
          <strong>useReducer</strong> — це React-хук для управління складним або
          структурованим станом компонента. Його можна розглядати як
          альтернативу useState, але з більшою гнучкістю та передбачуваністю.
          <br />
          Технічно — це імплементація патерну Reducer, який прийшов із Redux та
          функціонального програмування.
        </Paragraph>
        <Title text="Синтаксис" />
        <Code code="const [state, dispatch] = useReducer(reducer, initialState, init?);" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>
              <strong>reducer</strong> — {`функція (state, action) => newState`}
            </li>
            <li>
              <strong>initialState</strong> — початковий стан{" "}
            </li>
            <li>
              <strong>init</strong> — (опціонально) функція для lazy
              ініціалізації стану
            </li>
          </ul>
        </Paragraph>
        <Title text="Що таке reducer?" />
        <Paragraph>
          Це функція, яка приймає:
          <ul className="list-disc list-inside">
            <li>поточний стан</li>
            <li>дію (action) — об&apos;єкт, що описує, що сталося</li>
          </ul>
          і повертає новий стан.
        </Paragraph>
        <Code
          code={`function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}`}
        />
        <Title text="Приклад використання" />
        <Code
          code={`import React, { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
  );
}`}
        />
        <Title text="Коли useReducer — кращий вибір, ніж useState?" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>
              Стан складний або великий, або складається з багатьох полів.
            </li>

            <li>Логіка оновлення складна, залежить від типу дії.</li>
            <li>
              Потрібна чітка централізація оновлень стану — всі оновлення
              проходять через один reducer.
            </li>
            <li>
              Коли хочеш уникнути проблем з асинхронністю setState і робити
              оновлення на основі попереднього стану чітко та безпомилково.
            </li>
            <li>
              Хочеш структурувати код у стилі Redux, але без підключення цієї
              бібліотеки.
            </li>
          </ul>
        </Paragraph>
        <Title text="Переваги useReducer" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>
              Прогнозованість: всі оновлення стану контролюються через одну
              чисту функцію reducer.
            </li>
            <li>
              Легше тестувати: reducer — звичайна функція, її можна протестувати
              ізолювано.
            </li>
            <li>
              Краща організація логіки: розподіляє оновлення на кейси, легше
              підтримувати.
            </li>
            <li>Підтримує lazy initialization через третій параметр.</li>
          </ul>
        </Paragraph>
        <Title text="Недоліки useReducer" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>Вимагає більше коду, ніж useState.</li>
            <li>Для простого стану — overkill.</li>
            <li>Може бути складним для новачків.</li>
          </ul>
        </Paragraph>
        <Title text="Додаткові тонкощі" />
        <Paragraph>
          <strong>Lazy init:</strong>
        </Paragraph>
        <Code
          code={`const [state, dispatch] = useReducer(reducer, initialArg, initFunction);`}
        />
        <Paragraph>
          <strong>initFunction(initialArg)</strong> виконається один раз при
          ініціалізації, корисно для складних початкових станів.
          <br /> <strong>dispatch</strong> — стабільна функція, не змінюється
          між рендерами, тому її можна безпечно передавати в дочірні компоненти.
        </Paragraph>
        <Title text="Основні принципи і best practices" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>
              Reducer має бути чистою функцією — не мутуй state, а повертай
              новий об’єкт.
            </li>
            <li>
              Імена дій (action.type) роби константами або у вигляді enum, щоб
              уникнути помилок.
            </li>
            <li>
              Використовуй TypeScript для точного опису типів state і action.
            </li>
            <li>Не зберігай у state дані, які можна обчислити.</li>
          </ul>
        </Paragraph>
        <Title text="Реальний приклад" />
        <CodeSnippet
          code={`import { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

type State = {
  list: string[];
};
type Action =
  | { type: "add"; payload: string }
  | { type: "reset" }
  | { type: "shift" }
  | { type: "pop" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return { list: [...state.list, action.payload] };
    case "reset":
      return { list: [] };
    case "shift":
      return { list: state.list.slice(1) };
    case "pop":
      return { list: state.list.slice(0, -1) };
  }
}

export default function HookUseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { list: [] });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [state.list]);

  return (
    <div>
      <div className="mb-2">
        <span className="font-bold text-xl">List: </span>
        {state.list.join(", ")}
      </div>
      <input
        ref={inputRef}
        type="text"
        className="w-full border border-white rounded p-2 mb-2"
      />
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() =>
            dispatch({ type: "add", payload: inputRef.current?.value ?? "" })
          }
          className="p-2 bg-white text-gray-900 rounded"
        >
          Add
        </button>
        <button
          onClick={() => dispatch({ type: "shift" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Delete first
        </button>
        <button
          onClick={() => dispatch({ type: "pop" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Delete last
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="p-2 bg-white text-gray-900 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`}
          result={<HookUseReducerExample />}
        />
      </Topic>
    </>
  );
}
