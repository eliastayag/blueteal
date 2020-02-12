import React from 'react';

import { Button } from '@storybook/react/demo';
import MainButton from '../pages/comps/Button/Button';

export default {
  title: 'MainButton',
  component: MainButton,
};

export const DefaultButton= () =>{
  return <MainButton style={}/>;
}

export const PopupButton = () =>{
  return <MainButton />;
}

export const AddButton = () =>{
  return <MainButton />;
}

