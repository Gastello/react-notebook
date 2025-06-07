import Code from "../code/Code";

export default function ReactRouterExampleCode() {
  return (
    <Code
      code={`import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReactRouterExampleHome from "./ReactRouterExampleHome";
import ReactRouterExampleCode from "./ReactRouterExampleCode";
import ReactRouterExampleInfo from "./ReactRouterExampleInfo";

export default function ReactRouterExample() {
  return (
    <BrowserRouter>
      <div className="flex gap-2.5 justify-center">
        <Link
          to="/react-router-home"
          className="p-2 bg-gray-500 !text-white rounded-t-md cursor-pointer"
        >
          Go to MyRouterHome
        </Link>
        <Link
          to="react-router-info"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to MyRouterInfo
        </Link>
        <Link
          to="react-router-code"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to MyRouterCode
        </Link>
      </div>
      <div className="p-2 bg-gray-500 text-white rounded-md">
        <Routes>
          <Route
            path="/react-router-home"
            element={<ReactRouterExampleHome />}
          />
          <Route
            path="/react-router-code"
            element={<ReactRouterExampleCode />}
          />
          <Route
            path="/react-router-info"
            element={<ReactRouterExampleInfo />}
          />
          <Route
            path="*"
            element={<p>Це аналог 404 сторінки. Тикай кнопочки!</p>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`}
    />
  );
}
