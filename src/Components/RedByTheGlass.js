import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';

export default class RedByTheGlass extends React.Component {
  render() {
    return (
      <View>

        <View style={styles.columnTitle}>
          <Text style={styles.titleText}>Red</Text>
        </View>

        <View style={styles.itemListFlex}>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>GIVRY</Text>
                <Text style={styles.brand}>DOMAINE SEGUIN-MANUEL</Text>
                <Text style={styles.year}>'14</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>17</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>MOULIN-A-VENT</Text>
                <Text style={styles.brand}>BARBET</Text>
                <Text style={styles.year}>'13</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>12</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>ST EMILION</Text>
                <Text style={styles.brand}>CLOS CASTELOT</Text>
                <Text style={styles.year}>'12</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>14</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>ST ESTEPHE</Text>
                <Text style={styles.brand}>CHATEAU HAUT BEAUSEJOUR</Text>
                <Text style={styles.year}>'13</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>20</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemListFlex: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa'
  },
  itemFlexOuter: {
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },
  columnTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  titleText: {
    fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40
  },
  code: {
    fontSize: 10,
    marginTop: 7
  },
  type: {
    fontSize: 18,
    marginLeft: 5
  },
  quote: {
    fontSize: 10,
    marginLeft: 5
  },
  brand: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 6
  },
  year: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 6
  },
  price: {
    fontSize: 14,
    marginTop: 9
  }
})

