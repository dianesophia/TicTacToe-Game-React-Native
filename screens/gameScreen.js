import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const GameScreen = () => {
    const data = ["", "", "", "", "", "", "", "", ""];
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.boardBorder}>
                <View style={styles.board}>

                    <View style={styles.row1}>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                    </View>

                    <View style={styles.row2}>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                    </View>

                    <View style={styles.row3}>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                        <View style={styles.boxes}></View>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 45,
    },
    boardBorder: {

    },
    board: {
        height: 300,
        width: 300,
        display: 'flex',
        margin: 'auto',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    boxes: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: '#6c5b7b',
        borderRadius: 5,
    }
});

export default GameScreen;
