// Generated by CoffeeScript 1.4.0

/*
jQuery.values: get or set all of the name/value pairs from child input controls
based on http://stackoverflow.com/a/1490431/.
@argument data {array} If included, will populate all child controls.
@returns element if data was provided, or array of values if not
*/


(function() {

  $.fn.values = function(data) {
    var $form, els;
    $form = $(this);
    if (typeof data !== "object") {
      data = {};
      els = $(":input:not(:disabled)", $form).get();
      $.each(els, function() {
        switch (this.nodeName.toLowerCase()) {
          case "input":
            switch (this.type) {
              case "radio":
              case "checkbox":
                if (typeof data[this.name] === "undefined") {
                  data[this.name] = [];
                }
                if (this.checked) {
                  data[this.name].push(this.value || "");
                }
                break;
              default:
                data[this.name] = this.value || "";
            }
            break;
          case "select":
          case "textarea":
            data[this.name] = this.value || "";
        }
      });
      return data;
    } else {
      $.each(data, function(key, value) {
        var $input;
        $input = $(":input[name=" + key + "]", $form);
        if ($input.is(":radio, :checkbox") && typeof value !== "object") {
          $input.val([value]);
        } else {
          $input.val(value);
        }
      });
      return $form;
    }
  };

}).call(this);
