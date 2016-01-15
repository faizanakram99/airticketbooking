jQuery(document).ready(function ($) {

            var jssor_1_SlideoTransitions = [
              [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:600.0,o:1.0,e:{o:5.0}}],
                 ];

            var jssor_1_options = {
              $AutoPlay: true,
              $Idle: 2000,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:2000,b:1000}]
                ]
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 960);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
