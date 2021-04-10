import { useCallback, useState } from "react";

// type UseToggle<T> = [T[], (item: any) => void, (items?: T[]) => void];                               type UseToggle<T> = [T[], (item: any) => void, (items?: T[]) => void];


export const useAsync = ( asyncFunction : any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

// console.log("result", );

  const run = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        const response = await asyncFunction(...params);
        console.log("response from async", response);
        setResult(response);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    },
    [asyncFunction]
  );

  return { error, result, loading, run };
};



