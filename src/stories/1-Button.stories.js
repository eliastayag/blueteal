import React from 'react';

import { Button } from '@storybook/react/demo';
import MainButton from '../pages/comps/Button/Button';
import '../styles/ThemeStyles.scss';



export default {
  title: 'MainButton',
  component: MainButton,
};

export const DefaultButton= () =>{
  return <MainButton
  title='Default Button'
   />;
}

export const PopupButton = () =>{
  return <MainButton
  title='Popup Button' />;
}

export const AddButton = () =>{
  return <MainButton
  title='Add Button' />;
}

