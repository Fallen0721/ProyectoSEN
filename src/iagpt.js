import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const iagpt = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, inputText]);
            setInputText('');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>{item}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, padding: 10 }}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Escribe un Mensaje..."
                />
                <Button title="Enviar" onPress={handleSend} />
            </View>
        </View>
    );
};

export default iagpt;