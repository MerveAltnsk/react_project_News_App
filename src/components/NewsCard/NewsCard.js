import React from "react";
import{View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({haberler}) => {return(
    <View style={Styles.container}>
        < Image style={Styles.image}  source={{uri:haberler.imageUrl}}/>
        <Text style={styles.title}> {haberler.title} </Text>
        <Text style={styles.description}> {haberler.description} </Text>

    </View>
)}

export default  NewsCard;