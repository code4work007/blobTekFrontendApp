import { useState, useCallback } from 'react';
import { APP_CONFIG } from '@/constants';
import type { SortOrder } from '@/types';

interface PaginationState {
  page: number;
  limit: number;
  search: string;
  sortBy: string;
  sortOrder: SortOrder;
}

interface UsePaginationReturn extends PaginationState {
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setSearch: (search: string) => void;
  setSort: (key: string, order: SortOrder) => void;
  reset: () => void;
}

const defaultState: PaginationState = {
  page: 1,
  limit: APP_CONFIG.defaultPageSize,
  search: '',
  sortBy: '',
  sortOrder: 'asc',
};

export function usePagination(initial?: Partial<PaginationState>): UsePaginationReturn {
  const [state, setState] = useState<PaginationState>({ ...defaultState, ...initial });

  const setPage = useCallback((page: number) => {
    setState((prev) => ({ ...prev, page }));
  }, []);

  const setLimit = useCallback((limit: number) => {
    setState((prev) => ({ ...prev, limit, page: 1 }));
  }, []);

  const setSearch = useCallback((search: string) => {
    setState((prev) => ({ ...prev, search, page: 1 }));
  }, []);

  const setSort = useCallback((sortBy: string, sortOrder: SortOrder) => {
    setState((prev) => ({ ...prev, sortBy, sortOrder, page: 1 }));
  }, []);

  const reset = useCallback(() => {
    setState({ ...defaultState, ...initial });
  }, [initial]);

  return { ...state, setPage, setLimit, setSearch, setSort, reset };
}
