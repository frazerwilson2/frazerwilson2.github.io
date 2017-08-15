var toDoRecords = null;
var storage = new Tm.StorageProvider("dragToDoRecs", []);

function setPeps() {
    $('#toDoHolder .pep').pep({
        //constrainTo: 'window',
        useBoundingClientRect: true,
        rest: function() {
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

function addNewItem(value) {
    if (!value) { return }
    var newId = Date.now();

    var chosenMonst = new Tm.Monster();

    var newToDoObj = { id: newId, name: value, Monster: chosenMonst };
    toDoRecords.push(newToDoObj);
    storage.Store(toDoRecords);

    buildToDoMonster(newToDoObj);

    setPeps();
    $('#toDoItem').val("");
}

function onNewItemSubmit() {
    var inputVal = $.trim($('#toDoItem').val());
    if (!inputVal) {
        console.log('no name given');
        return;
    }
    addNewItem(inputVal);
}

function setToDoPos(pos, id) {
    for (var i = 0; i < toDoRecords.length; i++) {
        if (toDoRecords[i].id === parseInt(id)) {
            toDoRecords[i].Monster.SetPosition(pos.top, pos.left);
        }
    }

    storage.Store(toDoRecords);
}

function removeToDo(id) {
    for (var i = 0; i < toDoRecords.length; i++) {
        if (toDoRecords[i].id === parseInt(id)) {
            toDoRecords.splice(i, 1);
        }
    }

    storage.Store(toDoRecords);
}

function randomPos() {
    return Math.round(Math.random() * 200) - Math.round(Math.random() * 200);
}

function buildToDoMonster(item) {
    var newToDo = item.Monster.BuildElement(item.id, $('#toDoHolder'));
    newToDo.children('.name').html(item.name);
}

$(document).ready(function() {
    toDoRecords = storage.Retrieve();

    $('#textList').hide();
    if (toDoRecords) {
        toDoRecords.forEach(function(item) {
            item.Monster = new Tm.Monster(item.Monster);
            buildToDoMonster(item);
        });

        setPeps();
        $('#toDoItem').focus();
    }
});


$('#textListBtn').hover(function() {
    var tempList = $('<ul></ul>');
    for (var i = toDoRecords.length - 1; i >= 0; i--) {
        var tempListItem = '<li class="' +
            toDoRecords[i].Monster.Colour + '">' +
            '<svg class="icon"><use xlink:href="#ref' + toDoRecords[i].Monster.Props.Type + '" /></svg>' +
            toDoRecords[i].name + '</li>';
        tempList.append(tempListItem);
    };
    $('#textList').html(tempList);
    toggleViews();
});

$('input').on('keyup', function(e) {
    if ($("input").is(":focus") && (e.keyCode === 13)) {
        onNewItemSubmit();
    }
});

function toggleViews() {
    $('#textList').toggle();
    $('#toDoHolder').toggle();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}
