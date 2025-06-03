

type Route = {
  path: string;
  component: React.ComponentType;
};
type MyRouterProps = {
  routes: Route[];
};
export const myRouterNavigate = (path: string) => {
  window.history.pushState({}, "", path);
};
export default function MyRouter({ routes }: MyRouterProps) {
  
  const currentPath = window.location.pathname;
  const Component = routes.find(
    (route) => route.path == currentPath
  )?.component;
  return (
    <div className="p-2 bg-gray-500 text-white rounded-md">
      {Component ? <Component /> : <h1>Такого шляху не існує</h1>}
    </div>
  );
}
