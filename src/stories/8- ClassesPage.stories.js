import React from 'react';
import Classes from '../pages/Classes/Classes'
import SelectClass from '../pages/Classes/SelectClass';
import ClassDash from '../pages/Classes/ClassDash';
import App from '../App';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Classes',
  component: Classes,
};

export const DefaultClasses = () =>{
    return <Classes />;
}

export const SelectClasses = () =>{
  return <SelectClass />;
}
export const ClassDashboard = () =>{
  return <ClassDash />;
}
export const DefaultDashboard = () =>{
  return <App />;
}

