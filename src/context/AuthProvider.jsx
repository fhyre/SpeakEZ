import { getCurrentUser } from 'aws-amplify/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);

  const checkAuth = async () => {
    try {
      const user = await getCurrentUser();
      setIsAuth(true);
      setUsername(user.username);
      setLoading(false);
    } catch (_) {
      setIsAuth(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      checkAuth();
    }
  }, [loading]);

  if (loading) return;

  return (
    <AuthContext.Provider
      value={{ auth: isAuth, username: username, transfer: setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
