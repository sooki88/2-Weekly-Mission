import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

// interface Data {
//   id: number;
//   created_at: Date;
//   name: string;
//   faborite: boolean;
//   link: { count: number };
// }

// interface UseAsyncReturn {
//   execute: unknown;
//   loading: boolean;
//   error: unknown;
//   data?: Data[];
// }

export const useAsync = <T>(asyncFunction: () => Promise<{ data: T }>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (errorl) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
