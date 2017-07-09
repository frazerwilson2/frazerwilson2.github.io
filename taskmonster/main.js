function setPeps(){
$('#toDoHolder .pep').pep({
  //constrainTo: 'window',
  useBoundingClientRect: true,
  rest: function(){ 
    var thisEl = this.el;
    var toDoId = $(thisEl).attr('id');
    console.log(toDoId);
    var winx = window.innerWidth;
    var winy = window.innerHeight;
    var boxx = $(thisEl).position().left;
    var boxy = $(thisEl).position().top;
    if(boxx > winx || boxx < 0 || boxy > winy || boxy < 0){
      $(thisEl).remove();
      removeToDo(toDoId);
    }
  }
});
};

var toDoRecords = [];

$(document).ready(function(){
  $('body').addClass('test');
 if(localStorage.getItem('dragToDoRecs')){  
  toDoRecords = JSON.parse(localStorage.getItem('dragToDoRecs'));
 }
//  alert(toDoRecords);
  if(toDoRecords.length){
    toDoRecords.forEach(function(item){
      buildToDoMonster(item.name, item.id);
    });
    setPeps();
  }
});

$('#formSubmit').click(function(){
//  e.preventDefault();
  var inputVal = $('#toDoItem').val();
//  alert(inputVal);
  if(!inputVal) {return}
  var newId = Math.round(Math.random() * 10000000000);
  var newToDoObj = {id: newId, name:inputVal, type:1};
  toDoRecords.push(newToDoObj);
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
  buildToDoMonster(inputVal, newId);
  setPeps();
  $('#toDoItem').val("");
});

function removeToDo(id){
  for(var i=0;i<toDoRecords.length;i++){
    console.log(toDoRecords[i]);
    if(toDoRecords[i].id == id){
      toDoRecords.splice(i, 1);
    }
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
}

function buildToDoMonster(name, id){
  var newToDo = $( "#template .pep" ).clone();
  newToDo.children('.name').html(name);
  $(newToDo).attr('id', id);
  newToDo.appendTo($('#toDoHolder'));
  newToDo.css({top: (document.body.innerHeight / 2) - 50, left: (document.body.innerWidth / 2) + 25});
}