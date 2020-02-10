import React from 'react';
import Header from '../pages/comps/Header';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Header',
  component: Header,
};

export const DefaultHeader = () =>{
    return <Header />;
}


