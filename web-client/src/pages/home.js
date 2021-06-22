import React from 'react';
import HeaderContainer from '../containers/header';
import BodyContainer from '../containers/body';
import MainContainer from '../containers/main';
import NavigationContainer from '../containers/navigation';
import FooterContainer from '../containers/footer';

// hooks
import useLoadCurrentUser from '../hooks/useLoadCurrentUser';

export default function Home(){

    const { userState, loadTheUser } = useLoadCurrentUser()
    

    return (
        <>
            <HeaderContainer>
                <NavigationContainer/>
            </HeaderContainer>
            <BodyContainer>
                <MainContainer>
                    <h1>{userState ? userState.account : null}</h1>
                    <button onClick={loadTheUser}>Connect</button>
                </MainContainer>
            </BodyContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}