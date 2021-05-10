export function debounce(func,delay){
    let timer=null;
    return function(){
      if(timer)clearTimeout(timer)
      timer=setTimeout((...args)=>{
        func.apply(this,args)
      },delay)
      
    }
  }
//将时间戳
  export function formatDate(date,fmt){
    // 处理年份
    // 正则y+ 匹配一个或多个y
    //y*表示匹配0个或多个y
    //y?表示匹配1个或0个y
    if(/(y+)/.test(fmt)){
      // 使用.replace() 替换 RegExp.$1 匹配到的值为 date.getFullYear
      // .substr() 截取 RegExp.$1 匹配到的 长度
      // 例如：通过/(y+).test(fmt)匹配到RegExp.$1的值为 yyy 则替换 yyy.replace('yyy',(2019 + ' ').substr(1)) 结果为: 019 
      fmt = fmt.replace(RegExp.$1,(date.getFullYear()+" ").substr(4-RegExp.$1.lenght))
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    }
    for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        let str = o[k]+'';
        fmt = fmt.replace(RegExp.$1,(RegExp.$1.lenght===1)?  str: padLeftZero(str))
      }
    }
    return fmt
  }
  //截取操作
  //将传入的str和'00'拼接，再从index为0开始截去str的长度
  //如果str为02，则02->0002->02
  //如果str为2，则2->002->02
  function padLeftZero(str){
    return ('00'+str).substr(str.length)
  }
    
