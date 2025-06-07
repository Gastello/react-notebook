import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};
export default function Paragraph({ children }: ParagraphProps) {
  return <div className="mb-[10px]">{children}</div>;
}
