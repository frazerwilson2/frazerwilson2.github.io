//var colors = ['#16a085', '#2ecc71', '#2980b9', '#9b59b6', '#34495e', '#e67e22', '#f39c12', '#d35400', '#4DD0E1', '#FFD54F', '#7986CB'];
var colors = ['extra', 'minny', 'spike', 'lou', 'other', 'thingy', 'magic', 'crystal', 'arou', 'zen', 'panda'];
var colorLen = colors.length;
var toDoRecords = [];
var monstLen = $('#template .pep').length;
var anims = 4;

function setPeps() {
  $('#toDoHolder .pep').pep({
    //constrainTo: 'window',
    useBoundingClientRect: true,
    rest: function () {
      var thisEl = this.el;
      var toDoId = $(thisEl).attr('id');
      setToDoPos($(thisEl).position(), toDoId);
      var winX = window.innerWidth;
      var winy = window.innerHeight;
      var boxX = $(thisEl).position().left;
      var boxY = $(thisEl).position().top;
      if (boxX > winX || boxX < 0 || boxY > winy || boxY < 0) {
        $(thisEl).remove();
        removeToDo(toDoId);
      }
    }
  });
}

function addNewItem() {
  var inputVal = $('#toDoItem').val();
  if (!inputVal) {
    return;
  }
  var newId = Math.round(Math.random() * 10000000000);
  var chosenClr = colors[Math.round(Math.random() * colorLen)];
  var newLeft = $(window).width() / 2 + randomPos();
  var newTop = $(window).height() / 2 + randomPos();
  var chosenMonst = Math.ceil(Math.random() * monstLen);
  console.log(chosenMonst);
  var newToDoObj = { id: newId, name: inputVal, type: chosenMonst, left: newLeft, top: newTop, colour: chosenClr };
  if (!toDoRecords) {
    toDoRecords = [newToDoObj];
  }
  else {
    toDoRecords.push(newToDoObj);
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
  buildToDoMonster(newToDoObj);
  
  setPeps();
  $('#toDoItem').val("");
}

$('input').on('keyup', function (e) {
  if ($("input").is(":focus") && (e.keyCode === 13)) {
    addNewItem();
  }
});

function setToDoPos(pos, id) {
  for (var i = 0; i < toDoRecords.length; i++) {
    if (toDoRecords[i].id === id) {
      toDoRecords[i].left = pos.left;
      toDoRecords[i].top = pos.top;
    }
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
}

function removeToDo(id) {
  for (var i = 0; i < toDoRecords.length; i++) {
    console.log(toDoRecords[i].id, id);
    if (toDoRecords[i].id === parseInt(id)) {
      toDoRecords.splice(i, 1);
    }
  }
  localStorage.setItem('dragToDoRecs', JSON.stringify(toDoRecords));
}

function randomPos() {
  return Math.round(Math.random() * 200) - Math.round(Math.random() * 200);
}

function buildToDoMonster(item) {
  var newToDo = $("#template").find('#monst' + item.type).clone();
  console.log($(newToDo).children('.name').html());
  var randomSpeed = Math.ceil(Math.random() * anims);
  newToDo.children('.name').html(item.name);
  $(newToDo).attr('id', item.id).addClass('delay-' + randomSpeed);
  $(newToDo).find('.mbody').addClass(item.colour);
  newToDo.appendTo($('#toDoHolder'));
  newToDo.css({ top: item.top, left: item.left });
}

setPeps();

$(document).ready(function () {
  toDoRecords = JSON.parse(localStorage.getItem('dragToDoRecs'));
  //alert(toDoRecords);
  if (toDoRecords) {
    toDoRecords.forEach(function (item) {
      buildToDoMonster(item);
    });
    setPeps();
    $('#toDoItem').focus();
  }
});
