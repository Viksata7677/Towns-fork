$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnAdd').click(addTown);
    $('#btnShuffle').click(shuffleTowns);
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
		showMessage('Town name cannot be empty.');
        return;
    }
    if (townExists(townName)) {
		showMessage('Town "' + townName + '" already exists.');
        return;
    }
    $('#towns').append($('<option>').text(townName));
	showMessage(townName + " added.");
}

function showMessage(msg) { 
	$('#result').text(msg).css("display", "block"); 
	
	setTimeout(function () { 
		$('#result').hide('blind', {}, 500); 
	}, 3000); 
}

function shuffleTowns() {
    let towns = $('#towns option').toArray();

    $('#towns').empty();

    shuffleArray(towns);

    $('#towns').append(towns);

    $('#result').text("Towns shuffled.");

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var oldElement = array[i]; array[i] = array[j]; array[j] = oldElement;
        }
    }
}