import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, Slider } from 'react-native';
import {AntDesign, Entypo,Ionicons, createIconSet } from '@expo/vector-icons';

export default function App() {

  const NewMorph =({children, size, style})=>{
    return(
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View 
              style={[styles.inner, {width:size || 40,
                      borderRadius:size/2 ||40/2},style
                    ]}

          >
            {children}
          </View>

        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:'stretch'}}>
        <View style={{marginHorizontal:32, marginTop:32}}>
          <View style={styles.topContainer}>
            <NewMorph>
              <AntDesign name="arrowleft" size={20} color={"white"}/>
            </NewMorph>
            <View>
              <Text style={styles.playing} style={{color:"white",fontWeight:500}}>PLAYING NOW</Text>
            </View>
            <NewMorph size={48}>
              <Entypo name="menu" size={24} color={"white"} />
            </NewMorph>
          </View>

          <View style={styles.songArtContainer}>
            <NewMorph>
              <Image source={require('./assets/flower.jpg')} style={styles.songArt}/>
            </NewMorph>
            </View>

            <View style={styles.songContainer}>
              <Text style={styles.title}>Back To You</Text>
              <Text style={styles.artist}>WayV - Kun ft Xiaojun</Text>
            </View>

            <View style={styles.trackContainer}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={styles.time}>1.21</Text>
                  <Text style={styles.time}>3.09</Text>
                </View>
                
            </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002861',
    alignItems: 'center',
  },
  topContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  inner:{
    backgroundColor:"#002861",
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#004ab3",
    borderWidth:1
  },
  topShadow:{
    shadowOffset:{
      width:-6,
      height:-6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:"#002a66"
  },
  bottomShadow:{
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:"#002a66"
  },
  songArt:{
    width:300,
    height:300,
    borderRadius:150,
    borderColor:"white",
    borderWidth:5
  },
  songArtContainer:{
    marginVertical:32,
    alignItems:"center"
  },
  songContainer:{
    alignItems:"center",
  },
  title:{
    fontSize:27,
    color:"white",
    fontWeight:"600"
  },
  artist:{
    fontSize:14,
    margin:6,
    color:"#b3d2ff",
    fontWeight:"500"
  },
  trackContainer:{
    marginTop:32,
    marginBottom:64
  },
  time:{
    fontSize:10,
    color:"#b3d2ff",
    fontWeight:"700"
  }
});
