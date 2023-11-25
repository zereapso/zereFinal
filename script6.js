
var quiz = {
  user: "Zere",
  questions: [
  {
    text: "Now you realize that you are left alone on a desert island. What should you do first?",
    responses: [
    { text: "Screaming to be saved" },
    { text: "Inspect and understand whether it is safe here.", correct: true },
    { text: "Lighting a fire as a signal for help" },
    { text: "Go to sleep. The morning is wiser than the evening" }] },


  {
    text: "What is more important to find first?",
    responses: [
    { text: "Water source", correct: true },
    { text: "Some food" },
    { text: "A friend so you don't go crazy from loneliness" },
    { text: "Something that could pass for a weapon" }] },


  {
    text: "Which of these can be eaten?",
    responses: [
    { text: "Berries resembling edible ones" },
    { text: "Beetles", correct: true },
    { text: "Raw meat" },
    { text: "White berries" }] },


  {
    text: "If you are dying of thirst, but your supplies are running out, what will you do?",
    responses: [
    { text: " I will try to collect rainwater or condensation", correct: true },
    { text: "I will drink seawater; there's plenty of it here!" },
    {
      text: "I will eat more to distract the body. " },

    { text: "None of the above" }] },


  {
    text: "Where on the island will you place your shelter?",
    responses: [
    { text: "At the foot of the mountains " },
    {
      text: "Closer to the shore" },

    { text: "Closer to the center of the island", correct: true },
    { text: "In the lowlands" }] },


  {
    text:
    "What method will help scare away wild animals?",
    responses: [
    { text: "Bright clothes" },
    { text: "Loud scream" },
    { text: "Campfire", correct: true },
    { text: "None of the above" }] },


  {
    text: "Which of these items could you most effectively use as a weapon? ",
    responses: [
    { text: " Sharp stick.", correct: true },
    { text: "Large heavy stone. " },
    {
      text: "Long log." },

    { text: "Leaf." }] },


  {
    text: "Where is the best place to fish for food? ",
    responses: [
    { text: "In deeper water." },
    { text: "In shallow water.", correct: true },
    { text: "Where there is a cool current. " },
    { text: "Where the water is warmer." }] },


  {
    text:
    "What will help start a fire that produces more smoke?",
    responses: [
    {
      text: "To use damp wood" },

    { text: "Add clothing to the fire" },
    { text: "Add a lot of leaves", correct: true },
    { text: "Ignite the fire by friction" }] },


  {
    text: "What will you do to avoid going crazy from loneliness?",
    responses: [
    { text: "I will go in search of animals to communicate with. " },
    { text: "I will create a daily schedule, try to engage in something useful.", correct: true },
    { text: "I will talk to the trees." },
    { text: "I will finally have time to rethink my life." }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      
    } } });
    