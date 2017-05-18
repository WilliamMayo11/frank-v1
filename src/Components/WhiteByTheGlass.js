import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class WhiteByTheGlass extends React.Component {

  handleTouchSancerre() {
    console.log('Sancerre touched');
  }

  render() {
    return (
      <View>

        <View style={styles.columnTitle}>
          <Text style={styles.titleText}>White</Text>
        </View>

        <View style={styles.itemListFlex}>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight
              onPress={this.handleTouchSancerre}
            >
              <View style={styles.itemFlex}>
                  <Text style={styles.type}>SANCERRE</Text>
                  <Text style={styles.brand}>R&D RAIMBAULT</Text>
                  <Text style={styles.year}>'15</Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.price}>16</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>PETIT CHABLIS</Text>
                <Text style={styles.brand}>C&L PINSON</Text>
                <Text style={styles.year}>'15</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>13</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>ST VERAN</Text>
                <Text style={styles.brand}>DOMAINE DES VALANGES</Text>
                <Text style={styles.year}>'14</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>14</Text>
          </View>

          <View style={styles.itemFlexOuter}>
            <TouchableHighlight>
            <View style={styles.itemFlex}>
                <Text style={styles.type}>ALSACE PINOT BLANC</Text>
                <Text style={styles.brand}>HUGEL</Text>
                <Text style={styles.year}>'14</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>11</Text>
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
    width: 340,
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
    fontFamily: 'SavoyeLetPlain',
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
