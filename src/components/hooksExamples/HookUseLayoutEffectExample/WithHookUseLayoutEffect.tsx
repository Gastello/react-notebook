import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function WithHookUseLayoutEffect() {
  const [messages, setMessages] = useState([
    {
      text: "Hello, world!",
      time: new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
        second: "2-digit",
      }),
    },
  ]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setInterval(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "New message!",
          time: new Date().toLocaleTimeString(undefined, {
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
            second: "2-digit",
          }),
        },
      ]);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messagesContainerRef} className="h-[300px] overflow-y-auto flex-1/2">
      <div className="flex flex-col gap-2.5 w-[300px]">
        {messages.map((element, index) => (
          <div
            className="border rounded bg-gray-300 text-gray-900 p-1"
            key={index}
          >
            <div className="flex justify-between mb-2.5">
              <span className="italic">With HookUseLayoutEffect:</span>
              <span>{element.time}</span>
            </div>
            <div>{element.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
