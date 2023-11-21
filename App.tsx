import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  // Home screen content
};

const ScrapScreen = () => {
  // Scrap screen content
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#6D6D6D',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopColor: 'transparent',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 85,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: 'center',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home', // Localize your string "사용 언어의 집"
          }}
        />
        <Tab.Screen
          name="Scrap"
          component={ScrapScreen}
          options={{
            title: 'Scrap', // Localize your string "스크랩"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
