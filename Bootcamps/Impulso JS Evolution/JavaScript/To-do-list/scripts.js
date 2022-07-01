// os código abaixo vão criar o formulário e o id para receber as tarefas do usuário //
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
    // criação do input //
	const inputField = document.getElementById('task-input'); 
	addTask(inputField.value); // comando que permite a inclusão da informação digitada //
	form.reset(); // função que vai limpar o formulário após envio //
};

// Criação das constantes em lista //
function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label'); // o texto digitado //
	const taskDescriptionNode = document.createTextNode(description);
    // comandos para criar a lista das tarefas digitadas com o checkbox //
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);
    
    // Código para que o texto digitado seja inserido na página //
	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

    // Criação do container que vai armazenar a lista de tarefas //
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

    // o comando abaixo é quem vai criar a lista das tarefas digitadas //
	taskList.appendChild(taskContainer);
}
