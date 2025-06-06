import Paragraph from "../components/paragraph/Paragraph";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";

export default function IntroTopic() {
  return (
    <Topic title="Початок">
      <div className="text-[20px] font-semibold mt-0">Документація</div>
      <Paragraph>
        Офіційна документація: <a href="https://react.dev/">react.dev</a>
      </Paragraph>
      <Title text="Створення проєкту" />{" "}
      <Paragraph>npm create vite@latest</Paragraph>
    </Topic>
  );
}
