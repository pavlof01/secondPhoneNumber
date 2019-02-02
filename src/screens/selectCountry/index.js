import React, { Component } from 'react'
import { 
  Text, 
  View, 
  SafeAreaView, 
  FlatList, 
  StyleSheet, 
  TextInput, 
  Image 
} from 'react-native'
import CountryItem from '../../components/countryItem'
import countries from '../../countries.json';

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginHorizontal: 25
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '600'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  inputSearch: {
    flex: 1,
    paddingLeft: 10
  },
  searchIcon: {
    width: 15,
    height: 15,
  }
})

class SelectCounry extends Component {
  constructor(){
    super();
    this.state = {
      items: countries
    }
  }

  header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Select a Country</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={require('../../../assets/icons/search.png')} />
          <TextInput 
            style={styles.inputSearch} 
            placeholder='Search countries...' 
            onChangeText={text => this.filterCoutries(text)}
            />
        </View>
      </View>
    )
  }

  filterCoutries = text => {
    const target = text.toLowerCase()
    const list = countries
    const filteredList = list.filter(({name}) =>
      name.toLowerCase().match(target)
    )
    if (!text || text === '') {
      this.setState({ items: countries })
    } else {
      this.setState({
        items: filteredList,
      })
    }
  }

  keyExtractor = item => `${item.code}`
  
  renderItem = ({item}) => <CountryItem item={item} />

  render() {
    const { items } = this.state
    return (
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={this.header}
          keyExtractor={this.keyExtractor}
          data={items}
          renderItem={this.renderItem}
          ListEmptyComponent={<Text>Not Found</Text>}
        />
      </SafeAreaView>
    )
  }
}

export default SelectCounry
