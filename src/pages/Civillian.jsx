import { FormLayout } from 'components/FormLayout';
import { hairColors } from 'constants';
import { civilCharacters } from 'constants';
import { skinColors } from 'constants';
import { RACE } from 'constants';
import { ABO_BLOOD, GENDERS } from 'constants';
import { Field } from 'formik';
// import styled from 'styled-components';

export const Civillian = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert('The character was  created! Check out the console.');
    // resetForm();
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <h3>Civilian </h3>

          <FormLayout
            initValues={{
              first_name: '',
              last_name: '',
              birthday: '',
              place_of_birth: '',
              address: '',
              gender_id: '0',
              skin_color_id: '0',
              hair_color_id: '0',
              race_id: '0',
              spouse_uuid: '',
              blood_group_id: '0',
            }}
            onSubmit={handleSubmit}
          >
            <label>
              First Name
              <Field name="first_name" placeholder="first name" />
            </label>
            <label>
              Last Name
              <Field name="last_name" placeholder="last name" />
            </label>
            <label>
              Date of Birth
              <Field name="birthday" placeholder="date of birth" />
            </label>
            <label>
              Place of Birth
              <Field name="place_of_birth" placeholder="place of birth" />
            </label>
            <label>
              Address
              <Field name="address" placeholder="address" />
            </label>
            <label>
              Gender
              <Field name="gender_id" as="select">
                {GENDERS.map(({ id, gender }) => (
                  <option key={id} value={id}>
                    {gender}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Skin Color
              <Field name="skin_color_id" as="select">
                {skinColors.map(({ id, color }) => (
                  <option key={id} value={id}>
                    {color}
                  </option>
                ))}
              </Field>
            </label>
            {/*  */}
            <label>
              Hair Color
              <Field name="hair_color_id" as="select">
                {hairColors.map(({ id, color }) => (
                  <option key={id} value={id}>
                    {color}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Race
              <Field name="race_id" as="select">
                {RACE.map(({ id, race }) => (
                  <option key={id} value={id}>
                    {race}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Spouse:
              <Field name="spouse_uuid" as="select">
                <option value="null">None</option>
                <option value="spouseUUID">Lorena Jamsy</option>
              </Field>
            </label>
            <label>
              Blood Group:
              <Field name="blood_group_id" as="select">
                {ABO_BLOOD.map(({ id, blood_group }) => (
                  <option key={id} value={id}>
                    {blood_group}
                  </option>
                ))}
              </Field>
            </label>
          </FormLayout>
        </div>
        <div>
          <ul
            style={{
              display: 'flex',
              gap: 15,
            }}
          >
            {civilCharacters.map(
              ({ civil_uuid, first_name, last_name, birthday, address }) => (
                <li
                  style={{
                    border: 'black solid 1px',
                    padding: 10,
                  }}
                  key={civil_uuid}
                >
                  <div>
                    <h3>Character</h3>
                    <p>
                      Full name: <span>{`${first_name} ${last_name}`} </span>{' '}
                    </p>
                    <p>
                      Birthday: <span>{birthday} </span>
                    </p>
                    <p>
                      Adress: <span>{address} </span>
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
