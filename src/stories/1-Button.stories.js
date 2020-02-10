import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import MainButton from '../pages/comps/Button';

export default {
  title: 'MainButton',
  component: MainButton,
};

export const DefaultButton = () =>{
  return <MainButton />;
}
