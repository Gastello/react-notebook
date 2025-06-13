import Code from "../components/code/Code";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function EventsTopic() {
  return (
    <Topic title="Обробка подій">
      <Title text="Що таке подія в React?" />
      <Paragraph>
        React використовує <strong>SyntheticEvent</strong> — обгортку над
        нативними подіями браузера. Це забезпечує кросбраузерність і уніфіковану
        поведінку.
      </Paragraph>
      <Code
        code={`function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log("Clicked", e);
}
`}
      />
      <Paragraph>
        React.MouseEvent — тип події <br />
        HTMLButtonElement — елемент, який викликав подію
      </Paragraph>
      <Title text="Типи подій у React" />
      <Paragraph>
        <table>
          <thead>
            <tr className="bg-white text-gray-900 px-2 py-1 *:px-2 *:py-1 *:border-r *:border-white">
              <th>Подія</th>
              <th>Тип події</th>
              <th>Приклад типу в TS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="px-2 py-1 border border-white *:px-2 *:py-1 *:border-r *:border-white">
              <td>onClick</td>
              <td>MouseEvent</td>
              <td>{`React.MouseEvent<HTMLButtonElement>`}</td>
            </tr>
            <tr className="px-2 py-1 border border-white *:px-2 *:py-1 *:border-r *:border-white">
              <td>onChange</td>
              <td>ChangeEvent</td>
              <td>{`React.ChangeEvent<HTMLInputElement>`}</td>
            </tr>
            <tr className="px-2 py-1 border border-white *:px-2 *:py-1 *:border-r *:border-white">
              <td>onSubmit</td>
              <td>FormEvent</td>
              <td>{`React.FormEvent<HTMLFormElement>`}</td>
            </tr>
            <tr className="px-2 py-1 border border-white *:px-2 *:py-1 *:border-r *:border-white">
              <td>onInput</td>
              <td>FormEvent / ChangeEvent</td>
              <td>{`React.ChangeEvent<HTMLInputElement>`}</td>
            </tr>
            <tr className="px-2 py-1 border border-white *:px-2 *:py-1 *:border-r *:border-white">
              <td>onKeyDown</td>
              <td>KeyboardEvent</td>
              <td>{`React.KeyboardEvent<HTMLInputElement>`}</td>
            </tr>
          </tbody>
        </table>
      </Paragraph>
      <Title text="Controlled vs Uncontrolled компоненти" />
      <Paragraph>
        Controlled (рекомендовано):
        <ul className="list-disc list-inside">
          <li>Інпут зв’язаний зі state.</li>
          <li>Значення змінюється тільки через setState.</li>
        </ul>
      </Paragraph>
      <Code
        code={`const [value, setValue] = useState("");

return (
  <input value={value} onChange={(e) => setValue(e.target.value)} />
);
`}
      />
      <Paragraph>
        Uncontrolled (рідко використовується)
        <ul className="list-disc list-inside">
          <li>Значення читається напряму з DOM через ref.</li>
        </ul>
      </Paragraph>
      <Code
        code={`const inputRef = useRef<HTMLInputElement>(null);

const handleSubmit = () => {
  console.log(inputRef.current?.value);
};
`}
      />
      <Title text="Отримання значення з input" />
      <Code
        code={`function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;
  console.log("New value:", value);
}
`}
      />
      <Title text="Обробка сабміту форми" />
      <Code
        code={`function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); // блокує перезавантаження сторінки
  console.log("Submitting form...");
}
`}
      />
    </Topic>
  );
}
