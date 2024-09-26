// let req = prompt("Please enter your request");
// let todo = [];
// while (true) {
//     if (req == 'list') {
//         for (let i = 0; i <= todo.length - 1; i++) {
//             console.log(i, todo[i]);

//         }
//     } else if (req == 'add') {
//         let task = prompt("please enter the task you want to add");
//         if(task){
//             todo.push(task);
//             console.log(`Task added: ${task}`);            
//         } else {
//             console.log('Task cannot be empty');
            
//         }


//     } else if (req == 'delete') {
//         let index = prompt("Enter you index. you want to delete")
//         if (!isNan(index) && index >= 0 && index < todo.length) {
//             todo.splice(, index1);
//             console.log(`Task at index &{index} deleted`);            
//         } else {
//             console.log("Invalid index");

//         }

//     } else if (req == 'quit') {
//         console.log('quit app');

//         break;

//     } else {
//         console.log("wrong request!")
//     }

//     req = prompt("Please enter your request");

// }

let todo = JSON.parse(localStorage.getItem('todo')) || [];

function listTasks() {
    if (todo.length === 0) {
        console.log("Your to-do list is empty.");
    } else {
        console.log("Your tasks:");
        todo.forEach((task, index) => {
            console.log(`${index}: ${task}`);
        });
    }
}

function addTask(task) {
    if (task) {
        todo.push(task);
        localStorage.setItem('todo', JSON.stringify(todo));
        console.log(`Task added: ${task}`);
    } else {
        console.log("Task cannot be empty.");
    }
}

function deleteTask(index) {
    if (!isNaN(index) && index >= 0 && index < todo.length) {
        const removedTask = todo.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(todo));
        console.log(`Task "${removedTask}" at index ${index} deleted.`);
    } else {
        console.log("Invalid index.");
    }
}

function clearTasks() {
    todo = [];
    localStorage.removeItem('todo');
    console.log("All tasks cleared.");
}

function main() {
    let req = prompt("Please enter your request (list, add, delete, clear, quit)");

    while (true) {
        switch (req) {
            case 'list':
                listTasks();
                break;
            case 'add':
                const task = prompt("Please enter the task you want to add:");
                addTask(task);
                break;
            case 'delete':
                const index = parseInt(prompt("Enter the index you want to delete:"));
                deleteTask(index);
                break;
            case 'clear':
                clearTasks();
                break;
            case 'quit':
                console.log('Quit app');
                return;
            default:
                console.log("Wrong request! Please enter: list, add, delete, clear, or quit.");
        }
        req = prompt("Please enter your request (list, add, delete, clear, quit)");
    }
}

main();

