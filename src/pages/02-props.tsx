import Code from "../components/code/Code";
import CodeSnippet from "../components/codeSnippet/CodeSnippet";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function PropsTopic() {
  return <Topic title="Props">
          <div className="text-[20px] font-semibold mt-0">Що таке props?</div>
          <Paragraph>
            Props (від &quot;properties&quot;) — це механізм передачі даних від
            батьківського компонента до дочірнього. Вони роблять компоненти
            гнучкими та багаторазово використовуваними.
          </Paragraph>
          <Title text="Основні властивості" />{" "}
          <ul className="list-disc list-inside">
            <li>Props передаються як атрибути JSX-елемента.</li>
            <li>Компонент приймає props як параметр функції.</li>
            <li>Props є незмінними (read-only).</li>
          </ul>
          <Title text="Приклад передачі props" />
          <CodeSnippet
            code='export function Welcome(props: welcomeProps) {
  return <h1>Привіт, {props.name}!</h1>;
};

<Welcome name="Gastello"/>
'
            result="Привіт, Gastello!"
          />
          <Title text="Деструктуризація props" />{" "}
          <Paragraph>
            Замість <code>props.name</code> часто використовують
            деструктуризацію:
          </Paragraph>
          <CodeSnippet
            code={`function Welcome({ name }) {
  return <h1>Привіт, {name}!</h1>;
}`}
            result="Привіт, Gastello!"
          />
          <Title text="Що таке children?" />{" "}
          <Paragraph>
            <code>children</code> — це спеціальний проп, який містить вкладений
            JSX-контент, переданий між відкриваючим і закриваючим тегом
            компонента.
          </Paragraph>
          <CodeSnippet
            code={`function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <p>Привіт зсередини!</p>
</Card>`}
            result={
              <div className="card">
                <p>Привіт зсередини!</p>
              </div>
            }
          />
          <Title text="Типізація props у TypeScript" />{" "}
          <Paragraph>
            Для безпечної роботи з props у TypeScript використовують інтерфейси
            або типи:
          </Paragraph>
          <Code
            code="type TopicProps = {
    title: string;
    children: React.ReactNode;
  };"
          />
          <Paragraph>І передають у компонент так:</Paragraph>
          <Code
            code="function Topic({ title, children }: TopicProps) {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }"
          />
        </Topic>;
}