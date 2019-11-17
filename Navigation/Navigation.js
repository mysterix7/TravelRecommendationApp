import {Navigation} from 'react-native-navigation';


export const startTravelScreen = () => {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            stack: {
                
              children: [
              {
            component: {
              id:   'TravelScreen',
              name: 'TravelScreen'
              // ,passProps: {
              //   componentId: 'SplashScreen' 
              // }
            }
              }]
              ,options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  // animate: true,
                },
                layout: {
                  orientation: ['portrait'] // An array of supported orientations
                }
              }
          }
        }})
      });
    }
    export const pushh =() => {
        Navigation.push('Article', {
            component: {
              id:'Article',  
              name: 'Article',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Pushed screen title'
                  }
                }
              }
            }
          });
    }
    export const pushToScreenFullScreen = (componentId, screenName, titleName) => {
      
        Navigation.push(componentId, {
          component: {
            id: screenName,
            name: screenName,
            passProps: {
              text: 'Pushed screen'
            }
            ,options: {
              topBar: {
                visible: true,
                title: {
                  text: titleName,
                  color: '#7892B8',
                  fontSize:18,
                },
                background: {
                  color: '#F3F7FD'
                },
                elevation:0,
                // height: ,
                  // alpha:0,
                drawBehind: true,
              },
              layout: {
                orientation: ['portrait'] // An array of supported orientations
              }
            }
          }
        }).then((msg) => {}).catch((err) => {})
      }