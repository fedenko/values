###
jQuery.values: get or set all of the name/value pairs from child input controls
based on http://stackoverflow.com/a/1490431/.
@argument data {array} If included, will populate all child controls.
@returns element if data was provided, or array of values if not
###

$.fn.values = (data) ->
  $form = $(this)
  if(typeof data != "object")
    data = {}
    els = $(":input:not(:disabled)", $form).get()
    $.each els, ->
      switch @nodeName.toLowerCase()
        when "input"
          switch @type
            when "radio", "checkbox"
              if (typeof data[@name] == "undefined")
                  data[@name] = []
              if (@checked)
                  data[@name].push(@value || "")
            else
              data[@name] = @value || ""
        when "select", "textarea"
          data[@name] = @value || ""
      return
    data
  else
    $.each data, (key, value) ->
      $input = $(":input[name=#{key}]", $form)
      if $input.is(":radio, :checkbox") and typeof value != "object"
        $input.val([value]);
      else
        $input.val(value);
      return
    $form
