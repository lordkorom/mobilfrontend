import React, { Component, useState }  from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
const IP= require('./Ipcim');

export default class App extends Component {
  constructor(props) {
    super(props);



    this.state = {
      data: [],
      isLoading: true
    };
  }
  
  async getMovies() {
    try {
      const response = await fetch(IP.Ipcim+'fajta');
      const json = await response.json();
      console.log(json)
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { data, isLoading } = this.state;
    const App = () => {
      const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{ flex: 1, padding: 24 , marginTop:40}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ fajta_id }, index) => fajta_id}
            renderItem={({ item }) => (

              <View style={{marginBottom:30}}>
              <Text style={{fontSize:30,color:'darkred',textAlign:'center', flex:1}}>
                {item.fajta_fajta}
              </Text>
              <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>felvitel</Text>
      </Pressable>
    </View>
                         
              </View>
            )}
          />
        )}
      </View>
    );
  }
}
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


