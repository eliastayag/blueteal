import React from 'react';
import ClassCard from '../pages/comps/ClassCard';

import { action } from '@storybook/addon-actions';

export default {
  title: 'ClassCard',
  component: ClassCard,
};

export const DefaultClassCard = () =>{
    return <ClassCard />;
}


