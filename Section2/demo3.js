/*
Data model changes
*/
const useData = data => data.someProperty + 1;

const myData = {
   renamedPoperty: 1
};

console.log(useData(myData)); // NaN