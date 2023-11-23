$(document).ready(function() {
    $("#addRow").click(function() {
        
        var newName = $("#newName input").val();
        var newCountry = $("#newCountry input").val();
        var newAge = $("#newAge input").val();
            
     $("#row4").before('<tr><td>' + newName + '</td><td>' + newCountry + '</td><td>' + newAge + '</td><td><button class="save">Save</button><button class="edit">Edit</button><button class="delete">Delete</button></td></tr>');

            
            $("#newName input").val('');
            $("#newCountry input").val('');
            $("#newAge input").val('');
        
    });
    $("#main").on("click",".edit",function(){
      
    //gets all the element of the row and as all are element are under td we get the closest td to access all the element 

     var currentRow=$(this).closest("tr");
     var editName=currentRow.find("td:eq(0)").text();
     var editCountry=currentRow.find("td:eq(1)").text();
     var editAge=currentRow.find("td:eq(2)").text();
     //console.log(editAge);
    
     currentRow.html('<td><input type="text" value="'+editName+'"></td><td><input type="text" value="'+editCountry+'"></td><td><input type="number" value="'+editAge+'"></td><td><button class="save">Save</button><button class="delete">Delete</button></td>');
    });

    $("#main").on("click",".save",function(){

    var currentRow=$(this).closest("tr");
    var editedName=currentRow.find("input[type='text']:eq(0)").val();
    var editedCountry=currentRow.find("input[type='text']:eq(1)").val();
    var editedAge=currentRow.find("input[type='number']").val();
    //console.log(editedAge);
    currentRow.html('<td>'+editedName+'</td><td>'+editedCountry+'</td><td>'+editedAge+'</td><td><button class="save">Save</button><button class="edit">Edit</button><button class="delete">Delete</button></td>')

    });
    $("#main").on("click",".delete",function(){

        $(this).closest("tr").remove();
    })


});