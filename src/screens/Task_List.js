import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'

import Taks from "../components/Taks"

import today_Image from "../../assets/imgs/today.jpg"
import Taks from "../components/Taks"
export default class Task_List extends Component {
    render() {
        const today = moment().locale('pt-br').format('dddd, DD [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                <view style={styles.container}>
	                <text style={styles.titleBar}>HOJE</text>
	                <text style={styles.subTitle}> {today} </text>
                </view>

                </ImageBackground>
                <View style={styles.taskList}>
                    <Task/>
                    <Task/>
                    <Task/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },

    titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
    },

    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20,
    },

    subTitle:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30,
    },

})

