var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Tomas',
    age: 30,
    elo: 11,
    hobbies: ['sport', 'swim'],
    role: Role.READ_ONLY
};
console.log(person.role);
var favoriteActivies;
favoriteActivies = ['test', 4];
//person.hobbies = [2];
person.name = 'Wiklo';
console.log(favoriteActivies);
var hobby;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    hobby = _a[_i];
    console.log(hobby);
}
