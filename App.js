import {StyleSheet, View} from 'react-native';
import EANInput from "./Components/EANInput";

export default function App() {
    return (
        <View style={styles.container}>
            <EANInput></EANInput>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
