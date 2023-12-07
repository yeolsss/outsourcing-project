import axios from 'axios';

//조회
// const getTogethers = async () => {
//   const response = await axios.get(`${process.env.REACT_APP_APIKEY}/togethers`);
//   console.log('?', response.data);
//   return response.data;
// };

//추가
const addTogether = async (newTogether) => {
  await axios.post(`${process.env.REACT_APP_APIKEY}/togethers`, newTogether);
};

export { addTogether };
