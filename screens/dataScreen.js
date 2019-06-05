import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import API_KEY from '../config.js';

export default class DataScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        city: '',
        country: '',
        temp: null,
        humidity: null,
        desc: '',
      }
    }
  }

  componentDidMount() {
    let city = this.props.navigation.getParam('city', null);
    let country = this.props.navigation.getParam('country', null);

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;

    fetch(URL)
      .then(response => response.json())
      .then(info => {
        console.log(info);

        let data = this.state.data;

        data['temp'] = info.main.temp.toFixed(0);
        data['humidity'] = info.main.humidity;
        data['desc'] = info.weather[0].main;

        this.setState({ data });
      });
  }

  static navigationOptions = {
    title: 'Today\'s Weather Info',
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <View style={styles.infoContainer}>

              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>City</Text>
              </View>
              <Text style={styles.infoText}>
                {navigation.getParam('city', 'n/a')}
              </Text>


              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Country</Text>
              </View>
              <Text style={styles.infoText}>
                {navigation.getParam('country', 'n/a')}
              </Text>


              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Current Temperature</Text>
              </View>
              <Text style={styles.infoText}>{this.state.data.temp}&deg; F</Text>


              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Humidity</Text>
              </View>
              <Text style={styles.infoText}>{this.state.data.humidity}%</Text>


              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Description</Text>
              </View>
              <Text style={styles.infoText}>{this.state.data.desc}</Text>


            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoHeader: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
  },

  infoHeaderText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },

  infoText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});
