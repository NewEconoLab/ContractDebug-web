export default {
    language: {
        name: 'English'
    },
    navbar: {
        explorer: 'Explorer',
        wallet: 'Wallet',
        mainnet: 'MainNet',
        testnet: "TestNet",
        logout: "logout",
        blockheight: "Block Height",
        toggle: "Toggle navigation"
    },
    btn: {
        confirm: "Confirm",
        confirming: "Confirming",
        reset: "Reset",
        close: "Close",
        transfer: "Transfer",
        switch: "Switch",
        claim: "Claim",
        claiming: "Claiming",
        cancel: "Cancel",
        openauction: "Start Auction",
        openingauction: "Opening Auction",
        bid: "Place bid",
        getdomain: "Claim domain",
        recoversgas: "Reclaim CGAS",
        gettingdomain: "Claiming domain",
        recoveringsgas: "Reclaiming CGAS",
        receivedsgas: "Reclaimed",
        receivednns: "Claimed",
        newbid: "Join Auction",
        viewmore: "View more",
        edit: "Edit",
        renewal: "Renew",
        renewaling: "Renewing",
        setOwner: "Set owner",
        settingOwner: "Setting owner",
        exchange: "Exchange",
        exchanging: "Exchanging",
        withdraw: "Withdraw",
        topup: "Top up",
        getGas: "Request Gas",
        gettingGas: "Requesting Gas"
    },
    toast: {
        msg1: "Loading ...",
        msg2: "Authentication passed...",
        msg3: "Login failed. Please check your password or file",
        msg4: "Please enter the correct string"
    },
    login: {
        login: "Login",
        title: "Login your wallet",
        selectplaceholder: "Select keystore file.",
        selectbtn: "Select",
        passwordholder: "Enter password.",
        loginbtn: "Login",
        cutlinemsg: "or you can",
        wifmsg: "Import key from WIF String",
        nep2msg: "Import key from Nep2 String"
    },
    wif: {
        title: "WIF Private Key",
        wifplaceholder: "Enter your private key.",
        back: "Back"
    },
    nep2: {
        title: "Nep2",
        placeholder: "Enter your Nep2.",
        password: "Enter password."
    },
    generate: {
        generate: "Generate",
        title: "Generate a new wallet",
        name: "Name your wallet",
        password: "Enter password",
        passwordagain: "Confirm password",
        nameempty: "Wallet name cannot be empty.",
        namepass: "Verification pass.",
        pwderrmsg1: "Please enter a password of at least eight characters",
        pwderrmsg2: "Use at least one character and one number",
        pwderrmsg3: "Please enter the same password as above.",
        createmsg: "Your keystore file has been created.",
        downloadmsg: "You can click the ‘download’ button to save your keystore file!",
        download: "Download",
        msg: "Do not lose it!",
        msg2: "It can’t be reclaimed if you lose it."
    },
    balance: {
        balance: "Balance",
        title1: "NEO Balance",
        title2: "Key Address",
        title3: "GAS available to claim",
        title4: "Asset",
        title5: "Choose address",
        title6: "Select Nep6 File",
        msg1: "Sending NEO to account address…",
        msg2: "Waiting for confirmation of transfer…",
        msg3: "Claiming GAS…",
        msg4: "Your GAS claim is successful!",
        tips: "You can click this button to request 10 GAS. It can only be clicked once in 24 hours. ",
        errmsg1: "Operation failed! And You can try it again later!",
        errmsg2: "Insufficient inventory! And You can try it again later!",
        errmsg3: "Data exception！And You can try it again later!",
        successmsg: "Successful operation！Please wait for a moment."
    },
    transfer: {
        transfer: "Transfer",
        title1: "Asset",
        title2: "Address",
        title3: "Amount",
        title4: "History",
        msg1: "Your address is incorrect.",
        send: "Send",
        from: "from",
        to: "to",
        details: "Details",
        placeholder: "Please enter an address or domain name",
        msg2: "Your transaction has been sent, please check it later",
        msg3: "Transaction failure",
        msg4: "-_-!!!You don't have enough change, you have to wait for the block height to change before you can make the next transaction.",
        msg5: "available",
        waiting: "Waiting for transaction confirmation",
        errdomain: "This domain hasn't been mapped to any address",
        timeMsg: "Expiry date: ",
        netfee: "Network fee",
        sysfee: "System fee"
    },
    nns: {
        nns: "NNS",
        title1: "Register Neo Name",
        placeholder1: "enter a name",
        register: "Register",
        title2: "My Neo Name",
        msg1: "The testing has ended. Thanks for your participation. ",
        msg2: 'You will be rewarded with 50 NNCs on Mainnet for the first time you map your wallet address to an ending in ".test"  name successfully.',
        msg3: "Register your domain name and collect the reward.",
        err1: "The domain name has been registered.",
        text1: "Address resolver",
        text2: "Address mapping",
        text3: "Expiration Time",
        text4: "Expiration",
        waiting: "Try to refresh the page after the NEO block height is updated.",
        edit: "Edit",
        alerttitle: "Edit information",
        alerttitle1: "Neo Name",
        alerttitle2: "Adrress Resolver",
        alerttitle3: "Adrress Mapping",
        alertmessage1: "It is the official address resolver , you have to confirm this address resolver first to map your address.",
        alertmessage2: "Please enter the correct format of the address.",
    },
    setting: {
        settings: "Settings",
        title1: "My Wallet Address",
        title2: "My WIF",
        title3: "My Wallet file",
        msg1: "This information is very important . It may cause your loss if you lose it . ",
        msg2: "Save your keystore file and make copies of your wallet address and your WIF . Don't lose them .",
        msg3: "Set the password ",
        msg4: "Enter your password",
        msg5: "Create a wallet",
        btn1: "Visible",
        btn2: "Create",
        btn3: "download"
    },
    nnsneo: {
        auction: "Neo Name Auction",
        myneoname: "Domain Management",
        bonus: "Bonus",
        tutorial: "Tutorial"
    },
    auction: {
        title1: "Neo Name Auction",
        title2: "My Auction",
        title3: "Auction Information",
        title4: "Raise my bid",
        title5: "Timeline",
        title6: "Claim domain",
        title7: "Reclaim CGAS",
        entername: "type a name",
        checkavailable: "This name is available.",
        checkbeing: 'This domain is currently under auction. Click "Join Auction" to bid for it.',
        checkformat: "Domain names must be English characters or numbers, and can only be 6 to 32 characters in length",
        checkbuyer: "This name is unavailable.",
        sendingmsg: "We are currently opening the auction. Please wait.",
        searchmsg: "Search by domain",
        status: "Status",
        lastauctionprice: "Highest bid price",
        currentbidder: "Current bidder",
        opentime: "Bid openting time",
        fixedperiod: "Auction period",
        randomperiod: "Overtime bidding",
        ended: "Ended",
        me: "Me",
        other: "Other people",
        buyer: "Buyer",
        hammerprice: "Hammer price",
        acutiontitle: "Auction",
        domain: "Domain",
        highest: "Highest bid price",
        raisebid: "Raise my bid",
        enterbid: "Enter a raise",
        yourbidmsg: "Your cumulative bid",
        mybidmsg: "My cumulative bid ",
        mywillbid: "My cumulative bid will be",
        price: "Price: ",
        tips1: "Tip: The minimum bid increment is 0.1 CGAS. If your bid is lower than the current highest bid, your raise will be unsuccessful.",
        isAvailable: "is available",
        errmsg5: "Only",
        errmsg1: "Only",
        errmsg2: "CGAS is available.",
        errmsg4: "Please enter the right format.",
        errmsg6: "Your bid raise must not be less than 10% of the current highest bid price",
        nobalance: "You have insufficient CGAS left in your auction account. Please top it up.",
        goback: "Go back",
        waitmsg1: "Waiting for confirmation",
        waitmsg2: "Your raise will be confirmed after a new block is generated. Please wait.",
        getdomaintips: "Tip: After successfully claiming your domain, you can modify its settings in Domain Management.",
        waitgetdomain: "Your operation will be confirmed after the new block is generated. Please wait patiently...",
        fee: "Fee",
        remainingsgas: "Remaining CGAS",
        timetips1: "Tips : If nobody bids on the last day of the auction period, the auction period end time will be the end of the auction.",
        timetips2: "Tip: Once the auction moves into the overtime bidding, it may end at any time",
        timetips3: "Tips : The auction may end at any point during the overtime bidding, so it’s better to bid as early as possible.",
        bidstarttimemsg: "Bid start time",
        endtimemsg: "Auction period end time",
        randomtimemsg: "Overtime bidding start time",
        maxtimemsg: "Maximum end time of overtime bidding",
        tipsmsg1: "Tips: Before participating in an auction, you need to know the following:",
        tipsmsg2: "The asset used for auctions is CGAS. You will need CGAS in your Auction Account to place a bid.",
        tipsmsg3: 'GAS can be exchanged for CGAS at the rate of 1:1 using the CGAS Exchange page. Once you have CGAS in your wallet, you can use top-up function below to deposit CGAS into your Auction Account.',
        titleaccount: "Your Auction Account",
        withdraw: "Withdraw",
        topup: "Top up",
        from: "From: ",
        to: "To",
        topupamount: "Amount",
        withdrawamount: "Amount",
        amount: "Amount",
        asset: "Asset",
        errmsg3: "is available.",
        tipsmsg4: "Tips: When you are using Gas to recharge, before being recharged into your Auction Account, GAS will be automatically switched to CGAS. The entire process takes two blocks of confirmation time. Please wait patiently. ",
        yourbalance: "Your Balance",
        waiting: "Waiting",
        successwithdraw: "Your withdrawal request has been successfully submitted.",
        successwithdraw2: "CGAS will be refunded to your address in the next block !",
        successtop: "Successesfully toped up",
        successtopup: "Your top-up request has been successfully submitted. ",
        successtopup2: " CGAS will be in your auction account after 2 blocks are confirmed !",
        successtopup3: " CGAS will be deposited into your Auction Account in the next block.",
        failtopup: "Top up failed ! And your Gas has been exchanged into CGAS",
        fail: "Operation failed !",
        auctionopen: "Auction Opened",
        domainname: "Domain name",
        successbid: "Raise succesful!",
        failbid: "Raise failed!",
        failbid2: "Its auction has ended. Your raise is not executed.",
        successbid1: "Your bid of ",
        successbid2: " CGAS has been sent to the blockchain for confirmation.",
        successgetdomain: "Domain acquired",
        failgetdomain: "Please click again to acquire domain",
        tips: "Tips: ",
        statustips: "The auction period is the first stage of the auction and its duration is 3 days, during which all bids are valid. An overtime bidding of up to 2 days will be triggered when someone bids on the last day of the auction period. Otherwise the auction ends at the end of the auction period.",
        statustips2: "The overtime bidding is the second stage of the auction. Its maximum duration is 2 days. During this period, any bid may trigger the end of the bidding of this domain and the bid will be invalid. The latter one bids, the more likely it triggers the end of the bidding. So it's advised to place a bid as early as possible to avoid missing this domain. ",
        teststatustips: "The auction period is the first stage of the auction and its duration is 15 minutes, during which all bids are valid. An overtime bidding of up to 10 minutes will be triggered when someone bids on the last day of the auction period. Otherwise the auction ends at the end of the auction period.",
        teststatustips2: "The overtime bidding is the second stage of the auction. Its maximum duration is 10 minutes. During this period, any bid may trigger the end of the bidding of this domain and the bid will be invalid. The latter one bids, the more likely it triggers the end of the bidding. So it's advised to place a bid as early as possible to avoid missing this domain.",
        toptips: "Tips: When the system prompts you have successfully submited your CGAS top up transaction. It will be confirmed and added to your Auction Account in the next block. Please be patient.",
        withdrawtips: "Tips: When the system prompts you have successfully submited your CGAS withdrawal transaction. It will be confirmed and added to your wallet in the next block. Please be patient.",
        getall: "Max",
        nodata: "No related data was found."
    },
    exchange: {
        title: "CGAS Exchange",
        tosgas: "Exchange Gas for CGAS",
        togas: "Exchange CGAS for Gas",
        tips: "Tips：CGAS is a NEP5 token，which is bound with NEO’s GAS at the ratio of 1:1 and they can be converted with each other freely. The exchange needs to be confirmed after one block. Please be patient. ",
        spend: "Amount you will spend : ",
        receive: "Amount you will receive : ",
        warnmsg: "Insufficient balance.",
        waittitle: "Waiting for transaction records",
        balance: "Balance",
        amount: "Amount"
    },
    myneoname: {
        title: "My Neo Name",
        resolver: "Address Resolver",
        mapping: "Address Mapping",
        time: "Expiration Time",
        expiring: "Expiring soon",
        edittitle: "Edit information",
        neoname: "Neo Name",
        owner: "Owner Address",
        notconfigure: "not configured",
        expired: "Expired",
        tips: "Tips : Address mapping can only be performed after the address resolver is confirmed by you. "
    },
    bonus: {
        title: "Bouns History",
        mydividend: "My dividends: ",
        distribution: "Distribution pool snapshot: ",
        mytotal: "My total NNC holdings: ",
        snapshot: "Snapshot time:"
    },
    tutorial: {

    },
    operation: {
        welcome: "Welcome!",
        title: "Operation record",
        tips: "These records will be erased when you log out or close the page.",
        waiting: "Confirmation pending...",
        txid: "TXID:",
        transfer: "Transfer to",
        openauction: "Start Auction",
        raisebid: "Raise bid",
        exchange: "CGAS exchange",
        topup: "Top up",
        withdraw: "Withdraw",
        requestgas: "Request Gas",
        editdomain: "Edit domain",
        addrmapping: "Address mapping:",
        addrresolver: "Address resolver:",
        renew: "Renewal expiration time",
        getdomain: "Claim domain",
        recover: "Reclaim CGAS",
        gasclaim: "Gas claim",
        nodata: "There is no data",
        fail: "Operation failed",
        waitinggas: "Waiting for system confirmation",
        sentok: "System sent"
    },
    notify: {
        utxo: "Your UTXO is too scattered, which may cause the CGAS conversion to fail (GAS will also be lost). Please transfer some GAS( the amount shall be no less than your conversion amount) to your own address first and then convert GAS into CGAS after the transfer operation is confirmed.",
        fee: "Note: When there is enough GAS in your wallet, we will automatically add a fee to ensure your operation will be confirmed fast. "
    }
}