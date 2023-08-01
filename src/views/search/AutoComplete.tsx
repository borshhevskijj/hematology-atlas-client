import { useState, useEffect } from "react";
interface ICellName {
  name: string;
}

export const AutoComplete: React.FC = () => {
  const BCnames: ICellName[] | null = JSON.parse(localStorage.getItem("BCnames")!);
  const [names, setNames] = useState<ICellName[]>(BCnames || []);
  const [isNamesLoaded, setIsNamesLoaded] = useState(!!localStorage.getItem("BCnames"));

  const getAllCellsNames = async () => {
    const fetching = await fetch(`https://hematology-atlas-server-v2.vercel.app/allCells`);
    const data = await fetching.json();
    setNames(data);
    localStorage.setItem("BCnames", JSON.stringify(data));
  };

  useEffect(() => {
    if (!isNamesLoaded) {
      getAllCellsNames();
      setIsNamesLoaded(true);
    }
  }, []);
  return (
    <>
      <datalist id="auto_complete">
        {names &&
          names.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
      </datalist>
    </>
  );
};
