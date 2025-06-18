import Header from "./components/header/Header";
import FunctionalJsxTopic from "./pages/01-functional-jsx";
import IntroTopic from "./pages/00-intro";
import PropsTopic from "./pages/02-props";
import UseStateTopic from "./pages/03-use-state";
import DevtoolsTopic from "./pages/04-devtools";
import CssInReactTopic from "./pages/05-css-in-react";
import ClassComponentsTopic from "./pages/06-class-components";
import LifecycleMemoTopic from "./pages/07-lifecycle-memo";
import RoutingTopic from "./pages/08-routing";
import EventsTopic from "./pages/09-events";
import HooksTopic from "./pages/10-hooks/10-hooks";
import RoutingPractice from "./pages/projects/routingPractice";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper wrapper_content">
        <IntroTopic/>
        <FunctionalJsxTopic/>
        <PropsTopic/>
        <UseStateTopic/>
        <DevtoolsTopic/>
        <CssInReactTopic/>
        <ClassComponentsTopic/>
        <LifecycleMemoTopic/>
        <RoutingTopic/>
        <RoutingPractice/>
        <EventsTopic/>
        <HooksTopic/>
      </div>
    </>
  );
}

export default App;