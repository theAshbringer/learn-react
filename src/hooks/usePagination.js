import { useMemo } from 'react';

const usePagination = (totalPages) => {
  const pagesArray = useMemo(() => {
    const result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalPages]);

  return pagesArray;
};

export default usePagination;
