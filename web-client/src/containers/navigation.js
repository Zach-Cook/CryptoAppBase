import React from 'react'

// component
import { Navigation } from '../components';



export default function NavigationContainer({userState}) {


    return (
        <Navigation>
            <Navigation.NavigationInner>
            <Navigation.TitleText>Account: {userState ? userState.account : null}</Navigation.TitleText>
            <Navigation.TitleText>DecentralTube</Navigation.TitleText>
            </Navigation.NavigationInner>
        </Navigation>

    )
}