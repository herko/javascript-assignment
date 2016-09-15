/*
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with 'message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

 Arguments

  messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }
  
  Hint - try chaining some Array methods!

*/
var messages = [
  {
    message: "Dolore Lorem incididsunt duis."
  },
  {
    message: "Eu voluptate incididunt veniam exercitation fugiat excepteur commodo ea eu exercitation est dolore laborum occaecat."
  },
  {
    message: "Enim occaecat minim eu commodo ex qui exercitation nostrud eiusmod."
  },
  {
    message: "Nostrud mollit et adin."
  },
  {
    message: "Excepteur non et dolor Lorem dolor id id officia dolore consectetur ut."
  },
  {
    message: "Tempor enim esse sunfugiat."
  },
  {
    message: "Aliquip proident laboris dolor aliquip pariatur non."
  },
  {
    message: "Culpa elit culpa ullamco voluptate labore esse excepteur nulla reprehenderit culpa cupidatat."
  },
  {
    message: "Excepteur ut eu deserunt voluptate voluptate fugiat elit."
  },
  {
    message: "Ad reprehenderit ex esse duis incididunt proident dolor qui proident."
  },
  {
    message: "Laboris ut laborum nulla eu enim dolor mollit deserunt consectetur ipsum adipisicing occaecat minim."
  },
  {
    message: "Ut incididunt pariatur sunt laborum pariatur velit sit pariatur consectetur ad anim enim."
  },
  {
    message: "Cupidatat dolor laborum prdo."
  },
  {
    message: "Commodo cupidatat proident officia labore et aute."
  },
  {
    message: "Cillum qui velit nostrud deserunt mollit Lorem sint irure consectetur."
  },
  {
    message: "Incididunt dolore non officia consequat amet eiusmod minim ad."
  },
  {
    message: "Nisi nisi sit aliquip ad qui incididunt exercitation commodo dolor ut reprehenderit cupidatat labore exercitation."
  },
  {
    message: "Nostrud mollit cupidatat do sunt magna consectetur anim ullamco mollit magna incididunt magna est."
  },
  {
    message: "Fugiat proident incididunt et consectetur nulla laboris ullamco."
  },
  {
    message: "Cillum commodo incididunt aliqua quis ut ad ex aliqua officia."
  },
  {
    message: "Magna veniam eiusmod id labore veniam ullamco."
  },
  {
    message: "Velit amet laboris voluptate Lorem sit velit duis ex laborum ex."
  },
  {
    message: "Nulla esse qui enim qui sint fugiat qui id et cillum aliquip reprehenderit proident."
  },
  {
    message: "Duis mollit sunt eu esse deserunt cupidatat laboris."
  },
  {
    message: "Non ullamco consectetur proident dolore anim commodo et eu do exercitation qui exercitation sint sit."
  },
  {
    message: "Est ullamco velit duis sunt aliqua ex sint aute."
  },
  {
    message: "Lorem cupidatat in in magna do duis commodo nostrud in."
  },
  {
    message: "Aliqua velit exercitation mollit aute."
  },
  {
    message: "Tempor enim minim ut mollit irure cupidatat sit ea consectetur laboris proident ullamco sit."
  },
  {
    message: "Excepteur culpa aute consectetur excepteur ipsum laboris ex aliquip culpa nostrud et aute Lorem."
  }
];

function getShortMessages(messages){
  return messages
    .filter(function(obj){
      return obj.message.length < 50;
    })
    .map(function(obj){
      return obj.message;
    });
}

console.log(getShortMessages(messages));
