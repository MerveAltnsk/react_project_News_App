import React from "react";
import{View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({haberler}) => {return(
    <View style={styles.container}>
        < Image style={styles.image}  source={{uri:haberler.imageUrl}}/>

        <View style={styles.inner_container}> 

        <Text style={styles.title}> {haberler.title} </Text>
        <Text style={styles.description}> {haberler.description} </Text>
        <Text style={styles.author}> {haberler.author} </Text>

        </View>
    
    </View>
)}

export default  NewsCard;