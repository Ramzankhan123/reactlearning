import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReateNativeStackTypes } from './root_types';
import { Assignment1 } from '../assignment/Assignment1';
import { Assignment2 } from '../assignment/Assignment2';
import { IndexFile } from '../assignment/IndexFile';
import { Assignment3 } from '../assignment/Assignment3';
import { Assignmen3Checkout } from '../assignment/Assignment3.1';
// import { Assignment4 } from '../assignment/Assignment4';
import { Assignment5 } from '../assignment/Assignment5';
import { Assignment6 } from '../assignment/Assignment6';
const Stack = createNativeStackNavigator<ReateNativeStackTypes>();
export const TutorialStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false, animation: 'slide_from_left', orientation: 'portrait' }}  >
            <Stack.Screen name={'IndexFile'} component={IndexFile} />
            <Stack.Screen name={'Assignment1'} component={Assignment1} />
            <Stack.Screen name={'Assignment2'} component={Assignment2} />
            <Stack.Screen name={'Assignment3'} component={Assignment3} />
            <Stack.Screen name={'Assignmen3Checkout'} component={Assignmen3Checkout} />
            {/* <Stack.Screen name={'Assignment4'} component={Assignment4} /> */}
            <Stack.Screen name={'Assignment5'} component={Assignment5} />
            <Stack.Screen name={'Assignment6'} component={Assignment6} />
        </Stack.Navigator>
    )
}
