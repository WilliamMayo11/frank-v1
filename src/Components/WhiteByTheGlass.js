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

        <View style={styles.itemFlexOuter}>
          <View>
            <Text style={styles.titleText}> SANCERRE</Text>
          </View>
        </View>
        <HideView />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  titleText: {
    // fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40,
  },
  itemFlexOuter: {
    width: 475,
  },

})
