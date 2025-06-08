import Code from "../code/Code";

export default function ReactRouterExampleInfo() {
  return (
    <div className="*:mb-2.5">
      <h2>
        🧠 Що таке <code>BrowserRouter</code>?
      </h2>
      <p>
        <code>BrowserRouter</code> — це класичний спосіб організувати
        маршрутизацію в React через JSX. Це високорівнева обгортка, яка
        використовує історію браузера (HTML5 history API).
      </p>

      <Code
        code={`import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      />

      <hr />

      <h2>
        📦 Структура <code>BrowserRouter</code>
      </h2>
      <p>
        Цей підхід декларативний: ти описуєш маршрути у JSX, використовуючи{" "}
        <code>&lt;Routes&gt;</code> і <code>&lt;Route&gt;</code>.
      </p>

      <Code
        code={`<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>`}
      />

      <p>
        <code>&lt;Outlet /&gt;</code> використовується всередині{" "}
        <code>Layout</code> для рендера дочірніх маршрутів.
      </p>

      <hr />

      <h2>✅ Ключові правила</h2>

      <h3>
        1. Усі маршрути мають бути всередині <code>&lt;Routes&gt;</code>
      </h3>
      <Code
        code={`<Routes>
  <Route path="/" element={<Home />} />
</Routes>`}
      />

      <h3>
        2. Використовуй <code>&lt;Link&gt;</code> або{" "}
        <code>&lt;NavLink&gt;</code> замість <code>&lt;a&gt;</code>
      </h3>
      <Code code={`<Link to="/about">About</Link>`} />

      <h3>
        3. Використовуй <code>&lt;Outlet /&gt;</code> у layout-компонентах
      </h3>
      <Code
        code={`function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}`}
      />

      <h3>
        4. Для 404 — використовуй <code>path=&quot;*&quot;</code>
      </h3>
      <Code code={`<Route path="*" element={<NotFound />} />`} />

      <h3>
        5. Не можна міксувати з <code>RouterProvider</code>
      </h3>
      <Code
        code={`// ❌ НЕ МОЖНА
<BrowserRouter>
  <RouterProvider router={...} />
</BrowserRouter>`}
      />

      <hr />

      <h2>🛠 Переваги</h2>
      <ul>
        <li>Простий для початку</li>
        <li>Декларативний і очевидний</li>
        <li>
          Добре працює з хуками <code>useNavigate</code>,{" "}
          <code>useLocation</code>, <code>useParams</code>
        </li>
      </ul>

      <h2>⚠️ Обмеження</h2>
      <ul>
        <li>
          Немає <code>loader</code>/<code>action</code>
        </li>
        <li>
          Не підтримує <code>defer</code> / data-driven routing
        </li>
        <li>
          Неможливо рознести маршрути по окремих модулях без додаткової
          абстракції
        </li>
      </ul>
    </div>
  );
}
