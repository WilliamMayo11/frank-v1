import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import RedByTheGlass from './Components/RedByTheGlass';
import WhiteByTheGlass from './Components/WhiteByTheGlass';
import HideView from './Components/HideView';
import RoseByTheGlass from './Components/RoseByTheGlass';
import Carafes from './Components/Carafes';
import SparklingByTheGlass from './Components/SparklingByTheGlass';

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
              <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 2}}/>
            </View>

            <Text style={styles.byTheGlassText}>BY THE GLASS</Text>

            <View style={styles.line}>
              <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 2}}/>
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


        <View style={styles.menuColumns}>
          <View style={styles.whiteColumn}>
            <RoseByTheGlass />
            <SparklingByTheGlass />
          </View>
          <View style={styles.redColumn}>
            <Carafes />
          </View>
        </View>


        <View style={{marginTop: 70}}>

        </View>
        <View style={styles.byTheGlassContainer}>
          <View style={styles.line}>
            <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 2}}/>
          </View>
          <Text style={styles.byTheGlassText}>HALF BOTTLES</Text>
          <View style={styles.line}>
            <View style={{borderBottomColor: '#5B7E90', borderBottomWidth: 2}}/>
          </View>
        </View>

        <View style={styles.menuColumns}>

          <View style={styles.whiteColumn}>
            <WhiteByTheGlass />
            <RoseByTheGlass />
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
    marginTop: 30
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  byTheGlassText: {
    color: '#5B7E90',
    fontSize: 26
  },
  line: {
    width: 410,
    padding: 20
  },
  menuColumns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  whiteColumn: {
    marginRight: 50
  },
  redColumn: {
    marginRight: 30
  }
})
