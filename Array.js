var roster = []

//add new
function addNew(){
    var newName = prompt("What name would you like to add?")
    roster.push(newName)
}

//Delete
function Remove(){
    var RemoveName= prompt("What name would you like to remove?")
    var index=roster.indexof(RemoveName)
    roster.splice(index,1)
}

//Display
function Display(){
    console.log(roster)
}

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start === "y"){
    while(request !== "quit"){
        request = prompt("Please select an option: add,remove,display or quit!")

        if (request=== "add"){
            addNew();
        }else if(request === "remove"){
            RemoveName();
        }else if(request === "display"){
            Display();
        }else{
            alert("not recognized!");
        }
    }
}
alert("Thanks for using the web application! Please refresh to start over.")
