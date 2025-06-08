import Code from "../code/Code";

export default function ReactRouterExampleHome() {
  return (
    <div className="*:mb-2.5">
      <h2>🧠 Що таке React Router v6.30.1?</h2>
      <p>
        Це остання стабільна версія бібліотеки для маршрутизації в React SPA,
        яка використовує HTML5 History API та дозволяє легко керувати
        навігацією, вкладеними маршрутами, динамічними сегментами, lazy‑loading
        та ін.
      </p>
      <h2>📦 Основні можливості</h2>
      <ul className="list-disc list-inside">
        <li>Client‑side routing без перезавантаження сторінки</li>
        <li>Nested routes (вкладені маршрути)</li>
        <li>Dynamic segments (шляхи з параметрами)</li>
        <li>Ranked route matching</li>
        <li>
          <code>Link</code> і <code>NavLink</code> для навігації
        </li>
        <li>Relative links, redirects</li>
        <li>
          Data loading / mutations через <code>loader</code> і{" "}
          <code>action</code>
        </li>
        <li>Suspense + lazy loading для UI підвантаження</li>
        <li>
          Error handling, scroll restoration, search params, location state
        </li>
      </ul>

      <hr />

      <h2>✅ Index‑роут (default child)</h2>
      <p>
        Index‑route — це маршрут без <code>path</code>, який відображається лише
        при точному входженні в батьківський шлях. Використовується через
        атрибут <code>index</code>.
      </p>

      <Code
        code={`<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="dashboard" element={<Dashboard />} />
</Route>`}
      />

      <hr />

      <h2>
        🔗 Nested routes і <code>Outlet</code>
      </h2>
      <p>
        Вкладені маршрути дозволяють будувати UI як дерево компонентів, де кожен
        рівень використовує <code>Outlet</code> для відображення дітей.
      </p>

      <Code
        code={`function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
</BrowserRouter>`}
      />

      <hr />

      <h2>🚀 Dynamic segments і useParams()</h2>
      <p>
        Сегменти типу <code>:id</code> дозволяють визначати динамічні URL.
        Усередині компонентів можна отримувати параметри через{" "}
        <code>useParams()</code>.
      </p>

      <Code
        code={`<Route path="users/:userId" element={<UserProfile />} />

function UserProfile() {
  const { userId } = useParams();
  return <div>User: {userId}</div>;
}`}
      />

      <hr />

      <h2>⚙️ Link та NavLink</h2>
      <p>
        <code>Link</code> — безперезавантажувальна навігація.{" "}
        <code>NavLink</code> — активні стилі через <code>isActive</code>.
      </p>

      <Code
        code={`<NavLink to="/about" end className={({isActive}) => isActive ? 'active' : ''}>
  About
</NavLink>`}
      />

      <hr />

      <h2>🛠 Redirects</h2>
      <p>
        Використовуються через{" "}
        <code>&lt;Navigate to=&quot;/login&quot; replace /&gt;</code> для
        редиректу. Також можна обробляти на рівні <code>loader</code>.
      </p>

      <hr />

      <h2>📚 Data loading & mutations</h2>
      <p>
        Від v6.4 доступні <code>loader</code> для завантаження даних перед
        рендером і <code>action</code> для обробки форм. Підтримується{" "}
        <code>defer</code> і оптимістичні UI.
      </p>

      <hr />

      <h2>🛡 Error handling</h2>
      <p>
        Кожен <code>Route</code> може мати <code>errorElement</code> для обробки
        помилок під час loader/action/рендеру.
      </p>

      <hr />

      <h2>📥 Search Params & Location State</h2>
      <p>
        Хуки <code>useSearchParams()</code> та <code>useLocation()</code>{" "}
        допомагають керувати <code>?query=</code> і передавати{" "}
        <code>state</code> при навігації.
      </p>

      <Code
        code={`const [searchParams, setSearchParams] = useSearchParams();
searchParams.get('sort');
setSearchParams({ sort: 'name' });`}
      />

      <hr />

      <h2>🔙 Scroll Restoration</h2>
      <p>
        React Router автоматично запам’ятовує позицію скролу між переходами.
      </p>

      <hr />

      <h2>⚠️ Підказки</h2>
      <ul className="list-disc list-inside">
        <li>
          Не змішуй <code>RouterProvider</code> з <code>BrowserRouter</code> —
          обери одну концепцію.
        </li>
        <li>
          Індексні маршрути чутливі до <code>index</code>, а динамічні — до{" "}
          <code>:param</code>.
        </li>
      </ul>
    </div>
  );
}
