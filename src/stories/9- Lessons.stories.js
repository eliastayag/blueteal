import React from 'react';
import CreateLesson from '../pages/comps/Lesson/CreateLesson';

import { action } from '@storybook/addon-actions';

export default {
  title: 'CreateLesson',
  component: CreateLesson,
};

export const DefaultCreateLesson = () =>{
    return <CreateLesson />;
}


