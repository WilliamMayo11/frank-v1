import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import HideableView from 'react-native-hideable-view';

export default class HideView2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
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
            <View style={styles.hideView2}>
                <HideableView
                  hidden={this.state.hidden}
                  visible={this.state.visible}
                  noAnimation={false}
                  duration={2000}
                  style={styles.toggleContent}
                  >
                    <TouchableWithoutFeedback
                      onPress={this.toggle}
                    >
                      <View style={styles.itemFlex}>
                          <Text>Sancerre</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    width: 475
  },
  hideView2: {
    flex: 1,
    position: 'relative',
  }
})
