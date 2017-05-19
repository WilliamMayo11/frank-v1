import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView } from 'react-native';

export default class WhiteByTheGlass extends React.Component {

  state = {
    sancerreVisible: false,
    petitChablisVisible: false,
  }

  showSancerreModal(visible) {
    this.setState({sancerreVisible: visible});
    // setTimeout(() => {
    //   hideSancerreModal(), 200});
  }

  // hideSancerreModal() {
  //   this.setState({
  //     sancerreVisible: false
  //   })
  // }

  showPetitChablisModal(visible) {
    this.setState({petitChablisVisible: visible});
  }

  render() {
    return (
      <View>

        <View style={styles.columnTitle}>
          <Text style={styles.titleText}>White</Text>
        </View>

        <View style={styles.itemListFlex}>







          <View style={styles.itemFlexOuter}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.sancerreVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={styles.ModalContentContainer}>
                <ScrollView
                  style={styles.sancerreModal}
                  minimumZoomScale={1}
                  maximumZoomScale={3}
                >
                  <View>
                    <Text style={styles.modalTitle}>Sancerre</Text>

                    <TouchableHighlight onPress={() => {
                      this.showSancerreModal(!this.state.sancerreVisible)
                    }}>
                      <Text style={styles.closeModalText}>Got it!</Text>
                    </TouchableHighlight>

                  </View>
                </ScrollView>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showSancerreModal(true)
              }}
            >
              <View style={styles.itemFlex}>
                <Text style={styles.type}>SANCERRE</Text>
                <Text style={styles.brand}>R&D RAIMBAULT</Text>
                <Text
                  style={styles.year}>'15
                </Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>16</Text>
          </View>







          <View style={styles.itemFlexOuter}>

            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.petitChablisVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <ScrollView
                style={styles.petitChablisModal}
                minimumZoomScale={1}
                maximumZoomScale={3}
              >
                <View>
                  <Text style={styles.modalText}>Petit Chablis</Text>

                  <TouchableHighlight onPress={() => {
                    this.showPetitChablisModal(!this.state.petitChablisVisible)
                  }}>
                    <Text style={styles.modalText}>Hide Modal</Text>
                  </TouchableHighlight>

                </View>
              </ScrollView>
            </Modal>


            <TouchableHighlight
              onPress={() => {
                this.showPetitChablisModal(true)
              }}
            >
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
    fontFamily: 'SnellRoundhand-Bold',
    fontSize: 40
  },

// WINE INFO

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
  },

// MODAL CONTENT CONTAINER

  ModalContentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

// MODALS

  sancerreModal: {
    marginTop: 350,
    marginBottom: 400,
    width: 600,
    backgroundColor: 'rgba(9, 9, 9, .7)'
  },
  petitChablisModal: {
    marginTop: 200,
    height: 100,
    width: 400,
    backgroundColor: 'rgba(9, 9, 9, .7)'
  },
  modalTitle: {
    color: 'white',
    fontSize: 40
  },
  closeModalText: {
    color: 'white',
    fontSize: 20
  }
})
