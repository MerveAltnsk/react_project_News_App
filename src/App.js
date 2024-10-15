import React from "react";
import {  Text,View, FlatList,StyleSheet , ScrollView , Image, Dimensions} from "react-native";
import news_data from "./news_data.json"
import NewsCard from "./components/NewsCard"
import news_banner_data from "./news_banner_data.json"
function App(){             //FlatList mobile uygulamamda yoğun bir veri kullanmak istediğimde kullanacağım component, ekrana ne kadar çok veri kullanırsak     kullanalım uygulamayı yormadan kontrollu bir şekilde kullanıcı deneyimi için tasarlanmış özel bir module
  return(
  
    <View>

      <FlatList
      data={news_data}
      renderItem={({item}) => <NewsCard haberler={item}/>}
      />
   

    </View>
 
  )
}


  export default App;
