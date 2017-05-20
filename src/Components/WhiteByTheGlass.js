import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView } from 'react-native';

export default class WhiteByTheGlass extends React.Component {

  state = {
    sancerreVisible: false,
    petitChablisVisible: false,
    stVeranVisible: false,
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

  showStVeranModal(visible) {
    this.setState({stVeranVisible: visible});
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
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>Sancerre</Text>

                    <View style={styles.modalContents}>
                      <View style={styles.blend}>
                        <Text>100% Sauvignon Blanc</Text>
                      </View>
                      <View style={styles.funFact}>
                        <Text>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                      </View>
                      <View style={styles.flavor}>
                        <Text>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                      </View>
                      <View style={styles.pairing}>
                        <Text>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                      </View>
                    </View>

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
              activeOpacity={.2}
              underlayColor={'#5B7E90'}
              style={styles.touchableStyle}
            >
              <View>
                <Text style={styles.type}>SANCERRE</Text>
                  <View style={styles.itemFlex}>
                    <Text style={styles.code}>3314</Text>
                    <Text style={styles.brand}>R&D RAIMBAULT</Text>
                    <Text style={styles.year}>'15</Text>
                  </View>
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
              <View style={styles.ModalContentContainer}>
                <ScrollView
                  style={styles.petitChablisModal}
                  minimumZoomScale={1}
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>PETIT CHABLIS</Text>

                    <View style={styles.modalContents}>
                      <View style={styles.blend}>
                        <Text>100% Chardonnay</Text>
                      </View>
                      <View style={styles.funFact}>
                        <Text>Vinified without oak.</Text>
                      </View>
                      <View style={styles.flavor}>
                        <Text>Dry. Light/medium-bodied. Crisp acidity, bright minerality, ripe citrus & green apple fruit flavors.</Text>
                      </View>
                      <View style={styles.pairing}>
                        <Text>Pairs well with all seafood, especially oysters.</Text>
                      </View>
                    </View>

                    <TouchableHighlight onPress={() => {
                      this.showPetitChablisModal(!this.state.petitChablisVisible)
                    }}>
                      <Text style={styles.closeModalText}>Got it!</Text>
                    </TouchableHighlight>

                  </View>
                </ScrollView>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showPetitChablisModal(true)
              }}
            >
              <View>
                <Text style={styles.type}>PETIT CHABLIS</Text>
                  <View style={styles.itemFlex}>
                    <Text style={styles.code}>3631</Text>
                    <Text style={styles.brand}>C&L PINSON</Text>
                    <Text style={styles.year}>'15</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>13</Text>
          </View>









          <View style={styles.itemFlexOuter}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.stVeranVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={styles.ModalContentContainer}>
                <ScrollView
                  style={styles.stVeranModal}
                  minimumZoomScale={1}
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>St Veran</Text>

                    <View style={styles.modalContents}>
                      <View style={styles.blend}>
                        <Text> 100% Chardonnay aged in new and old oak barrels.</Text>
                      </View>
                      <View style={styles.funFact}>
                        <Text>St. Veran is named for Veranus of Cavaillon, a 6th Century bishop and dragon-slayer!</Text>
                      </View>
                      <View style={styles.flavor}>
                        <Text>Medium-bodied. Dry. Aromas & flavors of yellow apples, corn on the cob & meyer lemon, with floral notes and bright acidity. Strong finish.</Text>
                      </View>
                      <View style={styles.pairing}>
                        <Text>Pairs well with salads, seafood, and white meat dishes, light pastas and grain dishes.</Text>
                      </View>
                    </View>

                    <TouchableHighlight onPress={() => {
                      this.showStVeranModal(!this.state.stVeranVisible)
                    }}>
                      <Text style={styles.closeModalText}>Got it!</Text>
                    </TouchableHighlight>

                  </View>
                </ScrollView>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showStVeranModal(true)
              }}
            >
              <View>
                <Text style={styles.type}>ST VERAN</Text>
                  <View style={styles.itemFlex}>
                    <Text style={styles.code}>3512</Text>
                    <Text style={styles.quote}>"LES CRAS"</Text>
                    <Text style={styles.brand}>DOMAINE DES VALANGES</Text>
                    <Text style={styles.year}>'14</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>14</Text>
          </View>








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
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>Sancerre</Text>

                    <View style={styles.modalContents}>
                      <View style={styles.blend}>
                        <Text>100% Sauvignon Blanc</Text>
                      </View>
                      <View style={styles.funFact}>
                        <Text>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                      </View>
                      <View style={styles.flavor}>
                        <Text>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                      </View>
                      <View style={styles.pairing}>
                        <Text>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                      </View>
                    </View>

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
              <View>
                <Text style={styles.type}>SANCERRE</Text>
                  <View style={styles.itemFlex}>
                    <Text style={styles.code}>3314</Text>
                    <Text style={styles.brand}>R&D RAIMBAULT</Text>
                    <Text style={styles.year}>'15</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>16</Text>
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
    marginTop: -1,
    marginLeft: 10
  },
  type: {
    fontSize: 18,
    marginLeft: 12,
    marginTop: 10
  },
  quote: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: -2
  },
  brand: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: -2
  },
  year: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: -2
  },
  price: {
    fontSize: 14,
    marginTop: 11
  },

// MODAL CONTENT CONTAINER

  ModalContentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

// MODALS

  sancerreModal: {
    marginTop: 350,
    marginBottom: 400,
    width: 740,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderRadius: 10,
    borderWidth: 1
  },
  petitChablisModal: {
    marginTop: 405,
    marginBottom: 360,
    padding: 10,
    width: 740,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderRadius: 10,
    borderWidth: 1
  },
  stVeranModal: {
    marginTop: 460,
    marginBottom: 285,
    padding: 10,
    width: 740,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderRadius: 10,
    borderWidth: 1
  },
  modalTitle: {
    color: 'black',
    fontSize: 40,
    marginLeft: 20
  },
  closeModalText: {
    color: 'black',
    fontSize: 20,
    marginTop: 40,
    marginLeft: 22
  },

// MODAL CONTENT BOXES
  modalContents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  blend: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: '#FDD900'
  },
  flavor: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: '#C7DFB6'
  },
  pairing: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: 'pink'
  },
  funFact: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: '#DDEBF6'
  },

// TOUCHABLE HIGHLIGHTS

  touchableStyle: {
    borderRadius: 10
  },

})
