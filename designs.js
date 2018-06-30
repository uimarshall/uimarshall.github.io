// Select color input
// Select size input
var height, width, myColor;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(evt){
	evt.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
});

function makeGrid(n, m) {
	$('tr').remove();


// Your code goes here!


	var i = 1;
	while(i <= n){
		$('#pixelCanvas').append("<tr id=table" + i + "></tr>");
		for (var j = 1; j <= m; j++) {
			$('#table' + i).append("<td></td>");
		}
		i++;
	}

	$('td').click(function() {
		myColor = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style');
		}else{
			$(this).attr('style', 'background-color: ' + myColor);
		}
	});
}
