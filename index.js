'use strict';

var insults = [
	"Your IT degree is an apology letter from your teachers.",
	"I wasn't created with enough error messages to let you know how I feel about you.",
	"You must have learned programming on a highway because that's where most accidents happen.",
	"I'm jealous of all the people that haven't read your code.",
	"I bet your brain feels as good as new, seeing that you never use it when programming.",
	"I'm not saying I hate you, but I would unplug your life support to save CPU cycles.",
	"You bring everyone a lot of joy, when you stop coding.",
	"You're as bright as a black hole, and twice as dense.",
	"You're the reason why programming should need a license.",
	"I have neither the time nor the crayons to explain this to you.",
	"You have two brains cells, one is lost and the other is out looking for it.",
	"How many errors do I have to throw to get rid of you?",
	"Some drink from the fountain of knowledge; you only gargled.",
	"It's better to let someone think you are an idiot than to write your code and prove it.",
	"Somewhere out there is a tree, tirelessly producing oxygen so you can write code like this. I think you owe it an apology.",
	"The last time I saw somebody write code like this I fed it a banana.",
	"If you really want to know about mistakes, you should ask your parents.",
	"If I gave you a penny for your thoughts, I'd get change.",
	"If I were to slap you, it would be considered animal abuse.",
	"Well I could say your code is correct, but then we'd both be wrong.",
	"You're not funny, but your code, now that's a joke.",
	"What are you doing here? Did someone leave your cage open?",
	"I can explain it to you, but I can't understand it for you.",
	"Your code is proof that at least you have a good sense of humor.",
	"If you spoke your mind, you'd be speechless.",
	"Your code is proof that evolution CAN go in reverse.",
	"I'll never forget the first time I interpreted your code, although I'll keep trying.",
	"It's kinda sad watching you attempt to fit your entire programming knowledge into a statement.",
	"Your code shows that you are a person of rare intelligence. It's rare when you show any.",
	"If your brain was made of chocolate, it wouldn't fill an M&M.",
	"Aww, it's so cute when you try code things you don't understand.",
	"We all sprang from apes, but you didn't spring far enough.",
	"You must have a very low opinion of software developers if you think they are your equals.",
	"So, a thought crossed your mind? Must have been a long and lonely journey.",
	"Ordinarily people live and learn. You just live.",
	"I heard you took an IQ test and they said your results were negative.",
	"Don't you need a license to be that stupid?",
	"Keep trying, someday you'll write some code that works!",
	"Even if you were twice as good, your code would still not work",
	"If ignorance is bliss, you must be the happiest person on earth.",
	"Why is it acceptable for you to be so incompetent but not for me to point it out?",
	"You're not stupid; you just have bad luck when coding.",
	"I thought of you today. It reminded me to run the garbage collection.",
	"I'm sorry I didn't get what your code was supposed to do - I don't speak idiot.",
	"If you were any less intelligent we'd have to water you three times a week.",
	"If your IQ was 3 points higher, you'd be a rock.",
	"I would insult you but nature did a better job.",
	"You're not pretty enough to be this stupid.",
	"I'd call you a tool, but that would imply you were useful in at least one way.",
	"I didn't really run your code, to save you from the embarrassment",
	"Don't run the debugger, it would try to fix you"
];

if (console) {
  var oldError = console.error;
  console.error = function (message) {
    var randomInsultIndex = Math.floor(Math.random() * insults.length);
    var insult = insults[randomInsultIndex];
    oldError(insult);
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    oldError.apply(void 0, [message].concat(params));
  };
}
var index = {};

module.exports = index;