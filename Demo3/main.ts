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

/*
Types derived from other types: partials
*/
type Person = {
   name: string;
   age: number;
};

const userInfo: Partial<Person> = {
   name: 'bob'
}; // this is fine, because "age" is optional

const ageNextYear = (userInfo.age || 0) + 1; // must handle the case where age is undefined

/*
Types derived from other types: unions, tuples, etc
*/
type Person2 = {
   name: string | {
      first: string;
      middle: string;
      last: string;
   };
   locations: (number | [string, string])[]
}

const mike: Person2 = {
   name: {
      first: 'Mike',
      middle: 'Jeffrey',
      last: 'Bell'
   },
   locations: [['MI', 'Okemos'], 48864, 517]
}

const bob: Person2 = {
   name: 'bob',
   locations: []
}

/*
Types derived from other types: keyof
*/
type EnvironmentConfigs = {
   debugMode: string;
   logInfo: string;
}

type Features = {[k in keyof EnvironmentConfigs]: boolean};

const envConfigs: EnvironmentConfigs = {
   debugMode: 'dev',
   logInfo: 'stage'
};

const myFeatures: Features = {
   debugMode: true,
   logInfo: false
};

/*
Types derived from other types: Copied function type
*/
type DataReaderWriter = {
   readData: () => number;
   writeData: (data: number) => void;
};

type DataReader = {
   readData: DataReaderWriter['readData']
};

type DataWriter = {
   writeData: DataReaderWriter['writeData']
}

/*
Function types
*/
type DataHandler = {(data: number, index: number): string};

const handler1: DataHandler = (data, index) => {
   console.log('handler1', data, index);
   return 'handled';
};

const handler2: DataHandler = (data, index) => {
   console.log('handler1', data, index);
   return 'handled';
};

class DataHandlerRegister {
   handlers: DataHandler[];

   constructor() {
      this.handlers = [];
   }

   register(handler: DataHandler) {
      this.handlers.push(handler);
   }

   triggerHandlers() {
      this.handlers.forEach(handler => {
         console.log(handler(1, 2));
      });
   }
}

const handlerRegister = new DataHandlerRegister();
handlerRegister.register(handler1);
handlerRegister.register(handler2);
handlerRegister.triggerHandlers();