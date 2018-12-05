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
                        li.onclick = () =>
                        {
                            valueDiv.textContent = tree.href;
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