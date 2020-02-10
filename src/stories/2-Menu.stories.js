import React from 'react';
import MainMenu from '../pages/comps/mainMenu';

import { action } from '@storybook/addon-actions';

export default {
  title: 'MainMenu',
  component: MainMenu,
};

export const DefaultMenu = () =>{
    return <MainMenu />;
}