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
      <Title text="useNavigate — імперативна навігація" />

      <Paragraph>
        <code>useNavigate</code> — хук з React Router v6.30.1, що повертає
        функцію <code>navigate()</code> для програмної навігації замість{" "}
        <code>&lt;Link&gt;</code>. Він прийшов на зміну старому{" "}
        <code>useHistory</code> з v5.
      </Paragraph>

      <Title text="Синтаксис" />
      <Paragraph>
        <Code
          code={`import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/dashboard')}>Go to /dashboard</button>;
}`}
        />
      </Paragraph>

      <Title text="Опції navigate()" />
      <Paragraph>
        <ul className="list-disc ml-6">
          <li>
            <code>navigate(&apos;/path&apos;)</code> — звичайний перехід.
          </li>
          <li>
            <code>navigate(-1)</code> або <code>navigate(1)</code> —
            назад/вперед по історії.
          </li>
          <li>
            <code>navigate({`'/path', { replace: true }`})</code> — замінює
            поточний запис в історії.
          </li>
          <li>
            <code>navigate({`'/path', { state: { foo: 'bar' } }`})</code> —
            передає внутрішній стан, який доступний через{" "}
            <code>useLocation().state</code>.
          </li>
          <li>
            <code>navigate({`'/path', { preventScrollReset: true }`})</code> —
            не скидає положення прокрутки.
          </li>
          <li>
            <code>navigate({`'/path', { flushSync: true }`})</code> — примусово
            синхронний перехід.
          </li>
          <li>
            <code>navigate({`'..', { relative: 'path' }`})</code> — навігація
            відносно URL.
          </li>
        </ul>
      </Paragraph>

      <Title text="Приклади використання" />
      <Paragraph>
        <Code
          code={`// Редирект після входу
function Login() {
  const navigate = useNavigate();
  async function submit() {
    await api.login();
    navigate('/profile', { replace: true, state: { from: '/login' } });
  }
  return <button onClick={submit}>Log in</button>;
}`}
        />

        <Code
          code={`// Кнопка "Назад"
function BackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Go Back</button>;
}`}
        />
      </Paragraph>

      <Title text="Best Practices" />
      <Paragraph>
        <ul className="list-disc ml-6">
          <li>
            Викликайте хук тільки на верхньому рівні компоненту — не в умовах чи
            циклах.
          </li>
          <li>
            Для простого редиректу краще використовувати JSX-компонент{" "}
            <code>&lt;Navigate to=&quot;...&quot; replace state=... /&gt;</code>
            .
          </li>
          <li>
            Використовуйте <code>&lt;Link&gt;/&lt;NavLink&gt;</code> для
            навігації користувачем; <code>useNavigate</code> — для програмної
            логіки.
          </li>
        </ul>
      </Paragraph>

      <Title text="Коли застосовувати?" />
      <Paragraph>
        <ul className="list-disc ml-6">
          <li>Після асинхронних операцій (логін, сабміт).</li>
          <li>Для імперативних кнопок «назад/вперед».</li>
          <li>Щоб передати стан або замінити історію (т.з. редирект).</li>
          <li>Для умовної навігації (роли, ще недостатній доступ тощо).</li>
        </ul>
      </Paragraph>
    </Topic>
  );
}
