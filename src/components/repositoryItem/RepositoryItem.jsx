import React from 'react'
import { Image, View } from 'react-native'
import P from '../../utils/styledNativeComponets/P'
import repositoryItemStyles from './RepositoryItem.styles'


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={repositoryItemStyles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <P style={repositoryItemStyles.textPrimary}>{fullName}</P>
      <P style={repositoryItemStyles.textSecondaty}>{description}</P>
      <P style={repositoryItemStyles.language}>{language}</P>
    </View>
  </View>
)

const RepositoryItem = (props) => (
  <View key={props.id} style={repositoryItemStyles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)


export default RepositoryItem