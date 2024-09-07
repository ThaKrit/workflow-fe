greeting({
    name: 'Alice',
    age: 18,
    format: 'Table',
  });
  greeting({
    name: 'Bob',
    age: 18,
    format: 'Default',
  });
  
  interface Greeting {
    name: string;
    age: number;
    format: string;
  }
  
  function greeting(user: Greeting) {
    if (user.format == 'Table') {
      console.table(user);
    } else if(user.format == 'Default'){
      console.log(`Hi !! :${user.name} 
         Your old : ${user.age} years old.`);
    }
  }
  