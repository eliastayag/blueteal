import React from 'react';
import Stripe from '../pages/comps/Stripe/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stripe',
  component: Stripe,
};

export const StripeForm = () =>{
    return <Stripe />;
}


