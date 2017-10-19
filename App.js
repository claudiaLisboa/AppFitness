import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}