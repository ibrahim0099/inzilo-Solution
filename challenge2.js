// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        //Take input from user
        name: 'input',
     
    },
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        

        // Get user input from result object.
        var input = result.input;
        
        //extract integer from input
        var numb = input.match(/\d/g);
        numb = numb.join("");
        
        //convert user input into string
        
        var inputStr = input.toString();

        //check the character appear in user input
        var character_e = inputStr.search('e');
        var character_o = inputStr.search('o');
       

        var result = 0;
       // Result for character 'e'
            if (character_e > 0)
            {
                result = 2;
                if(numb > 2)
                {
                    while(result<=numb)
                    {
                        
                        
                        console.log(result + "|");
                        result=result + 2;
                       

                    }
                    
                    

                }
                else
                {
                    console.log(result);
                }
              
            }


            //Result for character 'o'

            if (character_o > 0)
            {
                result = 1;
                if(numb > 1)
                {
                    while(result<=numb)
                    {
                        
                        
                        console.log(result + "|");
                        result=result + 2;
                       

                    }
                    
                    

                }
                else
                {
                    console.log(result);
                }
              
            }
        
    }
});