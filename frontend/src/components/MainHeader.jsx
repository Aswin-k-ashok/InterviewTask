import React from 'react'
import BasicMenu from './BasicMenu'
import styled from 'styled-components'




const Header = styled.div`
    background-color:#fff;
    width:100%;
    height:5em;
    margin-bottom:2em;
    display:flex;
    justify-content:space-between;
    align-items:center;

    div{
      display:flex;
      align-items:center;
    }

    img{
      height:3em;
      margin:0.5em;
    }
    
    .smallIcon{
      height:1.5em;
    }

    .App{
      display:flex;
    }
`

function MainHeader() {
    return (
        <Header>
            <img src='./hamburger.png' className='smallIcon' />
            <div>
                <img src='./bell.png' className='smallIcon' /> <img src='./profile.png' /> Santhosh<BasicMenu />
            </div>
        </Header>
    )
}

export default MainHeader