import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Slider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text: '3 days free, than $7.99/wk,\n if not cancelled',
    image: require('../../../assets/icons/call-answer.png'),
    colors: ['#3a5bce', '#27acf9'],
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text: '3 days free, than $7.99/wk,\n if not cancelled',
    image: require('../../../assets/icons/call-answer.png'),
    colors: ['#3a5bce', '#27acf9'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: '3 days free, than $7.99/wk,\n if not cancelled',
    image: require('../../../assets/icons/call-answer.png'),
    colors: ['#3a5bce', '#27acf9'],
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
  mostPopularContainer: {
    position: 'absolute', 
    width: '100%', 
    top: -9, 
    zIndex: 1, 
    textAlign: 'center', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  mostPopular: {
    backgroundColor: '#2fbeff',
    textAlign: 'center',
    padding: 3,
    borderRadius: 10,
    color: '#fff',
    fontSize: 12,
    fontWeight: '600'
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

const slide = StyleSheet.create({
  number: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 15
  },
  text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },
  image: {
    width: 50,
    height: 50,
  },
})


class SelectPlan extends Component {

  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        flex: 1
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
    <View>
      <Text style={slide.number}>+1 858-264-0510</Text>
      <Text style={slide.title}>Real Number</Text>
      <Text style={slide.text}>Contact anyone with your real number</Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={slide.image} source={props.image} />
    </View>
      <View style={{marginBottom: 30}}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );


  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
      <View style={{flex: 1}}>
        <Slider
          slides={slides}
          renderItem={this._renderItem}
          hideNextButton
          hideDoneButton
        />
      </View>
      <View style={styles.cardsContainer}>
      <View style={styles.mostPopularContainer}>
        <Text style={styles.mostPopular}>Most Popular</Text>
      </View>
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
      <View style={{flex: 0.4}}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectCountry')}>
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
