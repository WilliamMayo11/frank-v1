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

        <View style={styles.titleContainerOuter}>
          <View contentContainerstyle={styles.titleContainer}>
            <Text style={styles.titleText}>Augustine Wine</Text>
            <Text style={styles.titleText}>New York, NY</Text>
          </View>

          <View style={styles.byTheGlassContainer}>
            <View style={styles.line}>
              <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 1}}/>
            </View>

            <Text style={styles.byTheGlassText}>By The Glass</Text>

            <View style={styles.line}>
              <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 1}}/>
            </View>
          </View>

        </View>




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
  titleContainerOuter: {
    marginTop: 20
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  titleText: {
    fontFamily: 'AvenirNext-UltraLight',
    fontSize: 60,
    color: '#5B7E90',
    textAlign: 'center'
  },
  byTheGlassContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  byTheGlassText: {
    color: '#5B7E90',
    fontSize: 20
  },
  line: {
    width: 280,
    padding: 20
  },
  menuColumns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  whiteColumn: {
    marginLeft: 140
  },
  redColumn: {
    marginLeft: 40,
    marginRight: 160
  }
})
