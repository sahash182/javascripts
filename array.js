var securityQuestion= { question: ["What's you first pet's name?", "Your childhood name?","Your favorite movie?"],
                        expectedAnswer: ["tommy", "chris","ironman"]};
var answer=[];

for (i=0;i<securityQuestion.question.length;){
    prompt(securityQuestion.question[i]);
    if (securityQuestion.question[i]==securityQuestion.expectedAnswer[i]);{
           
             answer=answer.push(securityQuestion.question[i]);
    }
    i++;
     els
}





