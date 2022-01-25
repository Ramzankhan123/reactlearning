import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReateNativeStackTypes } from './root_types';
import { Assignment1 } from '../assignment/Assignment1';
import { Assignment2 } from '../assignment/Assignment2';
const Stack = createNativeStackNavigator<ReateNativeStackTypes>();
export const TutorialStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false, animation: 'slide_from_left', orientation: 'portrait' }}  >
            <Stack.Screen name={'Assignment1'} component={Assignment1} />
            <Stack.Screen name={'Assignment2'} component={Assignment2} />
        </Stack.Navigator>
    )
}
