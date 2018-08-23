var fortuneCookies[
"valor a",
    "valorb",
    "valor c",
];

exports.getFortune= function(){
var idx= Math.floor(Math,random() * fortuneCookies.length);
    return fortuneCookies[idx];
};
