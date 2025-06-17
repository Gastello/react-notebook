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

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div>
      <div className="mb-[10px]">
        <pre className="relative bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
          <button
            id="copyCodeBtn"
            onClick={copyCode}
            type="button"
            className="hover:bg-white hover:text-gray-900 cursor-pointer absolute top-[5px] right-2 py-1 px-2 rounded-md border text-gray-300 border-gray-300"
          >
            Copy
          </button>
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
        <div className="bg-gray-900 p-2 rounded text-sm text-white font-semibold mb-[10px]">
          {result}
        </div>
      )}
    </div>
  );
}

export default CodeSnippet;
