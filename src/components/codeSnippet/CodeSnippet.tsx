import { useState } from "react";

type CodeSnippetProps = {
  code: string;
  result: React.ReactNode;
};

function CodeSnippet({ code, result }: CodeSnippetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="mb-[10px]">
        <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={toggleVisibility}
        className="mb-[10px] cursor-pointer p-[5px] bg-gray-700 text-white text-[10px] border border-white"
      >
        {isVisible ? "Hide" : "Run code"}
      </button>
      {isVisible && (
        <div className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline mb-[10px]">
          {result}
        </div>
      )}
    </div>
  );
}

export default CodeSnippet;
