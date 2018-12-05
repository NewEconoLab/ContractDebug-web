export class TreeViewItems
{
    div: HTMLDivElement;
    ul: HTMLUListElement;
    constructor(div: HTMLDivElement)
    {
        this.div = div;
        this.ul = document.createElement("ul");
        this.div.appendChild(this.ul);
    }

    paresJson()
    {

    }

    showTree(pater: HTMLUListElement, data: TreeView, valueDiv: HTMLDivElement)
    {
        // let pater = document.createElement("li");
        // pater.textContent = data.title;
        // paterul.appendChild(pater);
        pater.textContent = data.title;
        if (data.items.length > 0)
        {
            for (const tree of data.items)
            {
                if (tree.items.length > 0)
                {
                    let ul = document.createElement("ul");
                    pater.appendChild(ul);
                    this.showTree(ul, tree, valueDiv);
                }
                else
                {
                    let li = document.createElement("li")
                    li.textContent = tree.title;
                    pater.appendChild(li);
                    if (tree.href)
                    {
                        let value = document.createElement("ul");
                        value.textContent = tree.href;
                        let bts = tree.href.hexToBytes();
                        let asstr = document.createElement("li");
                        let str = ThinNeo.Helper.Bytes2String(bts);
                        asstr.textContent = "asStr : " + str;
                        value.appendChild(asstr);
                        if (tree.href.length <= 8)
                        {
                            let num = Neo.BigInteger.fromUint8Array(bts);
                            let asnum = document.createElement("li");
                            asnum.textContent = "asNum : " + num.toString();
                            value.appendChild(asnum);
                        }
                        li.onclick = () =>
                        {
                            while (valueDiv.hasChildNodes()) //当div下还存在子节点时 循环继续
                            {
                                valueDiv.removeChild(valueDiv.firstChild);
                            }
                            valueDiv.appendChild(value)
                        }
                    }
                }
            }
        }
    }

}

export class TreeView
{
    title: string;
    items: TreeView[];
    href: string;
    constructor(title: string)
    {
        this.title = title;
        this.items = [];
    }
    addChildren(treenode: TreeView)
    {
        this.items.push(treenode);
    }
}