import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { userService } from '@/services/user.service';
import { QUERY_KEYS } from '@/constants';
import type { PaginationParams, UpdateProfilePayload, UpdatePasswordPayload, CreateUserPayload } from '@/types';

export function useUsers(params: PaginationParams) {
  return useQuery({
    queryKey: QUERY_KEYS.users.list(params as Record<string, unknown>),
    queryFn: () => userService.getUsers(params),
    placeholderData: (prev) => prev,
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.users.detail(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id,
  });
}

export function useCreateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateUserPayload) => userService.createUser(payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.users.all });
      toast.success('User created successfully.');
    },
  });
}

export function useUpdateProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateProfilePayload }) =>
      userService.updateProfile(id, payload),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.users.detail(id) });
      qc.invalidateQueries({ queryKey: QUERY_KEYS.auth.me });
      toast.success('Profile updated successfully.');
    },
  });
}

export function useUpdatePassword() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdatePasswordPayload }) =>
      userService.updatePassword(id, payload),
    onSuccess: () => {
      toast.success('Password updated successfully.');
    },
  });
}

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => userService.deleteUser(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.users.all });
      toast.success('User deleted.');
    },
  });
}
