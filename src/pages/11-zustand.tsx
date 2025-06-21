import Code from "../components/code/Code";
import Paragraph from "../components/paragraph/Paragraph";
import Table from "../components/table/Table";
import Title from "../components/title/Title";
import Topic from "../components/topic/Topic";
import ZustandExample from "../components/zustandExample/ZustandExample";

export default function Zustand() {
  return (
    <Topic title="Zustand — глобальний state manager">
      <Paragraph>
        <strong>Zustand</strong> (від нім. «стан») — бібліотека для керування
        глобальним станом React-додатку без Context, reducer, або
        Redux-boilerplate.
        <br />
        Простий як useState, але масштабується краще.
      </Paragraph>
      <Title text="Встановлення" />
      <Code code="npm i zustand" />
      <Paragraph>
        Офіційний сайт: <a target="_blank" rel="noreferrer" href="https://zustand-demo.pmnd.rs/">Zustand</a>
      </Paragraph>
      <Title text="Коли використовувати Zustand" />
      <Paragraph>
        <Table
          columnsCount={3}
          elementsList={[
            "Сценарій",
            "Context API",
            "Zustand",
            "`theme`, `language`",
            "можна",
            "можна",
            "auth‑user (login, role, token)",
            "криво",
            "✅",
            "кеш даних (наприклад, фільтри)",
            "ні",
            "✅",
            "шарені UI‑стани (модалки, спінери)",
            "важко",
            "✅",
            "undo/redo, persist, devtools",
            "ні",
            "✅",
          ]}
        />
      </Paragraph>
      <Topic title="✅ Синтаксис">
        <Title text="Створення простого store" />
        <Code
          code={`// store/useCounterStore.ts
import { create } from 'zustand';

type State = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const useCounterStore = create<State>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: s.count - 1 })),
}));`}
        />
        <Title text="Використання у компоненті" />
        <Code
          code={`import { useCounterStore } from './store/useCounterStore';

function Counter() {
  const count = useCounterStore((s) => s.count);
  const inc = useCounterStore((s) => s.inc);
  const dec = useCounterStore((s) => s.dec);

  return (
    <div>
      <button onClick={dec}>–</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}`}
        />
        <Paragraph>Чому не можна так:</Paragraph>
        <Code
          code={`const { count, inc, dec } = useCounterStore((s) => s); // ❌ BAD`}
        />
        <Paragraph>
          Ось що відбувається:
          <ul className="list-disc list-inside">
            <li>{`s => s`} повертає весь об&apos;єкт стану (store).</li>
            <li>
              Якщо будь-яке поле в об&apos;єкті зміниться (наприклад, count),
              весь об&apos;єкт новий → React вважає, що весь state змінився →
              перерендер компонента.
            </li>
            <li>
              У тебе немає shallow compare по полях — все рендериться наново,
              навіть якщо inc/dec не змінились.
            </li>
          </ul>
          У правильному прикладі:
          <ul className="list-disc list-inside">
            <li>Кожен рядок підписується тільки на одне поле.</li>
            <li>
              Компонент рендериться тільки тоді, коли саме це поле змінюється.
            </li>
            <li>Реально працює як useSelector в Redux.</li>
          </ul>
        </Paragraph>
        <Title text="Селектори з типами" />
        <Code
          code={`// useUserStore.ts
type User = { id: string; name: string };

type UserState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Використання
const user = useUserStore((s) => s.user);`}
        />
        <Title text="Оптимізація з shallow" />
        <Code
          code={`import { shallow } from 'zustand/shallow';

const { count, inc } = useCounterStore(
  (s) => ({ count: s.count, inc: s.inc }),
  shallow
);`}
        />
        <Title text="Вибірка без підписки (get)" />
        <Code
          code={`const token = useAuthStore.getState().token; // без ререндеру`}
        />
      </Topic>
      <Topic title="✅ Що таке shallow?">
        <Paragraph>
          <strong>shallow</strong> — це поверхнева (shallow) перевірка на
          рівність між старим і новим об&apos;єктом.
          <br /> Використовується в Zustand (і не тільки), щоб перевірити, чи
          змінились значення всередині об&apos;єкта, який повертає твій
          селектор.
        </Paragraph>
        <Title text="Простими словами" />
        <Paragraph>
          shallow(prev, next) =<br />
          ✅ поверне true, якщо всі поля об&apos;єкта однакові по значенню
          <br />❌ поверне false, якщо хоча б одне поле змінилось
        </Paragraph>
        <Title text="Приклад" />
        <Code
          code={`const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

shallow(obj1, obj2); // ✅ true — значення однакові
shallow(obj1, obj3); // ❌ false — b відрізняється`}
        />
        <Title text="У контексті Zustand" />
        <Paragraph>Без shallow:</Paragraph>
        <Code
          code={`const { count, inc } = useCounterStore((s) => ({
  count: s.count,
  inc: s.inc,
})); // ❌ Завжди новий обʼєкт → завжди ререндер`}
        />
        <Paragraph>З shallow:</Paragraph>
        <Code
          code={`import { shallow } from 'zustand/shallow';

const { count, inc } = useCounterStore(
  (s) => ({ count: s.count, inc: s.inc }),
  shallow
); // ✅ Ререндер тільки якщо count або inc змінились`}
        />
      </Topic>
      <Topic title="✅ Патерни">
        <Title text="Глобальний кеш запитів" />
        <Code
          code={`const useProductStore = create(() => ({
  products: [] as Product[],
  setProducts: (data: Product[]) => set({ products: data }),
}));

// Де завантажуєш:
useEffect(() => {
  fetchProducts().then(useProductStore.getState().setProducts);
}, []);`}
        />
        <Title text="UI‑стани" />
        <Code
          code={`const useModalStore = create(() => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));`}
        />
      </Topic>
      <Topic title="✅ Приклади">
            <ZustandExample/>
      </Topic>
    </Topic>
  );
}
