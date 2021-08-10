// BAD
type Feautures = {
   debugMode: boolean;
   logInfo: boolean;
};

const getFeatures = (environment: string): Feautures => {
   if (environment === 'dev') {
      return {
         debugMode: true,
         logInfo: true
      }
   }

   return {
      debugMode: true,
      logInfo: false
   }
};

console.log(getFeatures('Dev'));

// BETTER
enum EnvionmentEnum {
   dev = 0,
   stage = 1,
   live = 2
}

const getFeaturesByEnum = (environment: EnvionmentEnum): Feautures => {
   if (environment === EnvionmentEnum.dev) {
      return {
         debugMode: true,
         logInfo: true
      }
   }

   return {
      debugMode: true,
      logInfo: false
   }
};

console.log(getFeaturesByEnum(EnvionmentEnum.dev));

// BEST (IMO)
type Environments = 'dev' | 'stage' | 'live';

const getFeaturesType = (environment: Environments): Feautures => {
   if (environment === 'dev') {
      return {
         debugMode: true,
         logInfo: true
      }
   }

   return {
      debugMode: true,
      logInfo: false
   }
};

console.log(getFeaturesType('dev'));