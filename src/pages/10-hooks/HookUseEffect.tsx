import Code from "../../components/code/Code";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import HookUseEffectExample from "../../components/hooksExamples/HookUseEffectExample";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";

export default function HookUseEffect() {
  return (
    <>
      <Title text="✅ Хук useEffect" />
      <Paragraph>
        <strong>useEffect</strong> — це хук, який дозволяє виконувати побічні
        ефекти у React-компонентах. Він приходить на заміну методам життєвого
        циклу з класових компонентів:
        <ul className="list-disc list-inside">
          <li>componentDidMount</li>
          <li>componentDidUpdate</li>
          <li>componentWillUnmount</li>
        </ul>
      </Paragraph>
      <Title text="Синтаксис" />
      <Code
        code={`useEffect(() => {
  // побічний ефект
  return () => {
    // функція очистки (optional)
  };
}, [dependencies]);
`}
      />
      <Title text='Що таке "побічний ефект"?' />
      <Paragraph>
        Це будь-яка операція поза чистим рендером. Наприклад:
        <ul className="list-disc list-inside">
          <li>Виклик API (fetch, axios)</li>

          <li>Таймери (setTimeout, setInterval)</li>

          <li>Робота з localStorage</li>

          <li>Підписка на події (addEventListener)</li>

          <li>Зміна document.title</li>

          <li>Маніпуляції з DOM</li>

          <li>Вебсокети, WebRTC</li>
        </ul>
      </Paragraph>
      <Title text="Як він працює" />
      <Paragraph>
        <strong>Без масиву залежностей:</strong> <br />
        Виконується на кожен рендер компонента. Це погано, якщо ти не хочеш
        викликати ефект постійно.
      </Paragraph>
      <Code
        code={`useEffect(() => {
  console.log("рендер або перерендер");
});`}
      />
      <Paragraph>
        <strong>З порожнім масивом []:</strong> <br />
        Виконується тільки один раз, як componentDidMount.
      </Paragraph>
      <Code
        code={`useEffect(() => {
  console.log("тільки при першому рендері");
}, []);`}
      />
      <Paragraph>
        <strong>З масивом залежностей [a, b]:</strong> <br />
        Виконується при першому рендері і кожного разу, коли змінюється хоча б
        одна залежність з масиву.
      </Paragraph>
      <Code
        code={`useEffect(() => {
  console.log("коли змінився a або b");
}, [a, b]);`}
      />
      <Paragraph>
        <strong>З функцією очистки:</strong>
        <br />
        Ця функція викликається перед наступним викликом ефекту або перед
        розмонтуванням компонента.
      </Paragraph>
      <Code
        code={`useEffect(() => {
  const interval = setInterval(() => {
    console.log("працює інтервал");
  }, 1000);

  return () => {
    clearInterval(interval); // очистка
    console.log("очистка при розмонтуванні або перед наступним викликом");
  };
}, []);`}
      />
      <Title text="Приклад з fetch" />
      <Code
        code={`useEffect(() => {
  const controller = new AbortController();
  
  fetch("/api/products", { signal: controller.signal })
    .then(res => res.json())
    .then(data => setProducts(data));

  return () => controller.abort(); // відміняє fetch при демонтажі
}, []);`}
      />
      <Title text="⚠️ Часті помилки" />
      <Paragraph>
        <table className="mb-2.5 mx-auto">
          <thead>
            <tr className="*:p-2 border-b border-white">
              <th>Помилка</th>
              <th>Що не так</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:p-2 border-b border-white">
              <td>Не передали залежності</td>
              <td>Ефект викликається на кожному рендері</td>
            </tr>
            <tr className="*:p-2 border-b border-white">
              <td>Не очистили таймер / слухач</td>
              <td>Можливі memory leaks</td>
            </tr>
            <tr className="*:p-2 border-b border-white">
              <td>Поклали функцію в залежності</td>
              <td>Перевиклик ефекту через нову функцію на кожен рендер</td>
            </tr>
            <tr className="*:p-2 border-b border-white">
              <td>Асинхронна функція напряму в useEffect</td>
              <td>{`useEffect(() => async () => {})`} — це неправильно</td>
            </tr>
          </tbody>
        </table>
        Якщо треба async, пишимо всередині:
      </Paragraph>
      <Code
        code={`useEffect(() => {
  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };
  fetchData();
}, []);`}
      />
      <Title text="Приклад" />
      <CodeSnippet
        code={`import { useEffect, useState } from "react";
      
      export default function HookUseEffectExample() {
        const [value, setValue] = useState("");
        useEffect(() => {
          alert("Example Mounted/Created!");
          return () => {
            alert("Example Unmounted/Deleted!");
          };
        }, []);
        useEffect(() => {
          alert("Example Rendered/Updated!");
        });
        useEffect(() => {
          alert('Example Rendered/Updated! Because "value" changed!');
        }, [value]);
      
        return (
          <div>
            <div className="flex gap-2.5 items-center justify-center">
              <input
                placeholder="Enter a value"
                className="border border-white p-2"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              ></input>
              <div>{value}</div>
            </div>
            <i>&quot;alert&quot; на початку спрацьовує двічі лише у dev режимі!</i>
          </div>
        );
      }`}
        result={<HookUseEffectExample />}
      />
    </>
  );
}