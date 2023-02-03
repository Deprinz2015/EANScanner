import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

type BarcodeScannerProps = {
    onScanned: (data) => {},
    onReset: () => {},
}

function BarcodeScanner(props: BarcodeScannerProps) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        console.log(type);
        console.log(data);

        props.onScanned(data);
    };

    const handleReset = () => {
        setScanned(false);
        props.onReset();
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.scanner_container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.barcode_scanner}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13, BarCodeScanner.Constants.BarCodeType.ean8]}
            />
            {scanned && <Button title={'Tap to scan again'} onPress={handleReset}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    scanner_container: {
        flex: 1,
    },
    barcode_scanner: {
        flex: 1
    }
});

export default BarcodeScanner;