var feedBack = new Vue({
    el:"#feedBack",
    data:{
        num:"0",
        text:"",
        isShow:false,
        lesson:[
         {date:"第一周第一节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","白日依山尽，黄河入海流。欲穷千里目，更上一层楼。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第二节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第三节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第四节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第五节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第六节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第七节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第八节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第九节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第十节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第十一节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第十二节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
         {date:"第一周第十三节",feedback:["寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。","寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。"]},
        ],
        feedback:["床前明月光，疑是地上霜。举头望明月，低头思故乡。","孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。","床前明月光，疑是地上霜。举头望明月，低头思故乡。","床前明月光，疑是地上霜。举头望明月，低头思故乡。"],
    },
    methods:{
        change:function(k){
            this.num = k;
        },
        show:function(k){
            this.text = k;
            this.isShow = true;
        },
        close:function(){
            this.isShow = false;
        }
    }
})