'use strict';

import * as Drink from "./Drink.js";
import * as Jidouhannbaiki from "./Jidouhannbaiki.js";

// TODO 自動生成されたメソッド・スタブ
//		ドリンクそれぞれのインスタンスを配列に代入
let drinkList = [new Drink.Mizu(),new Drink.Coke(),new Drink.Karupisu(),new Drink.Coffee(),new Drink.GingerAle()];

// ドリンク名の配列。ドリンクの種類数に合わせて配列の初期化
let drinkName = [drinkList.length];

// ドリンク価格の配列。ドリンクの種類数に合わせて配列の初期化
let drinkKakaku = [drinkList.length];

// ドリンク名と価格を代入
for(let i = 0; i < drinkList.length;i++)
{
  drinkName[i] = drinkList[i].GetName();
  drinkKakaku[i] = drinkList[i].GetKakaku();
  // ドリンクの個数設定
  drinkList[i].setKosuu(20);
}

// Id zaikoの子要素をすべて取得し代入
let zaiko_p = document.getElementById('zaiko').children;

// 初回のセットした個数を出力
for(let i = 0; i < drinkList.length;i++){
  zaiko_p[i].textContent = drinkName[i]+":"+drinkList[i].getKosuu();
}

let jihanki = new Jidouhannbaiki.Jidouhannbaiki();

//自販機クラスのsyoukei変数の初期化のためにドリンクの種類数をセット
jihanki.setSyoukei(drinkList.length);

// drinkBtnのクラスをすべて取得して代入
const drinkBtn = document.querySelectorAll('.drinkBtn');

// JS-drinkのクラスをすべて取得して代入
const drinks = document.querySelectorAll('.JS-drink');

// JS-priceのクラスをすべて取得して代入
const drinkkakakuHTMLs = document.querySelectorAll('.JS-price');

// drinkList配列にあったナンバーを代入するための変数
const drinkNo = [];

// 自動販売機に並んだ順番でどのドリンクかをクラス名で判別しdrinkList配列にあったナンバーをdrinkNo配列に代入
document.addEventListener('DOMContentLoaded', function(){
  drinks.forEach(function(item,index){
    for(let i = 0; i < drinkName.length;i++){
      if(item.classList.contains(drinkName[i]) == true){
        drinkNo.push(i+1);
      }
    }
  });
});

// drinkNo配列から－１したドリンクナンバーを使い自動販売機に並んだ順番で飲み物価格を表示させる
document.addEventListener('DOMContentLoaded', function(){
  drinkkakakuHTMLs.forEach(function(item,index){
    item.textContent = drinkList[drinkNo[index]-1].GetKakaku() + "円";
  });
});

//選択された番号を取得
document.addEventListener('DOMContentLoaded', function(){
  drinkBtn.forEach(function(item,index){
      item.onclick = function(){
        let name = drinkNo[index];
        //選択された番号とdrinkList配列を自動販売機クラスへ送る
        jihanki.jidouhanbaiki(name,drinkList);
        console.log(drinkNo[index]);

        for(let i = 0; i < drinkList.length;i++){
          zaiko_p[i].textContent = drinkName[i]+":"+drinkList[i].getKosuu();
        }
      }
    });
});

// 終了ボタンが押されたときモーダルを出力して合計金額を表示する
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').onclick = function(){
      // id modalにmodal-onクラス名を追加して表示させる
      document.getElementById('modal').classList.add("modal-on");
      // btnの兄弟要素のinputタグからvalue=0の値を貰って変数へ代入
      let endBtn = document.getElementById('btn').previousElementSibling.value;
      //endBtnに格納された値0とdrinkList配列を自動販売機クラスへ送る
      jihanki.jidouhanbaiki(endBtn,drinkList);
    }
});

// id modalをクリックするとモーダルの表示をやめる
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('modal').onclick = function(){
    // id modalのmodal-onクラス名を削除して非表示に戻す
    document.getElementById('modal').classList.remove("modal-on");
    document.location.reload();
  }
});