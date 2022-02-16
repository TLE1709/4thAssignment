import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListProtfolio() {
  return (
    <View
        style={{
            flex:0.37,
            marginBottom:7,
            marginTop:20
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"black"
        }}
      >Assets</Text>
      <View
            style={{
                flex:1,
                marginHorizontal:20,
                backgroundColor:"white",
                borderRadius:20,
                padding:10,
                justifyContent:"space-between"
            }}
      >
        <Top/>
        <Bottom/>
      </View>
    </View>
  )
}

function Top(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center"
               
            }}
        >
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                }}
            >
                <View
                    style={{
                        backgroundColor:"#313552",
                        padding:10,
                        borderRadius:10,
                    }}
                >
                    <FontAwesome name="home" size={25} color="white"/>
                </View>
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:"bold",
                        paddingHorizontal:10
                    }}
                >Real Estate</Text>
            </View>
            <Text style={{color:"grey"}}>Total : 8 </Text>
        </View>
    )
}

function Bottom(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:10
            }}
        >
            <View>
                <Text style={{color:"grey"}}>Revenue</Text>
                <Text 
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >Rs 1,80,00,000</Text>
            </View>
            <View>
                <Text style={{color:"grey"}}>profit</Text>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                >
                    <AntDesign name="caretup" color="#313552" />
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:"bold",
                            marginLeft:2
                        }}
                    >3.2%</Text>
                </View>
            </View>
        </View>
    )
}