import { createContext, useState } from "react";
import HookUseContextContainer from "./HookUseContextContainer";

export const themes = {
  light: {
    backgroundColor: "white",
    text: "black",
  },
  dark: {
    backgroundColor: "black",
    text: "white",
  },
};
export type UserContextType = {
  user: string;
  setUser: (user: string) => void;
};
export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function HookUseContextExample() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HookUseContextContainer></HookUseContextContainer>
    </UserContext.Provider>
  );
}
