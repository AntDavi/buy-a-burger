import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import cardCredit from '../pages/cardCredit'
import Payment from '../pages/Payment'
import Pix from '../pages/Pix'

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="cardCredit"
                component={cardCredit}
            />
            <Screen
                name="Payment"
                component={Payment}
            />
            <Screen
                name="Pix"
                component={Pix}
            />
        </Navigator>
    )
}