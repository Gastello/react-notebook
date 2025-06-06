import Code from "../components/code/Code";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function FunctionalJsxTopic() {
  return (
    <Topic title="Функціональні Компоненти і JSX">
      <Title text="Що таке компонент?" />
      <Paragraph>
        Компонент — це функція, яка повертає JSX (розмітку схожу на HTML). Всі
        React-додатки складаються з компонентів.
      </Paragraph>
      <Title text="Як створити компонент?" />
      <Paragraph>Створи `.jsx` або `.tsx` файл і експортуй функцію:</Paragraph>
      <Code
        code="function Header() {
  return <header>...</header>;
}

export default Header;"
      />
      <Title text="Як використати компонент?" />
      <Paragraph>Імпортуй і використовуй у JSX як HTML-тег:</Paragraph>
      <Code
        code='import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}'
      />
      <Title text="JSX" />{" "}
      <Paragraph>
        JSX — це синтаксис, схожий на HTML, який компілюється у JavaScript
        функції. Він дозволяє писати розмітку прямо у JS.
      </Paragraph>
    </Topic>
  );
}
