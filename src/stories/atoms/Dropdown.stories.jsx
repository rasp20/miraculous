import React from 'react';

import Dropdown from '../../components/atoms/dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  argTypes: {
    width: '200px',
    label: 'Gender',
    options: [
      { value: 'all', label: 'All' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ]
  }
};

function Template(args) {
  return <Dropdown {...args} />;
}

export const Gender = Template.bind({});
Gender.args = {
  width: '200px',
  label: 'Gender',
  options: [
    { value: 'all', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ]
};
