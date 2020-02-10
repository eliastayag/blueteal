import React from 'react';
import Notes from '../pages/comps/Notes';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Notes',
  component: Notes
};

export const DefaultNotes = () =>{
    return <Notes />;
}


