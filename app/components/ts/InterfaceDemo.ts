/**
 * 接口的定义
 */
interface InterfaceDefin {
    name: string,
    age: number,
    method: (a: string, b: string) => string;
};

/**
 * 对象实现接口的定义
 */

let interInstance: InterfaceDefin = {
    name: "ZHANGQING",
    age: 12,
    method: (a: string, b: string) => {
        return a + b;
    }
};

/**
 * 数组的定义和方法使用
 */
let arrDefin: string[] = ["1", "2", "3"];

arrDefin.forEach(element => {

});

arrDefin.push("111");

/**
 * 使用内置对象操作数组
 */
let arrDefinObj = new Array<number>(10);

arrDefinObj.push();

for (let i = 0; i < arrDefinObj.length; i++) {
    let indexValue = arrDefinObj[0];
}

arrDefinObj.forEach(element => {
    console.log(element);
});

arrDefinObj.some

arrDefinObj.forEach(function (item, index) {

});

/**
 * 函数的参数 是函数类型
 * @param callbackfn 
 */
function functionDefin01(callbackfn: (value: number, index: number) => void) {

}
/**
 * 函数的调用
 */
functionDefin01(function (value, index) { });

/**
 * forEach练习
 * 注意：foreach会遍历所有数组元素、效率低下中间不能中断
 */

let collectionValue: string[] = ["1", "2"];

var isShow:boolean = false;

collectionValue.forEach(function (item: string, index: number) {
    let valu: string = item;
    if(valu.localeCompare(item)==0){
        isShow = true;
    }
})
console.log(isShow);