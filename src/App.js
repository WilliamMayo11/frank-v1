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

          <View style={styles.whiteColumn}>
            <WhiteByTheGlass />
          </View>

          <View style={styles.redColumn}>
            <RedByTheGlass />
          </View>
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
    justifyContent: 'space-between',
    marginTop: 100
  },
  whiteColumn: {
    marginLeft: 90
  },
  redColumn: {
    marginLeft: 60,
    marginRight: 100
  }
})
