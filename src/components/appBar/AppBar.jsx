import React from "react"
import Div from "../../utils/styledNativeComponets/Div"
import P from "../../utils/styledNativeComponets/P"
import appbarStyles from "./AppBar.styles"
import { Link, useLocation } from 'react-router-native'
import { ScrollView, TouchableWithoutFeedback } from "react-native"

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to
  
    const textStyles = [
      appbarStyles.text,
      active && appbarStyles.active
    ]
  
    return (
      <Link to={to} component={TouchableWithoutFeedback}>
        <P style={textStyles}>
          {children}
        </P>
      </Link>
    )
  }
  
  const AppBar = () => {
    return (
      <Div style={appbarStyles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={appbarStyles.scroll}>
          <AppBarTab to='/'>Repositories</AppBarTab>
          <AppBarTab to='/signin'>Sign In</AppBarTab>
        </ScrollView>
      </Div>
    )
  }
  
  export default AppBar