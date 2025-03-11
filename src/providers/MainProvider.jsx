import { AuthContextProvider } from "@/context/AuthContext";
import { StateContextProvider } from "@/context/StateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const MainProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StateContextProvider>
          <HelmetProvider>{children}<Toaster position="top-right" reverseOrder={false} /></HelmetProvider>
        </StateContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MainProvider;
