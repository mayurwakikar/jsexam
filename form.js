var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["emailid"] = document.getElementById("emailid").value;
    formData["contactno"] = document.getElementById("contactno").value;

    return formData;
}

function insertNewRecord(data){
        var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);

        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullname;

        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.emailid;

        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.contactno;

        cell3 = newRow.insertCell(3);
        cell3.innerHTML ="<a onclick='onEdit(this)'>Edit</a><a onclick='onDelete(this)'>Delete</a>";
}

function resetForm(){
    document.getElementById("fullname").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("contactno").value = "";
    var selectedRow  = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emailid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contactno").value = selectedRow.cells[2].innerHTML;
    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.emailid;
    selectedRow.cells[2].innerHTML = formData.contactno;
}

function onDelete(td){
    if(confirm('Delete this record ?')){
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetForm();
    }
    
}