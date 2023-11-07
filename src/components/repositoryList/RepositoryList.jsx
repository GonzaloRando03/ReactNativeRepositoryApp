import React from 'react'
import P from '../../utils/styledNativeComponets/P'
import repositories from '../../../data/repositories'


const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <P> </P>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

export default RepositoryList