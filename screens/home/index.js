import { apiUrl } from "../../api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cardbook } from "../../components/cardBook";
import { View } from "react-native";

export const Home = () => {
    const [data, setData] = useState([])
    
    const FetchApi = () => {
        axios.get(apiUrl)
        .then((res) => setData(res.data.results.books))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        FetchApi()
    }, [])

    return(
       <View>
         <Cardbook Books={data}/>
       </View>
    )
}
