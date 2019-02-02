import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  cotainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1
  },
  textContainer: {
    flex: 1
  },  
  image: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  name: {
    fontWeight: '600',
    fontFamily: 'System',
    fontSize: 18,
  },
  calls: {
    backgroundColor: '#82d1b4',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 8,
    fontWeight: '600',
    color: '#fff',
    position: 'absolute',
    top: 25
  },
  arrowContainer: {
    marginRight: 30
  },  
  arrow: {
    width: 15,
    height: 15,
  }
})

class CountryItem extends Component {
  render() {
    const { name, code } = this.props.item
    const co = String(code.toLowerCase())
    return (
      <TouchableOpacity onPress={() => console.warn("object")}>
        <View style={styles.cotainer}>
          <Image 
              style={styles.image} 
              source={{uri:`https://www.countryflags.io/${co}/flat/64.png`}} />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            <Text style={styles.calls}>CALLS</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Image 
                style={styles.arrow} 
                source={require('../../../assets/icons/right-arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CountryItem
