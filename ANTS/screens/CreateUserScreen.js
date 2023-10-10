import React from "react";
import { View, Text, ScrollView } from "react-native";

const CreateUserScreen = () => {
    <ScrollView>
        <View>
            <TextInput placeholder="Name user" ></TextInput>
        </View>
        <View>
            <TextInput placeholder="password user" ></TextInput>
        </View>
        <View>
            <button title="Save user"></button>
        </View>
    </ScrollView>
}

/* const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        background: "red"
    }
}) */

export default CreateUserScreen;