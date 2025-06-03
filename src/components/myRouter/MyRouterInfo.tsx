export default function MyRouterInfo() {
  return (
    <div className="[&>p]:mb-2.5">
    <p>
      <strong>Routing</strong> — це концепція, що дозволяє користувачу бачити різні сторінки застосунку залежно від URL-адреси, не перезавантажуючи сторінку. У React це реалізується або через бібліотеки (як-от <code>react-router</code>), або вручну — на основі API браузера <code>History</code> та <code>popstate</code>-подій.
    </p>

    <p>
      У саморобному роутері ми використовуємо проп <code>routes</code>, де кожен маршрут — це об&apos;єкт із <code>path</code> (шлях) і <code>component</code> (React-компонент, який треба показати при цьому шляху). Тип <code>component: React.ComponentType</code> тут критичний: він дозволяє рендерити будь-який React-компонент — як функціональний, так і класовий — динамічно через <code>{`<Component />`}</code>.
    </p>

    <p>
      Ключовий момент — ми не прив’язуємось до жодного фреймворку. Навпаки, ми емуляємо те, як працює реальний роутер: через прослуховування <code>popstate</code>, зміну URL через <code>window.history.pushState</code> та виклик <code>dispatchEvent</code> для примусової реакції на зміну URL.
    </p>

    <p>
      Ми також застосовуємо кастомний хук <code>useLocalStorage</code>, щоб зберігати поточну адресу між перезавантаженнями — для стабільного UX. При кожному переході ми оновлюємо адресу в локальному сховищі й локальному <code>state</code>. В результаті компонент <code>MyRouter</code> рендерить відповідний маршрут зі списку або fallback-повідомлення, якщо шлях не знайдено.
    </p>

    <p>
      Перехід між сторінками відбувається через виклик функції <code>myRouterNavigate(path: string)</code>, яка:
      <ul className="list-disc list-inside">
        <li>використовує <code>window.history.pushState</code> для оновлення адресного рядка без перезавантаження</li>
        <li>створює подію <code>popstate</code>, яку слухає <code>MyRouter</code>, щоб оновити поточний маршрут</li>
      </ul>
    </p>

    <p>
      <strong>Чому не <code>React.Component</code>?</strong> Це — клас, а не тип. Якщо спробуєш передати функціональний компонент у проп <code>component</code> з типом <code>React.Component</code>, TypeScript кине помилку. <code>React.ComponentType</code> — єдино правильний тип, який покриває <em>усі</em> варіанти React-компонентів.
    </p>
  </div>
  );
}
