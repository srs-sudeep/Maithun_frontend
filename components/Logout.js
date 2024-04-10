
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
  const handleLogout = async () => {
    const navigation = useNavigation();
    try {
      // Make a GET request to your logout API endpoint
      const response = await axios.get('http://10.10.18.178:5000/apis/users/logout');
      // Assuming the logout was successful, navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle errors if logout fails
    }
  };



export default handleLogout;
