// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to username variable.
        name: 'name',        
    },
   
    
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }
    else {
       

        // Get user input from result object.
        var name = result.name;

        //convert user input into string
        var nameStr= String(name);
        //make array to calculate charcter in a string
        var arry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        
        var final="";
        var count =0;
        
        for (var i=0 ; i<arry.length; i++)
        {
            
            for (var j=0;j<nameStr.length ; j++)
            {
                
                
                if (arry[i] == nameStr[j])
                {
                    count++;

                }
               
            }
            if (count !=0)
            {
                if(i != (nameStr.length - 1))
                {
                    final = final + arry[i]
                    final=final + count;
                    count=0;

                }
                

            }
            
        }

        //result the output
        console.log(final);
       
    }
});