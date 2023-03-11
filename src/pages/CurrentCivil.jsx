import { WeaponsList } from 'components/WeaponsList';

export const CurrentCivil = () => {
  return (
  <>
  <h2>Current Civil Character</h2>
  <section style={{ width: 600, display: 'grid', }}>
    <h3 style={{textAlign: 'center'}}>Additional info</h3>
    <WeaponsList/>
  </section>
  </>);

};
