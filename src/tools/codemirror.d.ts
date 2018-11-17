declare namespace CodeMirror
{
    function fromTextArea(text: HTMLElement, config:
        {
            lineNumbers: boolean;
            matchBrackets: boolean,
            mode: string
        }
    );
}