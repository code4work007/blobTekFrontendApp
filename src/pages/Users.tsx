import { useMemo } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { useUsers, useDeleteUser, usePagination } from '@/hooks';
import { USER_ROLES, USER_STATUSES } from '@/constants';
import { formatDate, getInitials } from '@/utils/formatters';
import type { User } from '@/types';
import type { TableColumn } from '@/types';

function StatusBadge({ status }: { status: User['status'] }) {
  const variantMap: Record<User['status'], 'success' | 'warning' | 'secondary'> = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary',
  };
  return (
    <Badge variant={variantMap[status]}>
      {USER_STATUSES[status]}
    </Badge>
  );
}

export default function Users() {
  const { page, limit, search, sortBy, sortOrder, setPage, setLimit, setSearch, setSort } =
    usePagination();

  const { data, isLoading, isError, refetch } = useUsers({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  });

  const deleteUser = useDeleteUser();

  const columns = useMemo<TableColumn<User>[]>(
    () => [
      {
        key: 'name',
        label: 'User',
        sortable: true,
        render: (_value, row) => (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={row.avatar} alt={row.name} />
              <AvatarFallback className="text-xs">{getInitials(row.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm leading-none">{row.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{row.email}</p>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        label: 'Role',
        sortable: true,
        render: (value) => (
          <span className="text-sm">{USER_ROLES[value as User['role']] ?? value}</span>
        ),
      },
      {
        key: 'department',
        label: 'Department',
        render: (value) => (
          <span className="text-sm text-muted-foreground">{(value as string) || '—'}</span>
        ),
      },
      {
        key: 'status',
        label: 'Status',
        render: (value) => <StatusBadge status={value as User['status']} />,
      },
      {
        key: 'createdAt',
        label: 'Joined',
        sortable: true,
        render: (value) => (
          <span className="text-sm text-muted-foreground">{formatDate(value as string)}</span>
        ),
      },
      {
        key: 'id',
        label: '',
        className: 'text-right',
        render: (_value, row) => (
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => deleteUser.mutate(row.id as string)}
            disabled={deleteUser.isPending}
          >
            Remove
          </Button>
        ),
      },
    ],
    [deleteUser]
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description={`${data?.total ?? 0} total users`}
        actions={
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add user
          </Button>
        }
      />

      <DataTable
        columns={columns}
        data={(data?.data ?? []) as unknown as Record<string, unknown>[]}
        total={data?.total ?? 0}
        page={page}
        limit={limit}
        isLoading={isLoading}
        isError={isError}
        searchValue={search}
        onSearchChange={setSearch}
        onPageChange={setPage}
        onLimitChange={setLimit}
        onSortChange={setSort}
        searchPlaceholder="Search users…"
        emptyTitle="No users found"
        emptyDescription="Try adjusting your search or add a new user."
        onRetry={() => refetch()}
        getRowKey={(row) => row.id as string}
      />
    </div>
  );
}
