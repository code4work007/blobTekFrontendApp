import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/auth.store';
import { ROUTES, QUERY_KEYS } from '@/constants';
import type { LoginCredentials, RegisterCredentials, ForgotPasswordPayload } from '@/types';

export function useAuth() {
  const navigate = useNavigate();
  const { setAuth, logout: storeLogout, user, isAuthenticated } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: ({ tokens, user: authUser }) => {
      setAuth(tokens.accessToken, authUser);
      toast.success(`Welcome back, ${authUser.name}!`);
      navigate(ROUTES.DASHBOARD);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed. Please check your credentials.');
    },
  });

  const registerMutation = useMutation({
    mutationFn: (payload: RegisterCredentials) => authService.register(payload),
    onSuccess: ({ tokens, user: authUser }) => {
      setAuth(tokens.accessToken, authUser);
      toast.success('Account created successfully!');
      navigate(ROUTES.DASHBOARD);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed. Please try again.');
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (payload: ForgotPasswordPayload) => authService.forgotPassword(payload),
    onSuccess: () => {
      toast.success('Password reset instructions sent to your email.');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to send reset email.');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      storeLogout();
      navigate(ROUTES.LOGIN);
      toast.info('You have been signed out.');
    },
  });

  return {
    user,
    isAuthenticated,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    forgotPassword: forgotPasswordMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    isSendingReset: forgotPasswordMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    forgotPasswordSuccess: forgotPasswordMutation.isSuccess,
  };
}

/** Fetch the current authenticated user's profile */
export function useMe() {
  const { isAuthenticated, token } = useAuthStore();

  return useQuery({
    queryKey: QUERY_KEYS.auth.me,
    queryFn: () => authService.getMe(),
    enabled: isAuthenticated && !!token,
    staleTime: 1000 * 60 * 5,
  });
}
