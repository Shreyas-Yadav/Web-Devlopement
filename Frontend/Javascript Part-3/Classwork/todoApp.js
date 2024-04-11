// Todo App (Only JS)
let todo = [];
let req = prompt(`'Enter your request':
                    1) "add" - Add Task              2) "delete" - Delete task
                    3) "list" - Show all list items  4) "quit" - Quit App`);
while (true) {
    if (req.toLowerCase() == 'quit') {
        break;
    }

    if (req.toLowerCase() == 'list') {
        for (x of todo) {
            console.log(x);
        }
    }
    else if (req.toLowerCase() == 'add') {
        let task = prompt('Enter task: ');
        todo.push(task);
        console.log('Task Added successfully');
    }
    else if (req.toLowerCase() == 'delete') {
        let index = prompt('Please enter index of task to delete: ');
        let deletedTask = todo.splice(index, 1);
        console.log(`${deletedTask} Deleted successfully`);
    }
    else {
        alert('Wrong Choice');
    }
    req = prompt(`'Enter your request':
                    1) add - Add Task              2) delete - Delete task
                    3) list - Show all list items  4) quit - Quit App`);
}