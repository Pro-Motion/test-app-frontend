import Select from 'react-select';
import { DateTimePickerValue } from './DateTimePickerValue';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const WeaponsList = () => {
  return (
    <>
      <h4>Weapons List</h4>
      <div style={{ width: 300 }}>
        <Select options={options} onChange={option => console.log(option)} />
      </div>
      <div>
        <h5>Yours weapons:</h5>
        <ul>
          <li>
            <p>type weapon</p>
          </li>
        </ul>
      </div>
      <DateTimePickerValue />
      <button type="button">Save</button>
    </>
  );
};
