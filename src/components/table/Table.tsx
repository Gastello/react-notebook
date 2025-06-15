import { useMemo } from "react";

type TableProps = {
  columnsCount: number;
  elementsList: string[];
};

type ResultProps = {
  header: string[];
  body: string[][];
};

const createElementsObject = (
  elements: string[],
  columns: number
): ResultProps => {
  const result: ResultProps = {
    header: [],
    body: [],
  };
  let currentRow: string[] = [];

  for (let i = 0; i < columns; i++) {
    result.header.push(elements[i]);
  }
  for (let i = columns; i < elements.length; i++) {
    currentRow.push(elements[i]);

    if (currentRow.length === columns) {
      result.body.push(currentRow);
      currentRow = [];
    }
  }
  if (currentRow.length > 0) {
    result.body.push(currentRow);
  }
  return result;
};

export default function Table({ columnsCount, elementsList }: TableProps) {
  const tableObject = useMemo(
    () => createElementsObject(elementsList, columnsCount),
    [elementsList, columnsCount]
  );

  return (
    <table className="mx-auto">
      <thead>
        <tr>
          {tableObject.header.map((el, idx) => (
            <th
              className="border-b border-white py-2 px-10 text-start"
              key={`el-${idx}`}
            >
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableObject.body.map((tr, trIndex) => {
          return (
            <tr key={`tr-${trIndex}`}>
              {tr.map((td, tdIndex) => {
                return (
                  <td
                    className="border-b border-white py-2 px-10 break-all"
                    key={`td-${trIndex}-${tdIndex}`}
                  >
                    {td}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
