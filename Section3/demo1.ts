/*
Structural vs nominal typing
*/

interface IDataReader {
   readData: () => number;
   writeData: () => void;
}

class DataService {
   dataReader: IDataReader;

   constructor(dataReader: IDataReader) {
      this.dataReader = dataReader;
   }

   read(): number {
      return this.dataReader.readData();
   }
}

const myDataReader = {
   readData: () => 0,
   writeData: () => null
};

new DataService(myDataReader).read(); // fine to pass in myDataReader because it structurally fulfills IDataReader
new DataService({readData: () => 0, writeData: () => null}).read(); // even fine to pass in an anonymous inline object
new DataService({readData: () => NaN} as IDataReader); // makes mocking out relevant portions of dependencies easy