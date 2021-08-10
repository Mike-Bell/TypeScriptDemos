class HelloWord {
   getGreeting() {
      return 'hello';
   }

   sayGreeting() {
      console.log(this.getGreeting());
   }
}

new HelloWord().sayGreeting();