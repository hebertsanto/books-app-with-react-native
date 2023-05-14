import react from "react";
import { View, Text, Image, StyleSheet} from "react-native";

export const Cardbook = ({ Books }) => {
    return(
        <View>
         <View style={CardBook.container}>
            {Books?.map((item, index) => (
                <View key={index} style={CardBook.subCard}>
                    <Image source={{uri: item.book_image}} style={{ width: 150, height: 230,}}  />
                    <Text style={CardBook.title}>{item.title}</Text>
                    <Text style={CardBook.author}>{item.author}</Text>
                </View>
            ))}
         </View>
       </View>
    )
}

const CardBook = StyleSheet.create({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin:10
    },
    title:{
        fontSize: 12
    },
    author:{
        fontSize: 17,
        fontWeight:'bold'
    },
    subCard:{
        width: 150,
        borderBottomColor: 'gainsboro',
        margin: 10,
        borderBottomWidth:1,
        paddingBottom: 10
    }
})
