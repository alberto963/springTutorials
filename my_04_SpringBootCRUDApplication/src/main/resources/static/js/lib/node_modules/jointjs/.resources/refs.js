attrs: {
    rect: {
        fill: 'red',
        refAttrs: {
            'rx': { type: 'refWidth' args: { ratio: '100%' }},
            'ry': { type: 'refHeight' args: { ratio: '100%' }},
            'fill': { type: 'value', args: { path: 'color' }}
        }
    }
}

joint.dia.refAttrs = {

    relative: function() {


    },

    refWidth: function(opt, elementView) {
        return elementView.model.get('size').width * opt.ratio;
    },

    value: function(opt, elementView) {
        return elementView.model.prop(opt.path);
    }


},

joint.dia.specialAttributes = {
    filter: {
        qualify: _.isObject,
        exec: function($selected, filter) {
            this.applyFilter($selected, filter);            
        }
    },
    fill: {
        qualify: _.isObject,
        exec: function($selected, fill) {
            this.applyGradient($selected, 'fill', fill);
        }
    },
    stroke: {
        qualify: _.isObject,
        exec: function($selected, fill) {
            this.applyGradient($selected, 'stroke', fill);
        }        
    },
    text: {
        exec: function($selected, text, attrs) {
            $selected.each(function() {

                if (!_.isUndefined(attrs.x)) {
                    V(this).attr('x', attrs.x);
                    specialAttributes.push('x');
                }

                if (!_.isUndefined(attrs.y)) {
                    V(this).attr('y', attrs.y);
                    specialAttributes.push('y');
                }

                V(this).text(attrs.text + '', {
                    lineHeight: attrs.lineHeight,
                    textPath: attrs.textPath,
                    annotations: attrs.annotations
                });
            });
        }        
    },
    lineHeight: {
        qualify: function(lh, attrs) {
            return _.isUndefined(attrs.text);
        }
    },
    textPath: {
        qualify: function(tp, attrs) {
            return _.isUndefined(attrs.text);
        }
    },
    annotations: {
        qualify: function(a, attrs) {
            return _.isUndefined(attrs.text);
        }
    },

    // `port` attribute contains the `id` of the port that the underlying magnet represents.
    port: {
        exec: function($els, port) {
            $el.attr('port', _.isUndefined(attrs.port.id) ? attrs.port : attrs.port.id);
        }        
    },

    // `style` attribute is special in the sense that it sets the CSS style of the subelement.    
    style: {
        qualify: _.isObject,
        exec: function($els, styles) {
            $els.css(styles);
        }
    },

    html: {
        exec: function($els, html) {
            $els.html(attrs.html + '');
        }
    }
}
