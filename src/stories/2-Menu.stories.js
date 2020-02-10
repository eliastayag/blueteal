import React from 'react';
import MainMenu from '../pages/comps/mainMenu';
import MenuItem from '../pages/comps/MenuItem';

import { action } from '@storybook/addon-actions';

export default {
  title: 'MainMenu',
  component: MainMenu,
};

export const DefaultMenu = () =>{
    return <MainMenu />;
}

export const DefaultMenuWithStyle = () =>{
  return <MainMenu />;
}
