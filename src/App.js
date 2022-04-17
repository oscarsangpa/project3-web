import MainRouter from "./router/MainRouter";
import AuthContextProvider from "./contexts/AuthContext";

export function App() {
  return (
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
  );
}
