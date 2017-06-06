import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

import HideView from './HideView';
import HideView2 from './HideView2';
import HideView3 from './HideView3';

export default class WhiteByTheGlass extends React.Component {

  state = {
    sancerreVisible: false,
    petitChablisVisible: false,
    pinotBlancVisible: false,
    gravesBlancVisible: false,
  }


  showSancerreModal(visible) {
    this.setState({sancerreVisible: visible});
    // setTimeout(() => {
    // this.hideSancerreModal(), 800});
  }

  // hideSancerreModal() {
  //   this.setState({
  //     sancerreVisible: false
  //   })
  // }

  showPetitChablisModal(visible) {
    this.setState({petitChablisVisible: visible});
  }

  showPinotBlancModal(visible) {
    this.setState({pinotBlancVisible: visible});
  }

  showGravesBlancModal(visible) {
    this.setState({gravesBlancVisible: visible});
  }

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
              <Text style={styles.type}> SANCERRE</Text>
              <Text style={styles.quote}>"Apud Sariacum"</Text>
              <Text style={styles.brand}>Phillipe Raimbault</Text>
              <Text style={styles.region}>Loire, FRANCE</Text>
              <Text style={styles.year}>'14</Text>
            <HideView />
          </View>
          <View>
            <Text style={styles.price}>15</Text>
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
    marginBottom: 20
  },
  titleText: {
    fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40,
  },
  itemFlexOuter: {
    width: 475,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  itemFlex: {
    // width: 475,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  type: {
    fontSize: 20,
    margin: 5
  },
  quote: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 14.8
  },
  region: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 14.8
  },
  brand: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 14.8
  },
  year: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 14.8
  },
  price: {
    fontSize: 14,
    marginTop: 16
  },

})
