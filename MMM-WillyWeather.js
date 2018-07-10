/* Magic Mirror
 * Module: MMM-WillyWeather
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-WillyWeather",{
		
	defaults: {
			height:"228px",
			width:"300px",
            animationSpeed: "3000",
            updateInterval: 30 * 60 * 1000,
	},
    
    
    start: function () {
		self = this;
        
        // ADDED: Schedule update timer courtesy of ninjabreadman
    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
    }, this.config.updateInterval);
        
	},
	
	getStyles: function() {
        return ["MMM-WillyWeather.css"];
    },


	
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
        iframe.style = "display: block";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
        iframe.src =  'https://cdnres.willyweather.com/widget/loadView.html?id=91530' + new Date();
        
//      <div style="width: 300px;"><iframe style="display: block;" src="https://cdnres.willyweather.com/widget/loadView.html?id=91525" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="display: block;z-index: 1;text-indent: -9999em;position: relative;margin: -20px 0 0 0;height: 20px" href="https://www.willyweather.com/ny/richmond-county/staten-island.html" rel="nofollow">Staten Island NY forecast</a></div>
        
		return iframe;
	},
	
	 /////  Add this function to the modules you want to control with Hello Lucy //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_WILLY') {
            this.hide(1000);
        }  else if (notification === 'SHOW_WILLY') {
            this.show(1000);
        }
            
    },

});
