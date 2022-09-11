import React from 'react';

import Pagination from '../../components/molecules/pagination';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: () => {},
    totalCount: 100,
    siblingCount: 2,
    currentPage: 1,
    pageSize: 10,
    className: ''
  }
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onPageChange: () => {},
  totalCount: 100,
  siblingCount: 2,
  currentPage: 1,
  pageSize: 10,
  className: ''
};
