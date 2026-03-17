import {View , Text , Button} from "react-native"
import {signOut , onAuthStateChanged} from 'firebase/auth';
import {auth }from "../service/firebaseAuth"
export default function DashboardScreen({navigation}) {
   const handleLogout = () => {
    signOut(auth)
    .then(() => {
         navigation.navigate("Login")
    })
    // onAuthStateChanged(auth, (user) => {
    //     if(user) {
    //         console.log("loggedIn")
    //     }else {
    //         console.log("loggedOut")
    //         navigation.navigate("Login")
    //     }
    // })

   }
    return (
        <View>
            <Text > 
                Welcome to Dashboard

            </Text>
            <Button title ="Logout"  onPress={handleLogout}/>
        </View>
    )
}