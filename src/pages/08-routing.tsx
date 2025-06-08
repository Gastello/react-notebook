import Code from "../components/code/Code";
import MyRouter from "../components/myRouter/MyRouter";
import MyRouterCode from "../components/myRouter/MyRouterCode";
import MyRouterHome from "../components/myRouter/MyRouterHome";
import MyRouterInfo from "../components/myRouter/MyRouterInfo";
import Paragraph from "../components/paragraph/Paragraph";
import ReactRouterExample from "../components/reactRouterExample/ReactRouterExample";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function RoutingTopic() {
  return (
    <Topic title="Routing">
      <Title text="Що таке Routing?" />
      <Paragraph>
        Routing — це навігація між сторінками в односторінковому застосунку
        (SPA).
      </Paragraph>
      <Paragraph>
        У звичайному вебсайті при переході на іншу сторінку браузер завантажує
        нову HTML-сторінку з сервера. У React це імітується: сторінка не
        перезавантажується, змінюється лише вміст на екрані, залежно від
        поточного URL.
      </Paragraph>
      <Title text="Ручна реалізація роутера" />
      <MyRouter
        routes={[
          { path: "/my-router-home", component: MyRouterHome },
          { path: "/my-router-info", component: MyRouterInfo },
          { path: "/my-router-code", component: MyRouterCode },
        ]}
      />
      <Title text="React Router" />
      <Paragraph>
        Найпопулярніша бібліотека для роутингу —{" "}
        <strong>React Router DOM</strong>.
      </Paragraph>
      <Paragraph>
        Вона дозволяє:
        <ul className="list-disc ml-6">
          <li>
            Показувати різні компоненти залежно від URL (/about, /users, тощо)
          </li>
          <li>
            Використовувати посилання (<code>{"<Link>"}</code>) замість{" "}
            <code>{"<a>"}</code>
          </li>
          <li>Отримувати параметри з URL (/user/:id)</li>
          <li>
            Реалізовувати вкладені маршрути, редиректи, захист маршрутів тощо
          </li>
        </ul>
      </Paragraph>
      <Title text="Документація" />
      <Paragraph>
        Офіційна документація:{" "}
        <a href="https://reactrouter.com/home">React Router Home</a>
      </Paragraph>
      <Paragraph>
        Ми будемо розбирати React Router v6.30.1:
        <a href="https://reactrouter.com/6.30.1/start/concepts">
          Основні концепти
        </a>
      </Paragraph>
      <Paragraph>
        Встановлення:
        <Code code="npm install react-router-dom@6.30.1" />
      </Paragraph>
      <Title text="Реалізація роутера з React Router v6" />
      <ReactRouterExample />
    </Topic>
  );
}