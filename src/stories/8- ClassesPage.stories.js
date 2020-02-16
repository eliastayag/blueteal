import React from 'react';
import Classes from '../pages/Classes/Classes'

import { action } from '@storybook/addon-actions';

export default {
  title: 'Classes',
  component: Classes,
};

export const DefaultPage = () =>{
    return <Classes />;
}


