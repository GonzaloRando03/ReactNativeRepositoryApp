import { StyleSheet } from 'react-native'
import styles from '../../styles/main.styles'

const repositoryItemStyles = StyleSheet.create({
    textPrimary: {
        color: styles.colors.textPrimary,
        fontWeight: '700'
    },
    textSecondaty: {
        color: styles.colors.textSecondary
    },
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default repositoryItemStyles