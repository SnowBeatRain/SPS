var h = $(window).innerHeight();
$('.container').height(h)

// 定义一个num 用于记录是第几个输入值  初始值-1 
/*
0 城市  1 市区字母  2--1  3--2  4--3  5--4  6--5   7---6 新能源
*/
var num = 0;
$(function () {
  var result = false;
  document.getElementById("xny").style.backgroundImage = 'url(./img/xny.png)';
  $(".select_plate_cellcity .weuigrid").click(function () {
    var txt = $.trim($(this).find(".weuigrid_label").text());
    if (txt == "删") {
      num = 0;
      $(".city").text("");
      $(".select_plate_cellcity").show();
      $(".select_plate_cell_area").hide();
      $(".weiwukuang").removeClass("selectwi");
      document.getElementById("city").className += " selectwi";
    } else {
      num++
      $(".select_plate_cellcity").hide();
      $(".spanProvinceDescription").text(txt);
      $(".select_plate_cell_area").show();
      $(".weiwukuang").removeClass("selectwi");
      document.getElementById("area").className += " selectwi";
    }
  });
  $(".select_plate_cell_area .weui_grid").click(function () {
    var txt = $.trim($(this).find(".weui_grid_label").text());
    $(".select_plate_cellcity").hide();
    if (txt == "删") {
      switch (num) {
        case 1:
          deletePublicFun();
          $(".spanCityDescription").text("");
          $(".select_plate_cellcity").show();
          $(".select_plate_cell_area").hide();
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("city").className += " selectwi";
          num--;
          break;
        case 2:
          $(".spannum1").text('');
          num--;
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("area").className += " selectwi";
          break;
        case 3:
          $(".spannum2").text('');
          num--;
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("are1").className += " selectwi";
          break;
        case 4:
          $(".spannum3").text('');
          num--;
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("are2").className += " selectwi";
          break;
        case 5:
          $(".spannum4").text('');
          num--;
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("are3").className += " selectwi";
          break;
        case 6:
          $(".spannum5").text('');
          num--;
          $(".weiwukuang").removeClass("selectwi");
          document.getElementById("are4").className += " selectwi";
          break;
        case 7:
          $("#xny").text("");
          $(".select_plate_cell_area").hide();
          $(".closes").hide();
          $("#xny").removeClass("selectwi");
          num--;
          document.getElementById("xny").style.backgroundImage = 'url(./img/xny.png)';
          break;
        default:
          break;
      }
    } else {
      $(".weiwukuang").removeClass("selectwi");
      switch (num) {
        case 0:
          $(".spanCityDescription").text(txt);
          document.getElementById("are1").className += " selectwi";
          num++;
          break;
        case 1:
          $(".spanCityDescription").text(txt);
          document.getElementById("are1").className += " selectwi";
          num++;
          break;
        case 2:
          $(".spannum1").text(txt);
          num++;
          document.getElementById("are2").className += " selectwi";
          break;
        case 3:
          $(".spannum2").text(txt);
          num++;
          document.getElementById("are3").className += " selectwi";
          break;
        case 4:
          $(".spannum3").text(txt);
          num++;
          document.getElementById("are4").className += " selectwi";
          break;
        case 5:
          $(".spannum4").text(txt);
          num++;
          document.getElementById("are5").className += " selectwi";
          break;
        case 6:
          $(".spannum5").text(txt);
          document.getElementById("are5").className += " selectwi";
          break;
        case 7:
          $("#xny").text(txt);
          document.getElementById("xny").className += " selectwi";
          document.getElementById("xny").style.backgroundImage = '';
          break;
        default:
          break;
      }
    }
  });

  // 点击选中的公共函数
  function clickPublicFun() {
    $(".select_plate_cell_area").show();
    $(".select_plate_cellcity").hide();
    $(".closes").show();
    $(".weiwukuang").removeClass("selectwi");
  }
  // 点击删除的公共函数
  function deletePublicFun() { }
  document.getElementById("city").onclick = function () {
    num = 0;
    $(".select_plate_cellcity").show();
    $(".select_plate_cell_area").hide();
    $(".closes").show();
    $(".weiwukuang").removeClass("selectwi");
    document.getElementById("city").className += " selectwi";
  }
  document.getElementById("area").onclick = function () {
    num = 1
    clickPublicFun()
    document.getElementById("area").className += " selectwi";
  }
  document.getElementById("are1").onclick = function () {
    num = 2
    clickPublicFun()
    document.getElementById("are1").className += " selectwi";
  }
  document.getElementById("are2").onclick = function () {
    num = 3
    clickPublicFun()
    document.getElementById("are2").className += " selectwi";
  }
  document.getElementById("are3").onclick = function () {
    num = 4
    clickPublicFun()
    document.getElementById("are3").className += " selectwi";
  }
  document.getElementById("are4").onclick = function () {
    num = 5
    clickPublicFun()
    document.getElementById("are4").className += " selectwi";
  }
  document.getElementById("are5").onclick = function () {
    num = 6
    clickPublicFun()
    document.getElementById("are5").className += " selectwi";
  }
  document.getElementById("xny").onclick = function () {
    num = 7
    clickPublicFun()
    document.getElementById("xny").className += " selectwi";
  }
});



function aa() {
  $(".closes").hide();
  $(".select_plate_cellcity").hide();
  $(".select_plate_cell_area").hide();
  $(".weiwukuang").removeClass("selectwi");
}
$(".delete").click(function () {
  $(".spanProvinceDescription").text("");
})

// 添加车辆
$(".btn button").click(function () {
  window.history.back()
})