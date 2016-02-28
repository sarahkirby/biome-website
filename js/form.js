// Form Validation

function addFormValidation(theForm) {

    if (theForm === null || theForm.tagName.toUpperCase() !== 'FORM') {
        throw new Error("the first parameter to addFormValidation must be a FORM, but got " + theForm.tagName);            
    }

    theForm.noValidate = true;

	

	theForm.addEventListener('submit', function(evt) {
        if(validateForm(theForm) === false) {                       
            evt.preventDefault();
        }

    });
		


	
    function validateForm(theForm) {
        var isError = false;                               
        var elements = theForm.elements;
        for (var i = 0; i < elements.length; i += 1) {
            if (isFieldValid (elements[i]) === false) {                       
                isError = true;
            }
        
     }
     return ! isError;

    }
    function isFieldValid(field) {
        var errorMsg = "";
        if (! needsToBeValidated(field)) {
            return true;
        }

        if (field.id.length === 0 || field.name.length === 0) {
            console.error("error:", field);
            throw new Error("found a field that is missing an id and/or name attribute. name should be there. id is required for determining the field's error message element.");
        }



        

        var errorSpan = document.querySelector('#' + field.id + '-error');

        if (errorSpan === null) {
        console.error("error: ", field);
        throw new Error("could not find the '#" + field.id + "-error' element. It's needed for error messages if #" + field.id + " is ever invalid.");
        }

            field.classList.remove('invalid');
            errorSpan.classList.remove('danger');
            errorSpan.innerHTML = "";

            // number check------------------------------------

            if(field.type === "number" && field.min > 0 && parseInt(field.value, 10) < parseInt(field.min,10)) {
                errorMsg = "must be " + field.min + " or greater.";
            }

            if(field.type === "number" && field.max > 0 && parseInt(field.value, 10) > parseInt(field.max,10)) {
                errorMsg = "must be " + field.max + " or less.";
            }


            // password match-----------------------------------
            if(field.dataset.match) {
                var matchingField = document.querySelector("#" + field.dataset.match);    
                if(matchingField === null) {
                    console.error("error:", field);
                    throw new Error ("could not find the field");
                }
                if(field.value !== matchingField.value) {
                    errorMsg = " The two fields must match.";
                }
            }


            // email check---------------------------------------

            if (field.type === "email" && ! isEmail(field.value)) {             
                errorMsg = " please enter a valid email";
            }



            //Min max length check-------------------------------

            if (field.minLength > 0 && field.value.length < field.minLength) {
                errorMsg = " Must be " + field.minLength + " or more characters long.";
            }

             if (field.maxLength > 0 && field.value.length > field.maxLength) {
                errorMsg = " Must be " + field.maxLength + " characters or less.";
            }


            //Is this field required-----------------------------

            if(field.type === "checkbox" && ! field.checked) { 
                errorMsg = " This must be checked.";
            }
            else if(field.required && field.value.trim() === "") {
                 errorMsg = " Required field";
            }


        if (field.required && field.value.trim() === "") {                 
            errorMsg = " Required field";
        }
        if (errorMsg !== "") {
            errorSpan.innerHTML = errorMsg;
            // give the field an error class
            field.classList.add('invalid');
            errorSpan.classList.add('danger');
            
            return false;       

        }
            

    return true;             
    }
    
    function needsToBeValidated(field) {
        return ['submit', 'number'].indexOf(field.id) === -1;
    }

    function isEmail(input) {            //(input)=field.value
        return input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+)\.([a-z\.]{2,})$/);      
    }
}