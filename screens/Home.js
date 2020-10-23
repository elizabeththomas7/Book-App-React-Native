import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Button, StyleSheet,TouchableOpacity,ScrollView, Text,Image, View ,FlatList,ActivityIndicator} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  
  const[data,setData]=useState([]);
  
  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=react&key={key}')
    .then((res)=>res.json())
    .then((json)=>setData(json.items))
    .catch((err)=>console.log(err))
    .finally(() => setLoading(false));
  }, [])
  
    
    return (
        <View>
            <View style={styles.header}>
      <Icon name='menu' size={30} />
      <Text style={styles.headerText}>All Books</Text>
      <Icon name='search' size={30} />
      </View>
      {/* <View style={styles.button}>
      {/* <Button
  title="Ebook"
  type="outline"
/>
<Button 
  title="Audio Books"
  type="outline"
/> 
</View> */}
<ScrollView>
      <View style={styles.body}>
        
      {isLoading ? <ActivityIndicator/> : (
        <FlatList numColumns={2} 
        data={data} 
        renderItem={({item})=>(
  
          <View >
          {/* <Text>{item.volumeInfo.title}</Text> */}
          <TouchableOpacity onPress={()=>navigation.navigate('Details',{
            title:item.volumeInfo.title,
publisher:item.volumeInfo.publisher,
desc:item.volumeInfo.description,
imgSource:item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail ?
  {uri:  item.volumeInfo.imageLinks.smallThumbnail} : require('../assets/icon.png')

          })}>
          <Image style={styles.thumbnail}
                  source={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail ?
                     {uri:  item.volumeInfo.imageLinks.smallThumbnail} : require('../assets/icon.png')}
                />
                </TouchableOpacity>
      </View>
        )} />
        
        )}
      </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
      </View>
      <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 28,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'white'
      
    },
    boldText: {
      fontWeight:'bold',
    },
    body:{
      display:'flex',
      padding:20,
      fontWeight:'bold',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'white'
    },
    buttonContainer:{
  margin:20
    },
    button:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    thumbnail: {
      height: 250,
      width: 180,
      margin: 8,
      
  },
  bookList:{
    flexDirection: 'row',
  },
  headerText:{
    fontSize:20
  }
  });
  

export default Home
