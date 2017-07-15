
function setPeps(){
$('#toDoHolder .pep').pep({
  //constrainTo: 'window',
  useBoundingClientRect: true,
  rest: function(){ 
    var thisEl = this.el;
    var toDoId = $(thisEl).attr('id');
    setToDoPos($(thisEl).position(), toDoId);
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

setPeps();

function myFunction(){
      var inputVal = $('#toDoItem').val();
    if(!inputVal) {return}
    var newId = Math.round(Math.random() * 10000000000);
  var newToDoObj = {id: newId, name:inputVal, type:1, left:$(window).width() / 2, top: $(window).height() / 2};
  toDoRecords.push(newToDoObj);
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
  buildToDoMonster(newToDoObj);
    setPeps();
  $('#toDoItem').val("");
};
 var toDoRecords = [];

$(document).ready(function(){
  toDoRecords = JSON.parse(localStorage.getItem('dragToDoRecs'));
  //alert(toDoRecords);
  toDoRecords.forEach(function(item){
    buildToDoMonster(item);
  });
  setPeps();  
});

// function myFunction() {
// //    alert("The form was submitted");
//     var inputVal = $('#toDoItem').val();
//   alert(inputVal);
//     if(!inputVal) {return}
//     var newId = Math.round(Math.random() * 10000000000);
//   var newToDoObj = {id: newId, name:inputVal, type:1};
//   toDoRecords.push(newToDoObj);
//   localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
//   buildToDoMonster(inputVal, newId);
//     setPeps();
//   $('#toDoItem').val("");
// }

// $('button').addEventListener('touchmove', function(e) {
// //$('button').touchstart(function(){
//   alert('x');
// //  e.preventDefault();
//   var inputVal = $('#toDoItem').val();
//   alert(inputVal);
//   if(!inputVal) {return}
//   var newId = Math.round(Math.random() * 10000000000);
//   var newToDoObj = {id: newId, name:inputVal, type:1};
//   toDoRecords.push(newToDoObj);
//   localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
//   buildToDoMonster(inputVal, newId);
//   setPeps();
//   $('#toDoItem').val("");
// });
  
// });

function setToDoPos(pos, id){
  console.log(pos);
    for(var i=0;i<toDoRecords.length;i++){
    console.log(toDoRecords[i]);
    if(toDoRecords[i].id == id){
      toDoRecords[i].left = pos.left;
      toDoRecords[i].top = pos.top;
    }
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
}

function removeToDo(id){
  for(var i=0;i<toDoRecords.length;i++){
    console.log(toDoRecords[i]);
    if(toDoRecords[i].id == id){
      toDoRecords.splice(i, 1);
    }
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
}

function buildToDoMonster(item){
  var newToDo = $( "#template .pep" ).clone();
  newToDo.children('.name').html(item.name);
  $(newToDo).attr('id', item.id);
  newToDo.appendTo($('#toDoHolder'));
newToDo.css({top: item.top, left: item.left});
  //  newToDo.css({top: (document.body.innerHeight / 2) - 50, left: (document.body.innerWidth / 2) + 25});
}