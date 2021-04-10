import { useState } from "react";

type UseToggle<T> = [T[], (item: any) => void, (items?: T[]) => void];

const useToggle = <T = any>(defaultValues?: T[]): UseToggle<T> => {
  const [items, setItems] = useState<T[]>(defaultValues || []);

  const toggleItem = (item: any) => {
    if (items.includes(item)) {
      setItems((prev) => prev.filter((i) => i !== item));
    } else {
      setItems((prev) => prev.concat(item));
    }
  };

  const reset = (newItems?: T[]) => setItems(newItems || []);

  return [items, toggleItem, reset];
};

export default useToggle;
