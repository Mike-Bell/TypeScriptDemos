void (async () => {
   /*
   Type-aware linting, e.g. promise handling
   */
   const sleep = (time: number): Promise<void> => new Promise(resolve => setTimeout(resolve, time));

   const doThing1 = async () => {
      await sleep(100);
      console.log('did thing 1');
   };

   const doThing2 = async () => {
      await sleep(10);
      console.log('did thing 2');
   }

   const doThingsInOrder = async () => {
      doThing1();
      doThing2();
      await sleep(100);
   };

   await doThingsInOrder(); // did thing 2, did thing 1
})();

