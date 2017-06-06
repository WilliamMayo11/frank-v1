import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import HideableView from 'react-native-hideable-view';

export default class HideView extends React.Component {
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
                          <Text style={styles.textContent}>100% Sauvignon Blanc</Text>
                          <Text style={styles.textContent}>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                          <Text style={styles.textContent}>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                          <Text style={styles.textContent}>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
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
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'teal'
  },
  hideView: {
    flex: 1,
    position: 'absolute',
  },
  textContent: {
    fontSize: 10,
  },

})
