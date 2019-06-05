import React from 'react';
import { StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput
  } from 'react-native';


export default class SearchScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      city: 'Boston',
      country: 'US'
    }
  }


  static navigationOptions = {
    title: 'Search City Weather',
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Search a City:</Text>
            <TextInput
             style={styles.inputForm}
             value={this.state.city}
             onChangeText={(text) => this.setState({ city: text})}
             />

             <View style={{width: '100%', marginTop: 50}}>
              <Button
                title="Get Weather"
                onPress={() => navigate('Data', { 'city': this.state.city, 'country': this.state.country })}
                />
              </View>
            </View>
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
  formContainer: {
    flex: 1,
    width: '80%',
    paddingLeft: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  inputLabel: {
    fontSize: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  inputForm: {
    alignSelf: 'stretch',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});
