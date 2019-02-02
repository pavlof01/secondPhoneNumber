import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import CountryItem from '../../components/countryItem'
import countries from '../../countries.json';

class SelectCounry extends Component {

  keyExtractor = item => `${item.code}`
  
  renderItem = ({item}) => <CountryItem item={item} />

  render() {
    return (
      <SafeAreaView>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={countries}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    )
  }
}

export default SelectCounry
