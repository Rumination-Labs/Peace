import axios from 'axios';
import {  useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import IconButton from '../components/ui/IconButton';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
function Home() {
    const dispatch = useDispatch();


  const [fetchedMessage, setFetchedMesssage] = useState('');
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios
      .get(
        'https://react-native-course-3cceb-default-rtdb.firebaseio.com/message.json?auth=' +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);

  function logoutHandler(){
    dispatch(logout());
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>

      <IconButton 
                   icon='exit' 
                   color={'black'}
                   size={24}
                   onPress={logoutHandler}/>

      
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});