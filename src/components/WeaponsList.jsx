import Select from 'react-select';
import { DateTimePickerValue } from './DateTimePickerValue';
// for component Select major - value and label**
const weapons = [
  { value: 'weapon-1', label: 'KAR98' },
  { value: 'weapon-2', label: 'M416' },
  { value: 'wepon-3', label: 'AWM' },
  { value: 'wepon-4', label: 'M16A4' },
  { value: 'wepon-3', label: 'FLARE GUN' },
];

// civil_uuid
export const WeaponsList = () => {
  // const weapon_id = weapons.value;
  // const weapon_type = weapons.label;

  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
      <div>
        <h5>Weapons List</h5>
        <div style={{width: 200}}>
          <Select options={weapons} onChange={weapon => console.log(weapon)} />
        </div>
        <div>
          <h5>Weapons current charecter:</h5>
          <ul style={{paddingInlineStart: 0}}>
            {weapons.map(({ value, label }) => (
              <li key={value}>
                <p style={{fontSize: 16}}>{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <DateTimePickerValue />
        <button type="button" style={{cursor: 'pointer', width: 50}}>Save</button>
      </div>
    </div>
  );
};
