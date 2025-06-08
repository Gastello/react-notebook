import Code from "../code/Code";

export default function ReactRouterExampleInfo2() {
  return (
    <div className="*:mb-2.5">
      <h2>
        🧠 Що таке <code>RouterProvider</code> і як він працює?
      </h2>
      <p>
        <code>RouterProvider</code> — це альтернатива{" "}
        <code>&lt;BrowserRouter&gt;</code>. Він працює з попередньо створеним
        об’єктом роутера через <code>createBrowserRouter</code> і дозволяє
        реалізувати data-driven routing.
      </p>

      <Code
        code={`import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}`}
      />

      <hr />

      <h2>🔍 Базова структура</h2>

      <Code
        code={`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}`}
      />

      <hr />

      <h2>
        ✅ Відмінності між <code>RouterProvider</code> і{" "}
        <code>BrowserRouter</code>
      </h2>
      <p>
        <code>RouterProvider</code> не використовує JSX для опису маршрутів —
        усе будується через об’єкти. Він підтримує <code>loader</code>,{" "}
        <code>action</code>, <code>errorElement</code>, <code>defer</code> тощо.
      </p>

      <hr />

      <h2>🧱 Повна структура createBrowserRouter</h2>

      <Code
        code={`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
        loader: myLoaderFn,
        action: myActionFn,
      },
    ],
  },
]);`}
      />

      <hr />

      <h2>⚠️ НЮАНСИ</h2>

      <h3>
        1. Без <code>children</code> — <code>&lt;Outlet /&gt;</code> не працює
      </h3>

      <Code
        code={`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // всередині Layout є <Outlet />
    children: [
      { path: 'home', element: <Home /> }
    ]
  }
]);`}
      />

      <h3>
        2. <code>&lt;Link&gt;</code> працює лише всередині{" "}
        <code>RouterProvider</code>
      </h3>

      <Code
        code={`<RouterProvider router={router}>
  <Link to="/home">Go home</Link> // ✅
</RouterProvider>

// ❌ Цей Link поза RouterProvider — буде помилка
<Link to="/home">Fail</Link>`}
      />

      <h3>
        3. Не пиши <code>path: &apos;/home&apos;</code> у children
      </h3>

      <Code
        code={`children: [
  { path: 'home', element: <Home /> }, // ✅
  { path: '/home', element: <Home /> }, // ❌ НЕ ПРАЦЮЄ
]`}
      />

      <h3>
        4. Не використовуй <code>&lt;Routes&gt;</code> та{" "}
        <code>&lt;Route&gt;</code> з <code>RouterProvider</code>
      </h3>

      <Code
        code={`// ❌ НЕ ПРАЦЮЄ
<RouterProvider router={router}>
  <Routes>
    <Route path="/home" element={<Home />} />
  </Routes>
</RouterProvider>

// ✅ ПРАЦЮЄ
const router = createBrowserRouter([
  { path: '/home', element: <Home /> }
]);`}
      />

      <h3>
        5. Хуки типу <code>useNavigate</code>, <code>useLocation</code>,{" "}
        <code>useParams</code> працюють лише всередині{" "}
        <code>RouterProvider</code>
      </h3>

      <Code
        code={`function MyComponent() {
  const navigate = useNavigate(); // ✅ тільки всередині RouterProvider
}`}
      />
    </div>
  );
}
