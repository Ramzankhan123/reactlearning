import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { TutorialStack } from './roots';

function AuthNavigation() {
    return (
        <NavigationContainer >
            <TutorialStack />
        </NavigationContainer>
    )
}



export default AuthNavigation;