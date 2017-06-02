import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

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
            <View style={{flex: 1}}>
                <HideableView
                  hidden={this.state.hidden}
                  visible={this.state.visible}
                  noAnimation={false}
                  duration={2000}
                  style={{position: 'absolute'}}
                  >
                    <TouchableWithoutFeedback
                      onPress={this.toggle}
                    >
                      <View>
                        <View>
                          <Text>100% Sauvignon Blanc</Text>
                        </View>
                        <View>
                          <Text>Clay & silica-rich soil. Aged in stainless steel vats.</Text>
                        </View>
                        <View>
                          <Text>Goat cheese, salads, raw bar, mussels, leaner/lighter cooked fish dishes and poultry.</Text>
                        </View>
                        <View>
                          <Text>Bone dry. Light-bodied. Lemon-lime & fresh-cut grass aromas. Briny, rich in minerality with refreshingly high acidity on the palate. White pepper & floral notes on the finish.</Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                </HideableView>
                <TouchableOpacity onPress={this.toggle}>
                    <Text style={{fontSize: 70, position: 'relative'}}>{this.state.visible ? '' : 'Sancerre'}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
