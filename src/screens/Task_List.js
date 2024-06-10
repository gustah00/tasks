import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity, Platform } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

import moment from "moment"

import today_Image from "../../assets/imgs/today.jpg"
import common_Styles from "../styles/common_Styles"
import Task from "../components/Task"

import "moment/locale/pt-br"

export default class Task_List extends Component {

    state = {
        show_done_task: true,
        visible_tasks: [],
        tasks: [{
            id: Math.random(),
            description: "Comprar jogo GTA 6",
            estimate_at: new Date(),
            done_at: new Date()
        },
        {
            id: Math.random(),
            description: "Jogar GTA 6",
            estimate_at: moment(new Date()).add(5, "days"),
            done_at: null
        },
        {
            id: Math.random(),
            description: "Levar o carro no mêcanico",
            estimate_at: moment(new Date()).add(10, "days"),
            done_at: null
        }]
    }

    componentDidMount = () => {
        this.filter_tasks()
    }

    toggle_filter = () => {
        this.setState({ show_done_task: !this.state.show_done_task }, this.filter_tasks)
    }

    filter_tasks = () => {
        let visible_tasks = null
        if(this.state.show_done_task){
            visible_tasks = [...this.state.tasks]
        }else{
            const pending = task => task.done_at === null
            visible_tasks = this.state.tasks.filter(pending)
        }

        this.setState({visible_tasks})
    }

    toggle_task = task_id => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === task_id) {
                task.done_at = task.done_at ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filter_tasks)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.icon_bar}>
                        <TouchableOpacity onPress={this.toggle_filter}>
                            <Icon name={this.state.show_done_task ? 'eye' : 'eye-slash'} size={20} color="#FFF"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visible_tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task{...item} toggle_task={this.toggle_task} />} />
                    {/* <Task description={"Comprar jogo GTA 6"} estimate_at={new Date()} done_at={new Date()} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} />
                    <Task description={"Jogar GTA 6"} estimate_at={new Date()} done_at={null} /> */}
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
        fontFamily: common_Styles.fontfamily,
        color: common_Styles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: common_Styles.fontfamily,
        color: common_Styles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    icon_bar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'flex-end'
    },

})