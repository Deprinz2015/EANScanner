import {StyleSheet, View} from 'react-native';
import BarcodeScanner from "./Components/BarcodeScanner";
import EANInput from "./Components/EANInput";
import ProductInfo from "./Components/ProductInfo";
import {useState} from "react";

export default function App() {
    const initialItemState = {
        ean: null,
        name: null,
        manufacturer: null
    }

    const [ean, setEan] = useState('');
    const [item, setItem] = useState(initialItemState);

    function onScan(data) {
        console.log('Scanned Data: ' + data);

        let updatedValue = {ean: data};

        setItem(item => ({
            ...item,
            ...updatedValue
        }));
    }

    const reset = () => {
        setItem(initialItemState);
    };

    return (
        <View style={styles.container}>
            <BarcodeScanner onScanned={onScan} onReset={reset} />
            <EANInput />
            <ProductInfo ean={item.ean} name={item.name} manufacturer={item.manufacturer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
