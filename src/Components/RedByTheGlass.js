import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

import MoulinAVentHidden from './MoulinAVentHidden';
import GivryHidden from './GivryHidden';
import StEmilionHidden from './StEmilionHidden';
import GravesBlancHidden from './GravesBlancHidden';
import CorseBlancHidden from './CorseBlancHidden';
import StVeranHidden from './StVeranHidden';
import ChardonnayHidden from './ChardonnayHidden';
import StEstepheHidden from './StEstepheHidden';
import VacqueyrasHidden from './VacqueyrasHidden';
import PinotNoirHidden from './PinotNoirHidden';
import NapaZinfandelHidden from './NapaZinfandelHidden';

export default class RedByTheGlass extends React.Component {

  render() {
    return (
      <View>

      <View style={styles.columnTitle}>
        <View>
          <Text style={styles.titleText}> Red </Text>
        </View>

      </View>




        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>MOULIN A VENT</Text>
              <Text style={styles.brand}>Barbet</Text>
              <Text style={styles.region}>Beaujolais,  FRANCE</Text>
              <Text style={styles.year}>'11</Text>
            </View>
            <View>
              <Text style={styles.price}>14</Text>
            </View>
            <MoulinAVentHidden />
          </View>
        </View>





        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>GIVRY 1ER CRU</Text>
              <Text style={styles.brand}>Domaine Seguin-Manuel</Text>
              <Text style={styles.region}>Burgundy,  FRANCE</Text>
              <Text style={styles.year}>'14</Text>
            </View>
            <View>
              <Text style={styles.price}>17</Text>
            </View>
            <GivryHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>ST EMILION</Text>
              <Text style={styles.brand}>Clos Castelot</Text>
              <Text style={styles.region}>Bordeaux (Right Bank),  FRANCE</Text>
              <Text style={styles.year}>'12</Text>
            </View>
            <View>
              <Text style={styles.price}>14</Text>
            </View>
            <StEmilionHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>ST. ESTEPHE</Text>
              <Text style={styles.brand}>Château Haut Beausejour</Text>
              <Text style={styles.region}>Bordeaux,  FRANCE</Text>
              <Text style={styles.year}>'12</Text>
            </View>
            <View>
              <Text style={styles.price}>20</Text>
            </View>
            <StEstepheHidden />
          </View>
        </View>



        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>VACQUEYRAS</Text>
              <Text style={styles.brand}>Domaine La Garrigue</Text>
              <Text style={styles.region}>Rhone,  FRANCE</Text>
              <Text style={styles.year}>'12</Text>
            </View>
            <View>
              <Text style={styles.price}>16</Text>
            </View>
            <VacqueyrasHidden />
          </View>
        </View>


        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>PINOT NOIR</Text>
              <Text style={styles.quote}>"L’Umami"</Text>
              <Text style={styles.brand}>Willamette Valley</Text>
              <Text style={styles.region}>Oregon,  USA</Text>
              <Text style={styles.year}>'15</Text>
            </View>
            <View>
              <Text style={styles.price}>13</Text>
            </View>
            <PinotNoirHidden />
          </View>
        </View>


        <View style={styles.itemFlexOuter}>
          <View style={styles.itemFlex}>
            <View style={styles.itemFlexInner}>
              <Text style={styles.type}>ZINFANDEL</Text>
              <Text style={styles.quote}>“Three valleys”</Text>
              <Text style={styles.brand}>Ridge Vineyards</Text>
              <Text style={styles.region}>Sonoma Valley,  USA</Text>
              <Text style={styles.year}>'12</Text>
            </View>
            <View>
              <Text style={styles.price}>19</Text>
            </View>
            <NapaZinfandelHidden />
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
    marginBottom: 5
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
    marginLeft: 11
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
