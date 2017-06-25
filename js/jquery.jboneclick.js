;/*
jbOneClick v0.1 2015
by Jet Bit - http://JetBit.ru

For more information, visit:
http://jetbit.ru/market/jboneclick
*/
(function ($, window, document, undefined) {
    var pluginName = 'jbOneClick',
        defaults = {
            no_name: false,
            no_tel: false,
            no_submit: false,
            title: '\u0417\u0430\u043A\u0430\u0437\u0020\u0432\u0020\u043E\u0434\u0438\u043D\u0020\u043A\u043B\u0438\u043A',
            action_url: '/postmaster.php',
            success: '\u0417\u0430\u043A\u0430\u0437\u0020\u043F\u0440\u0438\u043D\u044F\u0442\u002E\u0020\u041C\u044B\u0020\u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F\u0020\u0441\u0020\u0432\u0430\u043C\u0438\u0020\u0432\u0020\u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435\u0020\u0432\u0440\u0435\u043C\u044F\u002E',
            fail: '\u0417\u0430\u043A\u0430\u0437\u0020\u043D\u0435\u0020\u043F\u0440\u0438\u043D\u044F\u0442\u002E\u0020\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430\u0020\u043E\u0448\u0438\u0431\u043A\u0430\u002E',
            fields: {},
            postfix: "default"
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {

        return this.build();
    };
    Plugin.prototype.build = function () {
        function merge(obj1,obj2){
            var obj3 = {};
            for (var key in obj1) { obj3[key] = obj1[key]; }
            for (var key in obj2) { obj3[key] = obj2[key]; }
            return obj3;
        }
        var _this = this;
        if (!$("#jbOneClick_overlay").length) {
            $('<div id="jbOneClick_overlay" class="jbOneClick_overlay"></div>').appendTo($("body"));
        }
        if (!$("#jbOneClick_" + this.options.postfix).length) {
            $('<div id="jbOneClick_' + this.options.postfix + '" class="jbOneClick"><div class="jb_title">' + this.options.title + '</div><a title="\u0417\u0430\u043a\u0440\u044b\u0442\u044c" class="jb_close">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</a><form class="jb_form"></form><div class="jb_success">' + this.options.success + '</div><div class="jb_progress"></div><div class="jb_fail">' + this.options.fail + '</div></div>').appendTo($("body"));

            this.$success = $('.jb_success').hide();
            this.$fail = $('.jb_fail').hide();
            this.$progress = $('.jb_progress').hide();
            this.$overlay = $('#jbOneClick_overlay');
            this.$overlay = $('#jbOneClick_overlay');
            this.$container = $("#jbOneClick_" + this.options.postfix);
            //this.$container.append($('<a/>').html('\u00a9 \u006a\u0062\u0043\u0061\u006c\u006c\u004d\u0065').attr('\u0068\u0072\u0065\u0066','\u0068\u0074\u0074\u0070\u003A\u002F\u002F\u006A\u0062\u0063\u0061\u006C\u006C\u006D\u0065\u002E\u0072\u0075\u002F\u0064\u0065\u006D\u006F\u002F\u007A\u0061\u006B\u0061\u007A\u002D\u0074\u006F\u0076\u0061\u0072\u0061').attr('\u0074\u0061\u0072\u0067\u0065\u0074','\u005f\u0062\u006c\u0061\u006e\u006b').addClass("jb_dev"));
            this.$form = this.$container.find(".jb_form");
            var options = {};
            if (!this.options.no_name) {
                options.name = {
                    required: true,
                    placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                    type: "text"
                }
            }
            if (!this.options.no_tel) {
                options.tel = {
                    required: true,
                    placeholder: "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                    type: "text"
                }
            }
            this.options.fields = merge(options, this.options.fields);
            if (!this.options.no_submit) {
                this.options.fields.submit = {
                    value: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",
                    type: 'submit'
                }
            }
            if (!this.options.fields.product) {
                this.options.fields.product = {
                    value: "",
                    type: 'hidden'
                }
            }
            if (!this.options.fields.action) {
                this.options.fields.action = {
                    value: "callme",
                    type: 'hidden'
                }
            }
            $.each(this.options.fields, function (index, value) {
                var form_input = '';
                if (value.type && value.type == 'textarea') {
                    form_input = '<textarea ' +
                        (value.required ? 'required="required" ' : '') +
                        (value.class ? 'class="' + value.class + '" ' : '') +
                        (value.placeholder ? 'placeholder="' + value.placeholder + '" ' : '') +
                        'name="' + index + '">'+(value.value ? 'value="' + value.value + '" ' : '')+'</textarea>';
                } else if (value.type && value.type == 'select') {
                    form_input = '<select ' +
                        (value.class ? 'class="' + value.class + '" ' : '') +
                        'name="' + index + '">';
                        form_input += value.placeholder ? '<option disabled="disabled">'+value.placeholder+'</option>' : '';
                        for (var i = 0; i < value.options.length; i++) {
                            form_input += '<option value="'+value.options[i]+'">'+value.options[i]+'</option>';
                        }
                        
                    form_input += '</select>';
                } else {
                    form_input = '<input ' +
                        (value.required ? 'required="required" ' : '') +
                        (value.placeholder ? 'placeholder="' + value.placeholder + '" ' : '') +
                        (value.class ? 'class="' + value.class + '" ' : '') +
                        (value.value ? 'value="' + value.value + '" ' : '') +
                        'type="' + (value.type && jQuery.inArray(value.type, ["submit", "hidden", "text", "email", "date", "color"]) >= 0 ? value.type : 'text') + '" name="' + index + '" />';
                }

                $((value.type != 'hidden' ? '<div class="jb_input">' +
                        (value.label ? '<label>' + value.label + '</label>' : '') : '') +
                    form_input +
                    (value.type != 'hidden' ? '</div>' : '')).appendTo(_this.$form);
            });

            this.$container.hide().find(".jb_close").on('click', function () {
                _this.end();
                return false;
            });
            this.$overlay.hide().on('click', function () {
                _this.end();
                return false;
            });
            this.$form.on('submit', function () {
                _this.submit();
                return false;
            });
        }
        $(_this.element).on('click', function () {
            _this.show();
            return false;
        });
    };
    Plugin.prototype.submit = function () {
        var _this = this;
        _this.$container.find('.jb_progress').show();
        _this.$container = $("#jbOneClick_" + this.options.postfix);
        _this.$container.find('form').hide();       
        $.ajax({
            type: "POST",
            url: this.options.action_url,
            data: this.$form.serialize(),
            success: function(data) {
                _this.$container.find('.jb_progress').hide();
                if (data == '200') {
                    _this.$container.find('.jb_success').show();
                } else {
                    _this.$container.find('.jb_fail').show();
                }
            },
            error: function(){
                _this.$container.find('.jb_progress').hide();
                _this.$container.find('.jb_fail').show();
            }
        });
        setTimeout(function () {
            _this.end()
        }, 3000);
        return false;
    };
    Plugin.prototype.end = function () {
        this.$overlay = $('#jbOneClick_overlay').fadeOut();
        this.$container = $(".jbOneClick").fadeOut();
        $('#jbOneClick_' + this.options.postfix).find('form')[0].reset();
        $('.jbOneClick .jb_success, .jbOneClick .jb_fail').hide();
        $('.jbOneClick form').show();

    };
    Plugin.prototype.show = function () {
        this.$other = $('.jbOneClick:not(#jbOneClick_' + this.options.postfix + ')').hide();
        this.$overlay = $('#jbOneClick_overlay').fadeIn();
        $('#jbOneClick_' + this.options.postfix).find('form')[0].reset();
        element = $(this.element);
        $("#jbOneClick_" + this.options.postfix).find('input,textarea').each(function(){
            if(element.data($(this).attr('name'))){
                $(this).val(element.data($(this).attr('name')));
            }
        });
        this.$container = $("#jbOneClick_" + this.options.postfix).show();
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }

        });
    }

})(jQuery, window, document);