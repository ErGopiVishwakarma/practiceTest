function User (name,email,pass){
    this.name = name 
    this.email  = email
    this.pass = pass
}
User.prototype.sayHii = function(){
    return `${this.name} are saying hii`
}

const user = new User('gopi','gopi@gmail.com','gopi123')
const user1 = new User('gopi','gopi@gmail.com','gopi123')
const user2 = new User('gopi','gopi@gmail.com','gopi123')
const user3 = new User('gopi','gopi@gmail.com','gopi123')
const user4 = new User('gopi','gopi@gmail.com','gopi123')
// console.log(user,user1,user2,user3,user4)
let obj = {
    a:'a',
    b:'b'
}
obj.__proto__.hii = function (){
    return 'pagal'
}
let obj1 = {
    h:'h'
}

Object.setPrototypeOf(obj1,obj)
console.log(obj1.hii())