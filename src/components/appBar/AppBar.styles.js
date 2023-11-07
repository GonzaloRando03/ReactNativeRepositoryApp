import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import styles from '../../styles/main.styles'

const appbarStyles = StyleSheet.create({
    container: {
      backgroundColor: styles.appBar.primary,
      flexDirection: 'row',
      paddingTop: Constants.statusBarHeight + 10
    },
    scroll: {
      paddingBottom: 15
    },
    text: {
      color: styles.appBar.textSecondary,
      paddingHorizontal: 10,
      fontWeight: styles.fontWeights.bold
    },
    active: {
      color: styles.appBar.textPrimary
    }
})

export default appbarStyles
