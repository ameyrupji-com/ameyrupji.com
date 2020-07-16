site.versionBand = (function ($) {
    "use strict"
 
    var Model = {
    },
    View = {
      versionBandMain: '#version-band-main',
      versionIdSpan: '#version-id'
    },
    Controller = {
      compareVersion: function compareVersion(a, b) {
        // Return 1 if a > b
        // Return -1 if a < b
        // Return 0 if a == b
 
        if (a === b) {
          return 0;
        }
 
        var a_components = a.split(".");
        var b_components = b.split(".");
 
        var len = Math.min(a_components.length, b_components.length);
 
        // loop while the components are equal
        for (var i = 0; i < len; i++) {
          // A bigger than B
          if (parseInt(a_components[i]) > parseInt(b_components[i])) {
          return 1;
          }
 
          // B bigger than A
          if (parseInt(a_components[i]) < parseInt(b_components[i])) {
            return -1;
          }
        }
 
        // If one's a prefix of the other, the longer one is greater.
        if (a_components.length > b_components.length) {
          return 1;
        }
 
        if (a_components.length < b_components.length) {
          return -1;
        }
 
        // Otherwise they are the same.
        return 0;
      },
      initializeVersionBandMain: function initializeVersionBandMain() {
        $.get( "https://api.github.com/repos/ameyrupji-com/ameyrupji.com/releases/latest", function( data ) {
          var tag_name = data.tag_name
          var version_id = $(View.versionIdSpan).html()
          var url = $(location).attr('href');
 
          tag_name = tag_name.replace('v', '')
          version_id = version_id.replace('v', '')
 
          if (Controller.compareVersion(tag_name,version_id) == 1 && url.includes('ameyrupji.com/release/v')) {
            $(View.versionBandMain).show()
          }
        });
      },
      init: function init() {
        console.log('In versionBand:init()')
        Controller.initializeVersionBandMain()
      }
    }
 
    return {
      init: Controller.init,
    };
  })(jQuery); 