
describe("When page loads", function() {

  beforeEach(function() {
    var currentListLength;
    var sampleToDo;
  });

  it("should have a list", function() {
    expect(toDoRecords).toBeDefined();
    currentListLength = toDoRecords.length;
  });

});

describe("When adding new item", function() {

	beforeEach(function() {
	  var sampleToDo;
	  var testToDoName;
	  var sampleToDoId;
	});

  it("should not add empty item", function() {
  	inputVal = "";
  	addNewItem();
  	expect(toDoRecords.length).toEqual(currentListLength);
  });

  it("should add new item", function() {
  	testToDoName = "Test item 1";
  	inputVal = testToDoName;
  	addNewItem();
  	expect(toDoRecords.length).toEqual(currentListLength + 1);
  	sampleToDo = toDoRecords[0];
  });

  it("should have correct properties", function() {
  	expect(sampleToDo.name).toEqual(testToDoName);
  	expect(sampleToDo.id).toEqual(jasmine.any(Number));
  	expect(sampleToDo.colour).toBeDefined();
	expect(sampleToDo.left).toEqual(jasmine.any(Number));
	expect(sampleToDo.top).toEqual(jasmine.any(Number));
	expect(sampleToDo.type).toEqual(jasmine.any(Number));
  });

});

describe("When removing item", function() {
	it("should remove selected item", function() {
		var currentListLength = toDoRecords.length;
		removeToDo(toDoRecords[0].id);
		expect(toDoRecords.length).toEqual(currentListLength - 1);
	});
});