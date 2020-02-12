import React from 'react';
import MainMenu from '../pages/comps/Menu/Menu';

import { action } from '@storybook/addon-actions';

export default {
  title: 'MainMenu',
  component: MainMenu,
};

//we need to use router to nav thru the app

export const DefaultMenu = () =>{
    return <MainMenu items={items} />;
}

var items = [
  {
    itemTitle:'Home',
    // onClick:()=>{alert('home')}
  },
  {
    itemTitle:'Classes',
    // onClick:()=>{alert('classes')}
  },
  {
    itemTitle:'Schedule',
    // onClick:()=>{alert('schedule')}
  },
  {
    itemTitle:'Performance',
    // onClick:()=>{alert('performance')}
  },
  {
    itemTitle:'Forums',
    // onClick:()=>{alert('forums')}
  },
]

export const DefaultMenuWithStyle = () =>{
  return <MainMenu 
      />;
}
