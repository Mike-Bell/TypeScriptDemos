/*
Function types
*/
type DataHandler = {(data: number, index: number): string};

const handler1: DataHandler = (data, index) => {
   console.log('handler1', data, index);
   return 'handled';
};

const handler2: DataHandler = (data, index) => {
   console.log('handler1', data, index);
   return 'handled';
};

class DataHandlerRegister {
   handlers: DataHandler[];

   constructor() {
      this.handlers = [];
   }

   register(handler: DataHandler) {
      this.handlers.push(handler);
   }

   triggerHandlers() {
      this.handlers.forEach(handler => {
         console.log(handler(1, 2));
      });
   }
}

const handlerRegister = new DataHandlerRegister();
handlerRegister.register(handler1);
handlerRegister.register(handler2);
handlerRegister.triggerHandlers();