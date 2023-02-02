import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from "react-native";

const EANInput = () => {
    const [ean, setEan] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="EAN"
                onChangeText={setEan}
                maxLength={13}
                value={ean}
            />
            <Button title={'Search'}></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 150
    },
});

export default EANInput;