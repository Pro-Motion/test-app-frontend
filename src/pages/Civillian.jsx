import { FormLayout } from 'components/FormLayout';
import { ABO_BLOOD, GENDERS } from 'constants';
import { Field } from 'formik';
export const Civillian = () => {
  return (
    <>
      <FormLayout>
        <Field></Field>
      </FormLayout>

      <div style={{}}>
        <h3>Civilian </h3>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
            outline: 'black solid 1px',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <label>
            <input name="firstName" placeholder="first name" type="text" />
          </label>
          <label>
            <input name="lastName" placeholder="last name" type="text" />
          </label>
          <label>
            <input name="dateOfBirth" placeholder="date of birth" type="text" />
          </label>
          <label>
            <input
              name="place_of_birth"
              placeholder="place of birth"
              type="text"
            />
          </label>
          <label>
            <input name="address" placeholder="address" type="text" />
          </label>
          <label>
            Gender:
            <select name="gender">
              {GENDERS.map(({ id, gender }) => (
                <option key={id} value={gender}>
                  {gender}
                </option>
              ))}

              <option value="apache">Atack Helicopter</option>
            </select>
          </label>
          <label>
            Skin Color:
            <select name="hairColor">
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
            </select>
          </label>
          <label>
            Hair Color:
            <select name="hairColor">
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="blonde">Blonde</option>
              <option value="ginder">Ginger</option>
              <option value="bald">Bald</option>
            </select>
          </label>
          <label>
            Spouse:
            <select name="spouse">
              <option value="none">None</option>
              <option value="spouse">Lorena Jamsy</option>
            </select>
          </label>
          <label>
            Blood Group:
            <select name="bloodGroup">
              {ABO_BLOOD.map(({ id, blood_group }) => (
                <option key={id} value={blood_group}>
                  {blood_group}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    </>
  );
};
