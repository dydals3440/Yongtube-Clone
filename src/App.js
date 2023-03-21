import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
