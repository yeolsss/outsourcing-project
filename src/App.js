import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import { GlobalStyle } from './shared/styles/GlobalStyles';

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
