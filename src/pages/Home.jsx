const ABO_BLOOD = [
  {
    id: 5304,
    blood_group: 'A+',
  },
  {
    id: 5984,
    blood_group: 'A-',
  },
  {
    id: 5420,
    blood_group: 'B+',
  },
  {
    id: 5694,
    blood_group: 'B-',
  },
  {
    id: 5454,
    blood_group: 'AB+',
  },
  {
    id: 5654,
    blood_group: 'AB-',
  },
  {
    id: 5644,
    blood_group: 'O+',
  },
  {
    id: 5487,
    blood_group: 'O-',
  },
];
export const Home = () => {
  return (
    <>
      {' '}
      <h2>Main Page</h2>
      <form>
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
          <input name="adress" placeholder="adress" type="text" />
        </label>
        <label>
          Gender:
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
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
          Blood Group:
          <select name="bloodGroup" id="">
            {ABO_BLOOD.map(({ id, blood_group }) => (
              <option key={id} value={blood_group}>
                {blood_group}
              </option>
            ))}
          </select>
        </label>
        {/* <label> */}
        {/* <input name="" placeholder="race" type="s" /> */}
        {/* </label> */}
        {/* <label>
          <input name="" placeholder="" type="text" />
        </label>
        <label>
          <input name="" placeholder="" type="text" />
        </label>
        <label>
          <input name="" placeholder="" type="text" />
        </label>
        <label>
          <input name="" placeholder="" type="text" />
        </label>
        <label>
          <input name="" placeholder="" type="text" />
        </label> */}
      </form>
    </>
  );
};
