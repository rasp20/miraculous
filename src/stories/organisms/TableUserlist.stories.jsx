import React from 'react';

import Table from '../../components/organisms/tableUserlist';

export default {
  title: 'Organisms/TableUserlist',
  component: Table,
  argTypes: {}
};

function Template(args) {
  return <Table {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  props: {
    params: {},
    setParams: () => {},
    data: [
      {
        username: 'username1',
        name: 'Name 1',
        email: 'test1@mail.com',
        gender: 'Male',
        registered_date: '11-09-2022 16:20'
      },
      {
        username: 'username2',
        name: 'Name 2',
        email: 'test2@mail.com',
        gender: 'Female',
        registered_date: '11-09-2022 14:00'
      }
    ],
    loading: false
  }
};
