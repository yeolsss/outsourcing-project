import Router from './shared/Router';
import { GlobalStyle } from './shared/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
