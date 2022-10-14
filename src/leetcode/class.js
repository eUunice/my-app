class Member {
	//建構子
	constructor (firstName, lastName)	{
		console.log('init');
    this.firstName = firstName;  
		this.lastName = lastName;
		Member.memberNumber++
	}
	//方法
	getName(){
		console.log('getName');
    return this.firstName + this.lastName;

	}

}
let apple = new Member('dog','banana');
console.log(apple.getName());


/////

//遞迴
var reverseString = function(s) {
    if(s.length == 1){    //terminate condition
      console.log(s)
    }else{
      reverseString(s.slice(1))
      console.log(s)
    }
};