(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b38adf4"],{"4d5b":function(e,t,n){"use strict";n("87ee")},"87ee":function(e,t,n){},b4dd:function(e){e.exports=JSON.parse('{"address":"0xF919d71135736E8829AA36cc797bB505D7a83537","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"depostValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"burnamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"power","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"TakeReward","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DELEGATE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenConfigOf","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"radio","type":"uint256"},{"internalType":"uint256","name":"minValueOnce","type":"uint256"},{"internalType":"bool","name":"burnOrDead","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfoOf","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"taked","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_epoch","type":"address"},{"internalType":"address","name":"_dFarm","type":"address"},{"internalType":"address","name":"_usdtReceiver","type":"address"},{"internalType":"address","name":"_panckRouter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdtReceiver","type":"address"}],"name":"setUsdtReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dFarm","type":"address"}],"name":"setDFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"radio","type":"uint256"},{"internalType":"uint256","name":"minValueOnce","type":"uint256"},{"internalType":"bool","name":"burnOrDead","type":"bool"}],"name":"setTokenConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"removeTokenConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getPowerByUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ido","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"afterSell","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},de77:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set-token-config"},[n("div",{staticClass:"box"},[n("span",[e._v("代币地址")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{type:"text"},domProps:{value:e.token},on:{change:e.changeToken,input:function(t){t.target.composing||(e.token=t.target.value)}}})]),n("span",[e._v("pancake占比")]),n("div",{staticClass:"input-container input-append"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.radio,expression:"radio"}],attrs:{type:"number"},domProps:{value:e.radio},on:{input:function(t){t.target.composing||(e.radio=t.target.value)}}}),n("span",[e._v("%")])]),n("span",[e._v("算力挖矿最小投入")]),n("div",{staticClass:"input-container input-append"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.minValueOnce,expression:"minValueOnce"}],attrs:{type:"number"},domProps:{value:e.minValueOnce},on:{input:function(t){t.target.composing||(e.minValueOnce=t.target.value)}}}),n("span",[e._v(e._s(e.symbol))])]),n("van-button",{on:{click:e.setTokenConfig}},[e._v("确认")])],1)])},s=[],i=(n("b0c0"),n("e7e5"),n("d399")),u=(n("96cf"),n("1da1")),p=n("ade3"),r=(n("66b9"),n("b650")),y=n("b9cc"),d=n("b4dd"),o=n("fc1b"),l={components:Object(p["a"])({},r["a"].name,r["a"]),data:function(){return{token:o.address,radio:"",minValueOnce:"",burnOrDead:"是",showBurnOrDead:!1,symbol:""}},created:function(){},methods:{selectBurnOrDead:function(e){this.burnOrDead=e,this.showBurnOrDead=!1},changeToken:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$web3.utils.isAddress(e.token)){t.next=2;break}return t.abrupt("return",i["a"].fail("不是一个地址"));case 2:return n=new e.$web3.eth.Contract(y,e.token),t.prev=3,t.next=6,n.methods.symbol().call();case 6:e.symbol=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](3),t.abrupt("return",i["a"].fail("不是一个代币地址"));case 12:case"end":return t.stop()}}),t,null,[[3,9]])})))()},setTokenConfig:function(){var e=this;if(0===this.token.length)return i["a"].fail("请输入代币地址");if(0===this.radio.length)return i["a"].fail("请输入投入代币占比");if(0===this.minValueOnce.length)return i["a"].fail("请输入单次投入最小总价值");if(0===this.burnOrDead.length)return i["a"].fail("请选择是否可以函数销毁");if(!this.$web3.utils.isAddress(this.token))return i["a"].fail("不是一个地址");if(this.radio>90)return i["a"].fail("投入代币占比不能超过90%");var t=new this.$web3.eth.Contract(d.abi,d.address),n=t.methods.setTokenConfig(this.token,this.radio.toWei(10),this.minValueOnce.toWei(),"是"===this.burnOrDead);n.call({from:this.$address},(function(t,a){t||n.send({from:e.$address}).on("transactionHash",(function(e){i["a"].loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(t){i["a"].clear(),e.token="",e.radio="",e.minValueOnce="",e.burnOrDead="",e.symbol="",i["a"].success("添加资产代币成功")})).on("error",(function(e){i["a"].clear(),i["a"].fail("交易失败")}))}))}}},m=l,c=m,b=(n("4d5b"),n("2877")),T=Object(b["a"])(c,a,s,!1,null,"86b573b8",null);t["default"]=T.exports},fc1b:function(e){e.exports=JSON.parse('{"address":"0x07DC22cA65C1d44094FaBeDaF181Ec4FA5A73758","abi":[{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"bool","name":"addOrRemove","type":"bool"}],"name":"Blocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"bool","name":"addOrRemove","type":"bool"}],"name":"Guarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"buyPreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlockedOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isGuardedOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isPairsOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellBurnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"sellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"sellPreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"addPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"removePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sellBurnFee","type":"uint256"}],"name":"setSellBurnFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sellFee","type":"uint256"}],"name":"setSellFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyFee","type":"uint256"}],"name":"setBuyFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyPreAddress","type":"address"}],"name":"setBuyPreAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sellPreAddress","type":"address"}],"name":"setSellPreAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addGuarded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeGuarded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addBlocked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeBlocked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"clim","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);