import React, {useEffect , useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {HeaderBackButton, createDrawerNavigator, createStackNavigator, createAppContainer, DrawerItems} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';
// Screens 
///////////////////////////////////////////////////////////////////////////////////////////////////
import FirstMainScreen from './src/screens/FirstMainScreen';
import LoginScreen from './src/screens/LoginScreen';
import AddMachinaryScreen from './src/screens/AddMachinaryScreen';
import MachineDetailsScreen from './src/screens/MachineDetailsScreen';
import MyMachinesScreen from './src/screens/MyMachinesScreen';
import PendingRequestsScreen from './src/screens/PendingRequestsScreen';
import RecepientLocationScreen from './src/screens/RecepientLocationScreen';
import SecondMainScreen from './src/screens/SecondMainScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ScanScreen from './src/screens/ScanScreen';
import studyMainScreen from './src/screens/studyMainScreen';
import FinalDataScreen from './src/screens/FinalDataScreen';
import AfterAddMachineryScreen from './src/screens/AfterAddMachineryScreen';
////////////////////////////menu screens///////////////////////////////////////////////////////////
import SettingsScreen from './src/screens/menu/SettingsScreen';
import updateName from './src/screens/menu/updateName';
import updateAddress from './src/screens/menu/updateAddress';
import updatePhone from './src/screens/menu/updatePhone';
import updateDistrict from './src/screens/menu/updateDistrict';
import updateTehsil from './src/screens/menu/updateTehsil';
import updatePassword from './src/screens/menu/updatePassword';
///////////////////////// side bar screens///////////////////////////////////////////////////////////
import ContactUs from './src/screens/menu/ContactUs';
import notificationsScreen from './src/screens/menu/notificationsScreen';
import userGuideScreen from './src/screens/menu/userGuideScreen';
import logOutScreen from './src/screens/menu/logOutScreen';
//////////////////////////////////////////////////////////////////////////////////////////////////
console.disableYellowBox = true;

////////////////////////////// custom drawer navigator to show user name with /////////////////////
////////////////////////////// image icon and props for drawer label //////////////////////////////

const CustomDrawerNavigator = (props) => {
    const [userName , setuserName] = useState('');
    getname = async () => {
     const name = await AsyncStorage.getItem('@name');
     setuserName(name);
    }
    useEffect(() => {
      console.log('useEffect')
      getname();
    });
    return (
  <SafeAreaView style = {{flex:1}}>
    <View style = {{height:250, backgroundColor:'lightblue', alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons name="md-contact"  size ={100} />
      <Text style = {{fontSize: 30 ,fontWeight:'bold'}}>
        {userName}
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    </SafeAreaView>
  )
}

/////////////////////////////////// ends here ////////////////////////////////////////////////////////////


/////////////////// stack navigator for welcome login and signup screens ////////////////////////////////
const WelcomeScreens = createStackNavigator({

  Home: {
    screen: FirstMainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'HALCHALL CAPTAIN',
      header: null,
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SignUp',
    }),
  },

});

 
/////////////////// stack navigator for home and other screens //////////////////////////////// 
const AppScreens = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  userHome: {
    screen: SecondMainScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  ViewMachine: {
    screen: MyMachinesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'HALCHALL CAPTAIN',
    }),
  },
  AddMachine: {
    screen: AddMachinaryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Machinery',
    }),
  },
  AfterAddMachine: {
    screen: AfterAddMachineryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Machine Registered',
    }),
  },
  detailsMachine: {
    screen: MachineDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'My Machines',
    }),
  },
  pendingRequests: {
    screen: PendingRequestsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Pending Requests',
    }),
  },
  location: {
    screen: RecepientLocationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Location',
    }),
  },
  AddMachine: {
    screen: AddMachinaryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Machinery',
    }),
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Scan',
    }),
  },
  study: {
    screen: studyMainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Study',
    }),
  },
  final: {
    screen: FinalDataScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Bill',
    }),
  },
  
});


/////////////////// stack navigator for Profile and Edit Profile screens ////////////////////////////////

const Profile = createStackNavigator({

  settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }),
  },
  updateNameScreen: {
    screen: updateName,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  updateAddressScreen: {
    screen: updateAddress,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  updatePhoneScreen: {
    screen: updatePhone,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  updateDistrictScreen: {
    screen: updateDistrict,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  updateTehsilScreen: {
    screen: updateTehsil,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  updatePasswordScreen: {
    screen: updatePassword,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },


});

/////////////////// stack navigator for contact screen ////////////////////////////////

const ContactScreen = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Contact: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Us',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }),
  },
});


/////////////////// stack navigator for logout screen ////////////////////////////////

const logOutDrawer = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Logout: {
    screen: logOutScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
});


/////////////////// stack navigator for notifications screen ////////////////////////////////

const notifyDrawer = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Notify: {
    screen: notificationsScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }),
  },
});


/////////////////// stack navigator for userGuide screen ////////////////////////////////

const userGuideDrawer = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  userGuidescreen: {
    screen: userGuideScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }),
  },
});


/////////////////// drawer navigation to put screens in the side bar //////////////////////////////// 

const DrawerNavigation = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: {
    //Title
    screen: AppScreens,
    navigationOptions: {
      drawerLabel: 'Home Screen',
      drawerIcon: () => <Ionicons name="md-home" size={24} />
    },
  },

  ProfileUser: {
    //Title
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: () => <Ionicons name="md-contact" size={24} />
    },
  },

  ContactUs: {
    //Title
    screen: ContactScreen,
    navigationOptions: {
      drawerLabel: 'Contact Us',
      drawerIcon: () => <Ionicons name="md-person" size={24} />
    },
  },

  Notification: {
    //Title
    screen: notifyDrawer,
    navigationOptions: {
      drawerLabel: 'Notifications',
      drawerIcon: () => <Ionicons name="md-notifications" size={24} />
    },
  },

  UserGuide: {
    //Title
    screen: userGuideDrawer,
    navigationOptions: {
      drawerLabel: 'User Guide',
      drawerIcon: () => <Ionicons name="md-book" size={24} />
    },
  },

  logOut: {
    //Title
    screen: logOutDrawer,
    navigationOptions: {
      drawerLabel: 'Signout',
      drawerIcon: () => <Ionicons name="md-log-out" size={24} />
    },
  },


},{
  // custom drawer shwoing user name and icon
  contentComponent:CustomDrawerNavigator

});


/////////////////// root navigator which contains the whole screens together ////////////////////////////////

const rootNavigator = createStackNavigator({

  Welcome: {
    screen: WelcomeScreens,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

  Drawer: {
    screen: DrawerNavigation,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

},
{
  initialRouteName: 'Welcome',
},

);
 

export default createAppContainer(rootNavigator);

styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})