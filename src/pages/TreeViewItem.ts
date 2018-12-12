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
        if (data.items.length > 0)
        {
            for (const tree of data.items)
            {
                if (tree.items.length > 0)
                {
                    let li = document.createElement("li");
                    let ul = document.createElement("ul");
                    li.textContent = tree.title + ":";
                    li.appendChild(ul)
                    pater.appendChild(li);
                    this.showTree(ul, tree, valueDiv);
                }
                else
                {
                    let li = document.createElement("li")
                    li.textContent = tree.value ? tree.title + ":" + tree.value : tree.title;
                    pater.appendChild(li);
                    if (tree.title === "ByteArray" && tree.value)
                    {
                        let value = document.createElement("ul");
                        value.textContent = tree.value;
                        let bts = tree.value.hexToBytes();
                        let asstr = document.createElement("li");
                        let str = ""
                        try
                        {
                            str = ThinNeo.Helper.Bytes2String(bts);
                        } catch (error)
                        {
                            str = "不可转换 utf8字符串"
                        }
                        asstr.textContent = "asStr : " + str;
                        value.appendChild(asstr);
                        if (tree.value.length <= 8)
                        {
                            let num = Neo.BigInteger.fromUint8Array(bts);
                            let asnum = document.createElement("li");
                            asnum.textContent = "asNum : " + num.toString();
                            value.appendChild(asnum);
                        }
                        if (tree.value.length == 40)
                        {
                            let addr = ThinNeo.Helper.GetAddressFromScriptHash(bts);
                            let asaddr = document.createElement("li");
                            asaddr.textContent = "asAddr : " + addr;
                            value.appendChild(asaddr);
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
    value: string;
    items: TreeView[];
    constructor(title: string, value?: string)
    {
        this.title = title;
        this.value = value;
        this.items = [];
    }
    addChildren(treenode: TreeView)
    {
        this.items.push(treenode);
    }
}