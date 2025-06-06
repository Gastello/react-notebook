import CodeSnippet from "../components/codeSnippet/CodeSnippet";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function CssInReactTopic() {
  return (
    <Topic title="CSS у React">
      <div className="text-[20px] font-semibold mt-0">
        Основні способи стилізації
      </div>
      <Paragraph>
        У React існує кілька підходів до стилізації компонентів:
      </Paragraph>
      <ul className="list-disc list-inside">
        <li>CSS Modules</li>
        <li>Бібліотека classnames</li>
        <li>Styled-components</li>
        <li>UI-бібліотеки (Bootstrap, MUI)</li>
        <li>Utility-first CSS (Tailwind CSS)</li>
      </ul>
      <Title text="CSS Modules" />{" "}
      <Paragraph>
        Дає можливість інкапсулювати стилі для кожного компонента окремо.
        Імпортується як об&apos;єкт, а класи використовуються через{" "}
        <code>className={`{classes["ім'я-класу"]}`}</code>.
      </Paragraph>
      <CodeSnippet
        code={`// Button.module.css
.button {
  background-color: blue;
  color: white;
}

// Button.tsx
import classes from './Button.module.css';

function Button() {
  return <button className={classes["button"]}>Натисни</button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Натисни
          </button>
        }
      />
      <Title text="classnames (npm)" />{" "}
      <Paragraph>
        Дозволяє динамічно формувати <code>className</code> зі змінних. У React
        це корисно для умовного застосування стилів.
      </Paragraph>
      <CodeSnippet
        code={`import classNames from 'classnames';

function Button({ primary }) {
  const btnClass = classNames('btn', { 'btn-primary': primary });
  return <button className={btnClass}>Натисни</button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Натисни
          </button>
        }
      />
      <Title text="Styled-components" />{" "}
      <Paragraph>
        Підхід CSS-in-JS. Стилі описуються прямо в JS-файлі. Працює лише після
        встановлення бібліотеки <code>styled-components</code>.
      </Paragraph>
      <CodeSnippet
        code={`import styled from 'styled-components';

const Button = styled.button\`
  background-color: blue;
  color: white;
\`;

function App() {
  return <Button>Натисни</Button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Натисни
          </button>
        }
      />
      <Title text="Bootstrap (npm)" />{" "}
      <Paragraph>
        Bootstrap — популярна CSS-бібліотека. У JSX клас прописується через{" "}
        <code>className</code>, напр. <code>&quot;btn btn-primary&quot;</code>.
      </Paragraph>
      <CodeSnippet
        code={`function Button() {
  return <button className="btn btn-primary">Натисни</button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Натисни
          </button>
        }
      />
      <Title text="Material UI (MUI)" />{" "}
      <Paragraph>
        MUI — компонентна UI-бібліотека з вбудованими стилями. Працює після
        підключення через npm.
      </Paragraph>
      <CodeSnippet
        code={`import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Натисни</Button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Натисни
          </button>
        }
      />
      <Title text="Tailwind CSS" />{" "}
      <Paragraph>
        Tailwind — utility-first підхід, коли стилі задаються напряму в{" "}
        <code>className</code> через утилітні класи.
      </Paragraph>
      <CodeSnippet
        code={`function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">Натисни</button>;
}`}
        result={
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Натисни
          </button>
        }
      />
    </Topic>
  );
}
