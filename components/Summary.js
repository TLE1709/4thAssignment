import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Summary() {
  return (
        <View
            style={{
                flex:0.3
            }}
        >
            <View
                style={{
                    width:"90%",
                    flex:1,
                    backgroundColor:"#313552",
                    borderRadius:25,
                    alignSelf:'center',
                    justifyContent:'center',
                    paddingHorizontal:20,
                    position:"relative",
                }}
            >
                <Text style={{color:"white",fontSize:16}}>Savings</Text>
                <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Rs 3,20,13,000</Text>
            </View>
            
            <View
                style={{
                    position:"absolute",
                    bottom:-20,
                    width:'100%',
                }}
            >
                <Profit/>
            </View>
        
        </View>
  )
}

function Profit(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                elevation:5,
                borderRadius:25,
                width:"80%",
                alignSelf:"center",
                padding:15,
                backgroundColor:"white"
            }}
        >
            <Text style={{fontWeight:"bold",color:"#495371",fontSize:18}}>Gain %</Text>
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                }}
            >
                <Text 
                    style={{
                        color:"#495371",
                        fontSize:15,
                        fontWeight:"bold",
                   
                    }}
                >
                    7,00,000</Text>
                <AntDesign name="caretup" color="#495371" style={{marginHorizontal:5}}/>

                <Text 
                    style={{
                        color:"#495371",
                        fontSize:15,
                        fontWeight:"bold"
                    }}>
                    12%</Text>
            </View>
        </View>
    )
}