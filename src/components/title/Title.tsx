type TitleProps = {
  text: string;
};
export default function Title({ text }: TitleProps) {
  return <div className="text-[20px] font-semibold mt-[10px]">{text}</div>;
}
