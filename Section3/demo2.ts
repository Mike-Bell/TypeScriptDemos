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