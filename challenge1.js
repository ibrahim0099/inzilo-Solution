// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // Take input form user
        name: 'name',  
    },
    {
        // The second input text is assigned to DOB variable.
        name: 'DOB',
        
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
        var DOB = result.DOB;  

        //Convert user input into string
        var nameStr = name.toString();
        var DOBStr = DOB.toString();
       
        
        var check="";
      

        
        for(var i=0;i<nameStr.length ; i++)
        {
            
            check=check + nameStr[i];
            for(var j=0 ; j< DOB; j++)
            {
                if(i===j)
                {
                    
                    check=check + DOBStr[j];
                    if (i != (nameStr.length - 1))
                    {
                        break;
                    }
                    else
                    {
                        check=check + DOBStr[j+1];

                    }
                    
                    
                }
                
            }

        }
        
        //Output the result
        console.log(check);
    }
});