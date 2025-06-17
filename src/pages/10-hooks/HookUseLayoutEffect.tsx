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
      </Topic>
    </>
  );
}
