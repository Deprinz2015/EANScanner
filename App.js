import {StyleSheet, View} from 'react-native';
import BarcodeScanner from "./Components/BarcodeScanner";
import EANInput from "./Components/EANInput";
import ProductInfo from "./Components/ProductInfo";
import {useState} from "react";

const App = () => {
    const initialItemState = {
        ean: null,
        name: null,
        manufacturer: null
    }

    const [ean, setEan] = useState('');
    const [item, setItem] = useState(initialItemState);

    const onScan = (data) => {
        console.log('Scanned Data: ' + data);

        setEan(data);
    };

    const onSearch = (result) => {
        console.log('Searched Data: ' + JSON.stringify(result));

        const updatedItem = {
            ean: result.ean,
            name: result.name,
            manufacturer: result.manufacturer
        }

        setItem(item => ({
            ...item,
            ...updatedItem
        }));
    };

    const reset = () => {
        setItem(initialItemState);
        setEan('');
    };

    return (
        <View style={styles.container}>
            <BarcodeScanner onScanned={onScan} onReset={reset} />
            <EANInput ean={ean} setEan={setEan} onSearch={onSearch} />
            <ProductInfo ean={item.ean} name={item.name} manufacturer={item.manufacturer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;