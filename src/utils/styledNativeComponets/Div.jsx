import React from 'react'
import { View, StyleSheet } from 'react-native'
import styles from '../../styles/main.styles'

const divStyles = StyleSheet.create({
    text: {
      color: styles.colors.textPrimary,
      fontSize: styles.fontSizes.body,
      fontFamily: styles.fonts.main,
      fontWeight: styles.fontWeights.normal
    }
})


export default function Div ({ children, ...restOfProps}) {
    const stylesToAdd = [
        divStyles.text,
    ]

    return (
        <View style={stylesToAdd} {...restOfProps}>
          {children}
        </View>
    )
}
