export class PowerComponentSingle {
    constructor(private tag: string,private props: JSON) {}
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
}

export class TextNode {
    constructor(private text: string) {}
    html()
    {
        return this.text;
    }
}

export class PowerComponentClose {
    constructor(private tag: string,private props: JSON) 
    {
        
    }

    html()
    {
        var html = `<${this.tag} `;
        
        for (let prop in this.props) {
            if(typeof this.props[prop] == typeof "")
                html += `${prop}="${this.props[prop]}" `
            else
                try {
                    html += ">"+this.props[prop].html()
                } catch {
                    throw Error("You messed up!! It should be either a string or a PowerComponent");
                }
        }

        html += `</${this.tag}>`;
        return html;
    }
}