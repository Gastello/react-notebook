import { useEffect, useState } from "react";

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

const myRouterNavigate = (path: string) => {
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
    <>
      <div className="flex gap-2.5 justify-center">
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/my-router-home")}
        >
          Go to MyRouterHome
        </button>
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/my-router-info")}
        >
          Go to MyRouterInfo
        </button>
        <button
          className="p-2 bg-gray-500 text-white rounded-t-md cursor-pointer"
          type="button"
          onClick={() => myRouterNavigate("/my-router-code")}
        >
          Go to MyRouterCode
        </button>
      </div>
      <div className="p-2 bg-gray-500 text-white rounded-md">
        {Component ? (
          <Component />
        ) : (
          <p>
            Це універсальний матч, який відповідає будь-якому шляху, що не був
            раніше оброблений. Тикай кнопочки!
          </p>
        )}
      </div>
    </>
  );
}
