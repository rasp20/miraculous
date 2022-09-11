import React from 'react';

import Search from '../../components/atoms/search';

export default {
  title: 'Atoms/Search',
  component: Search,
  argTypes: {
    width: '200px',
    label: 'Search',
    placeholder: 'Type here'
  }
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '200px',
  label: 'Search',
  placeholder: 'Type here'
};
