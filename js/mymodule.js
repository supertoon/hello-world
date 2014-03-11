var MyModule = (function(module){

	module.doit = function(resultObject) {
		resultObject.prepend('hello world.. <br/>');
	};
	
	return module;
}(MyModule || {}));