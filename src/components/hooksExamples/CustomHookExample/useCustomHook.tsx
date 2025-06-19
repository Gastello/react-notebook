import { useState } from "react";

export default function useCustomHook(): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [inputTextList, setInputTextList] = useState<string[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentString = e.target.value;

    if (currentString.endsWith(" ")) {
      const currentStringArray = currentString.trim().split(" ");
      setInputTextList(() => currentStringArray);
    }
  };

  return [inputTextList.join(" "), onInputChange];
}