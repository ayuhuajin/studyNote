let a:string = "13"
// 数组声明的两种方式
let arr:number[] = []
let arr1:Array<number> = []

// 接口1
interface person{
  name:string;
  age:number
}

let man = (user:person):void =>{
  console.log(user.name)
  console.log(user.age)
}

man({name:"1",age:12})

// 接口2
interface query{
  page:number;
  findOne():void;
  findAll():void
}

const q:query = {
  page:1,
  findOne() {
    console.log('findOne')
  },
  findAll() {
    console.log('findAll')
  }
}

interface func{
  (x:number,y:number,desc?:string):void
}

const sum:func = function(x,y,desc="") {
  console.log(desc, x + y)
}

sum(2,3)