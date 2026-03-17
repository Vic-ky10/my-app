import {View , Text , Button} from "react-native"
import {signOut , onAuthStateChanged} from 'firebase/auth';
import {auth }from "../service/firebaseAuth"
export default function DashboardScreen() {
   const handleLogout = () => {
    signOut(auth)
    onAuthStateChanged(auth, (user) => {
        if(user) {
            console.log("loggedIn")
        }else {
            console.log("loggedOut")
        }
    })

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