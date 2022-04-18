import { createContext, ReactNode, useContext, useState } from 'react';

type PaginationContextData = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
};

type PaginationProviderProps = {
  children: ReactNode;
};

const PaginationContext = createContext({} as PaginationContextData);

export const PaginationProvider = ({
  children,
}: PaginationProviderProps): JSX.Element => {
  const [page, setPage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();

  return (
    <PaginationContext.Provider
      value={{ page, setPage, totalPages, setTotalPages }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): PaginationContextData => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }

  return context;
};
