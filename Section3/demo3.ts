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