import { StyleSheet, View } from "react-native";
import Header from "../components/Posts/header";

export default function PostScreen() {
    return (
        <View style={styles.body} >
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
})