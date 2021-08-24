/*
Optional/null handling
*/
interface IDataReader {
   read: () => number;
}

class DataService {
   dataReader?: IDataReader;

   setDataReader(reader: IDataReader) {
      this.dataReader = reader;
   }

   readData() {
      try {
         return this.dataReader.read();
      } catch (e) {
         console.log('Error trying to read data', e);
      }
   }
}

console.log(new DataService().readData()); // TypeError: Cannot read property 'read' of undefined