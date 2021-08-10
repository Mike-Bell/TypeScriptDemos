void (async () => {

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

   /*
   Optional/null handling
   */
   class DataService {
      setDataReader(reader) {
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

   /*
   Type-aware linting, e.g. promise handling
   */
   const sleep = time => new Promise(resolve => setTimeout(resolve, time));

   const doThing1 = async () => {
      await sleep(100);
      console.log('did thing 1');
   };

   const doThing2 = async () => {
      await sleep(10);
      console.log('did thing 2');
   }

   const doThingsInOrder = async () => {
      doThing1();
      doThing2();
      await sleep(100);
   };

   await doThingsInOrder(); // did thing 2, did thing 1

   /*
   Better tooling around builtins and libraries
   */
   console.log(Math.max([1, 2, 3])); //NaN
})();