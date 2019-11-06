import './style.scss';
import { Grid } from './components/grid/index';
import { gridData } from './gridData';

const grid1 = document.querySelector('.grid1') as HTMLElement;
const grid2 = document.querySelector('.grid2') as HTMLElement;

const headers = [
  {
    key: 'id',
    label: 'id'
  },
  {
    key: 'firstName',
    label: 'First Name'
  },
  {
    key: 'lastName',
    label: 'Last Name'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'gender',
    label: 'Gender'
  },
  {
    key: 'email',
    label: 'Email'
  }, {
    key: 'ip_address',
    label: 'IP Address'
  }
];

const myGrid1 = new Grid(grid1, {
  data: gridData,
  headers: headers,
  pagination: false
});

