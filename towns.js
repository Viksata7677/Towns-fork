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
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}


function townExists(townName) {
	let exists = false;
	$('#towns option').each(function() {
		if ($(this).text() === townName) {
			exists = true;
			return false;
		}
	});
	return exists;
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