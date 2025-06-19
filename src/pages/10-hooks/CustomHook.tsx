import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import CustomHookExample from "../../components/hooksExamples/CustomHookExample/CustomHookExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function CustomHook() {
  return (
    <Topic title="✅ Custom Hook">
      <Paragraph>
        <strong>Кастомний хук</strong> (custom hook) — це просто функція, яка
        використовує інші хуки, щоб інкапсулювати логіку повторного
        використання.
        <br />
        Вони починаються з <strong>use</strong> і дозволяють:
        <ul className="list-disc list-inside">
          <li>уникати дублювання коду</li>
          <li>підвищити читабельність</li>
          <li>легко реюзати поведінку між компонентами</li>
        </ul>
      </Paragraph>
      <Title text="Як створюється кастомний хук?" />
      <Code
        code={`function useWhatever() {
  const [state, setState] = useState(...);
  useEffect(() => {
    // щось робимо
  }, []);

  return { state, setState };
}`}
      />
      <Paragraph>
        Правила:
        <ul className="list-disc list-inside">
          <li>Назва завжди з use</li>
          <li>Всередині можна викликати інші хуки</li>
          <li>Не викликається умовно (if, for, switch, тощо)</li>
          <li>Не має побічних ефектів поза useEffect</li>
        </ul>
      </Paragraph>
      <Title text="Для чого використовують кастомні хуки?" />
      <Paragraph>
        <ul>
          <li>
            <strong>Логіка фетчингу:</strong> useFetch, usePosts, useUser
          </li>
          <li>
            <strong>Форма:</strong> useForm, useInput
          </li>
          <li>
            <strong>Події DOM:</strong> useOnClickOutside, useEventListener
          </li>
          <li>
            <strong>Авторизація, токени:</strong> useAuth, useToken
          </li>
        </ul>
      </Paragraph>
      <Title text="Приклад 1: useToggle" />
      <Code
        code={`function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle] as const;
}`}
      />
      <Paragraph>Використання:</Paragraph>
      <Code code={`const [isOpen, toggleOpen] = useToggle();`} />
      <Title text="Приклад 2: useLocalStorage" />
      <Code
        code={`function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`}
      />
      <Title text="Коли треба писати кастомний хук?" />
      <Paragraph>
        <ul className="list-disc list-inside">
          <li>
            Один і той самий useEffect/useState повторюється в кількох
            компонентах
          </li>
          <li>Код в компоненті роздувається і складно читати</li>
          <li>Потрібно розділити concerns (відповідальність)</li>
        </ul>
      </Paragraph>
      <Title text="Антипатерни" />
      <Paragraph>
        <ul className="list-decimal list-inside">
          <li>
            Робити кастомний хук тільки для useState — без сенсу.
            <ul className="list-disc list-inside pl-4">
              <li>{`❌ function useCounter() { return useState(0); }`}</li>
            </ul>
          </li>
          <li>
            Складна логіка без тестів або без in/out API
            <ul className="list-disc list-inside pl-4">
              <li>Пиши такі хуки як окремі сервіси</li>
            </ul>
          </li>
          <li>
            Не пояснює, що робить
            <ul className="list-disc list-inside pl-4">
              <li>
                Назва хука має розповідати його суть. useSomething — це нічого.
              </li>
            </ul>
          </li>
        </ul>
      </Paragraph>
      <Title text="Реальний приклад" />
      <Paragraph>Хук:</Paragraph>
      <Code
        code={`import { useState } from "react";
      
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
}`}
      />
      <Paragraph>Застосування:</Paragraph>
      <CodeSnippet
        code={`import useCustomHook from "./useCustomHook";
        
export default function CustomHookExample() {
  
  const [currentList, onInputChange] = useCustomHook();

  return (
    <div className="text-xl">
      <div>
        <span className="font-bold mb-2.5">Text: </span>
        {currentList}
      </div>
      <input
        onChange={(e) => onInputChange(e)}
        placeholder="Write here..."
        className="p-1 text-sm border border-white"
        type="text"
      />
    </div>
  );
}`}
        result={<CustomHookExample />}
      />
    </Topic>
  );
}
