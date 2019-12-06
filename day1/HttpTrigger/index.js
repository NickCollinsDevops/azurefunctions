module.exports = async function (context) {
    
    var spinNumber = Math.floor(Math.random() * 3);
    var values = ['Nun','Gimmel','Hay','Shin']

   
        context.res = {
            // status: 200, /* Defaults to 200 */#
            
            body: "you spun: " + values[spinNumber]
            
        };
    };
   