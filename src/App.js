import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { QueryClient } from 'react-query';
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
