export class Jidouhannbaiki
{
  constructor(){
    //	ドリンク個別の小計の配列
    this.syoukei;
    //	すべてのドリンクの合計金額
	  this.goukeikingaku = 0;
  }

//	自販機クラスで貰ったドリンクの種類数をセットして初期化
	setSyoukei(variousTypes)
	{
    this.syoukei = new Array(variousTypes);
    for(let i = 0 ; i < this.syoukei.length;i++){
      this.syoukei[i] = 0;
    }
	}

//	メニューで選択された番号とdrinkList配列を自販機クラスから貰う
	jidouhanbaiki(sentaku, drinkList)
	{
		const urikire = "は売り切れです";
		const kei = "　小計：";
    const goukei = "飲み物　合計：";

    // Id textの子要素をすべて取得し代入
    let text_p = document.getElementById('text').getElementsByTagName('p');

    // Id modal__contentの子要素をすべて取得し代入
    let modal_content = document.getElementById('modal__content').children;

//		0が選択された場合
		if(sentaku == 0)
		{
		  for(let i = 0; i <= drinkList.length;i++)
		  {
        if(i === drinkList.length){
          // すべてのドリンクの合計金額を表示
          modal_content[i].textContent = (goukei+this.goukeikingaku);
        }else{
          // ドリンク名と小計を個別に表示する
          modal_content[i].textContent = (drinkList[i].GetName()+kei+this.syoukei[i]);
          // ドリンク個別の小計を足していく
          this.goukeikingaku = this.goukeikingaku + this.syoukei[i];
        }
		  }
		}
//		0より大きく最大数以下の場合
//		※ユーザーのドリンク選択ナンバーは１から始まるが、配列のナンバーは0から始まるため-1している
		else if(sentaku > 0 && sentaku <= drinkList.length)
		{
//			ドリンクが在庫切れの場合
			if(drinkList[sentaku-1].getKosuu()==0)
			{
//			売り切れましたと表示
        text_p[0].textContent = (drinkList[sentaku-1].GetName()+urikire);
			}
			else
			  	{
//				選択されたドリンクの個数から１を引く
				  let kosuu = drinkList[sentaku-1].getKosuu() -1;
//				引いた結果をセット
				  drinkList[sentaku-1].setKosuu(kosuu);
//				ドリンクの小計とドリンク単価を足している
          this.syoukei[sentaku-1]= this.syoukei[sentaku-1]+drinkList[sentaku-1].GetKakaku();
          text_p[0].textContent = (drinkList[sentaku-1].GetName()+"を出しました");
			  	}
		}
		else
		{
//		エラーメッセージ
      text_p[0].textContent = ("正しく入力してください。");
		}
	}
}
