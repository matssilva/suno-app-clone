import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import WalletScreen from './src/screens/WalletScreen/WalletScreen';
import { Icon } from 'react-native-elements';
import tw from './tailwind';
import Logo from './src/screens/HomeScreen/Logo';
import Header from './src/shared/Header';
import HeaderHome from './src/shared/HeaderHome';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
    text: 'Home',
    options: {
      headerTitle: (props) => <Logo {...props} />,
      headerStyle: {
        backgroundColor: 'rgb(16,16,16)',
      },
    },
  },
  {
    name: 'Reports',
    component: WalletScreen,
    icon: 'description',
    text: 'Relatórios',
  },
  {
    name: 'Wallets',
    component: WalletScreen,
    icon: 'wallet-outline',
    text: 'Carteiras',
    type: 'material-community',
  },
  {
    name: 'Podcasts',
    component: WalletScreen,
    icon: 'mic',
    text: 'Podcasts',
  },
  {
    name: 'Menu',
    component: WalletScreen,
    icon: 'menu',
    text: 'Menu',
  },
];

export default function App() {
  const renderBottomTabs = () => {
    return tabs.map((tab, i) => (
      <Tab.Screen
        key={i}
        name={tab.name}
        component={tab.component}
        options={{
          headerStyle: {
            height: 60,
          },
          header: (props) =>
            tab.name === 'Home' ? (
              <HeaderHome {...props} headerTitle={tab.text} />
            ) : (
              <Header {...props} headerTitle={tab.text} />
            ),
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                size={30}
                type={tab.type ?? 'material'}
                name={tab.icon}
                color={focused ? 'rgb(203,40,26)' : 'rgb(152,152,152)'}
              />
              <Text style={tw`text-gray ${focused && 'text-white'}`}>{tab.text}</Text>
            </View>
          ),
        }}
      />
    ));
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        >
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: 'rgb(16,16,16)',
                height: 80,
                borderTopColor: 'rgb(33,33,33)',
                borderTopWidth: 0.5,
                alignItems: 'center',
              },
            }}
          >
            {renderBottomTabs()}
          </Tab.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
