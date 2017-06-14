import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

import SancerreHidden from './SancerreHidden';

export default class Carafes extends React.Component {

  render() {
    return (
      <View>


          <View style={styles.byTheGlassContainer}>


            <View style={styles.lineWrapper}>
              <Text style={styles.byTheGlassText}>     CARAFES     </Text>
            </View>


            <View style={styles.columnTitle}>
              <View>
                <Text style={styles.titleText}> White </Text>
              </View>
            </View>

            <View style={styles.itemFlexOuter}>
              <View style={styles.itemFlex}>
                <View style={styles.itemFlexInner}>
                  <Text style={styles.type}>SANCERRE</Text>
                  <Text style={styles.quote}>"Apud Sariacum"</Text>
                  <Text style={styles.brand}>Phillipe Raimbault</Text>
                  <Text style={styles.region}>Loire,  FRANCE</Text>
                  <Text style={styles.year}>'14</Text>
                </View>
                <View>
                  <Text style={styles.price}>15</Text>
                </View>
                <SancerreHidden />
              </View>
            </View>

            <View style={styles.columnTitle}>
              <View>
                <Text style={styles.titleText}> Red </Text>
              </View>
            </View>


            <View style={styles.itemFlexOuter}>
              <View style={styles.itemFlex}>
                <View style={styles.itemFlexInner}>
                  <Text style={styles.type}>SANCERRE</Text>
                  <Text style={styles.quote}>"Apud Sariacum"</Text>
                  <Text style={styles.brand}>Phillipe Raimbault</Text>
                  <Text style={styles.region}>Loire,  FRANCE</Text>
                  <Text style={styles.year}>'14</Text>
                </View>
                <View>
                  <Text style={styles.price}>15</Text>
                </View>
                <SancerreHidden />
              </View>
            </View>



          </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  columnTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40,
  },
  byTheGlassContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5B7E90',
    width: 475,
  },
  byTheGlassText: {
    color: '#5B7E90',
    fontSize: 20,
    marginTop: 4,
    fontSize: 26,
  },
  lineWrapper: {
    marginTop: -20,
  },
  columnTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: -5,
  },
  titleText: {
    fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40,
  },
  itemFlexOuter: {
    width: 475,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 14
  },
  itemFlex: {
    flex: 1,
    // width: 475,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  itemFlexInner: {
    // width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  type: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 18,
    margin: 5,
    marginTop: 11,
    marginLeft: 22
  },
  quote: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 14,
    marginLeft: 7,
    marginTop: 14.8
  },
  region: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 14,
    marginLeft: 7,
    marginTop: 15.3
  },
  brand: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 14,
    marginLeft: 7,
    marginTop: 15.3
  },
  year: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 14,
    marginLeft: 7,
    marginTop: 14.8
  },
  price: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 18,
    marginTop: 13
  },
})
