/* 
Simple type mismatches
*/
const add = (a, b) => a + b;
const result1 = add(1, '1');
console.log(result1); // '11'




/*
Contract enforcement
*/
class MyReader {
   readData() {
      return 1;
   }
}

const useReader = reader => {
   try {
      reader.read();
   } catch (e) {
      console.log('Error trying to use reader', e);
   }
}

useReader(new MyReader()); // TypeError: reader.read is not a function




/*
Data model changes
*/
const useData = data => data.someProperty + 1;

const myData = {
   renamedPoperty: 1
};

console.log(useData(myData)); // NaN

