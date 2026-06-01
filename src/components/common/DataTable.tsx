import { memo, useCallback, useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SearchInput } from './SearchInput';
import { Pagination } from './Pagination';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { TableSkeleton } from './Loader';
import { cn } from '@/lib/utils';
import type { TableColumn, SortOrder } from '@/types';
import { APP_CONFIG } from '@/constants';

interface DataTableProps<T extends Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  onSortChange?: (key: string, order: SortOrder) => void;
  searchPlaceholder?: string;
  toolbarExtra?: React.ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
  onRetry?: () => void;
  getRowKey?: (row: T) => string;
}

function DataTableInner<T extends Record<string, unknown>>({
  columns,
  data,
  total = 0,
  page = 1,
  limit = APP_CONFIG.defaultPageSize,
  isLoading = false,
  isError = false,
  errorMessage,
  searchValue = '',
  onSearchChange,
  onPageChange,
  onLimitChange,
  onSortChange,
  searchPlaceholder,
  toolbarExtra,
  emptyTitle,
  emptyDescription,
  onRetry,
  getRowKey,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const totalPages = Math.ceil(total / limit);

  const handleSort = useCallback(
    (key: string) => {
      if (!onSortChange) return;
      const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
      setSortKey(key);
      setSortOrder(newOrder);
      onSortChange(key, newOrder);
    },
    [sortKey, sortOrder, onSortChange]
  );

  const SortIcon = ({ columnKey }: { columnKey: string }) => {
    if (sortKey !== columnKey) return <ArrowUpDown className="ml-1 h-3.5 w-3.5 opacity-50" />;
    return sortOrder === 'asc'
      ? <ArrowUp className="ml-1 h-3.5 w-3.5" />
      : <ArrowDown className="ml-1 h-3.5 w-3.5" />;
  };

  const showToolbar = onSearchChange || toolbarExtra;

  return (
    <div className="space-y-4">
      {showToolbar && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {onSearchChange && (
            <SearchInput
              value={searchValue}
              onChange={onSearchChange}
              placeholder={searchPlaceholder}
              className="w-full sm:w-72"
            />
          )}
          {toolbarExtra && (
            <div className="flex items-center gap-2 ml-auto">{toolbarExtra}</div>
          )}
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={String(col.key)} className={col.className}>
                  {col.sortable && onSortChange ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="-ml-3 h-8 font-medium"
                      onClick={() => handleSort(String(col.key))}
                    >
                      {col.label}
                      <SortIcon columnKey={String(col.key)} />
                    </Button>
                  ) : (
                    col.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableSkeleton rows={limit} cols={columns.length} />
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="p-0">
                  <ErrorState message={errorMessage} onRetry={onRetry} />
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="p-0">
                  <EmptyState title={emptyTitle} description={emptyDescription} />
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, i) => (
                <TableRow
                  key={getRowKey ? getRowKey(row) : i}
                  className={cn('animate-fade-in')}
                >
                  {columns.map((col) => (
                    <TableCell key={String(col.key)} className={col.className}>
                      {col.render
                        ? col.render(row[col.key as keyof T], row)
                        : String(row[col.key as keyof T] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {!isError && total > 0 && onPageChange && (
        <Pagination
          page={page}
          totalPages={totalPages}
          total={total}
          limit={limit}
          onPageChange={onPageChange}
          onLimitChange={onLimitChange}
        />
      )}
    </div>
  );
}

export const DataTable = memo(DataTableInner) as typeof DataTableInner;
