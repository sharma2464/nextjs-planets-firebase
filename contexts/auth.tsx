import { useContext, useEffect, useState, createContext } from "react";
import firebase from "../config/firebase";

interface AuthProviderType {
  auth: Promise<any>;
  isLoading: Boolean;
}

const useGetAuth = (): AuthProviderType => {
  const [state, setState] = useState({ auth: null, isLoading: false });

  useEffect(() => {
    setState({ ...state, isLoading: true });
    const auth = firebase.auth.currentUser && firebase.auth.currentUser.uid;
    if (auth) {
      setState({ ...state, auth });
      setState({ ...state, isLoading: false });
    }
    setState({ ...state, isLoading: false });
  }, [firebase.auth]);

  return { auth: state.auth, isLoading: state.isLoading };
};

const AuthContext = createContext(null);
function AuthProvider(props: { children: any }) {
  const { auth, isLoading }: AuthProviderType = useGetAuth();
  return <AuthContext.Provider value={{ auth, isLoading }}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
export { AuthContext, AuthProvider, useGetAuth };
