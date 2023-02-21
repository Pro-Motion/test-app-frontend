import axios from 'axios';

export const App = () => {
  // 187.213.75.212:8080//api/get/civil/2ee5fa4a-61ea-41ed-9cf2-d144df2dabc2
  const getCivilData = async () => {
    const resp = await axios.get(
      '187.213.75.212:8080/api/get/civil/2ee5fa4a-61ea-41ed-9cf2-d144df2dabc2'
    );
    console.log(resp);
    // const data = resp.json();
    // console.log(data);
  };
  return (
    <div>
      <button disabled={true} onClick={getCivilData}>
        get data
      </button>
    </div>
  );
};
