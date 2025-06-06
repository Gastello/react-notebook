import CodeSnippet from "../components/codeSnippet/CodeSnippet";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function DevtoolsTopic() {
  return (
    <Topic title="React Developer Tools">
      <div className="text-[20px] font-semibold mt-0">
        Що таке React Developer Tools?
      </div>
      <Paragraph>
        Це офіційне розширення для браузера (Chrome / Firefox), яке дозволяє
        досліджувати React-компоненти прямо на сторінці.
      </Paragraph>
      <Title text="Як встановити?" />{" "}
      <ul className="list-disc list-inside">
        <li>Перейди в Chrome Web Store або Firefox Add-ons.</li>
        <li>
          Знайди <strong>React Developer Tools</strong>.
        </li>
        <li>Встанови як звичайне розширення.</li>
      </ul>
      <Title text="Що дозволяє робити?" />{" "}
      <ul className="list-disc list-inside">
        <li>
          Переглядати дерево React-компонентів у вкладці{" "}
          <code>⚛️ Components</code>.
        </li>
        <li>Дивитися значення props і state кожного компонента.</li>
        <li>Редагувати props/state в реальному часі (для тестування UI).</li>
        <li>
          Аналізувати performance у вкладці <code>⚛️ Profiler</code>.
        </li>
      </ul>
      <Title text="Чому це важливо?" />{" "}
      <Paragraph>
        Без цього інструменту ти як React-розробник працюєш «наосліп». Він
        критично важливий для налагодження і розуміння, як реально поводиться
        твій код.
      </Paragraph>
      <Title text="Швидкий приклад" />{" "}
      <Paragraph>Якщо у тебе є компонент з пропами:</Paragraph>
      <CodeSnippet
        code={`function Welcome({ name }) {
  return <>Привіт, {name}!</>;
}

<Welcome name="Gastello" />`}
        result="Привіт, Gastello!"
      />
      <Paragraph>
        У React Developer Tools ти побачиш компонент <code>Welcome</code> і проп{" "}
        <code>name: &quot;Gastello&quot;</code> прямо в браузері.
      </Paragraph>
    </Topic>
  );
}
