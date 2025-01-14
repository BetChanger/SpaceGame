var How_To_Play = "TOUCH ON THE SCREEN AND MOVE YOUR FINGER TO MOVE THE SHIP. YOU HAVE TO GET OFF AND SHOOT THE ENEMY SHIPS. YOU CAN CHANGE THIS TEXT"; //Add your how to play text here in capital letters.
var Max_Life = "3";//You can change the count of the life.
var Add_Score = "1";//Add the score for per enemy kill.
var Subtract_Score = "1";//Subtract the score when get hit and collide with enemy ship.
var Stars_Count = "50";//Change stars count on background.
var Shooting_Time = "0.2";//Change player ship shooting speed.High value is slow shooting.
var Enemy_Ships_Create = "1";//Enemy ships creating time. High value is takes to create long time.
var Enemy_Shooting_Time = "1";//Enemy shooting time. High value is slow shooting.


const scriptsInEvents = {

	async Start_Event1_Act2(runtime, localVars)
	{
		runtime.globalVars.HoToPlay = How_To_Play;
	},

	async Start_Event1_Act3(runtime, localVars)
	{
		runtime.globalVars.MaxLife = Max_Life;
	},

	async Start_Event1_Act4(runtime, localVars)
	{
		runtime.globalVars.AddScore = Add_Score;
	},

	async Start_Event1_Act5(runtime, localVars)
	{
		runtime.globalVars.SubtractScore = Subtract_Score;
	},

	async Start_Event1_Act6(runtime, localVars)
	{
		runtime.globalVars.StarsCount = Stars_Count;
	},

	async Start_Event1_Act7(runtime, localVars)
	{
		runtime.globalVars.ShootingTime = Shooting_Time;
	},

	async Start_Event1_Act8(runtime, localVars)
	{
		runtime.globalVars.EnemyCreatingTime = Enemy_Ships_Create;
	},

	async Start_Event1_Act9(runtime, localVars)
	{
		runtime.globalVars.EnemyShootingTime = Enemy_Shooting_Time;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

