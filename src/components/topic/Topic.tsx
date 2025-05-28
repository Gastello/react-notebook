type TopicProps = {
  title: string;
  children: React.ReactNode;
};
function Topic({ title, children }: TopicProps) {
  return (
    <div className="mb-[20px] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-gray-600 after:w-full after:h-[1px]">
      <div className="text-[26px] font-bold">{title}</div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Topic;