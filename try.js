var repo_site = "https://0ha-ru0.github.io/M2/";

var timeline = [];

var preload = {
      type: 'preload',
      images: [ repo_site + 'image/1f.png',
       
  ]
    }
    timeline.push(preload);

/*画像読み込み*/

/*画像読み込み終わり*/

var swid = document.documentElement.clientWidth;

/*実験はじめ*/

/*教示*/
var welcome = {
  type : "html-keyboard-response",
  stimulus : "何かキーを押すと実験が始まります",
  };

  timeline.push(welcome);

  var test_stimuli = [
    {koshi: repo_site + 'image/plus.png', target :  repo_site + 'image/1f.png', sitmu: 'fake1'},
    {koshi: repo_site + 'image/plus.png', target :  repo_site + 'image/1n.png', sitmu: 'natu1'},
    
    
  ]

  
 var fy = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('koshi'), 
      choice: 'NO_KEYS',
      trial_duration: 1000,
                    };

  var test = {
  type:"image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: ['f', 'j'],
  //stimulus_width: document.documentElement.clientWidth*0.6,
  data: {
    task: 'response',
   },
  
  on_finish: function(data){
    data.kaku = jsPsych.timelineVariable('stimu');
  }
};
        


  var purosdure={
    timeline:[fy, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 1,
}

timeline.push(purosdure);