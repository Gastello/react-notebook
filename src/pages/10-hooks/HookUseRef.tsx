import Code from "../../components/code/Code";
import Paragraph from "../../components/paragraph/Paragraph";
import Table from "../../components/table/Table";
import Title from "../../components/title/Title";
import Topic from "../../components/topic/Topic";

export default function HookUseRef() {
  return (
    <>
      <Topic title="✅ Хук useRef">
        <Paragraph>
          <strong>useRef</strong> — це хук, який повертає &quot;mutable object&quot;, що
          зберігається поза циклом ререндерів.
        </Paragraph>
        <Code
          code={`const ref = useRef(0);
// ref.current === 0`}
        />
        <Title text="Основні властивості useRef" />
        <Paragraph>
          <Table
            columnsCount={2}
            elementsList={[
              "Властивість",
              "Пояснення",
              "ref.current",
              "Саме тут зберігається значення",
              "useRef(...)",
              "Повертає обʼєкт { current: ... }, який НЕ оновлює компонент при зміні",
              "не викликає ререндер",
              "Зміна ref.current НЕ спричиняє повторного рендеру компонента",
              "постійне посилання",
              "Після першого рендеру ref не змінюється: зберігає одне й те саме посилання",
            ]}
          />
        </Paragraph>
      </Topic>
    </>
  );
}
