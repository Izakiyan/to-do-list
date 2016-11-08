function addChk() {
	
}

function addNew() {
	var taskElem = document.getElementById('idtask');
	var task = taskElem.value;
	//alert(task);

	var mytable = document.getElementById('mytable');
	var row = mytable.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	var x = document.createElement('INPUT');
	x.setAttribute("type","checkbox");

	cell1.innerHTML = task;
	cell2.appendChild(x);
}