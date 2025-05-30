// #1
// ================================================
// ================================================
// ================================================
// Creating Closures
// Source: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
// Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures?retiredLocale=de#lexical_scoping

function MyProtectedObj(param) {
  const mySecretVariable = "4711";
  let name = param;
   
  return { // returns an annonymous inner func.
    getCode: function() { 
      return mySecretVariable;
    },
    setName: function(value) {
      name = value;
    },
    getName: function() {
      return name;
    }
  }
    
 }

// MyProtectedObj only returns the inner function.
// Properties are not visible since they belong to the outer function
// outer function is not accessible anymore – but still exist in memory but can only be accessed through the inner function
let a = MyProtectedObj("James"); // called as func. 


// Closure is used as constructor
// but this does not matter since it contains a return statement
// so in any case, only the inner function is returned
let b = new MyProtectedObj("Jack"); // called as constructor





function StudiStore() {
  const marks = [];
  return {
    addMark: function(mark) {
      marks.push(mark);
      return marks.length;
    },
    getAmount: function() {
      return marks.length;
    },
    getMarks: function() {
      return marks;
    },
    removeMark: function(index) {
      if (!(index >= 0)) return -1;
      if (!(index < marks.length)) return -2;
      marks.splice(index, 1);
      return 0;
    },
    printMarks: function() {
      console.log(marks);
    }
  }
}






