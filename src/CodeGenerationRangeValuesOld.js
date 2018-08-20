module.exports = {
      "A1": {"led" : function(value){ return value},
             "laser" : function(value){ return value},
             "light_sensor" : function(value){ return value},
             "bend_sensor" : function(value){ return value},
             "gas_sensor" : function(value){ return value},
             "distance_sensor" : function(value){ return value}, 
             "sound_sensor" : function(value){ return value},
             "temperature_sensor" : function(value){ return value},
             "rain_sensor" : function(value){ return value},
             "rotational_sensor" : function(value){ return value},
             "accelerometer" : function(value){ return value},
             "solar_panel" : function(value){ return value},
             "humidity_sensor" : function(value){ return value},
             "hall_sensor" : function(value){ return value},
             "metal_detector" : function(value){ return value},
             "heartbeat_sensor" : function(value){ return value},
             "tact_switch" : function(value){ return value},
             "dual_switch": function(value){ return value},
             "beeper":function(value){return value},
             "touch_sensor":function(value){return value},
             "pir_sensor":function(value){return value}
      },
      "A2": {"led" : function(value){ return value},
             "laser" : function(value){ return value},
             "servo_motor" : function(value){ return (1800+(value*20))},
             "light_sensor" : function(value){ return value},
             "bend_sensor" : function(value){ return value},
             "gas_sensor" : function(value){ return value},
             "distance_sensor" : function(value){ return value}, 
             "sound_sensor" : function(value){ return value},
             "temperature_sensor" : function(value){ return value},
             "rain_sensor" : function(value){ return value},
             "rotational_sensor" : function(value){ return value},
             "accelerometer" : function(value){ return value},
             "solar_panel" : function(value){ return value},
             "humidity_sensor" : function(value){ return value},
             "hall_sensor" : function(value){ return value},
             "metal_detector" : function(value){ return value},
             "heartbeat_sensor" : function(value){ return value},
             "tact_switch" : function(value){ return value},
             "dual_switch": function(value){ return value},
             "beeper":function(value){return value},
             "servo_extender":function(value){return value},
             "touch_sensor":function(value){return value},
             "pir_sensor":function(value){return value}
      },
      "A3": {"led" : function(value){ return value},
             "laser" : function(value){ return value},
             "servo_motor" : function(value){ return (1800+(value*20))},
             "light_sensor" : function(value){ return value},
             "bend_sensor" : function(value){ return value},
             "gas_sensor" : function(value){ return value},
             "distance_sensor" : function(value){ return value}, 
             "sound_sensor" : function(value){ return value},
             "temperature_sensor" : function(value){ return value},
             "rain_sensor" : function(value){ return value},
             "rotational_sensor" : function(value){ return value},
             "accelerometer" : function(value){ return value},
             "solar_panel" : function(value){ return value},
             "humidity_sensor" : function(value){ return value},
             "hall_sensor" : function(value){ return value},
             "metal_detector" : function(value){ return value},
             "heartbeat_sensor" : function(value){ return value},
             "tact_switch" : function(value){ return value},
             "dual_switch": function(value){ return value},
             "beeper":function(value){return value},
             "servo_extender":function(value){return value},
             "touch_sensor":function(value){return value},
             "pir_sensor":function(value){return value}
      },
      "A4": {"led" : function(value){ return value},
             "laser" : function(value){ return value},
             "light_sensor" : function(value){ return value},
             "bend_sensor" : function(value){ return value},
             "gas_sensor" : function(value){ return value},
             "distance_sensor" : function(value){ return value}, 
             "sound_sensor" : function(value){ return value},
             "temperature_sensor" : function(value){ return value},
             "rain_sensor" : function(value){ return value},
             "rotational_sensor" : function(value){ return value},
             "accelerometer" : function(value){ return value},
             "solar_panel" : function(value){ return value},
             "humidity_sensor" : function(value){ return value},
             "hall_sensor" : function(value){ return value},
             "metal_detector" : function(value){ return value},
             "heartbeat_sensor" : function(value){ return value},
             "tact_switch" : function(value){ return value},
             "dual_switch": function(value){ return value},
             "beeper":function(value){return value},
             "touch_sensor":function(value){return value},
             "pir_sensor":function(value){return value}
      },
      "BC": {
             "7segment_display" : function(value){ return value},
             "led_strip" : function(value){ return value},
             "accelerometer" : function(value){ return value},
             "rfid" : function(value){ return value},
             "4_CH_relay":function(value){return value},
      },
      "B": {
             "accelerometer" : function(value){ return value},
             "dot_matrix" : function(value){ return value},
             "rfid" : function(value){ return value},
      },
      "F": {
             "color_sensor" : function(value){ return value},
             "ultrasonic_sensor" : function(value){ return value},
             "mp3":function(value){return value},
             "dual_switch": function(value){ return value},
      },
      "G": {
             "ultrasonic_sensor" : function(value){ return value},
              "gesture_sensor":function(value){return value},
              'gyro_sensor':function(value){return value},
      },
      "FG": {
             "accelerometer" : function(value){ return value},
             "ultrasonic_sensor" : function(value){ return value},
             "color_sensor" : function(value){ return value},
      },
      "MOTOR1": {
             "geared_motor" : function(value){ return (value+20)},
             "dc_motor" : function(value){ return (value+20)},
             "relay" : function(value){ return (value+20)},
             "electromagnet" : function(value){ return (value+20)},
             "mini_geared_motor":function(value){ return (value+20)},
      },
      "MOTOR2": {
            
             "geared_motor" : function(value){ return (value+20)},
             "dc_motor" : function(value){ return (value+20)},
             "relay" : function(value){ return (value+20)},
             "electromagnet" : function(value){ return (value+20)},
             "mini_geared_motor":function(value){ return (value+20)},
      },
};