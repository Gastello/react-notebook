import { useState } from "react";

type TopicProps = {
  title: string;
  children: React.ReactNode;
};

function Topic({ title, children }: TopicProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className="mb-[20px] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-gray-600 after:w-full after:h-[1px]">
      <div onClick={toggleVisibility} className="cursor-pointer text-[26px] font-bold">{title} {isOpen?'▼':'▶'}</div>
      <div>
        <div>{isOpen && children}</div>
      </div>
    </div>
  );
}

export default Topic;