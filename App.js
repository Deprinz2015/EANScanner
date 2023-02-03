import {StyleSheet, View} from 'react-native';
import BarcodeScanner from "./Components/BarcodeScanner";
import EANInput from "./Components/EANInput";

export default function App() {
    return (
        <View style={styles.container}>
            <BarcodeScanner></BarcodeScanner>
            <EANInput></EANInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
