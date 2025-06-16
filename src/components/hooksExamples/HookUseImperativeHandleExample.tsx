import { forwardRef, useImperativeHandle, useRef } from "react";

export default function HookUseImperativeHandleExample() {
  // Це ref, який отримає доступ до .focus() з MyInput
  const inputRef = useRef<MyInputRef>(null);

  return (
    <div className="flex gap-2">
      <MyInput ref={inputRef} />
      <button
        className="p-2 bg-white text-gray-900 rounded"
        onClick={() => inputRef.current?.focus()}
      >
        Focus on input
      </button>
    </div>
  );
}

// Описуємо, ЯКИЙ метод буде доступний ззовні
type MyInputRef = {
  focus: () => void;
};

const MyInput = forwardRef<MyInputRef>(function MyInput(_, ref) {
  // внутрішній ref до реального <input>
  const inputRef = useRef<HTMLInputElement>(null);

  // ЦЕ і є useImperativeHandle:
  // ми вказуємо, що ref буде мати об'єкт з методом focus
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <input
      className="p-2 rounded"
      onChange={() => {
        console.log(inputRef);
      }}
      ref={inputRef}
      placeholder="Я окремий компонент!"
    />
  );
});
