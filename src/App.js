import React from "react";
import {  Text,View, FlatList,StyleSheet , ScrollView , Image, Dimensions} from "react-native";
import news_data from "./news_data.json"
import NewsCard from "./components/NewsCard"
import news_banner_data from "./news_banner_data.json"
function App(){             //FlatList mobile uygulamamda yoğun bir veri kullanmak istediğimde kullanacağım component, ekrana ne kadar çok veri kullanırsak     kullanalım uygulamayı yormadan kontrollu bir şekilde kullanıcı deneyimi için tasarlanmış özel bir module


  const renderNews = ({item}) => <NewsCard haberler={item}/>        //Bu şekilde fonksiyonları dışarıda tanımlarsak örneğin 200 kere fonksiyon oluşturmak yerine 1 kere oluşturup gerektiğinde bunu çağıracak 
  const keyExtractorFuunction = item => item.u_id.toString()

  return(
  
    <View style ={styles.container}>
     <Text style ={styles.headerText}>News</Text>

        <FlatList
        ListHeaderComponent={() => (        
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => (
              <Image 
              style={styles.banner_image}
              source={{uri: bannerNews.imageUrl}}
              />
            ))
            }
          </ScrollView>
        )}
        keyExtractor={keyExtractorFuunction}
        data={news_data}
        renderItem={renderNews}
        />
    </View>
 
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eceff1',
  },
  
  banner_image:{
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    margin :1,
    borderRadius: 5,
    
  },
  headerText:{
    fontSize: 50,
    fontWeight: 'bold',
    paddingLeft: 10,
  }

  
})



  export default App;
