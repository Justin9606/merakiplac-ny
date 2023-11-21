/* eslint-disable react/react-in-jsx-scope */
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RecoilRoot} from 'recoil';
import Layout from 'routes/RootNavigator';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
