var teacherIn = new Vue({
    el:"#teacherIn",
    data:{
        num:"0",
        personIn:[
            {id:"Jinx",sex:"女",age:"17",date:"2020年1月1日",research:"电子商务"},
            {id:"Corki",sex:"男",age:"30",date:"2020年1月2日",research:"电子商务"},
            {id:"Ashe",sex:"女",age:"19",date:"2020年1月3日",research:"电子商务"},
            {id:"Janna",sex:"女",age:"24",date:"2020年5月1日",research:"电子商务"},
            {id:"MissFortune",sex:"女",age:"18",date:"2019年1月1日",research:"电子商务"},
        ],
        
        article:[
            {name:"金刚般若波罗蜜经",content:"如是我闻，一时，佛在舍卫国祗树给孤独园，与大比丘众千二百五十人俱。尔时，世尊食时，著衣持钵，入舍卫大城乞食。于其城中，次第乞已，还至本处。饭食讫，收衣钵，洗足已，敷座而坐。"},
            {name:"心经",content:"观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界，无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。以无所得故。菩提萨埵，依般若波罗蜜多故，心无挂碍。无挂碍故，无有恐怖，远离颠倒梦想，究竟涅盘。三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。"},           
            {name:"无量寿经",content:"我闻如是，一时，佛住王舍城，耆阇崛山中。与大比丘众万二千人俱，一切大圣，神通已达。其名曰，尊者了本际，尊者正愿，尊者正语，尊者大号，尊者仁贤，尊者离垢，尊者名闻，尊者善实，尊者具足,尊者牛王,尊者优楼频螺迦叶,尊者伽耶迦叶,尊者那提迦叶,尊者摩诃迦叶,尊者舍利弗,尊者大目犍连,尊者劫宾那,尊者大住,尊者大净志,尊者摩诃周那,尊者满愿子,尊者离障，尊者流灌，尊者坚伏，尊者面王，尊者异乘，尊者仁性，尊者嘉乐，尊者善来，尊者罗云，尊者阿难，皆如斯等上首者也。又与大乘众菩萨俱，普贤菩萨，妙德菩萨，慈氏菩萨等，此贤劫中一切菩萨。又贤护等十六正士，善思议菩萨，信慧菩萨，空无菩萨，神通华菩萨，光英菩萨，慧上菩萨，智幢菩萨，寂根菩萨，愿慧菩萨，香象菩萨，宝英菩萨，中住菩萨，制行菩萨，解脱菩萨，皆遵普贤大士之德，具诸菩萨无量行愿，安住一切功德之法。游步十方，行权方便。入佛法藏，究竟彼岸。于无量世界，现成等觉。处兜率天，弘宣正法。"},
        ],
    },
    methods:{
        change:function(k){
            this.num = k;
        }
    }
})