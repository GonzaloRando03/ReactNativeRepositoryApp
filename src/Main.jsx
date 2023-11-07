import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import AppBar from './components/appBar/AppBar'
import RepositoryList from './components/repositoryList/RepositoryList'
import P from './utils/styledNativeComponets/P'

export default function Main () {
    
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<RepositoryList />} />
                <Route path='/signin' exact element={<P>Working on it</P>}/>
            </Routes>
        </View>
    )
}
  