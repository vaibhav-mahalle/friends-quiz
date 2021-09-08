var readlineSync = require('readline-sync');
var chalk = require('chalk');


var que = readlineSync.question("Are you a F.R.I.E.N.D.S fan?(Y/N) ");

// options = ['Yes', 'I am idiot',],
//   index = readlineSync.keyInSelect(options);

if(que == 'n'|| que == 'N')
{
  console.log(chalk.bgRed('Sorry this quiz is not for you'));

}
else
{
  var girls = ['Rachel','Phoebe','Monica'];
  var boys = ['Chandler','Ross','Joey','Gunther'];
  
  var question1 = {
    question:'1.Who enters the first episode of the series as a bride? ',
    answer: 'Rachel',
  }

  var question2 = {
    question:"2.Who married chandler ?",
    answer:'Monica',
  }

  var question3 = {
    question:"3.Who was singer of 'smelly cat' song? ",
    answer:'Phoebe',
  }

   var question4 = {
    question:"4.Who had the coolest pickup line among them? ",
    answer:'Joey',
  }

   var question5 = {
    question:"5.Who was monica's sibling? ",
    answer:'Ross',
  }

   var question6 = {
    question:"6.Who was manager of central perk? ",
    answer:'Gunther',
  }

   var question7 = {
    question:"7.Who  had most divorces?",
    answer:'Ross',
  }

   

   var question8 = {
    question:"8.Who loves food the most? ",
    answer:'Joey',
  }

   var question9 = {
    question:"9.Who coined the term-- We were on a break?",
    answer:'Ross',

   
  }

  var tanay = 8;
  var vaibhav = 9;
  var akash = 7;
  var topscorers = [vaibhav,akash,tanay];


var questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9];

var score = 0;
var count = 0;

var leaders = [tanay,vaibhav,akash];

while(count < 9)
{
  if(count<3)
  {
    console.log(chalk.yellowBright(questions[count].question));
    var index = readlineSync.keyInSelect(girls);

    if(questions[count].answer == girls[index])
    {
      score++;
      console.log(chalk.green("Right!"));
    }
    else
    {
      console.log(chalk.red("wrong! "));
    }
    console.log(chalk.yellowBright("Current score is "));
    console.log(chalk.green(score));


  }
  else
  {
    console.log(questions[count].question);
    var index = readlineSync.keyInSelect(boys);

     if(questions[count].answer == boys[index])
    {
      score++;
      console.log(chalk.green("Right!"));
    }
    else
    {
      console.log(chalk.red("wrong! "));
    }
    console.log(chalk.yellowBright("Current score is "));
    console.log(chalk.green(score));

    
  }
  

  count++;

}




count = 3;
var i =0;
while(i<count)
{
  if(score>topscorers[i])
  {
    console.log(chalk.green("Way to go !you are one of the topscorers."+score));
  }
  i++;
}

if(i===3)
{
  console.log(chalk.yellowBright("Unfortunately you could not beat topscorers here is your final score:"+score));
}

  
}

