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