import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import RedByTheGlass from './Components/RedByTheGlass';
import WhiteByTheGlass from './Components/WhiteByTheGlass';

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
        <View style={styles.menuColumns}>
          <WhiteByTheGlass />
          <RedByTheGlass />
        </View>
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
  },
  menuColumns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100
  }
})
