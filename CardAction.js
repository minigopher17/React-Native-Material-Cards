import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class CardAction extends Component {

  renderChildren() {
    let returnChildren = this.props.children;
    if(this.props.inColumn===true) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if(child.type.name==="CardButton") {
          return React.cloneElement(child, {
            inColumn: true
          });
        }
        else {
          return child;
        }
      })
    }
    return returnChildren;
  }

  render () {
    const newStyle = this.props.style || {};
    let directionStyle = this.props.inColumn===true ? styles.cardActionInColumn : styles.cardActionInRow;
    return (
      <View style={(this.props.separator)&&(!this.props.isDark) ? [directionStyle, styles.separatorAdd, newStyle] : [directionStyle, newStyle]}>
        {this.renderChildren()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  cardActionInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  cardActionInColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  separatorAdd: {
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1
  }
});
