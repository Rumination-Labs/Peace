
import Reports from '../screens/Reports';
import AllAppointments from '../screens/AllAppointments';
import Patients from '../screens/Patients';
import Home from '../screens/Home';
import { Ionicons,AntDesign,FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Color';
function AuthenticatedStack() {


    const BottomTabs = createBottomTabNavigator();

 
    return (
     
  
  <BottomTabs.Navigator 
  
  screenOptions={({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.darkGreen },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: Colors.darkGreen },
    tabBarActiveTintColor:Colors.seaGreen,
  })}
  >
  <BottomTabs.Screen  name="Welcome" component={Home}  
  
  options={{
            title: 'Home Page',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color={Colors.white} />
            ),
          }}/>
  <BottomTabs.Screen  name="Reports" component={Reports} options={{
            title: 'Reports',
            tabBarLabel: 'Reports',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="filetext1" size={24} color={Colors.white} />
            ),
          }} />
  <BottomTabs.Screen  name="Appointments" component={AllAppointments} options={{
            title: 'All Appointments',
            tabBarLabel: 'Appointments',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={24} color={Colors.white} />
            ),
          }} />
  <BottomTabs.Screen  name="Patients" component={Patients} options={{
            title: 'All Patients',
            tabBarLabel: 'Patients',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-plus" size={24} color={Colors.white} />
            ),
          }} />
  </BottomTabs.Navigator>
    );
  }

export default AuthenticatedStack