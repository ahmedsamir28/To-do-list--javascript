window.addEventListener('load', () => {

	const addTask = document.querySelector("#add-task-form");
	const addTaskInput = document.querySelector("#add-task-input");
	const tasks = document.querySelector("#tasks");

	addTask.addEventListener('submit', (e) => {

        // prevent form  from submitting
		e.preventDefault();

		const task = addTaskInput.value;

		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		taskEl.appendChild(taskContent);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const actionsEl = document.createElement('div');
		actionsEl.classList.add('actions');
		
		const taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerHTML = ' <i class="fa-solid fa-trash"></i>';

		actionsEl.appendChild(taskEdit);
		actionsEl.appendChild(taskDelete);

		taskEl.appendChild(actionsEl);

		tasks.appendChild(taskEl);

		addTaskInput.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerHTML == '<i class="fa-solid fa-pen-to-square"></i>') {
				taskEdit.innerHTML = '<i class="fa-solid fa-share-from-square"></i>';
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskInput.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			tasks.removeChild(taskEl);
		});
	});
});