"use strict";
exports.__esModule = true;
exports.PowerComponentClose = exports.TextNode = exports.Conditional = exports.PowerComponentSingle = void 0;
var PowerComponentSingle = /** @class */ (function () {
    function PowerComponentSingle(tag, props) {
        this.tag = tag;
        this.props = props;
        this.state = {};
    }
    PowerComponentSingle.prototype.html = function () {
        var html = "<" + this.tag + " ";
        for (var prop in this.props) {
            if (typeof this.props[prop] == typeof "")
                html += prop + "=\"" + this.props[prop] + "\" ";
            else
                html += prop + "=" + this.props[prop] + " ";
        }
        html += ">";
        return html;
    };
    PowerComponentSingle.prototype.setState = function (key, val) {
        this.state[key] = val;
    };
    return PowerComponentSingle;
}());
exports.PowerComponentSingle = PowerComponentSingle;
function Conditional(tag, filter) {
    var final = filter.text().replace("state." + tag, filter.getState(tag));
    filter.setProp('text', [
        new TextNode(final)
    ]);
    return final;
}
exports.Conditional = Conditional;
var TextNode = /** @class */ (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.html = function () {
        return this.text;
    };
    return TextNode;
}());
exports.TextNode = TextNode;
var PowerComponentClose = /** @class */ (function () {
    function PowerComponentClose(tag, props) {
        this.tag = tag;
        this.props = props;
        this.state = {};
    }
    PowerComponentClose.prototype.text = function () {
        var text = "";
        for (var _i = 0, _a = this.props["text"]; _i < _a.length; _i++) {
            var Node_1 = _a[_i];
            text += Node_1.html();
        }
        return text;
    };
    PowerComponentClose.prototype.html = function () {
        var html = "<" + this.tag + " ";
        for (var prop in this.props) {
            if (prop != "text") {
                html += prop + "=\"" + this.props[prop] + "\" ";
            }
            else {
                html += ">";
                for (var _i = 0, _a = this.props["text"]; _i < _a.length; _i++) {
                    var Node_2 = _a[_i];
                    html += Node_2.html();
                }
            }
        }
        html += "</" + this.tag + ">";
        return html;
    };
    PowerComponentClose.prototype.getProp = function (key) {
        return this.props[key];
    };
    PowerComponentClose.prototype.setState = function (key, val) {
        this.state[key] = val;
    };
    PowerComponentClose.prototype.getState = function (key) {
        return this.state[key];
    };
    PowerComponentClose.prototype.setProp = function (x, val) {
        this.props[x] = val;
    };
    PowerComponentClose.prototype.setText = function (val) {
        this.props["text"] = val;
    };
    return PowerComponentClose;
}());
exports.PowerComponentClose = PowerComponentClose;
