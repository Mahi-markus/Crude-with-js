var selectedRow = null;

function onsubmitfunc() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        inserNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();

}


function readFormData() {

    var formData = {};
    formData["firsN"] = document.getElementById("firsN").value;
    formData["lastN"] = document.getElementById("lastN").value;
    formData["prof"] = document.getElementById("prof").value;
    formData["quati"] = document.getElementById("quati").value;

    return formData;

}

function inserNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firsN;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastN;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prof;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quati;

    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firsN;
    selectedRow.cells[1].innerHTML = formData.lastN;
    selectedRow.cells[2].innerHTML = formData.prof;
    selectedRow.cells[3].innerHTML = formData.quati;
}


//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firsN").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastN").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prof").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quati").value = selectedRow.cells[3].innerHTML;
}


//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


//Reset the data
function resetForm() {
    document.getElementById("firsN").value = '';
    document.getElementById("lastN").value = '';
    document.getElementById("prof").value = '';
    document.getElementById("quati").value = '';
    selectedRow = null;
}