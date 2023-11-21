
/* eslint-disable react/react-in-jsx-scope */
import {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createTabOptions} from 'components/bottomTabOption';
import {HomeActive, HomeInActive, ScrapActive, ScrapInActive} from 'assets';
import HomeScreen from 'screens/HomeScreen';
import ScrapScreen from 'screens/ScrapScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#6D6D6D',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: 'transparent',
          borderRadius: 30,
          alignItems: 'center',
          height: 85,
        },
        headerShadowVisible: false,
        headerShown: false,
        headerTitle: '',
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={createTabOptions(HomeActive, HomeInActive, '홈')}
      />
      <Tab.Screen
        name="Scrap"
        component={ScrapScreen}
        options={createTabOptions(ScrapActive, ScrapInActive, '스크랩')}
      />
    </Tab.Navigator>
  );
};
export default memo(BottomTabs);
