import { useContext } from "react";
import { UserContext } from "./HookUseContextExample";

export default function HookUseContextButton() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("UserContext is missing");
  return (
    <button
      className="bg-white rounded p-2 text-gray-900 cursor-pointer"
      onClick={() => userContext.setUser("Gastello")}
    >
      Log In
    </button>
  );
}
