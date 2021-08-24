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