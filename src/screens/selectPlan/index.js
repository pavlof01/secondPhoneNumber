import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Slider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    icon: 'ios-images-outline',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    icon: 'ios-options-outline',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }, 
  cardsContainer: {
    flex: 0.4,
    flexDirection: 'row'
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 55,
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 45,
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    letterSpacing: 2
  },
  privacyContainer: {
    marginTop: 10
  },
  privacy: {
    textAlign: 'center',
    color: 'rgba(0,0,0, 0.3)',
    fontWeight: '100'
  }
})

const card = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: '#cde1ec',
    borderWidth: 4
  },
  containerLinear: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7
  },
  containerUniq: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }, 
  numOfMonths: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10
  },
  months: {

  },
  cost: {
    fontSize: 16,
    fontWeight: '600'
  },
  uniqText: {
    color: '#3784ec'
  }
})


class SelectPlan extends Component {

  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
      {/* <Ionicons style={{ backgroundColor: 'transparent' }} name={props.icon} size={200} color="white" /> */}
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );


  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
      <View style={{flex: 1}}>
        <Slider
          slides={slides}
          renderItem={this._renderItem}
          bottomButton
        />
      </View>
      <View style={styles.cardsContainer}>
        <View style={card.container}>
          <Text style={card.numOfMonths}>3</Text>
          <Text style={card.months}>months</Text>
          <Text style={card.cost}>$29.99</Text>
        </View>
        <LinearGradient
          colors={['#33bdfc', '#0278dc']}
          style={card.containerLinear}>
          <View style={card.containerUniq}>
            <Text style={[card.numOfMonths, card.uniqText]}>3-Day</Text>
            <Text style={[card.months, card.uniqText]}>trial</Text>
            <Text style={[card.cost, card.uniqText]}>$7.99/wk</Text>
          </View>
        </LinearGradient>
        <View style={card.container}>
          <Text style={card.numOfMonths}>12</Text>
          <Text style={card.months}>months</Text>
          <Text style={card.cost}>$59.99</Text>
        </View>
      </View>
      <View style={{flex: 0.5}}>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={['#0876d7', '#35bcfe']}
            style={styles.btn}
          >
            <Text style={styles.btnText}>ACTIVATE</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.privacyContainer}>
          <Text style={styles.privacy}>Terms of use | Privacy policy</Text>
        </View>
      </View>
      </SafeAreaView>
    )
  }
}

export default SelectPlan
