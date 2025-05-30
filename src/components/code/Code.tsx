type CodeProps = {
    code: string;
}
function Code({ code }: CodeProps) {
  return (
    <pre className="bg-gray-900 p-2 rounded text-sm text-white font-semibold text-outline">
      <code>{code}</code>
    </pre>
  );
}

export default Code;
