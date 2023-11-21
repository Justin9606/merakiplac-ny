/* eslint-disable react/react-in-jsx-scope */
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import WebViewScreen from 'screens/WebViewScreen';
import {OS} from 'utils/utility';

export const navigationRef = createNavigationContainerRef<any>();

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'BottomTabs'}
        component={BottomTabs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          animation: OS === 'android' ? 'slide_from_bottom' : 'default',
        }}
      />
    </Stack.Navigator>
  );
};

const Layout = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Layout;
