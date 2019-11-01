计时：

console.time("While loop");

console.timeEnd("While loop");

分组：

console.group('地址');
console.log('Street: 123 街');
console.log('City: 北京');
console.log('State: 在职');
console.groupEnd(); // 结束内层

断言：

console.assert（assertion，obj）

打印不同类型：

const text = "文本1"
console.log(`打印${text}`)

console.log("打印 %s", text)

console.log('%c 文本1', 'font-size:50px; background: ; text-shadow: 10px 10px 10px blue') 打印样式

console.log('%c Auth ', 
            'color: white; background-color: #2274A5', 
            'Login page rendered');
console.log('%c GraphQL ', 
            'color: white; background-color: #95B46A', 
            'Get user details');
console.log('%c Error ', 
            'color: white; background-color: #D33F49', 
            'Error getting user details');

![1571196293422](C:\Users\huangyiyuan01\AppData\Roaming\Typora\typora-user-images\1571196293422.png)

console.table 打印数组成表格的样式

let languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
];
console.table(languages);

![1571196411645](C:\Users\huangyiyuan01\AppData\Roaming\Typora\typora-user-images\1571196411645.png)

### console.dir() 打印出对象节点

