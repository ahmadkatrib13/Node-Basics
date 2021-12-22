
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
function startApp(name){
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
  if (text === 'quit\n' || text === 'exit\n' ) {
    quit();
  }
  else if(text.trim().split(" ")[0]==="hello"){
    hello(text.trim().substring(5));
  } else if(text === 'help\n'){
    help();
  }
  else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(`hello${text}!`)
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
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



function help(){
  console.log(`
  command\t\tdesciption
  ----------------------------------
  hello\t\t\tgreeting user.
  quit OR exit\t\t\end the application
  help\t\t\tto show command.
  ----------------------------------
  `)
} 




// The following line starts the application
startApp("Ahmad Katrib")
