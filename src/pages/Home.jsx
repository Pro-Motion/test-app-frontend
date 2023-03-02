import { Link } from 'react-router-dom';

const availableDepts = [
  { id: 0, dept: 'Civillian' },
  { id: 1, dept: 'Police Officer' },
  { id: 2, dept: 'Dispatch' },
  { id: 3, dept: 'Fire Dept' },
];
export const Home = () => {
  return (
    <>
      <h2>Main Page</h2>
      <ul
        style={{
          display: 'flex',
          gap: 15,
        }}
      >
        {availableDepts.map(({ id, dept }) => (
          <li key={id}>
            <Link to="/civ">{dept}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
