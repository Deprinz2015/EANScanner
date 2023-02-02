import {StyleSheet, View} from 'react-native';
import Cat from "./Components/Cat";

export default function App() {
    return (
        <View style={styles.container}>
            <Cat></Cat>
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
