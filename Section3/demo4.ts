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