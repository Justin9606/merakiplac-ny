/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {RecoilRoot} from 'recoil';
import Layout from 'routes/RootNavigator';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
            <Layout />
          </SafeAreaView>
        </SafeAreaProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
