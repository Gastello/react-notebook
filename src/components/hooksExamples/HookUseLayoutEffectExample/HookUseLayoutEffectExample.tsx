import WithHookUseLayoutEffect from "./WithHookUseLayoutEffect";
import WithoutHookUseLayoutEffect from "./WithoutHookUseLayoutEffect";

export default function HookUseLayoutEffectExample() {
  return (
    <div className="flex">
      <WithHookUseLayoutEffect />
      <WithoutHookUseLayoutEffect />
    </div>
  );
}
