import React from 'react';
import HeaderContainer from '../containers/header';
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
                <NavigationContainer userState={userState}/>
            </HeaderContainer>
                <MainContainer>
                    { userState ?
                        null
                        :
                        <button onClick={loadTheUser}>Connect</button>
                    }
                </MainContainer>
            <FooterContainer>
                <NavigationContainer/>
            </FooterContainer>
        </>


    )

}