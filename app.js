var clockwork = require('clockwork')({key:'b6433f242a0d6ce74b1ae41669009580e0710001'});

clockwork.sendSms({ To: '00923420011719', Content: 'Test!'}, 
  function(error, resp) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Message sent',resp.responses[0].id);
    }
});