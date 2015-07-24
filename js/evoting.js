function getDimension(width, height) {
    var dimension = width * height;
    return(dimension);
}

function generateNumber(x) {
    var arr = []
    while(arr.length < x) {
        var randomnumber = Math.ceil(Math.random()*100)
        var found = false;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == randomnumber){ 
                found = true; 
                break;
            }
        }
        if(!found) arr[arr.length] = randomnumber;
    }
    return(arr);
}

function generateTable(array)
{
    var result;
    result += "<table border>";
    var row;
    for (row = 0; row < array . length; ++ row)
    {
        result += " <tr>";
        var col;
        for (col = 0; col < array [row] . length; ++ col)
            result += "  <td>" + array [row] [col] + "</td>";
        result += " </tr>";
    }
    result += "</table>";
    return result;
}

function generateMatrix(arrayNumber) {

}

(function($) { 
    $('#generateMatrix').click(function(e) {
        e.preventDefault();

        var width = $('#width').val();
        console.log("width: " + width);

        var height = $('#height').val();
        console.log("height: " + height);

        var dimension = getDimension(width, height);
        console.log("dimension: " + dimension);

        var matrix = generateNumber(dimension);
        console.log("matrix: " + matrix);

        //var result = generateTable(matrix);
        //console.log(result);

        $('#matrix').html(matrix);
    });
})(jQuery);