//  https://jquery.cuishifeng.cn/
// https://www.runoob.com/jquery/jquery-tutorial.html
// https://www.runoob.com/jsref/jsref-obj-array.html
var JQUERY = jQuery.noConflict();
JQUERY(function () {
  // 开始写 jQuery 代码...
  // 所有零件名字
  let all_lingjian_name = [
    "number-lingjian-left-up",
    "number-lingjian-left-down",
    "number-lingjian-mid-up",
    "number-lingjian-mid-mid",
    "number-lingjian-mid-down",
    "number-lingjian-right-up",
    "number-lingjian-right-down",
  ];
  // 每个数组的 零件 显示配置
  let all_number_lingjian_active_obj = {
    num_0: [
      "number-lingjian-left-up",
      "number-lingjian-left-down",
      "number-lingjian-mid-up",
      "number-lingjian-mid-down",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
    num_1: ["number-lingjian-right-up", "number-lingjian-right-down"],
    num_2: [
      "number-lingjian-left-down",
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-mid-down",
      "number-lingjian-right-up",
    ],
    num_3: [
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-mid-down",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
    num_4: [
      "number-lingjian-left-up",
      "number-lingjian-mid-mid",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
    num_5: [
      "number-lingjian-left-up",
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-mid-down",
      "number-lingjian-right-down",
    ],
    num_6: [
      "number-lingjian-left-up",
      "number-lingjian-left-down",
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-mid-down",
      "number-lingjian-right-down",
    ],
    num_7: [
      "number-lingjian-mid-up",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
    num_8: [
      "number-lingjian-left-up",
      "number-lingjian-left-down",
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-mid-down",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
    num_9: [
      "number-lingjian-left-up",
      "number-lingjian-mid-up",
      "number-lingjian-mid-mid",
      "number-lingjian-right-up",
      "number-lingjian-right-down",
    ],
  };



// 上次计算出来的   年月日 时分秒

let last_time_obj={}

  //    通过 数字 0-9 判断那些  零件需要   添加或者删除 un-active 类名
  function compute_lingjian_class_status(num, number_container_class) {
    // 激活状态的零件
    let active_lingjian = all_number_lingjian_active_obj[`num_${num}`];
    for (let i = 0; i < all_lingjian_name.length; i++) {
      let lingjian_name = all_lingjian_name[i];
      if (active_lingjian.includes(lingjian_name)) {
        //如果 当前零件 在   激活状态的零件  内 则 去掉  un-active
        // number_container_class   下面   lingjian_name   去掉  un-active
        //    console.log('去掉  un-active' ,number_container_class ,lingjian_name);
        //    console.log('------UERY(`${number_container_class}>${lingjian_name}`)----',JQUERY(`${number_container_class}>${lingjian_name}`));
        JQUERY(`.${number_container_class}>.${lingjian_name}`).removeClass(
          "un-active"
        );
      } else {
        // 如果 当前零件 不在   激活状态的零件  内 则 加上  un-active
        // console.log('加上  un-active',number_container_class ,lingjian_name);
        // number_container_class   下面   lingjian_name   加上  un-active
        JQUERY(`.${number_container_class}>.${lingjian_name}`).addClass(
          "un-active"
        );
      }
    }
  }
  /**
   *
   * @param {*} num  数字
   * @param {*} label 时分秒的标识
   */
  function compute_lingjian_class_by_num(num, label) {
    let shi_wei = 0;
    let ge_wei = 0;
    if (num < 10) {
      shi_wei = 0;
      ge_wei = num;
    } else {
      shi_wei = Math.floor(num / 10);
      ge_wei = num % 10;
    }
    // 小时 十位
    compute_lingjian_class_status(shi_wei, `time-${label}-1`);
    // 小时 个位
    compute_lingjian_class_status(ge_wei, `time-${label}-2`);
  }



  let current_dot_status = 1  //  1 active  2 un-active

  // 让 小圆点 闪动 

  function  dot_blink(){

    if(current_dot_status==1){
        JQUERY(".dot-top,.dot-bottom").removeClass('dot-active').addClass('dot-un-active')
        current_dot_status = 2

    }else{
        JQUERY(".dot-top,.dot-bottom").removeClass('dot-un-active').addClass('dot-active')  
        current_dot_status = 1
    }



  }



  function huoqu_shijian() {
    var now = new Date();
    //年
    let nian = now.getFullYear();
    //月  // 少 1
    let yue = now.getMonth() + 1;
    //日
    let ri = now.getDate();
    //时
    let shi = now.getHours();
    //分
    let fen = now.getMinutes();
    //秒
    let miao = now.getSeconds();

 
    // console.log("huoqu_shijian---");

if(shi!==last_time_obj.shi){
  // 计算 小时
  compute_lingjian_class_by_num(shi, "hour");
}
  


if(fen!==last_time_obj.fen){

 // 计算 分钟
 compute_lingjian_class_by_num(fen, "minute");
}
   

 

    // 计算 秒钟
    compute_lingjian_class_by_num(miao, "second");


    last_time_obj={
        shi,
        fen,
        miao,
    }
 
  }





  setInterval(huoqu_shijian, 1000);
  setInterval(dot_blink, 500);
});
