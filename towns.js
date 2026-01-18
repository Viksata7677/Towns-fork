$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnAdd').click(addTown);
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		showMessage(townName + " deleted.");
	else
		showMessage(townName + " not found.");
}


function townExists(townName) {
	return $('#towns option').filter(function () {
		return $(this).text() === townName;
	}).length > 0;
}

function isEmptyTown(townName) {
    return !townName || townName.trim() === "";
}

function addTown() {
    let townName = $('#townNameForAdd').val();
    $('#townNameForAdd').val('');
    if (isEmptyTown(townName)) {
        $('#result').text('Town name cannot be empty.');
        return;
    }
    if (townExists(townName)) {
        $('#result').text('Town "' + townName + '" already exists.');
        return;
    }
    $('#towns').append($('<option>').text(townName));
    $('#result').text(townName + " added.");
}