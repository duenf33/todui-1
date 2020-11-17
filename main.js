const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`
const arr = [];
console.log(arr);

const addTodo = function(todo){
  console.log('Please enter a To-Do here below:\n')
  const add = todo;
  arr.push(add);
  // console.log(arr)
  // interface.close();
}

// removing only one to-do at the time.
const removeTodo = function(todo){
  console.log('Please remove a To-Do:')
}

// removing all the completed to-do's.
const removeCompleted = function(todo){
  console.log('Please remove ALL To-Do\'s:')
}

// adding a check mark next to a to-do showing its completed.
const toggleStatus = function(todo){
  console.log('Please toggle a completion status:')
}

// assigning a priority to each to-do. 1 the most important and 10 the least important.
const togglePriority = function(todo){
  console.log('Please toggle a priority:')
}
const quit = function(todo){
  console.log('Good bye.')
}
console.log(menu);

  const menuOption = function(option){
    console.log('Your selection is ' + option)
    switch (option){
      case '1':
        console.log('Please enter To-Do: ')
        // console.log('You are being redirected to the "Add a todo" selection.\n')
        // if(option === '1' && todo === String){
          addTodo();
        // }        
        break;

      case '2':
        console.log('Remove a todo');
        break;

      case '3':
        console.log('Remove all completed todos');
        break;

      case '4':
        console.log('Toggle a todo\'s completion status');
        break;

      case '5':
        console.log('Toggle a todo\'s priority');
        break;

      case '6':
        console.log('Quit');
        break;
    }
  }

interface.question('Make your selection below:\n', menuOption)