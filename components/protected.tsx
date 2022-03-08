import { useRouter } from "next/router";
import { useGetAuth } from "../contexts/auth";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { auth, isLoading } = useGetAuth();
  const isUser = auth && !isLoading;
  return isUser ? children : router.replace("/signin");
};

export default PrivateRoute;
