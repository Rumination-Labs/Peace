import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import AuthContent from '../components/forms/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticate } from '../store/authSlice';
import { login } from '../utils/auth';

function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(authenticate(token));
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default Login;
