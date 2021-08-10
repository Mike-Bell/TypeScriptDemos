Quickly cover some basics about TypeScript, but then I want to quickly move on to what I think makes TypeScript interesting

What is TypeScript? If you look this up, the standard answer is that "TypeScript is a superset of JavaScript", or more simply TypeScript is JavaScript plus types. TypeScript _used to be_ a collection of "things we wish we had in JavaScript" - things like types, classes, arrow functions, better syntax, etc. I think it was kinda of like how C++ became sort of a grab bag for things people wish they had in C - TypeScript was a grab bag of JavaScript improvements. But eventually a lot of those things got absorbed into the JavaScript language itself, partly due to the influence of TypeScript on the ecosystem, so now I think it's fair to say that TypeScript is simply JavaScript plus types.

See Demo1

Why TypeScript? In short, because the option of being able to use static typing is good.
- Simple type mismatches
- Contract enforcement
- Data model changes
- Optional/null handling
- Type-aware linting, e.g. promise handling
- Better tooling around builtins and libraries

heuristic-aligner for dynamically assigning interfaces from another interface

duck-typing
 - implementing an interface without explicitly implementing it
 - anonymous inline types
 - mocks without mocking framework