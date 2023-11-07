import React from 'react'
import { Text, StyleSheet } from 'react-native'
import styles from '../../styles/main.styles'

const pStyles = StyleSheet.create({
    text: {
      color: styles.colors.textPrimary,
      fontSize: styles.fontSizes.body,
      fontFamily: styles.fonts.main,
      fontWeight: styles.fontWeights.normal
    },
    colorPrimary: {
      color: styles.colors.primary
    },
    colorSecondary: {
      color: styles.colors.textSecondary
    },
    colorWhite: {
      color: styles.colors.textWhite
    },
    textAlignCenter: {
      textAlign: 'center'
    }
  })

export default function P ({children, color, align, ...restOfProps}) {
    const stylesToAdd = [
        pStyles.text,
        align === 'center' && pStyles.textAlignCenter,
        color === 'primary' && pStyles.colorPrimary,
        color === 'secondary' && pStyles.colorSecondary,
    ]

    return (
        <Text style={stylesToAdd} {...restOfProps}>
          {children}
        </Text>
    )
}

