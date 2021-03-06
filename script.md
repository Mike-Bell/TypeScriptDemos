Quickly cover some basics about TypeScript, but then I want to quickly move on to what I think makes TypeScript interesting

What is TypeScript? If you look this up, the standard answer is that "TypeScript is a superset of JavaScript", or more simply TypeScript is JavaScript plus types. TypeScript _used to be_ a collection of "things we wish we had in JavaScript" - things like types, classes, arrow functions, better syntax, etc. I think it was kinda of like how C++ became sort of a grab bag for things people wish they had in C - TypeScript was a grab bag of JavaScript improvements. But eventually a lot of those things got absorbed into the JavaScript language itself, partly due to the influence of TypeScript on the ecosystem, so now I think it's fair to say that TypeScript is simply JavaScript plus types. That means it's fairly "unobtrusive". You're not learning a new language, and if you ever wanted to recovered your JavaScript out of your TypeScript, it's easy to do so.

TypeScript has been spreading rapidly for the last 5 years or so. At this point, it is fully battle-tested on projects of a variety of scales. It is the go-to at TechSmith for new projects, and is used in Audiate and well as the newer parts of Knowmia.

See Section1

Why TypeScript? In short, because the option of being able to use static typing is good.
- Simple type mismatches
- Contract enforcement
- Data model changes
- Optional/null handling
- Type-aware linting, e.g. promise handling
- Better tooling around builtins and libraries

See Section2

TypeScript's type system is powerful and flexible, and probably a bit different than what you're used to with C-style languages
- Structural vs nominal typing
- Types derived from other types
  - Partials
  - Unions
  - keyof
  - Copied function type
- Function types
- Literal union types instead of enums
- Nominal types (including simple types) are... _kinda_ supported. Maybe they'll be better supported later...

See Section3