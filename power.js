"use strict";
exports.__esModule = true;
exports.PowerComponentClose = exports.TextNode = exports.PowerComponentSingle = void 0;
var PowerComponentSingle = /** @class */ (function () {
    function PowerComponentSingle(tag, props) {
        this.tag = tag;
        this.props = props;
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
    return PowerComponentSingle;
}());
exports.PowerComponentSingle = PowerComponentSingle;
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
    }
    PowerComponentClose.prototype.html = function () {
        var html = "<" + this.tag + " ";
        for (var prop in this.props) {
            if (typeof this.props[prop] == typeof "")
                html += prop + "=\"" + this.props[prop] + "\" ";
            else
                try {
                    html += ">" + this.props[prop].html();
                }
                catch (_a) {
                    throw Error("You messed up!! It should be either a string or a PowerComponent");
                }
        }
        html += "</" + this.tag + ">";
        return html;
    };
    return PowerComponentClose;
}());
exports.PowerComponentClose = PowerComponentClose;
