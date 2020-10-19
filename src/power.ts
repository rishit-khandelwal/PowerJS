export class PowerComponentSingle {
    private state;
    constructor(private tag: string,private props: JSON)
    {
        this.state = {};
    }
    html()
    {
        var html: string = `<${this.tag} `;
        for (let prop in this.props) {
            if(typeof this.props[prop] == typeof "")
                html += `${prop}="${this.props[prop]}" `
            else
                html += `${prop}=${this.props[prop]} `
        }
        html += ">"
        return html;
    }

    setState(key: string, val: any)
    {
        this.state[key] = val;
    }
}

export function Conditional(tag, filter: PowerComponentClose) // "like: state.like"
{
    var final = filter.text().replace(`state.${tag}`,filter.getState(tag));
    filter.setProp('text', [
        new TextNode(final)
    ]);
    return final;
}

export function ConditionalMap(filter: PowerComponentClose)
{
    for (var tag in filter.getStates())
    {
        Conditional(tag,filter);
    }
}
export class TextNode {
    constructor(private text: string) {}
    html()
    {
        return this.text;
    }
}

export class PowerComponentClose {
    private state: JSON;
    constructor(private tag: string,private props: JSON) 
    {
        this.state = JSON.parse("{}");
    }

    text(): string
    {
        var text: string = "";
        for (const Node of this.props["text"]) {
            text += Node.html()
        }
        return text;
    }

    html(): string
    {
        var html: string = `<${this.tag} `;
        
        for (let prop in this.props) {
            if(prop != "text") {
                html += `${prop}="${this.props[prop]}" `
            }
            else {
                html += ">"
                for (const Node of this.props["text"]) {
                    html += Node.html()
                }
            }
        }
 
        html += `</${this.tag}>`;
        return html;
    }

    getProp(key: string)
    {
        return this.props[key];
    }

    setState(key: string, val: any)
    {
        this.state[key] = val;
    }

    getState(key: string)
    {
        return this.state[key];
    }

    getStates()
    {
        return this.state
    }
    
    setProp(x: string, val: any)
    {
        this.props[x] = val
    }

    setText(val: TextNode[])
    {
        this.props["text"] = val
    }
}