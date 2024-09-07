interface Greeting {
    name: string;
    age: number;
    format?: 'Table' | 'Default';
  }
  
  function greeting(user: Greeting) {
    if (user.format == 'Table') {
      console.table(user);
    } else if (user.format == 'Default' || user.format) {
      console.log(`Hi !! :${user.name} 
           Your old : ${user.age} years old.`);
    } else if (
      user.format != 'Defualt' &&
      user.format != 'Table' &&
      user.format
    ) {
      throw new Error('Invalid format');
    }
  }
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
  
  greeting({
    name: 'Charlie',
    age: 18,
  });
  
  greeting({
    name: 'Cherline',
    age: 18,
    format: 'asdfbh',
  });
  