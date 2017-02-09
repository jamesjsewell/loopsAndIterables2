var assert = require('chai').assert
// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(outsideArray){

	var i = 0
	var squared = []

	for(i=0; i < outsideArray.length; i++){

		squared.push(outsideArray[i]*outsideArray[i])

	}

	return squared 

}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.
function nicer(outsideSentence){
	
	var retrievedWords = ""
    var charIndex = []
	var forbiddenWords = ["heck", "dang", "darn", "crappy"]
	
    var i = 0
    
	for(i = 0; i < forbiddenWords.length; i++){

		var currentBadWord = forbiddenWords[i]

		if (outsideSentence.includes(currentBadWord)){

			var startBadWord = outsideSentence.indexOf(currentBadWord)
			var lengthBadWord = currentBadWord.length
			
            var j = 0
			for(j = 0; j < lengthBadWord; j++){

				var letter = " "
				letter = outsideSentence[startBadWord+j]

                if (typeof letter === "string"){             
					var result = letter
                    retrievedWords = retrievedWords + letter
                    charIndex.push(j+startBadWord)
                                       				
                }				
			}
            
            retrievedWords = retrievedWords + " "
            
			console.log(retrievedWords)            
                                
		}
	}
    
    return recreate_sentence(charIndex,retrievedWords,outsideSentence)
}

function recreate_sentence(charIndex,retrievedWords,outsideSentence){
    
    var oldLength = outsideSentence.length
    var replaced = []
    var newSentence = ""
    var i = 0
   
    while(i < oldLength){
        
        var currentLetterPosition = i
                     
        if(charIndex.includes(currentLetterPosition) === false) {
  			
  			newSentence = newSentence + outsideSentence[i]
                              
        }
                           
    	i = i + 1    
    }

    return newSentence.replace(new RegExp("  ", 'g'), " ")

}


// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
function capitalizeAll(outsideSentence){
    
    var startOfWord = 0
    var newSentence = ""
    var i = 0
    for (i=0; i < outsideSentence.length; i++){
        
        if (outsideSentence[i-1] === " " || i == 0){
        	
            newSentence = newSentence + outsideSentence[i].toUpperCase()
        
        }
        
        else{
        	
        	newSentence = newSentence + outsideSentence[i]
            
        }
        
    }
    
    return newSentence
    
}



// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)


// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 


// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('squareDance()', function(){
	it('should have length equal to that of the original array', function(){
		checkFuncBasics('squareDance',1)
		expect(squareDance([2,4,6])).to.have.lengthOf(3)
	})
	it('should return a new array where each element in the original array has been squared.', function(){
		var newArr = squareDance([2,4,6])
		expect(newArr[1]).to.equal(16)
	})
})
describe('nicer()', function(){
	it('should return a string .', function() {
		checkFuncBasics('nicer',1)
		expect(nicer("test string")).to.be.a('string')
	})
	it('should return a copy of the input sentence with the words heck, darn, dang, and crappy omitted.', function(){
		expect(nicer("mom get the heck in here and bring me a darn sandwich."))
			.to.equal("mom get the in here and bring me a sandwich.")
		expect(nicer("here son, your crappy sandwich is on the dang plate."))
			.to.equal("here son, your sandwich is on the plate.")
	})
})
describe('capitalizeAll()', function(){
	it('should return a string.', function(){
		checkFuncBasics('capitalizeAll',1)
		expect(capitalizeAll('test sentence')).to.be.a('string')
	})
	it('should return a copy of the first string, with the first letter of each word capitalized.', function(){
		expect(capitalizeAll('every day is like sunday')).to.equal('Every Day Is Like Sunday')
		expect(capitalizeAll('hello world')).to.equal('Hello World')
	})
})
describe('properSentences()', function(){
	it('should return a copy of the first string, with the first letter of each *sentence* capitalized.', function(){
		checkFuncBasics('properSentences',1)
		var testParagraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'
		var properParagraph = 'It was a fine morning. The wine was good. Light slanted in through the cafe window.'
		expect(properSentences(testParagraph)).to.equal(properParagraph)		
	})
})
describe('iPutTheFunIn()', function(){
	it('should return a copy of the first string, with the word "fun" inserted into the middle.', function(){
		checkFuncBasics('iPutTheFunIn',1)
		expect(iPutTheFunIn('funerary')).to.equal('funefunrary')
		expect(iPutTheFunIn('reds')).to.equal('refunds')
	})
})
describe('split()', function(){
	it('should return an array', function(){
		checkFuncBasics('split',2)
		expect(split('a b c',' ')).to.be.a('array')
	})
	it('should contain elements from the input string, separated by the input delimiter', function() {
		var fruits = "pear,apple,plum",
			fruitsArr = split(fruits,',')
		expect(fruitsArr[1]).to.equal('apple')
		expect(split('a b c',' ')[0]).to.equal('a')
	})
})
describe('pipeline()', function() {
	it('should take three inputs, a value and two functions. it should process the value through each function in succession and return the final result', function() {
		// test 1
		var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

		var result = pipeline(paragraph,nicer,properSentences) 
		expect(result).to.equal("Mom bring your self in here. I want a sandwich.")

		// test 2
		var squareNum = function(n){
			return n * n
		}

		var addOne = function(n) {
			return n + 1
		}

		var result = pipeline(7,squareNum,addOne) 
		expect(result).to.equal(50)

		// test 3
		var exclaimAll = function(arr) {
			var newArr = []
			for (var i = 0; i < arr.length; i ++) {
				newArr.push(arr[i] + '!')
			}
			return newArr
		}

		var result = pipeline([10,20,30],squareDance,exclaimAll)
		expect(result[1]).to.equal("400!")
		expect(result[2]).to.equal("900!")
	})
})
