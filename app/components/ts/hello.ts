/**
 * 基本类型
 */
let str: string = "sss";
console.log(str);

/**
 * 数组的遍历
 */

let arrNumber: number[] = [1, 2, 3, 4, 5, 6, 7];

for (let i: number = 0; i < arrNumber.length; i++) {

    let getValue: number = arrNumber[0];
}
/**
 * 函数的基本定义
 */

function hell0(parr: number, para1: string): string {
    return "qqq";
}

/**
 * 函数的匿名定义
 */
let varo1 = function () {
    return "qqwwqeqw";
}

let dealFunciton = function (aaaa: number, bbb: string): string {
    return "dfew";
}

let varo: () => string

let functionDefinDemo = (aaaa: number, bbb: string):string=>{
    return "";
}
/**
 * 对象定义
 */

var student = {
    name: "ewwe",
    age: 18,
    say: function () { console.log(1111) }
};

student.age = 12;
student.name = "22312";
student.say = function () {
    console.log("wedwe3wq");
}


var site = {
    "siteIndex": 11,
    "siteName": "zhangqingxing",
    write: () => { }
};

let collection = function (a: string, b: number, c: boolean): string {
    return "a";
}

collection("1", 2, true);

function collectionDeal() {

}

/**
 * 对象的类型约束
 */

let dog: {
    name: string,
    age: number;
    say: (str: string) => string;
};
/**
 * 对象定义
 */
dog = {
    name: "aa",
    age: 1,
    say: function (st: string) {
        return "1";
    }
};

/**
 * 接口定义
 */
interface dog {
    name: string,
    age: number;
    eat:(para:string,parar:number)=>void;
}

let dog01:dog = {
    name: "aaa",
    age: 11,
    eat:function(){

    }
};

/**
 * 对象的定义
 */

let functionDefin:{
    a:string;
    b:number;
    method:(m:string,n:string)=>string;
}
/**
 * 对象的实际写法
 */
functionDefin = {
    a:"12",
    b:1,
    method:function(a:string,b:string){
        return "a";
    }
}

let objectDefin: {
    aaa: string;
    bbb: number;
    sayHi: (a: string, b: string) => string;
}

objectDefin = {
    aaa:"aa",
    bbb:1,
    sayHi:(a:string,b:string)=>{
        return a.substring(0.1) +b.indexOf("1");
    }
}

