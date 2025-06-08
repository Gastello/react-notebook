import Code from "../code/Code";

export default function ReactRouterExampleCode2() {
  return <Code code={`import { 
  createBrowserRouter,
  Link,
  Outlet, 
  RouterProvider, 
} from "react-router-dom";
import BrowserRouterExampleCode from "./BrowserRouterExampleCode";
import BrowserRouterExampleInfo from "./BrowserRouterExampleInfo";
import RouterProviderExampleInfo from "./RouterProviderInfoExample";
import RouterProviderExampleCode from "./RouterProviderExampleCode";
import ReactRouterExampleHome from "./ReactRouterExampleHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        index: true,
        element: <ReactRouterExampleHome />,
      },
      {
        path: "react-router-provider-info",
        element: <RouterProviderExampleInfo />,
      },
      {
        path: "react-router-provider-code",
        element: <RouterProviderExampleCode />,
      },
      {
        path: "react-browser-router-info",
        element: <BrowserRouterExampleInfo />,
      },
      {
        path: "react-browser-router-code",
        element: <BrowserRouterExampleCode />,
      },
    ],
  },
  {
    path: "*",
    element: <p>This router does not has such path.</p>,
  },
]);

function RouterLayout() {
  return (
    <>
      <div className="flex gap-2.5 justify-center mt-[10px]">
        <Link
          to="/"
          className="p-2 bg-gray-500 !text-white rounded-t-md cursor-pointer"
        >
          Go to Routers Home
        </Link>
        <Link
          to="react-browser-router-info"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to BrowserRouter Info
        </Link>
        <Link
          to="react-browser-router-code"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to BrowserRouter Code
        </Link>
        <Link
          to="react-router-provider-info"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to RouterProvider Info
        </Link>
        <Link
          to="react-router-provider-code"
          className="p-2 bg-gray-500 !text-white rounded-t-md"
        >
          Go to RouterProvider Code
        </Link>
      </div>
      <div className="p-2 bg-gray-500 text-white rounded-md">
        <Outlet />
      </div>
    </>
  );
}

export default function ReactRouterExample() {
  return <RouterProvider router={router}></RouterProvider>;
}`} />;
}
