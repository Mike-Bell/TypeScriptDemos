type Nominal<Type, Tag> = Type & {__brand: Tag};

type Seconds = Nominal<number, 'seconds'>;
type Milliseconds = Nominal<number, 'milliseconds'>;

const tm = 1000 as Milliseconds;
const ts = 1 as Seconds;

const printSeconds = (s: Seconds) => console.log(s);
const printMilliseconds = (m: Milliseconds) => console.log(m);

// type safety on args :)
printMilliseconds(ts);
printMilliseconds(tm);
printSeconds(ts);
printSeconds(tm);

const time = tm + ts; // We can still add them :(