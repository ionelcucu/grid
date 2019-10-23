import './style.scss';
import { Grid } from './components/grid/index';

const grid1 = document.querySelector('.grid1') as HTMLElement;
const grid2 = document.querySelector('.grid2') as HTMLElement;

const headers = [
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
  }
];

const data = [
  {
    firstName: 'Ionel',
    lastName: 'Cucu'
  },
  {
    firstName: 'Adrian',
    lastName: 'Petrea'
  }
];

const myGrid1 = new Grid(grid1, {
  data: data,
  headers: headers
});

