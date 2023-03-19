import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
