import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};
export default function Paragraph({ children }: ParagraphProps) {
  return <p className="mb-[10px]">{children}</p>;
}
