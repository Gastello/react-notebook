import Paragraph from "../../components/paragraph/Paragraph";
import Topic from "../../components/topic/Topic";
import CustomHook from "./CustomHook";
import HookUseCallback from "./HookUseCallback";
import HookUseContext from "./HookUseContext";
import HookUseEffect from "./HookUseEffect";
import HookUseImperativeHandle from "./HookUseImperativeHandle";
import HookUseLayoutEffect from "./HookUseLayoutEffect";
import HookUseMemo from "./HookUseMemo";
import HookUseReducer from "./HookUseReducer";
import HookUseRef from "./HookUseRef";
import HookUseState from "./HookUseState";

export default function HooksTopic() {
  return (
    <Topic title="Хуки. Кастомні хуки">
      <Paragraph>
        Хуки (hooks) — це механізм, який дозволяє функціональним компонентам
        мати стан, використовувати життєвий цикл, працювати з контекстом,
        ефектами, і багато іншого — без класів.
      </Paragraph>
      <HookUseState />
      <HookUseEffect />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseRef />
      <HookUseImperativeHandle />
      <HookUseContext />
      <HookUseLayoutEffect />
      <HookUseReducer />
      <CustomHook/>
    </Topic>
  );
}
