import { Link } from 'react-router-dom';

const availableDepts = [
  { id: 0, path: 'civ', dept: 'Civillian' },
  { id: 1, path: 'police', dept: 'Police Officer' },
  { id: 2, path: 'dispatch', dept: 'Dispatch' },
  { id: 3, path: 'fire', dept: 'Fire Dept' },
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
        {availableDepts.map(({ id, path, dept }) => (
          <li key={id}>
            <Link to={`${path}`}>{dept}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
