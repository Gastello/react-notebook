import Code from "../code/Code";

export default function MyRouterCode() {
  return <Code code={`import { useEffect, useState } from "react";
  
type Route = {
  path: string;
  component: React.ComponentType;
};
type MyRouterProps = {
  routes: Route[];
};

const useLocalStorage = (key: string, defaultValue: unknown) => {
  const storageValue =
    localStorage.getItem(key) || JSON.stringify(defaultValue);

  const [localStorageValue, setLocalStorageValue] = useState(
    JSON.parse(storageValue) || defaultValue
  );

  const changeValue = (newValue: unknown) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setLocalStorageValue(() => {
      if (typeof newValue === "object") {
        return { ...newValue };
      } else return newValue;
    });
  };
  return [localStorageValue, changeValue];
};

export const myRouterNavigate = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
export default function MyRouter({ routes }: MyRouterProps) {
  const [currentRoute, setCurrentRoute] = useLocalStorage(
    "route",
    window.location.pathname
  );
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setCurrentRoute]);

  const Component = routes.find(
    (route) => route.path == currentRoute
  )?.component;
  return (
    <div className="p-2 bg-gray-500 text-white rounded-md">
      {Component ? <Component /> : <h1>Такого шляху не існує</h1>}
    </div>
  );
}
`}/>;
}
