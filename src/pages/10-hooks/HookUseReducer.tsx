import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
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
        <CodeSnippet code="" result/>
        <Code code=""/>
      </Topic>
    </>
  );
}
