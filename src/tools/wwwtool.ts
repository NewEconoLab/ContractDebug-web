
export class WWW
{
    static api: string = "https://api.nel.group/api/testnet";
    static apiaggr: string = "https://apiwallet.nel.group/api/testnet";
    // static apicontract: string = "http://121.43.170.160:1189/api/testnet";
    static apicontract: string = "https://apidebug.nel.group/api/testnet";
    static apioss: string = "https://online-debug-data.oss-cn-hangzhou.aliyuncs.com";
    static makeRpcUrl(url: string, method: string, ..._params: any[])
    {
        var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
        for (var i = 0; i < _params.length; i++)
        {
            urlout += JSON.stringify(_params[ i ]);
            if (i != _params.length - 1)
                urlout += ",";
        }
        urlout += "]";
        return urlout;
    }
    static makeRpcPostBody(method: string, ..._params: any[]): {}
    {
        var body = {};
        body[ "jsonrpc" ] = "2.0";
        body[ "id" ] = 1;
        body[ "method" ] = method;
        var params = [];
        for (var i = 0; i < _params.length; i++)
        {
            params.push(_params[ i ]);
        }
        body[ "params" ] = params;
        return body;
    }

    static async  api_getHeight()
    {
        var str = WWW.makeRpcUrl(WWW.api, "getblockcount");
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        var height = parseInt(r[ 0 ][ "blockcount" ] as string) - 1;
        return height;
    }
    static async api_getBlockInfo(index: number)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getblocktime", index);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        var time = parseInt(r[ 0 ][ "time" ] as string);
        return time;
    }
    static async api_getAllAssets()
    {
        var str = WWW.makeRpcUrl(WWW.api, "getallasset");
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        return r;
    }
    static async api_getUTXO(address: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getutxo", address);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        return r;
    }
    static async api_getnep5Balance(address: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getallnep5assetofaddress", address, 1);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        return r;
    }
    static async api_getBalance(address: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getbalance", address);
        var value = await fetch(str, { "method": "get" });
        var json = await value.json();
        var r = json[ "result" ];
        return r;
    }

    static async getUtxoBalance(address: string, asset: string)
    {
        var str = WWW.makeRpcUrl(WWW.apicontract, "getUtxoBalance", address, asset);
        var value = await fetch(str, { "method": "get" });
        var json = await value.json();
        var r = json[ "result" ];
        return r ? r[ 0 ][ 'balance' ] : 0;
    }

    static async claimGas(address: string, num: number)
    {
        var str = WWW.makeRpcUrl(WWW.apicontract, "claimgas", address, num);
        var value = await fetch(str, { "method": "get" });
        var json = await value.json();
        var r = json[ "result" ];
        return r;
    }

    static async hasClaimGas(address)
    {
        var str = WWW.makeRpcUrl(WWW.apicontract, "hasclaimgas", address);
        var value = await fetch(str, { "method": "get" });
        var json = await value.json();
        var r = json[ "result" ];
        if (r)
            return r[ 0 ];
        else
            throw new Error("Request failure")
    }
    /**
     * @method 获得nep5资产信息
     * @param asset 资产id
     */
    static async getNep5Asset(asset: string)
    {
        var postdata = WWW.makeRpcPostBody("getnep5asset", asset);
        var result = await fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 跟地址获取nep资产id对应的余额
     * @param asset 资产id
     * @param address 地址
     */
    static async getnep5balanceofaddress(asset: string, address: string)
    {
        var postdata = WWW.makeRpcPostBody("getnep5balanceofaddress", asset, address);
        var result = await fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    static async api_getAddressTxs(address: string, size: number, page: number)
    {
        var postdata = WWW.makeRpcPostBody("getaddresstxs", address, size, page);
        var result = await fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ];
        return r;
    }

    static async api_postRawTransaction(data: Uint8Array): Promise<any>
    {
        var postdata = WWW.makeRpcPostBody("sendrawtransaction", data.toHexString());
        var result = await fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ][ 0 ];
            return r;
        } else
        {
            throw json[ 'error' ];
        }
    }

    static async api_getclaimgas(address: string, type: number)
    {
        if (type)
            var str = WWW.makeRpcUrl(WWW.api, "getclaimgas", address, type);
        else
            var str = WWW.makeRpcUrl(WWW.api, "getclaimgas", address);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        if (r == undefined)
            return 0;
        return r[ 0 ];
    }

    static async api_getclaimtxhex(address: string): Promise<string>
    {
        var str = WWW.makeRpcUrl(WWW.api, "getclaimtxhex", address);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        if (r == undefined)
            return "";
        return r[ 0 ][ "claimtxhex" ];
    }

    static async  rpc_getHeight()
    {
        var str = WWW.makeRpcUrl(WWW.api, "getblockcount");
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        var r = json[ "result" ];
        var height = parseInt(r as string) - 1;
        return height;
    }

    static async  rpc_getStorage(scripthash: Uint8Array, key: Uint8Array): Promise<string>
    {
        var str = WWW.makeRpcUrl(WWW.api, "getstorage", scripthash.toHexString(), key.toHexString());
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        if (json[ "result" ] == null)
            return null;
        var r = json[ "result" ] as string;
        return r;
    }

    static async rpc_getInvokescript(scripthash: Uint8Array): Promise<any>
    {
        var str = WWW.makeRpcUrl(WWW.api, "invokescript", scripthash.toHexString());
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        if (json[ "result" ] == null)
            return null;
        var r = json[ "result" ][ 0 ]
        return r;
    }
    static async getrawtransaction(txid: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getrawtransaction", txid);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        if (!json[ "result" ])
            return null;
        var r = json[ "result" ][ 0 ]
        return r;
    }
    //获取nep5的交易详情
    static async getnep5transferbytxid(txid: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getnep5transferbytxid", txid);
        var result = await fetch(str, { "method": "get" });
        var json = await result.json();
        if (!json[ "result" ])
            return null;
        var r = json[ "result" ][ 0 ]
        return r;
    }
    /**
     * 发送合约调用
     * @param scriptaddr 合约参数脚本
     */
    static async api_getcontractstate(scriptaddr: string)
    {
        var str = WWW.makeRpcUrl(WWW.api, "getcontractstate", scriptaddr);
        var value = await fetch(str, { "method": "get" });
        var json = await value.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 两笔交易提交给服务器发送
     * @param data1 第一笔交易数据
     * @param data2 第二笔交易数据
     */
    static async rechargeandtransfer(data1: Uint8Array, data2: Uint8Array)
    {
        var postdata = WWW.makeRpcPostBody("rechargeandtransfer", data1.toHexString(), data2.toHexString());
        var result = await fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 查询合约调用状态
     * @param txid 交易id
     */
    static async getrechargeandtransfer(txid: string)
    {
        var postdata = WWW.makeRpcPostBody("getrechargeandtransfer", txid);
        var result = await fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 获得交易对应的notify
     * @param txid 
     */
    static async getNotify(txid: string)
    {
        var postdata = WWW.makeRpcPostBody("getnotify", txid);
        var result = await fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 查询交易的状态
     * @param txid 
     */
    static async hastx(txid: string)
    {
        var postdata = WWW.makeRpcPostBody("hastx", txid);
        var result = await fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }

    /**
     * 查询交易对应notify的方法名
     * @param txid 
     */
    static async hascontract(txid: string)
    {
        var postdata = WWW.makeRpcPostBody("hascontract", txid);
        var result = await fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ][ 0 ];
        return r;
    }


    /**
     * 
     * @param hash 
     * @param address 
     * @param {string} type cs|avm|abi|map
     */
    static async getContractCodeByHash(hash: string, address: string)
    {
        var postdata = WWW.makeRpcPostBody("getContractCodeByHash", address, hash);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ][ 0 ];
            return r;
        } else
        {
            throw "not data";
        }
    }

    static async getContractDeployInfoByHash(hash: string)
    {
        var postdata = WWW.makeRpcPostBody("getContractDeployInfoByHash", hash);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        var r = json[ "result" ] ? json[ "result" ][ 0 ] : undefined;
        return r;
    }

    /**编译合约代码 */
    static async compileContractFile(address: string, code: string)
    {
        var postdata = WWW.makeRpcPostBody("compileContractFile", address, code);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ][ 0 ];
            return r;
        } else
        {
            throw "not data";

        }
    }

    static async storageContractFile(...params)
    {
        var postdata = WWW.makeRpcPostBody("storageContractFile", ...params);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ][ 0 ];
            return r;
        } else
        {
            throw "not data";
        }
    }

    /**
     * 调用合约并提交
     * @param {string} address 地址
     * @param {string} txhex 交易体
     */
    static async setTxCallContract(address: string, txhex: string)
    {
        var postdata = WWW.makeRpcPostBody("txCallContract", address, txhex);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ][ 0 ];
            return r;
        } else
        {
            throw "not data";
        }
    }

    /**
     * 用地址查询合约调用的交易记录
     * @param {string} address 地址
     */
    static async getTxCallContract(address: string)
    {
        var postdata = WWW.makeRpcPostBody("getTxCallContract", address);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ];
            return r;
        } else
        {
            throw "not data";
        }
    }
    /**
     * 用地址查询合约调用的交易记录
     * @param {string} address 地址
     */
    static async getDumpInfoByTxid(txid: string)
    {
        var postdata = WWW.makeRpcPostBody("getDumpInfoByTxid", txid);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();

        var r = json[ "result" ] ? json[ "result" ][ 0 ] : undefined;
        return r;
    }

    static async getContractRemarkByAddress(address: string)
    {
        var postdata = WWW.makeRpcPostBody("getContractRemarkByAddress", address);
        var result = await fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) });
        var json = await result.json();
        if (json[ "result" ])
        {
            var r = json[ "result" ];
            return r;
        } else
        {
            throw "not data";
        }
    }

    static async readOssFile(name: string, filename: string, temp: boolean)
    {
        var str = WWW.apioss + "/" + (temp ? "_temp" : "") + name + "." + filename;
        var result = await fetch(str, { "method": "get" });
        console.log(result);

        var text = await result.text();
        console.log(text);

        return text;
    }
}