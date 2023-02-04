import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from "react-native";

type EANInputProps = {
    ean: string,
    setEan,
    onSearch: (result: EANResponse) => {}
};

type EANResponse = {
    ean: string,
    name: string,
    manufacturer: string
}

const EANInput = (props: EANInputProps) => {
    const search = () => {
        alert('EAN Search executed');

        // TODO API Request
        const dummyResponse: EANResponse = {
            ean: props.ean,
            name: 'Deo Loyal Man',
            manufacturer: 'Bruno Banani'
        };

        props.onSearch(dummyResponse);
    };

    return (
        <SafeAreaView style={styles.input_container}>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="EAN"
                onChangeText={props.setEan}
                maxLength={13}
                value={props.ean}
            />
            <Button title={'Search'} onPress={search}></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input_container: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 150
    },
});

export default EANInput;