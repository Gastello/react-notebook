import Code from "../components/code/Code";
import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function UseStateTopic() {
  return (
    <Topic title="Коротко про useState і керування станом">
      <div className="text-[20px] font-semibold mt-0">Що таке useState?</div>
      <Paragraph>
        <code>useState</code> — це хук React, який дозволяє додавати локальний
        стан до функціонального компонента.
      </Paragraph>
      <Paragraph>
        Він повертає масив з двох значень: поточне значення стану і функцію для
        його оновлення:
      </Paragraph>
      <Code code="const [state, setState] = useState(initialValue);" />
      <Title text="Приклад: розгортання/згортання вмісту" />{" "}
      <Paragraph>
        Ми можемо використати <code>useState</code>, щоб показувати або
        приховувати контент при кліку:
      </Paragraph>
      <Code
        code="function Topic({ title, children }: TopicProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div onClick={toggleVisibility}>
        {title} {isOpen ? '▼' : '▶'}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}"
      />
      <div className="text-[20px] font-semibold mt-[10px]">
        Чому краще <code>setIsOpen(prev =&gt; !prev)</code>, а не{" "}
        <code>setIsOpen(!isOpen)</code>?
      </div>
      <Paragraph>
        У React оновлення стану асинхронне — тобто, нове значення{" "}
        <code>isOpen</code> може бути не відразу доступне після виклику{" "}
        <code>setIsOpen</code>. Тому, коли нове значення залежить від
        попереднього, слід використовувати функціональний варіант:
      </Paragraph>
      <ul className="list-disc list-inside">
        <li>
          <code>setIsOpen(!isOpen)</code> може дати некоректний результат, якщо
          в черзі вже є оновлення.
        </li>
        <li>
          <code>setIsOpen(prev =&gt; !prev)</code> гарантує, що ми працюємо з
          актуальним станом.
        </li>
      </ul>
      <Paragraph>
        Це критично важливо, коли кілька оновлень стану можуть відбуватися
        швидко або одночасно.
      </Paragraph>
    </Topic>
  );
}
