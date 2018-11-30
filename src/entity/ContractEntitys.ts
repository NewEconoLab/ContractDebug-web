export interface ContractDeployInfo
{
    address: string;
    scripthash: string;
    name: string;
    version: string;
    author: string;
    email: string;
    desc: string;
    acceptablePayment: any;
    createStorage: any;
    dynamicCall: any;
    txid: string;
    createTime: string;
    lastUpdateTime: string
}

export class ContractResult
{
    gas_consumed: string;
    script: string;
    stack: any[];
    stackstr: string;
    state: string;
    pares(data: any)
    {
        this.gas_consumed = data[ "gas_consumed" ]
        this.script = data[ "script" ];
        this.stack = data[ "stack" ];
        this.stackstr = JSON.stringify(this.stack);
        this.stack = data[ "stack" ];
    }
}