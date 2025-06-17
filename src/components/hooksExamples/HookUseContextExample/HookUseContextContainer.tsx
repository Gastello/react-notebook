import HookUseContextButton from "./HookUseContextButton";
import HookUseContextText from "./HookUseContextText";

export default function HookUseContextContainer() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <HookUseContextText />
      <HookUseContextButton />
    </div>
  );
}
