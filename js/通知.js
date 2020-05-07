var notice = new Vue({
    el:"#notice",
    data:{
        num:"1",
        notices:[
            {name:"notice1",date:"2020年5月1日 01：10",content:"打工是不可能打工的 这辈子不可能打工的"},
            {name:"notice2",date:"2020年5月1日 02：10",content:"做生意又不会做"},
            {name:"notice3",date:"2020年5月1日 03：10",content:"就是偷这种东西度"},
            {name:"notice4",date:"2020年5月1日 04：10",content:"才能维持得了生活这样子"},
            {name:"notice5",date:"2020年5月1日 05：10",content:"进看守所的感觉答像回家一样"},
            {name:"notice6",date:"2020年5月1日 06：10",content:"在看守所里面的感觉"},
            {name:"notice7",date:"2020年5月1日 07：10",content:"比家里面感觉好多了"},
            {name:"notice8",date:"2020年5月1日 08：10",content:"在家里面一个人很无聊"},
            {name:"notice9",date:"2020年5月1日 09：10",content:"都没有朋友，女朋友玩 "},
            {name:"notice10",date:"2020年5月1日 10：10",content:"进了里面去个个都是人才"},
            {name:"notice11",date:"2020年5月1日 11：10",content:"说话又好听"},
            {name:"notice12",date:"2020年5月1日 12：10",content:"超 喜欢在里面"},
        ],
        messages:[
            {name:"jinx",date:"2020年5月2日 01：30",content:"无论遇到什么困难都不要怕"},
            {name:"jinx",date:"2020年5月2日 02：10",content:"微笑着面对着它"},
            {name:"jinx",date:"2020年5月2日 03：30",content:"消除恐惧的最好办法"},
            {name:"jinx",date:"2020年5月2日 04：10",content:"那就是面对恐惧"},
            {name:"jinx",date:"2020年5月2日 05：30",content:"坚持才是胜利"},
            {name:"jinx",date:"2020年5月2日 06：10",content:"加油!"},
            {name:"jinx",date:"2020年5月2日 07：30",content:"奥力给！"},
        ]
    },
    methods:{
        checked:function(k){
            this.num = k;
        },
    }
})