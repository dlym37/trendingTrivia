angular.module('myApp').service('srvc', function($http, $q) {
    
    this.things = 'whateva!!!';
    this.getApi = function(){
        $http.get('https://practiceapi.devmountain.com/').then(resp => {//SIM 4 52D
            return resp.data;
        });
    }

    this.getQuestions = function(){
        return $q.when([ //SIM 4 52I
            {
                question: 'how many pounds is the average whale?',
                answer1: 'same as dante',
                answer2: '15000 lbs',
                answer3: 'its like you know whatever',
                answer4: 'question to your question: which kind of whale?',
                difficulty: 'medium'
            },
            {
                question: 'what kind of pet did king james III have?',
                answer1: 'a dante',
                answer2: 'a trent',
                answer3: 'a dan',
                answer4: 'rat',
                difficulty: 'hard'
            },
            {
                question: 'how many evolutions from a frog does a lizard come from?',
                answer1: '5',
                answer2: '7',
                answer3: '3',
                answer4: 'trick question, none',
                difficulty: 'easy'
            },
        ])
    }
})