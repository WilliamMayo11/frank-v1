import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import HideableView from 'react-native-hideable-view';

export default class PetitChablisHidden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            noAnimation: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <View style={styles.hideView}>
                <HideableView
                  hidden={this.state.hidden}
                  visible={this.state.visible}
                  noAnimation={false}
                  duration={1000}
                  style={styles.toggleContent}
                  >
                    <TouchableWithoutFeedback
                      onPress={this.toggle}
                    >
                      <View style={styles.itemFlex}>
                          <Text style={styles.textContent}>100% Chardonnay vinified without oak. </Text>
                          <Text style={styles.textContent}>Dry. Light/medium-bodied. </Text>
                          <Text style={styles.textContent}>Crisp acidity, bright minerality, ripe citrus & green apple fruit flavors. </Text>
                          <Text style={styles.textContent}>Pairs well with all seafood, especially oysters. </Text>
                      </View>
                    </TouchableWithoutFeedback>
                </HideableView>
                <TouchableOpacity onPress={this.toggle}>
                    <Text style={styles.toggleButton}>{this.state.visible ? '' : ''}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

  toggleButton: {
    fontSize: 24,
    position: 'relative',
    height: 30
  },
  toggleContent: {
    position: 'absolute',
    marginBottom: 20,
  },
  itemFlex: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10,
    marginTop: 7,
    width: 475,
    // borderWidth: 1,
    // borderColor: 'black',
    backgroundColor: '#fafafa'
  },
  hideView: {
    flex: 1,
    position: 'absolute',
  },
  textContent: {
    fontSize: 10,
  },

})
