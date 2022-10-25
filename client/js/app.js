// MAIN 

// Модальное окно добавить контакт

// Модальное окно добавиь клиента
const modalAddWindow = document.querySelector('.modal-add__window');
const modalAddClose = document.querySelector('.modal-add__close');
const btnCancel = document.querySelector('.modal-add__btn-cancel');

const clientsBtn = document.querySelector('.clients__btn');
const modalAdd = document.querySelector('.modal-add');

// Модальные окна удалить и редактировать клиента
const modalEditWindow = document.querySelector('.modal-edit');
const modalEditClose = document.querySelector('.modal-edit__close');
const modalDeleteWindow = document.querySelector('.modal-delete');
const modalDeleteClose = document.querySelector('.modal-delete__close');

modalEditClose.addEventListener('click', function() {
	modalEditWindow.style.display = 'none';
});
modalDeleteClose.addEventListener('click', function() {
	modalDeleteWindow.style.display = 'none';
});




modalAddClose.addEventListener('click', function(e) {
	modalAdd.style.display = 'none';
	/* очищаем input */
	modalAddText.forEach( function(el) {
		el.value = '';
	});
});

clientsBtn.addEventListener('click', function() {
	modalAdd.style.display = 'flex';
});

// По клику отмена
btnCancel.addEventListener('click', function(e) {
	modalAdd.style.display = 'none';
	/* очищаем input */
	modalAddText.forEach( function(el) {
		el.value = '';
	});
});

// Обработка формы добавления клиента
const modalAddText = document.querySelectorAll('.modal-add__text');
const modalAddBtnSave = document.querySelector('.modal-add__btn-save');
const to = document.querySelector('.clients__table-content');

modalAddBtnSave.addEventListener('click', createClient);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ЗАПИСЬ КЛИЕНТА В ТАБЛИЦУ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createClient(e) {
 	let name = '';
 	let lastName = '';
 	let patronymics = '';

 	/* время создания */
 	let date = new Date();
 	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let dateString = `${day}.${month}. ${year} ${hour}:${minutes}`;

	// контакты
	let contacts = '';

 	/* цикл записи данных из Input в переменные*/
	modalAddText.forEach( function(el) {
		if(name === '' && lastName === '') {
			name = el.value;
		} else if(lastName === '') {
			lastName = el.value;
		} else {
			patronymics = el.value;
		}
	});

	/* цикл очищения Input */
	modalAddText.forEach( function(el) {
		el.value = '';
	});

	modalAdd.style.display = 'none';

	to.insertAdjacentHTML('beforeend', `
		<div class="clients__table-row">
			<div>ID</div>
	   	<div>${name} ${lastName} ${patronymics}</div>
	   	<div>${dateString}</div>
	   	<div>${dateString}</div>
	   	<div>${contacts}</div>
	   	<div>
		   	<span class="btn-edit-client">Изменить</span>
		   	<span class="btn-delete-client">Удалить</span>
	   	</div>		
		</div>
 	`);

	// Вешаем обработчики на текущего добавленного клиента на кнопки 'редактировать', 'удалить'
 	let clients = document.querySelectorAll('.clients__table-row');
 	let lastClient = clients[clients.length - 1];

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Script: Редактировать клиента ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 	const btnEditClient = lastClient.querySelector('.btn-edit-client');

	btnEditClient.addEventListener('click', function() {
		modalEditWindow.style.display = 'flex';
	});

	//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Script: Удалить клиента ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	const btnDeleteClient = lastClient.querySelector('.btn-delete-client');
	

	btnDeleteClient.addEventListener('click', function() {
		modalDeleteWindow.style.display = 'flex';
	});
}					













