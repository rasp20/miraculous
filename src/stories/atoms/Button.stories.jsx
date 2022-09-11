import React from 'react';

import Button from '../../components/atoms/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: 'Button',
    width: '100px'
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  width: '100px'
};
