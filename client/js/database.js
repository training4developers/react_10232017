

export const refreshColors = () => {
  return fetch('http://localhost:3010/colors')
    .then(res => res.json());
    //.catch(res => console.log('something went wrong'));
};