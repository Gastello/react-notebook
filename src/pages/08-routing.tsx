import Code from "../components/code/Code";
import MyRouter, { myRouterNavigate } from "../components/myRouter/MyRouter";
import MyRouterCode from "../components/myRouter/MyRouterCode";
import MyRouterHome from "../components/myRouter/MyRouterHome";
import MyRouterInfo from "../components/myRouter/MyRouterInfo";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function RoutingTopic() {
  return (
    <Topic title="Routing">
      <Title text="Що таке Routing?" />{" "}
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
      <Title text="Ручна реалізація роутера" />{" "}
      <div className="flex gap-2.5 justify-center">
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/")}
        >
          Go to MyRouterHome
        </button>
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/info")}
        >
          Go to MyRouterInfo
        </button>
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/code")}
        >
          Go to MyRouterCode
        </button>
      </div>
      <MyRouter
        routes={[
          { path: "/", component: MyRouterHome },
          { path: "/info", component: MyRouterInfo },
          { path: "/code", component: MyRouterCode },
        ]}
      />
      <Title text="React Router" />{" "}
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
          <li>Отримувати параметри з URL (/user/:id)</li>{" "}
          <li>
            Реалізовувати вкладені маршрути, редиректи, захист маршрутів тощо
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        Встановлення:
        <Code code={`npm install react-router-dom`} />
      </Paragraph>
    </Topic>
  );
}
