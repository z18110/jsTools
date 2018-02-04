var ids = [11,22,333];
(function sendRequest(){
	var id = shift();
	if(id){
		$.ajax({url:"/get",data:{id}}).always(function(){
			//do sth
            console.log("finished");
            sendRequest();
		});
	}else {
        console.log("finished");
    }
})();

// 递归实现串行请求不堵塞

function getElementById(node,id){
    if(!node) return null;
    if(node.id === id) return node;
    for (var i = 0; index < node.childNodes.length; i++) {
        var found = getElementById(node.childNodes[i],id);
        if(found) return found;       
    }
    return null;
}

// 深度优先地递归遍历DOM树查找id

function getElementById(node,id){
    // 遍历所有的Node
    while(node){
        if(node.id === id) return node;
        node = nextElement(node);
    }
    return null;
}
function nextElement(node){
    if(node.children.length) {
        return node.children[0];
    }
    if(node.nextElementSibling){
        return node.nextElementSibling;
    }
    while(node.parentNode){
        if(node.parentNode.nextElementSibling);
    }
    while(node.parentNode){
        if(node.parentNode.nextElementSibling) {
            return node.parentNode.nextElementSibling;
        }
        node = node.parentNode;
    }
    return null;
}

//深度优先地非递归遍历DOM树查找id

function bubbleSort(arr){
    var i = 0,
        j = 0;
    for (var i = 1; i < arr.length; i++) {
      for (j=0; j<=arr.length-i; j++){
        var temp = 0;
        // ">"从小到大排序
        // "<"从大到小排序
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
      }
    }
    return arr;
}

// 冒泡排序

function quick(arr,l,r){
    if(l < r){
        var i = l,j = r,x = arr[i];
        while(i<j){
            while(i<j && arr[j]>x)
            j--;

            if(i<j)
              //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
              arr[i++] = arr[j];

            while(i<j && arr[i]<x)
                i++;

            if(i<j)
              //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
              arr[j--] = arr[i];
        }
        arr[i] = x;

        quickSort(arr,l,i-1);
        quickSort(arr,i+1,r);
    }
}

//快速排序

function palindrome(str) {
    return str === str.split('').reverse().join('')
}

function palindrome(str) {
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var lowRegStr = str.toLowerCase().replace(re,'');
     // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if(lowRegStr.length===0) return true;
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1]) return false;
    //递归
    return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}

// 判断回文字符串

function getMostFreq(str) {
  if(str.length == 1) {
    return str;
  }
  var dict = {}
  for (var i = 0; i < str.length; i++) {
    if(dict[str[i]]){
        ++dict[str[i]]
    }else{
        dict[str[i]] = 1
    }
  }

  var count = 0
  var maxValue
  for (key in dict){
    if (dict[key] > count) {
        maxValue = key
        count = dict[Key]
    }
  }
  console.log(count,maxValue)
}

//统计字符串里出现出现频率最多的字符

function randomStr(len) {
    var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var str = ''
    for (var i = 0; i < len; i++) {
      str +=dict[random(0,62)]  
    }
    return str   
}

//生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z

function unique(arr){
    var obj = {}
    var result = []
    for (var i in arr){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

function unique(arr){
    return Array.from(new Set(arr));
}

function uniqueArray(arr){
    for(var i = 0;i < arr.length-1;i++){
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] === arr[i]){
                arr.splice(j--,1);
            }
        }
    }
    return arr;
}

// 数组去重

function getMaxProfit(arr){
    var min = arr[0],
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    return max-min;
}

//数组中最大差值


function match(node,selector){
    if(node === document) return false;
    switch(selector.matchType){
        //如果是类选择器
        case "class":
          return node.className.trim().split(/+/).indexOf(selector.value)>=0;

        // 如果是标签选择器
        case"tag":
          return node.tagName.toLowerCase()===selector.value.toLowerCase();

        defualt:
          console.log("unknown selector match type");
    }
}

function nextTarget(node,selector){
    if(!node || node === document) return null;
    switch(selector.relation){
        case"descendant":
          return{node:node.parentNode,hasNext:true};
        case"child":
          return {node:node.parentNode,hasNext:false};
        case"sibling":
          return {node:node.previousSibling,hasNext:true};
        default:
          console.log("unknown selector relation type");
        //hasNext表示当前选择器relation是否允许继续找下一个节点
    }
}

function querySelector(node,selectors){
    while(node){
        var currentNode = node;
        if(!match(node,selectors[0])){
            node = nextElement(currentNode);
            continue;
        }
        var next = null;
        for (var i = 0; i < selectors.length-1; i++) {
            var matchIt = false;
            do{
                next = nextTarget(node,selectors[i]);
                node = next.node;
                if(!node) break;
                if(match(node,selectors[i+1])){
                    matchIt = true;
                    break;
                }
            }while(next.hasNext);
            if(!matchIt) break;
        }
        if(matchIt && i === selectors.length - 1){
            return currentNode;
        }
        node = nextElement(currentNode);
    }
    return null;
}

// 复杂选择器的查DOM

var lastHouses = new Map();
function filter House(houses){
    var remainHouses = [],
    var newHouses = [];
    houses.map(house => lastHouses.has(house.id)?remainHouses.push(house):newHouses.push(house));
    newHouses.map(house => lastHouses.set(house.id,house));
    return {remainHouses,newHouses};
}

// 重复值处理

function randomIndex(arr){
    for(var i =0; i<arr.length;i++){
        var swapIndex = parseInt(Math.random()*(arr.length-i))+i;
        var tmp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = tmp;
    }
}

// 数组元素随机分布

$(window).on("resize",adjustSlider);

$(window).on("resize",function(){
    throttling(adjustSlider);
});
function throttling(method,throttlingTime){
    if(typeof method.tId === "undefined"){
        method.tId = 0;
        method.call(context,data);
        return;
    }
    //第一次触发立刻执行
    var tId = method.tId;
    if(!tId){
        method.tId = setTimeout(function(){
            method();
            method.tId = 0;
        },throttlingTime || 500);
    }
}

// 节流，使事件触发不会太快，如500ms触发一次