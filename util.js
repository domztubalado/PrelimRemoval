
function processGrade(Grade) {
    var d = 'DROP';
var i = 'INC';
 var sGrade = String(Grade);
if (sGrade==i) {
        console.log("Your grade is incomplete.");

    }
   else if (sGrade==d) {
        console.log("You have drop the subject.");

    }


    else if (Grade < 75) {
        if (Grade % 2) {
            console.log('Your new grade is:' + (Grade - 2));
            if (Grade < 70) {
                console.log("There is no grade like that.");

            }
            else if (Grade > 100) {
                console.log("Grade is OVERKILL.");
            }


        }
        
        

        else {
            console.log('Your new grade is:' + (Grade - 3));
            if (Grade < 70) {
                console.log("There is no grade like that.");

            }
            else if (Grade > 100) {
                console.log("Grade is OVERKILL.");
            }

        }
    }




    else {
        if (Grade % 2) {
            console.log('Your new grade is:' + (Grade + 2));

            if (Grade < 70) {
                console.log("There is no grade like that.");

            }
            else if (Grade > 100) {
                console.log("Grade is OVERKILL.");
            }
        }

        else {
            console.log('Your new grade is:' + (Grade + 3));

            if (Grade < 70) {
                console.log("There is no grade like that.");

            }
            else if (Grade > 100) {
                console.log("Grade is OVERKILL.");
            }
        }
    }


   


}
module.exports = {
    processTheGrade: processGrade

}