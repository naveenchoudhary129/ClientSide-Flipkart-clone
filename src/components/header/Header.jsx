import React from 'react'

import {AppBar , Toolbar , Box , styled} from '@mui/material'

import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`
const Component = styled(Box)`
    margin-left : 12%;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (
    <StyledHeader>
        <Toolbar style={{minHeight : 55 }}>
            <Component>
                <img src={logoURL} alt='logo' style={{width : 75}} />
            </Component>
            <Search />
            <CustomButtons />
        </Toolbar>
    </StyledHeader>
  )
}

export default Header