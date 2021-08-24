/* 
Simple type mismatches
*/
const add = (a: number, b: number): number => a + b;
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

const useReader = (reader: MyReader): void => {
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
interface IData {
   someProperty: number;
}

const useData = (data: IData) => data.someProperty + 1;

const myData = {
   renamedPoperty: 1
};

console.log(useData(myData)); // NaN

