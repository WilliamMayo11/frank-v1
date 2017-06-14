import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

import SancerreHidden from './SancerreHidden';
import PetitChablisHidden from './PetitChablisHidden';
import PinotBlancHidden from './PinotBlancHidden';
import GravesBlancHidden from './GravesBlancHidden';
import CorseBlancHidden from './CorseBlancHidden';
import StVeranHidden from './StVeranHidden';
import ChardonnayHidden from './ChardonnayHidden';

export default class WhiteByTheGlass extends React.Component {

  render() {
    return (
      <View>

      <View style={styles.columnTitle}>
        <View>
          <Text style={styles.titleText}>White</Text>
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





        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>PETIT CHABLIS</Text>
              <Text style={styles.brand}>Domaine Vincent Dampt</Text>
              <Text style={styles.region}>Burgundy,  FRANCE</Text>
              <Text style={styles.year}>'14</Text>
            </View>
            <View>
              <Text style={styles.price}>13</Text>
            </View>
            <PetitChablisHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>PINOT BLANC</Text>
              <Text style={styles.quote}>"Cuvée Les Amours"</Text>
              <Text style={styles.brand}>Famille Hugel</Text>
              <Text style={styles.region}>Alsace,  FRANCE</Text>
              <Text style={styles.year}>'11</Text>
            </View>
            <View>
              <Text style={styles.price}>11</Text>
            </View>
            <PinotBlancHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>GRAVES BLANC</Text>
              <Text style={styles.brand}>Château Coustaut</Text>
              <Text style={styles.region}>Bordeaux,  FRANCE</Text>
              <Text style={styles.year}>'13</Text>
            </View>
            <View>
              <Text style={styles.price}>12</Text>
            </View>
            <GravesBlancHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>CORSE BLANC</Text>
              <Text style={styles.brand}>Domaine Vico</Text>
              <Text style={styles.region}>Corsica,  FRANCE</Text>
              <Text style={styles.year}>'14</Text>
            </View>
            <View>
              <Text style={styles.price}>15</Text>
            </View>
            <CorseBlancHidden />
          </View>
        </View>


        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>ST VERAN</Text>
              <Text style={styles.quote}>“Les Cras”</Text>
              <Text style={styles.brand}>Domaine des Valanges</Text>
              <Text style={styles.region}>Burgundy,  FRANCE</Text>
              <Text style={styles.year}>'14</Text>
            </View>
            <View>
              <Text style={styles.price}>14</Text>
            </View>
            <StVeranHidden />
          </View>
        </View>


        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>CHARDONNAY</Text>
              <Text style={styles.quote}>“Sebella”</Text>
              <Text style={styles.brand}>Hanzell</Text>
              <Text style={styles.region}>Sonoma Valley,  USA</Text>
              <Text style={styles.year}>'14</Text>
            </View>
            <View>
              <Text style={styles.price}>19</Text>
            </View>
            <ChardonnayHidden />
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
    marginBottom: 5,
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
