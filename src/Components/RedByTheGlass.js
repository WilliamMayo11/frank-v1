import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';

export default class RedByTheGlass extends React.Component {
  render() {
    return (
      <View>

        <View style={styles.columnTitle}>
          <Text>Red</Text>
        </View>

        <View style={styles.itemListFlex}>

          <View style={styles.itemFlex}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.code}>4401</Text>
                <Text style={styles.type}>GIVRY</Text>
                <Text style={styles.quote}>1ER CRU "CREMILLONS"</Text>
                <Text style={styles.brand}>DOMAINE SEGUIN-MANUEL</Text>
                <Text style={styles.year}>'14</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>17</Text>
          </View>

          <View style={styles.itemFlex}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.code}>4301</Text>
                <Text style={styles.type}>MOULIN-A-VENT</Text>
                <Text style={styles.brand}>BARBET</Text>
                <Text style={styles.year}>'13</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>12</Text>
          </View>

          <View style={styles.itemFlex}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.code}>4602</Text>
                <Text style={styles.type}>ST EMILION</Text>
                <Text style={styles.brand}>CLOS CASTELOT</Text>
                <Text style={styles.year}>'12</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>14</Text>
          </View>

          <View style={styles.itemFlex}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.code}>4616</Text>
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
  code: {
    fontSize: 10,
    margin: 2
  },
  type: {
    fontSize: 14,
    margin: 2
  },
  quote: {
    fontSize: 11,
    margin: 2
  },
  brand: {
    fontSize: 11,
    margin: 2
  },
  year: {
    fontSize: 10,
    margin: 2
  }
})

