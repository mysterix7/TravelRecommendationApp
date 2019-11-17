import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import * as theme from'../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {pushToScreenFullScreen,push,pushToScreen} from '../../Navigation/Navigation'

const {height, width} = Dimensions.get('screen');

const destinations = [
    {
      id: 1,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: 'Santorini, Greece',
      temperature: 34,
      title: 'Santorini',
      description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
      rating: 4.3,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 2,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: false,
      location: 'Loutraki, Greece',
      temperature: 34,
      title: 'Loutraki',
      description: 'This attractive small town, 80 kilometers from Athens',
      rating: 4.6,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 3,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: 'Santorini, Greece',
      temperature: 34,
      title: 'Santorini',
      description: 'Santorini - Description',
      rating: 3.2,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      id: 4,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      location: 'Loutraki, Greece',
      temperature: 34,
      title: 'Loutraki',
      description: 'This attractive small town, 80 kilometers from Athens',
      rating: 5,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
  ]
 class TravelScreen extends React.Component{

    constructor(props) {
        super(props);
      }
      scrollX = new Animated.Value(0);
      header =() => {
        return(
            <View style={[styles.row, styles.header]}>
                <View>
                <Text style={{ color : '#BCCCD4'}}>Search for place</Text>
                <Text style={{fontSize:24}}>Destination</Text>
                </View>
                <View>
                <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} /> 
                </View>
            </View>

        )
      }
      renderDots = () => {
      const dotPosition = Animated.divide(this.scrollX, width);

      return (
        <View style={[
          styles.flex, styles.row,
          { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
        ]}>
          {destinations.map((item, index) => {
            const borderWidth = dotPosition.interpolate({
              inputRange: [index -1, index, index + 1],
              outputRange: [0, 2.5, 0],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View
                key={`step-${item.id}`}
                style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
              />
            )
          })}
        </View>
      )   
      }
      renderDestination = (item) =>{
        //   console.log("[TravelScreen]  renderDestination()==>",item)

          return(
            <ImageBackground
              style={[styles.flex, styles.destination, styles.shadow]}
              imageStyle = {{borderRadius : 12}}
              source= {{uri : item.preview}}
            >
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <View style={{flex : 0}}>
                  <Image source={{uri: item.user.avatar}} style={styles.avatar}/>
                </View>
                <View style={[styles.column, {flex : 2, paddingHorizontal : 18}]}>
                  <Text style={{color : 'white', fontWeight : 'bold'}}>{item.user.name}</Text>
                  <Text style={{ color: theme.colors.white }}>
                  <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                  />  
                  <Text style={{color : 'white'}}>{item.location}</Text>
                  </Text>
                </View>
                <View style={{flex : 0, justifyContent : 'center', alignItems : 'flex-end'}}>
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
              <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
                <Text style={{ fontSize: 24, fontWeight: '500', paddingBottom: 8, }}>
                  {item.title}
                </Text>
                <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                  <Text style={{ color : '#BCCCD4'}}>
                    {item.description.split('').slice(0, 50)}...
                  </Text>
                </View>
              </View>
            </ImageBackground>
          )
    
      }
      renderDestinations = () =>{
          return( 
            <View style={[styles.column,{flex:6},styles.destinations]}>
                <FlatList 
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment='center'
                decelerationRate={0}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
                data={destinations}
                keyExtractor={(item,index)=>`${item.id}`}
                renderItem = {({item,index})=>this.renderDestination(item,index)}
                />
                {this.renderDots()}
            </View>
          )
      }
      onPressRecommended = () =>{
        pushToScreen('TravelScreen','Article',null,null,'black')
      }
      renderRecommended = () =>{
        return(
            <View style={[ styles.column,{flex:6}]}>
              <View
                style={[
                  styles.row,
                  styles.recommendedHeader
                ]}
              >
                <Text style={{ fontSize: 20 }}>Recommended</Text>
                <TouchableOpacity  onPress={this.onPressRecommended}>
                  <Text style={{ color: '#BCCCD4' }}>More</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.column]}>
                <FlatList 
                  horizontal
                  pagingEnabled
                  scrollEnabled
                  showsHorizontalScrollIndicator = {false}
                  scrollEventThrottle = {16}
                  snapToAlignment = "center"
                  data = {destinations}
                  keyExtractor = {(item, index)=> `${item.id}`}
                  renderItem={({ item, index }) => this.renderRecommendation(item, index)}
                />
              </View>
            </View>
        )
      } 
    renderRecommendation(item, index) {
        const isLastItem = index === destinations.length - 1;
        return(
            <View 
              style={[styles.flex, styles.column, styles.recommendation, styles.shadow,
                      index === 0 ? { marginLeft: 36 } : null,
                      isLastItem ? { marginRight: 36 / 2 } : null,
                     ]}
             >
              <View style={[styles.flex, styles.recommendationHeader]}>
                <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
                <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
                  <Text style={styles.recommendationTemp}>
                    {item.temperature}℃
                  </Text>
                  <FontAwesome
                  name={item.saved ? 'bookmark' : 'bookmark-o'}
                  color={theme.colors.white}
                  size={theme.sizes.font * 1.25}
                />
                </View>
              </View>
              <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: 36 / 2 }]}>
                <Text style={{ fontSize: 16 * 1.25, fontWeight: '500', paddingBottom: 36 / 4.5, }}>{item.title}</Text>
                <Text style={{ color: '#BCCCD4' }}>{item.location}</Text>
              </View>
              <View style={[styles.row,{ alignItems: 'center', justifyContent: 'space-between',marginLeft:20,marginBottom:20 }]}>
                <Text style={{ color: '#007BFA'}}>
                {item.rating}
                </Text>
              </View>
            </View>
            
        )
      }
      render(){
          return(
              <View style={{flex:1}}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 36}}
              >
                {this.header()}
                {this.renderDestinations()}
                {this.renderRecommended()}
                </ScrollView>
              </View>
          )
      }
}
export default TravelScreen; 

const styles = StyleSheet.create({
    
    flex:{
        flex:1,
    },
    row:{
        flexDirection:'row'
    },
    column:{
        flexDirection:'column'
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 36,
        paddingTop: 36 * 1.33,
        paddingBottom: 36 * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    destinations:{
        flex: 6,
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    destination : {
        width : width - (36 * 2),
        height : width * 0.66,
        marginHorizontal : 36,
        paddingHorizontal : 36,
        paddingVertical : 24,
        borderRadius : 12,
        // overflow : 'visible'
      },
      destinationInfo : {
        position : 'absolute',
        borderRadius : 12,
        paddingHorizontal : 36,
        paddingVertical : 16,
        bottom : 20,                       //In iOS platform, bottom : -36
        right : 36,
        left : 36,
        backgroundColor : 'white',
      },
      shadow : {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
      },
    recommended : {
        padding : 36
      },
    recommendation: {
        width: (width - (36 * 2)) / 2,
        marginHorizontal: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 12,
        marginVertical: 36 * 0.5,
      },
    recommendationImage: {
        width: (width - (36* 2)) / 2,
        height: (width - (36 * 2)) / 2,
    },      
    recommendedHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 36,
    }, 
    recommendationHeader: {
        overflow: 'hidden',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
      },
    recommendationOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 36 / 2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
    recommendationTemp: {
        fontSize: 14 * 1.25,
        color: 'white'
    },     
    avatar :{
        width: 36,
        height : 36,
        borderRadius : 18
    },
    rating: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
      },  
      dots: {
        width: 10,
        height: 10,
        borderWidth: 2.5,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor: '#DCE0E9',
        borderColor: 'transparent',
      },
      activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: '#007BFA',
      }
});