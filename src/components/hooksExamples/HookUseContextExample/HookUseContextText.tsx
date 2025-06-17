import { useContext } from "react";
import { UserContext } from "./HookUseContextExample";

export default function HookUseContextText() {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("UserContext is missing");
  return (
    <span className="font-bold">
      {userContext.user ? userContext.user : "Guest"}
    </span>
  );
}
