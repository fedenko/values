/* jQuery.values: get or set all of the name/value pairs from child input controls
 * based on http://stackoverflow.com/a/1490431/.
 * @argument data {array} If included, will populate all child controls.
 * @returns element if data was provided, or array of values if not
*/

$.fn.values = function(data) {
    var form = $(this);

    if(typeof data != 'object') {
        var els = $(':input', form).get();
        console.log(els);
        // return all data
        var data = {};

        $.each(els, function() {
                switch (this.nodeName.toLowerCase()) {
                    case "input":
                        switch (this.type) {
                            case "radio":
                            case "checkbox":
                                if (typeof data[this.name] == 'undefined') {
                                    data[this.name] = [];
                                }
                                if (this.checked) {
                                    data[this.name].push(this.value || '');
                                }
                                break;
                            default:
                                data[this.name] = this.value || '';
                                break;
                        }
                        break;
                    case "select":
                    case "textarea":
                        data[this.name] = this.value || '';
                        break;
                }
        });


        return data;
    } else {
        $.each(data, function(key, value){
            $(':input[name='+key+']', form).val(value);
        });
        return $(form);
    }
};
