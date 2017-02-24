(function(exports){

	exports.validations=[];

	exports.msg={
		step: true,
		pass: true,
		error: '',
		val: '',
		elemid: ''
	};

	//Global validation templates
	exports.valtract=function(id){
		return $('#'+id).val();
	}
	exports.isdetail=function(msg){
		//Placeholder: Validation modules containing this on index=1 is a detail property
		msg.step=true;
	}
	exports.nospecial=function(msg){
		if ((msg.val.trim())&&(!((/^[\w\s]+$/i).test(msg.val)))){
			msg.pass=false;
			msg.error='Special characters are not allowed';
		}
		msg.step=true;
	}
	exports.nospace=function(msg){
		if (msg.val.trim().indexOf(' ')!=-1){
			msg.pass=false;
			msg.error='Space character is not allowed';
		}
		msg.step=true;
	}
	exports.objectcheck=function(msg){
		if (typeof msg.val.constructor!==Object){
			msg.pass=false;
			msg.error='Must be an object with subproperties';
		}
		msg.step=true;
	}
	exports.arraycheck=function(msg){
		if (msg.val.constructor!==Array){
			msg.pass=false;
			msg.error='Must be an array';
		}
		msg.step=true;
	}
	exports.stringcheck=function(msg){
		if (typeof msg.val!=='string'){
			msg.pass=false;
			msg.error='Must be a string value';
		}
		msg.step=true;
	}
	exports.booleancheck=function(msg){
		if (typeof msg.val!=='boolean'){
			msg.pass=false;
			msg.error='Must be a boolean value';
		}
		msg.step=true;
	}
	exports.numbercheck=function(msg){
		if ((typeof msg.val!=='number')||(!(/^[0-9]+$/i).test(msg.val))){
			msg.pass=false;
			msg.error='Must be a number';
		}
		msg.step=true;
	}
	exports.datecheck=function(msg){
		if (isNaN(Date.parse(msg.val))){
			msg.pass=false;
			msg.error='Must be a valid date';
		}
		msg.step=true;
	}
	exports.empty=function(msg){
		if (!msg.val.length){
			msg.pass=false;
			msg.error='Field cannot be empty';
		}
		msg.step=true;
	}
	exports.colempty=function(msg){
		if (!msg.val.length){
			msg.pass=false;
			msg.error='Field cannot be empty. Type "NA" if not applicable.';
		}
		msg.step=true;
	}
	exports.max64=function(msg){
		if (msg.val.trim().length>64){
			msg.pass=false;
			msg.error='Maximum limit is 64 characters';
		}
		msg.step=true;
	}
	exports.max128=function(msg){
		if (msg.val.trim().length>128){
			msg.pass=false;
			msg.error='Maximum limit is 128 characters';
		}
		msg.step=true;
	}
	exports.max256=function(msg){
		if (msg.val.trim().length>256){
			msg.pass=false;
			msg.error='Maximum limit is 256 characters';
		}
		msg.step=true;
	}
	exports.max512=function(msg){
		if (msg.val.trim().length>512){
			msg.pass=false;
			msg.error='Maximum limit is 512 characters';
		}
		msg.step=true;
	}
	exports.stdlength=function(msg){
		if (msg.val.length<5||msg.val.length>64){
			msg.pass=false;
			msg.error='Length should be between 5 and 64 characters';
		}
		msg.step=true;
	}
	exports.confirmpass=function(msg){
		if (msg.val!=$('#password').val()){
			msg.pass=false;
			msg.error='Passwords do not match';
		}
		msg.step=true;
	}
	exports.emailvalidate=function(msg){
		var re=/\S+@\S+\.\S+/;
		if ((msg.val.trim().length)&&(!re.test(msg.val))){
			msg.pass=false;
			msg.error='Not a valid email address';
		}
		msg.step=true;
	}
	exports.agelimit=function(msg){
		var age=Math.floor((new Date() - new Date(msg.val))/31536000000);
		if (age<13){
			msg.pass=false;
			msg.error='Must be at least 13 years old';
		}
		msg.step=true;
	}

})(typeof exports === 'undefined'? window: exports);
