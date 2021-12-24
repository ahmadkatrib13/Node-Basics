
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  } else if (text === 'list\n') {
    list();
  } else if (text === 'list\n') {
    list();
  }
  else if (text.trim().split(" ")[0] === "add") {
    add(text.trim().substring(4));
  }
  else if (text.trim().split(" ")[0] === "remove") {
    remove(text.trim().substring(7));
  } 
  else if (text.trim().split(" ")[0] === "hello") {
    hello(text.trim().substring(6));
  } else if (text === 'help\n') {
    help();
  } else if (text.trim().split(" ")[0]  === 'edit') {
    edit(text.trim().substring(5));
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  console.log(`hello${text}!`)
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * prints 
 * "
 * command        desciption
 * ----------------------------------
 * hello          greeting user.
 * quit OR exit   end the application.
 * help           show command.
 * ----------------------------------
 * "
 * 
 * This function is supposed to run when typing help 
 * It give  a brief desciption for commands
 *
 * @returns {void}
 */



function help() {
  console.log(`
  command\t\tdesciption
  ----------------------------------
  hello\t\t\tgreeting user.
   |
   -hello [argument]\tgreet saying 'hello [argument]!'

  remove\t\tremove the last  task from list.
   |
   -remove [index]\tremove the [index]th task from list.

  quit OR exit\t\t\end the application
  help\t\t\tto show command.
  ----------------------------------
  `)
}

class Task {
  constructor(text){
    this.text=text;
    this.done=false;
  }

  getStatus(){
    return this.done;
  }
  ChangeStatus(status){
    this.done=status;
  }
  setText(text){
    this.text = text;
  }
  toString(){
    if(this.done) return `[✓] ${this.text}`;
    return `[ ] ${this.text}`;
  }
}



var List = Array(new Task("hello"),new Task("broda"));

function list() {
  if(List.length==0) {console.log("you have no task to do !!");return;}
  console.log(
    List.map((element, key) => `${key + 1} - ${element.toString()}`).join('\n')
  )
}

function add(text) {
  if(text.length==0){ console.log("you didn't input any data");return;}
  List.push(new Task(text))
}

function remove(index){
  if(index.length==0){List.pop(); return;} 
  if(Number(index) >=1 && Number(index) <=List.length) {List.splice(index-1, 1);return;}
  console.log("please enter a valid number")
}

function change(index,status){
  if(index.length==0){List[List.length-1].ChangeStatus(status); return;} 
  if(Number(index) >=1 && Number(index) <=List.length) {List[index-1].ChangeStatus(status);return;}
  console.log("please enter a valid number")
}






function edit(text){
let arr = text.split(" ");
if(text.length==0) {console.log("you entred empty arguments!");return;}
if(isNaN(arr[0])){List[List.length-1].setText(text);return}
if(arr[0]>=0 && arr[0]<=List.length-1) {
  if(arr.length<=1){console.log("please entered empty text");return;}
  let index = arr.shift()-1;List[index].setText(arr.join(" "));return;}
console.log("please entered an invalid index");
}






// The following line starts the application
startApp("Ahmad Katrib")
