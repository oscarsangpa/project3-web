import MainRouter from "./router/MainRouter";
import AuthContextProvider from "./contexts/AuthContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div>
          <header>
            <h1>Navbar</h1>
          </header>
          <main>
            <MainRouter />
          </main>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;


