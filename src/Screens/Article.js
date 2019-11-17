import React from "react";
import {View, Text} from 'react-native';

class Article extends React.Component{

  constructor(props){
    super(props);
      this.state={
    };
  };
  
  render(){
    return (
      <View style={{flex:1,borderColor:'',borderWidth:0}}>
      <Text>
          hey
      </Text>
      </View>
    )
  }
}

export default Article;