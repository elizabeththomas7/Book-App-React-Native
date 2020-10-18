import React from 'react';
import { Image,View, Text,StyleSheet ,ScrollView} from 'react-native';
import { Rating } from 'react-native-ratings';

const Details = ({ route }) => {
    return (
        <View style={styles.detailsBody}>
            <ScrollView>
            <Text style={styles.title}>{route.params.title}</Text>
            <Text style={styles.publisher}>Published from : {route.params.publisher}</Text>
            <View style={styles.shadow}>
            <Image style={styles.thumbnail} source={route.params.imgSource}/>
            </View>
            <Rating style={styles.rating}
  count={5}
  defaultRating={3}
  imageSize={20}
  showRating={true}
  ratingTextColor={'black'}
/>

            <Text style={styles.desc}>{route.params.desc}</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    detailsBody:{
backgroundColor:'white',

    },
    publisher:{
        marginLeft:20
    },
    thumbnail: {
      height: 190,
      width: 150,
      left:200,
      top:10
  },
  title:{
    fontFamily: 'sans-serif',
      fontWeight: 'normal',
      fontSize:30,
      margin:20
  },
  rating:{
    marginRight:250
  },
  desc:{
      fontWeight:"bold",
      margin:20
  },
  shadow:{
      elevation:10
  }
 
  });
  
export default Details
