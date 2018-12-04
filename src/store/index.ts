import { AuctionStore } from "./AuctionStore";
import { Utxo, MarkUtxo } from "./UtxoStore";
import { TaskStore } from "./TaskStore";

export namespace store
{
    export const auction_neo = new AuctionStore("AUCTION_LIST_NEO");
    export const auction_test = new AuctionStore("AUCTION_LIST_TEST");
    export const utxo = Utxo;
    export const markutxo = MarkUtxo;
    export const taskStore = new TaskStore()
}