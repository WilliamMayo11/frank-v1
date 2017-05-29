import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default class WhiteByTheGlass extends React.Component {

  state = {
    sancerreVisible: false,
    petitChablisVisible: false,
    pinotBlancVisible: false,
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
              <TouchableWithoutFeedback onPress={() => this.showSancerreModal(!this.state.sancerreVisible)}>
                <View style={styles.ModalContentContainer}>
                  <ScrollView
                    style={styles.sancerreModal}
                    minimumZoomScale={1}
                    maximumZoomScale={1.5}
                  >
                    <View>

                      <View style={styles.modalContents}>
                        <View style={styles.blend}>
                          <Text style={styles.modalContentText}>100% Sauvignon Blanc</Text>
                        </View>
                        <View style={styles.funFact}>
                          <Text style={styles.modalContentText}>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                        </View>
                        <View style={styles.pairing}>
                          <Text style={styles.modalContentText}>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                        </View>
                        <View style={styles.flavor}>
                          <Text style={styles.modalContentText}>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                        </View>
                      </View>

                    </View>
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showSancerreModal(true)
              }}
              activeOpacity={10}
              underlayColor={'white'}
              style={styles.touchableStyle}
            >
              <View>
              <View style={styles.itemFlex}>
                <Text style={styles.type}>SANCERRE</Text>
                <Text style={styles.quote}>"Apud Sariacum"</Text>
                <Text style={styles.brand}>Phillipe Raimbault</Text>
                <Text style={styles.region}>Loire, FRANCE</Text>
                <Text style={styles.year}>'14</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>15</Text>
          </View>







          <View style={styles.itemFlexOuter}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.petitChablisVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <TouchableWithoutFeedback onPress={() => this.showPetitChablisModal(!this.state.petitChablisVisible)}>
                <View style={styles.ModalContentContainer}>
                  <ScrollView
                    style={styles.petitChablisModal}
                    minimumZoomScale={1}
                    maximumZoomScale={1.5}
                  >
                    <View>

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

                    </View>
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showPetitChablisModal(true)
              }}
              activeOpacity={.2}
              underlayColor={'#5B7E90'}
              style={styles.touchableStyle}
            >
              <View>
              <View style={styles.itemFlex}>
                <Text style={styles.type}>PETIT CHABLIS</Text>
                <Text style={styles.brand}>Domaine Vincent Dampt</Text>
                <Text style={styles.region}>Burgundy, FRANCE</Text>
                <Text style={styles.year}>'14</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>13</Text>
          </View>





          <View style={styles.itemFlexOuter}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.pinotBlancVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={styles.ModalContentContainerPopOut}>
                <ScrollView
                  style={styles.pinotBlancModal}
                  minimumZoomScale={1}
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>Pinot Blanc</Text>

                    <View style={styles.modalContentsPopOut}>
                      <View style={styles.blendPopOut}>
                        <Text>100% Sauvignon Blanc</Text>
                      </View>
                      <View style={styles.funFactPopOut}>
                        <Text>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                      </View>
                      <View style={styles.flavorPopOut}>
                        <Text>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                      </View>
                      <View style={styles.pairingPopOut}>
                        <Text>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                      </View>
                    </View>

                    <TouchableHighlight onPress={() => {
                      this.showPinotBlancModal(!this.state.pinotBlancVisible)
                    }}>
                      <Text style={styles.closeModalTextPopOut}>Got it!</Text>
                    </TouchableHighlight>

                  </View>
                </ScrollView>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showPinotBlancModal(true)
              }}
              activeOpacity={10}
              underlayColor={'white'}
              style={styles.touchableStyle}
            >
              <View>
              <View style={styles.itemFlex}>
                <Text style={styles.type}>PINOT BLANC</Text>
                <Text style={styles.quote}>"Cuvée Les Amours"</Text>
                <Text style={styles.brand}>Famille Hugel</Text>
                <Text style={styles.region}>Alsace, FRANCE</Text>
                <Text style={styles.year}>'11</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <Text style={styles.price}>11</Text>
          </View>



          <View style={styles.itemFlexOuter}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.pinotBlancVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={styles.ModalContentContainerPopOut}>
                <ScrollView
                  style={styles.pinotBlancModal}
                  minimumZoomScale={1}
                  maximumZoomScale={1.5}
                >
                  <View>
                    <Text style={styles.modalTitle}>Pinot Blanc</Text>

                    <View style={styles.modalContentsPopOut}>
                      <View style={styles.blendPopOut}>
                        <Text>100% Sauvignon Blanc</Text>
                      </View>
                      <View style={styles.funFactPopOut}>
                        <Text>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                      </View>
                      <View style={styles.flavorPopOut}>
                        <Text>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                      </View>
                      <View style={styles.pairingPopOut}>
                        <Text>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                      </View>
                    </View>

                    <TouchableHighlight onPress={() => {
                      this.showPinotBlancModal(!this.state.pinotBlancVisible)
                    }}>
                      <Text style={styles.closeModalTextPopOut}>Got it!</Text>
                    </TouchableHighlight>

                  </View>
                </ScrollView>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.showPinotBlancModal(true)
              }}
              activeOpacity={10}
              underlayColor={'white'}
              style={styles.touchableStyle}
            >
              <View>
              <View style={styles.itemFlex}>
                <Text style={styles.type}>PINOT BLANC</Text>
                <Text style={styles.quote}>"Cuvée Les Amours"</Text>
                <Text style={styles.brand}>Famille Hugel</Text>
                <Text style={styles.region}>Alsace, FRANCE</Text>
                <Text style={styles.year}>'11</Text>
                  </View>
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
    width: 475,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
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
    marginRight: 10,
    marginTop: 10
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
    marginTop: 18
  },

// MODAL CONTENT CONTAINER

  ModalContentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  ModalContentContainerPopOut: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

// MODALS

  sancerreModal: {
    marginTop: 342,
    width: 575,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    // borderRadius: 10,
    // borderWidth: 1,
    position: 'relative'
  },
  petitChablisModal: {
    marginTop: 370,
    marginBottom: 360,
    padding: 10,
    width: 740,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    // borderRadius: 10,
    // borderWidth: 1
  },
  pinotBlancModal: {
    marginTop: 200,
    marginBottom: 250,
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
    fontSize: 15,
    marginTop: 40,
    marginLeft: 22
  },
  closeModalTextPopOut: {
    color: 'black',
    fontSize: 22,
    marginTop: 40,
    marginLeft: 22
  },

// MODAL CONTENT BOXES
  modalContents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 3,
  },

  blend: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // margin: 10,
    // padding: 5,

    backgroundColor: '#FDD900'
  },
  flavor: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // margin: 10,
    // padding: 5,

    backgroundColor: '#C7DFB6'
  },
  pairing: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // margin: 10,
    // padding: 5,

    backgroundColor: 'pink'
  },
  funFact: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // margin: 10,
    // padding: 5,

    backgroundColor: '#DDEBF6'
  },
  modalContentText: {
    fontSize: 7,
  },
  modalContentsPopOut: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 3,
  },

  blendPopOut: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: '#FDD900'
  },
  flavorPopOut: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: '#C7DFB6'
  },
  pairingPopOut: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
    padding: 5,
    height: '48%',
    width: '45%',
    backgroundColor: 'pink'
  },
  funFactPopOut: {
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
