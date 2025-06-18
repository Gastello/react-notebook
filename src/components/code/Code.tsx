import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = {
  code: string;
};

function Code({ code }: CodeProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleIsExpanded = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id !== "copyCodeBtn") {
      setIsExpanded((prev) => !prev);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return isExpanded ? (
    <pre
      title="Click to show less"
      onClick={toggleIsExpanded}
      className="min-h-[49px] bg-[rgb(40,44,52)] cursor-pointer rounded text-sm text-white font-semibold text-outline relative mb-2.5"
    >
      <button
        id="copyCodeBtn"
        onClick={copyCode}
        type="button"
        className="hover:bg-white hover:text-gray-900 cursor-pointer absolute top-[5px] right-2 py-0.5 px-2 rounded-md border text-gray-300 border-gray-300"
      >
        Copy
      </button>
      <code>
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </code>
    </pre>
  ) : (
    <pre
      onClick={(e) => toggleIsExpanded(e)}
      className="cursor-pointer bg-[rgb(40,44,52)] p-2 rounded text-sm text-white font-semibold text-outline mb-2.5"
    >
      <i>Click to show Code</i>
    </pre>
  );
}

export default Code;
