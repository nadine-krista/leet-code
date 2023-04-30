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

//console.log(getVowels('let;s check our work'));
//console.log(replaceVowels('let;s check our work'))

var defangIPaddr = function(address) {
    return address.replace(/[.]/g,'[.]')
};

const replaceIPAddr=(address)=>{
    return address.replaceAll('.','[.]')
}

//console.log(replaceIPAddr("1.1.1.1"));

var finalValueAfterOperations = function(operations) {
    let val=0;
    //replace forEach with for loop
    operations.forEach((x)=>{
       if(x==='--X' || x==='X--'){
           val=--val;
       }else{
           val=++val;
           
       }
    });
    return val
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))

var numJewelsInStones = function(jewels, stones) {
   let count=0;
   for(let i=0;i<stones.length;i++){
       if(jewels.includes(stones[i])) ++count;
   }
   return count;
};

console.log(numJewelsInStones("aA","aAAbbbb"))

var mostWordsFound = function(sentences) {
    sentences.sort((x,y)=>y.split(' ').length-x.split(' ').length);
    return sentences[0].split(' ').length
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))


var interpret = function(command) {
    return command.replaceAll('()','o').replaceAll('(al)','al');
};

console.log(interpret("G()()()()(al)"))

//Single Row Keyboard
const getTrack=(str1, str2)=>{
    let sum=0;
    let currentIndex=0;
    for(let i=0;i<str2.length;i++){
        let index=str1.indexOf(str2[i]);
        sum+=Math.abs(index-currentIndex);
        currentIndex=index;
    }
    return sum;
}

console.log(getTrack("pqrstuvwxyzabcdefghijklmno","leetcode"))

//Split a String in Balanced Strings

var balancedStringSplit = function(s) {
    let countR=0,countL=0,count=0,end=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='R') countR=countR+1;
        if(s[i]==='L') countL=countL+1;
        if(countR===countL){
            count=count+1;
            countR=0;
            countL=0;
        }
    }
    return count;
};
console.log(balancedStringSplit("RLRRLLRLRL"))


var restoreString = function(s, indices) {
    let min=Math.min(...indices);
    let max=Math.max(...indices);
    let str='';
    for(let i=min;i<=max;i++){
        let index=indices.indexOf(i);
        str+=s[index]
    }
    return str;
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))

var cellsInRange = function(s) {
    let [ch1,num1,colon,ch2,num2]=s.split('');
    let char1=ch1.charCodeAt(0);
    let char2=ch2.charCodeAt(0);
    let ans=[];
    for(let i=char1;i<=char2;i++){
        for(let j=num1;j<=num2;j++){
            ans.push(String.fromCharCode(i)+j)
        }
    }
    return ans;
};
//charCodeAt()., fromCharCode()
console.log(cellsInRange("K1:L2"));

var countMatches = function(items, ruleKey, ruleValue) {
    let count=0;
    for(let i=0;i<items.length;i++){
        let [type,color,name]=items[i];
        if((ruleKey==='type' && ruleValue===type) ||
        (ruleKey==='color' && ruleValue===color) ||
        (ruleKey==='name' && ruleValue===name)) count=count+1;
    }
    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
"color","silver"))

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
"type","phone"))

var sortSentence = function(s) {
    let words=s.split(' ');
    let str=[];
    for(let i=0;i<=9;i++){
        let word=words.find((word)=>word.includes(i));
        if(word){
            str.push(word.replace(i,''))
        }
        console.log('Str'+str);
    }
    return str.join(' ');
};

console.log(sortSentence("is2 sentence4 This1 a3"))

var arrayStringsAreEqual = function(word1, word2) {
    
    return word1.join('').toString()===word2.join('').toString();
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))

var checkIfPangram = function(sentence) {
    if(sentence.length<26) return false;
    let startCode='a'.charCodeAt(0);
    let endCode='z'.charCodeAt(0);
    let count=0;
    for(let i=startCode;i<=endCode;i++){
        if(sentence.includes(String.fromCharCode(i))) count=count+1;
    }
    return count>=26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))

console.log(checkIfPangram('leetcode'))

var truncateSentence = function(s, k) {
    console.log(s)
    console.log(k)
    let arr=s.split(' ');
    
    return arr.splice(0,k).join(' ')
};

console.log(truncateSentence("Hello how are you Contestant",4))

