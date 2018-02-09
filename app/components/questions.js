angular.module('myApp').component('questComp', {
    templateUrl: 'app/components/questions.template.html',
    controllerAs: 'qc', //SIM 4 48D
    
    controller: function(srvc){
        this.questions = srvc.getQuestions();

        this.blah = 'I dont know why this wont show';
    }
})