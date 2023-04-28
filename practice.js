const getVowels=(s)=>{
    let vowels=['a','e','i','o','u'];
    let str='';
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])) continue;
        str+=s[i];
    }
    return str;
}

const replaceVowels=(s)=>{
    let newStr=s.replace(/[aeiou]/g,'');
    return newStr;
}

console.log(getVowels('let;s check our work'));
console.log(replaceVowels('let;s check our work'))