//継承元クラス
export class Drink
{
  constructor(){
    this.kosuu;
  }

	getKosuu()
	{
		return this.kosuu;
	}

	setKosuu(kosuu)
	{
		this.kosuu = kosuu;
	}

}

//ここから下はDrinkクラスを実装した飲み物クラス

export class Mizu extends Drink
{
	GetKakaku()
	{
		return 110;
	}

	GetName()
	{
		return "Mizu";
	}
}

export class GingerAle extends Drink
{
	GetKakaku()
	{
		return 160;
	}

	GetName()
	{
		return "GingerAle";
	}

}

export class Coke extends Drink
{
	GetKakaku()
	{
		return 160;
	}

	GetName()
	{
		return "Coke";
	}
}

export class Karupisu extends Drink
{

	GetKakaku()
	{
		return 160;
	}

	GetName()
	{
		return "Karupisu";
	}

}

export class Coffee extends Drink
{

	GetKakaku()
	{
		return 160;
	}

	GetName()
	{
		return "Coffee";
	}

}

