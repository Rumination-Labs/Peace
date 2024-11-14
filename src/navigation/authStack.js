import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Colors from '../constants/Color';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.darkGreen },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.white },
      }}
    >
      <Stack.Screen 
         name="Login" 
         component={Login} 
         //options={{headerShown:false}} 
         />
     
    </Stack.Navigator>
  );
}

export default AuthStack
