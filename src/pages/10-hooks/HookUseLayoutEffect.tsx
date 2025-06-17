import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseLayoutEffectExample from "../../components/hooksExamples/HookUseLayoutEffectExample/HookUseLayoutEffectExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseLayoutEffect() {
  return (
    <>
      <Topic title="✅ Хук useLayoutEffect">
        <Title text="Що таке useLayoutEffect і чим він відрізняється від useEffect" />
        <Paragraph>
          <strong>useLayoutEffect</strong> — це хук у React, який викликається
          синхронно після виконання всіх змін DOM, але до того, як браузер
          виведе оновлення на екран (тобто до paint). Це ключова відмінність від{" "}
          <strong>useEffect</strong>, який викликається асинхронно після того,
          як зміни вже відображено на екрані. Через це{" "}
          <strong>useLayoutEffect</strong> може блокувати рендер і призводити до
          зниження продуктивності, якщо використовується без нагальної потреби.
        </Paragraph>
        <Title text="Синтаксис" />
        <Code
          code={`import { useLayoutEffect } from "react";

useLayoutEffect(() => {
  // цей код виконається *синхронно* після рендеру, але перед тим як браузер намалює DOM
  return () => {
    // cleanup (опціонально)
  };
}, [dependencies]); // масив залежностей, так само як у useEffect`}
        />
        <Title text="Коли саме він спрацьовує" />
        <Paragraph>
          <ul className="list-decimal list-inside">
            <li>Компонент рендериться.</li>
            <li>React застосовує зміни до DOM.</li>
            <li>useLayoutEffect викликається одразу після оновлення DOM.</li>
            <li>Потім браузер виконує перший paint.</li>
            <li>Потім — useEffect.</li>
          </ul>
          Це означає, що в useLayoutEffect ти маєш доступ до актуального DOM, і
          можеш:
          <ul className="list-disc list-inside">
            <li>виміряти розміри, позиції елементів (getBoundingClientRect)</li>
            <li>виконати позиціювання (наприклад, для модалки або тултіпа)</li>
            <li>керувати скролом (scrollTop, scrollIntoView)</li>
            <li>
              миттєво застосувати критичні стилі, щоб уникнути
              &quot;мерехтіння&quot;
            </li>
          </ul>
        </Paragraph>
        <Title text="Коли використовувати" />
        <Paragraph>
          Використовуй useLayoutEffect, якщо:
          <ul className="list-disc list-inside">
            <li>
              тобі треба знати точні розміри DOM елемента одразу після рендеру
            </li>
            <li>
              треба синхронно модифікувати DOM, наприклад, прокрутити сторінку
              перед paint
            </li>
            <li>
              робиш позиціювання поповеру/меню/тултіпа залежно від місця на
              екрані
            </li>
            <li>
              потрібно запобігти візуальному мерехтінню (flicker), особливо на
              повільних пристроях
            </li>
          </ul>
        </Paragraph>
        <Title text="Коли НЕ використовувати" />
        <Paragraph>
          <ul className="list-disc list-inside">
            <li>Не використовуй для фетчінгу або бізнес-логіки.</li>
            <li>Не став туди те, що можна зробити в useEffect.</li>
            <li>
              Не використовуй без нагальної причини — блокує рендер, шкодить
              продуктивності.
            </li>
          </ul>
        </Paragraph>
        <Title text="Реальний приклад" />
        <CodeSnippet
          code={`import { useEffect, useLayoutEffect, useRef, useState } from "react";
        
        export default function HookUseLayoutEffectExample() {
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
            <div ref={messagesContainerRef} className="h-[300px] overflow-y-auto">
              <div className="flex flex-col gap-2.5 w-[350px]">
                {messages.map((element, index) => (
                  <div
                    className="border rounded bg-gray-300 text-gray-900 p-1"
                    key={index}
                  >
                    <div className="flex justify-between mb-2.5">
                      <span className="italic">Gastello says:</span>
                      <span>{element.time}</span>
                    </div>
                    <div>{element.text}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }`}
          result={<HookUseLayoutEffectExample />}
        />
        <Paragraph>
          <strong>Увага на скролл!</strong> <br />
        </Paragraph>
      </Topic>
    </>
  );
}
