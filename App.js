import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Table from './app/screens/Table'
import { store } from './app/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Table/>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
