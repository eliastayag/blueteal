import React from 'react';
import Calendar from '../pages/comps/Calendar';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const DefaultCalendar = () =>{
    return <Calendar />;
}


