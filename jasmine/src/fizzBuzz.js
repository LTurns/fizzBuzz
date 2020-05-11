class FizzBuzz{
	play(number){

	var string = "";

	if(number % 3 == 0){
		string = "Fizz";
	}
	if(number % 5 == 0){
		string += "Buzz";
	}

	return (string.length == 0) ? number : string;
	}
}