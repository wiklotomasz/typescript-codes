enum Role {
  ADMIN, 
  READ_ONLY,
  AUTHOR
}


const person = {
  name: 'Tomas',
  age: 30,
  elo: 11,
  hobbies: ['sport', 'swim'],
  role: Role.READ_ONLY
}

console.log(person.role);


let favoriteActivies: any[];
favoriteActivies = ['test', 4];
//person.hobbies = [2];

person.name = 'Wiklo';

console.log(favoriteActivies);

let hobby: string;
for (hobby of person.hobbies) {
  console.log(hobby);
}