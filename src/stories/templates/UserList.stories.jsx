import React from 'react';

import UserList from '../../components/templates/userlist';

export default {
  title: 'Templates/UserList',
  component: UserList,
  argTypes: {}
};

function Template(args) {
  return <UserList {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  props: {
    params: {},
    setParams: () => {}
  }
};
