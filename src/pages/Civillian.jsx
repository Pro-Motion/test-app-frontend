import { FormLayout } from 'components/FormLayout';
import { hairColors } from 'constants';
import { RACE } from 'constants';
import { ABO_BLOOD, GENDERS } from 'constants';
import { Field } from 'formik';

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
              firstName: '',
              lastName: '',
              dateOfBirth: '',
              placeOfBirth: '',
              address: '',
              gender: '',
              skinColor: '',
              race: '',
              spouce: '',
              bloodGroup: 'A+',
            }}
            onSubmit={handleSubmit}
          >
            <label>
              First Name
              <Field name="firstName" placeholder="first name" />
            </label>
            <label>
              Last Name
              <Field name="lastName" placeholder="last name" />
            </label>
            <label>
              Date of Birth
              <Field name="dateOfBirth" placeholder="date of birth" />
            </label>
            <label>
              Place of Birth
              <Field name="placeOfBirth" placeholder="place of birth" />
            </label>
            <label>
              Address
              <Field name="address" placeholder="address" />
            </label>
            <label>
              Gender
              <Field name="gender" as="select">
                {GENDERS.map(({ id, gender }) => (
                  <option key={id} value={gender}>
                    {gender}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Skin Color
              <Field name="skinColor" as="select">
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
              </Field>
            </label>
            <label>
              Hair Color
              <Field name="hairColor" as="select">
                {hairColors.map(({ id, color }) => (
                  <option key={id} value={color}>
                    {color}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Race
              <Field name="race" as="select">
                {RACE.map(({ id, race }) => (
                  <option key={id} value={race}>
                    {race}
                  </option>
                ))}
              </Field>
            </label>
            <label>
              Spouse:
              <Field name="spouce" as="select">
                <option value="none">None</option>
                <option value="spouse">Lorena Jamsy</option>
              </Field>
            </label>
            <label>
              Blood Group:
              <Field name="bloodGroup" as="select">
                {ABO_BLOOD.map(({ id, blood_group }) => (
                  <option key={id} value={blood_group}>
                    {blood_group}
                  </option>
                ))}
              </Field>
            </label>
          </FormLayout>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
    </>
  );
};
