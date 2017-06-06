import React, { Component } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';

import HideableView from 'react-native-hideable-view';

export default class HideView3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
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
            <View>
                <Text>
                    I am always here.
                </Text>
                <HideableView
                  hidden={this.state.hidden}
                  visible={this.state.visible}
                  >
                    <Text>
                      I appear and disappear at your behest.
                    </Text>
                </HideableView>
                <TouchableOpacity onPress={this.toggle}>
                    <Text>{this.state.visible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
