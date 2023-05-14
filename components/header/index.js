import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';


export default function Header() {

    return (
        <SafeAreaView style={HeaderStyle.container}>
            <View style={HeaderStyle.flexContainer}>
                <View>
                    <Text style={HeaderStyle.title}>book app</Text>
                </View>
                <View>
                  <Button title="Login" color="#fff"/>
                </View>
            </View>
        </SafeAreaView>
    );
}
const HeaderStyle = StyleSheet.create({
    container: {
        position: 'fixed',
        backgroundColor: 'black',
        height: 100,
        display: 'flex'
    },
    title: {
        fontSize: 30,
        color: '#fff'
    },
    flexContainer: {
        padding:6,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }

})