var toLowerCase = function(s) {
    let charCodeA = 'A'.charCodeAt(0);
    let charCodeZ = 'Z'.charCodeAt(0);
   
    let str=[];
    for(let i=0;i<s.length;i++){
        let code=s[i].charCodeAt(0);
        if(code>=charCodeA && code<=charCodeZ){
            str.push(String.fromCharCode(code+32));
        }else{
            str.push(s[i])
        }
    }
    return str.join('')
};

console.log(toLowerCase("Hello"))

var countConsistentStrings = function(allowed, words) {

    let charCodeArr=[];
    let resultArr=[];
    for(let i=0;i<allowed.length;i++){
        charCodeArr.push(allowed[i].charCodeAt(0));
    }
    for(let i=0;i<words.length;i++){
        let word=words[i];
        let isConsistent=true;
        for(let j=0;j<word.length;j++){
            let code=word[j].charCodeAt(0);
            if(!charCodeArr.includes(code)){
                isConsistent=false;
            }
        }
        if(isConsistent) resultArr.push(word)
    }
    return resultArr.length;
  };

  console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))

  var countAsterisks = function(s) {
    let strArr=s.split('|');
    let countAestrick=0;
    for(let i=0;i<strArr.length;i++){
        if(i%2===0){
            countAestrick+=strArr[i].split('').filter((x)=>x.charCodeAt(0)===42).length
        }
    }
    return countAestrick;
};


var countAsterisks = function(s) {
    let strArr=s.split('|');
    let countAestrick=0;
    for(let i=0;i<strArr.length;i+=2){
       
            countAestrick+=strArr[i].split('').filter((x)=>x.charCodeAt(0)===42).length
        
    }
    return countAestrick;
};
console.log(countAsterisks("l|*e*et|c**o|*de|"))

var reverseWords = function(s) {
    let stringArr=s.split(' ');
    let newArr=[];
    for(let i=0;i<stringArr.length;i++){
        newArr.push(stringArr[i].split('').reverse().join(''))
    }
    return newArr.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))

var sortPeople = function(names, heights) {
    namesArr=[];
    while(heights.length>0){
        let max=Math.max(...heights);
        let index=heights.indexOf(max);
        namesArr.push(names[index]);
        heights.splice(index,1);
        names.splice(index,1)
    }
    return namesArr;
    
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))

var replaceDigits = function(s) {
    let newStr=[];
    let code=0;
    for(let i=0;i<s.length;i++){ 
        if(i%2===0){
            code=s[i].charCodeAt(0);
            newStr.push(s[i]);
        }else{
            newStr.push(String.fromCharCode(code+(+s[i])))
        }
    }
    return newStr.join('')
};

console.log(replaceDigits("a1c1e1"))

var numOfStrings = function(patterns, word) {
    let count=0;
    for(let i=0;i<patterns.length;i++){
        if(word.includes(patterns[i])) count=count+1;
    }
    return count;
};

console.log(numOfStrings(["a","abc","bc","d"],"abc"))

var freqAlphabets = function(s) {
    let startCode=0;
    for(let i=10;i<=26;i++){
        if(i===10){
            startCode='j'.charCodeAt(0)
        }else{
            startCode=startCode+1;
        }
        let hash=i+'#';
        s=s.replaceAll(hash,String.fromCharCode(startCode))
    }
    console.log(s)
    startCode=0;
    for(let i=1;i<=9;i++){
        if(i===1){
            startCode='a'.charCodeAt(0)
        }else{
            startCode=startCode+1;
        }
       
        s=s.replaceAll(i,String.fromCharCode(startCode))
    }
    return s;
};

console.log(freqAlphabets("1326#"))

var reversePrefix = function(word, ch) {
    let index=word.indexOf(ch);
    let set1=word.substring(0,index+1);
    let set2=word.substring(index+1,word.length);
    let newStr='';
    newStr=set1.split('').reverse().join('')+set2;
    return newStr;
};

console.log(reversePrefix("abcdefd",'d'))

var firstPalindrome = function(words) {
    let palindromeWord=words.filter((x)=>x===x.split('').reverse().join(''));
    return palindromeWord.length>0?palindromeWord[0]:''
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))

var squareIsWhite = function(coordinates) {
    let [alphabet,digit]=coordinates;
    
    if((alphabet.charCodeAt(0)%2===0 && digit%2!==0)|| 
    alphabet.charCodeAt(0)%2!==0 && digit%2===0) return true;
    return false
};

console.log(squareIsWhite("a1"))
console.log(squareIsWhite("h3"))