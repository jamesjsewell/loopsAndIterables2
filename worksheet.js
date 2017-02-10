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
function properSentences(outsideSentence){
    
    var startOfWord = 0
    var newSentence = ""
    var i = 0
    
    for (i=0; i < outsideSentence.length; i++){
        
        if (outsideSentence[i-2] === "." || i == 0){
        	
            newSentence = newSentence + outsideSentence[i].toUpperCase()      
        }
        
        else{
        	
        	newSentence = newSentence + outsideSentence[i]           
        }       
    }
    
    console.log(newSentence)
    return newSentence    
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
function iPutTheFunIn(outsideSentence){

    var newSentence = ""
        
    for(j = 0; j < outsideSentence.length; j++){

        if(j === outsideSentence.length/2){
            
            newSentence = newSentence + "fun"
            
        }
                   
        newSentence = newSentence + outsideSentence[j]                 
        
    }

    return newSentence

}



// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 



function split(outsideString, delimiter){

    var wordsArray = []

    
    var i = 0
    for(i = 0; i < outsideString.length; i++){

        if(outsideString[i] === delimiter || i === outsideString.length-1 || i === 0){
        
            var currentWord = reconstruct_word(i, outsideString, delimiter)
            if (currentWord){
                wordsArray.push(currentWord)
            }
        }
    }
    console.log(wordsArray)
    return wordsArray
    
}

function reconstruct_word(i, outsideString, delimiter){
    
    var i = i
    var word = ""
    var j=i
    if(i>0){
        for(j = i; j > 0; j--){

            var currentLetter = outsideString[j]

            if (currentLetter != delimiter){

                word += outsideString[j]
            }

            if (currentLetter === delimiter && j<i){

             
                var splitString = word.split("");

                var reverseArray = splitString.reverse(); 

                var joinArray = reverseArray.join("")

                return joinArray

            }
        }
    }
    
    word = ""
    
    if(i === 0){
        
        for(j = 0; j <= outsideString.length; j++){

            var currentLetter = outsideString[j]

            if (currentLetter != delimiter){

                word += outsideString[j]
            }

            if (currentLetter === delimiter){
      
                var joinArray = word;

                return joinArray

            }

        }
        
    }
}


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).
function pipeline(startValue, function1, function2){

    var pass1 = function1(startValue)
    var pass2 = function2(pass1)

    return pass2

}

// // visit test.js to see the tests that will be run against your code.


