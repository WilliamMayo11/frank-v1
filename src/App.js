import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurantName: 'Augustine Wine'
    }
  }

  render() {
    return(
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        minimumZoomScale={1}
        maximumZoomScale={3}
      >
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
        <Text>This is the entire menu</Text>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa'
  }
})
