
// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(960, 540);

		// bg
		const bg = this.add.image(0, 0, "pitch");
		bg.scaleX = 2.25;
		bg.scaleY = 2.25;
		body.add(bg);

		// txtScore
		const txtScore = this.add.text(0, -447, "", {});
		txtScore.scaleX = 0;
		txtScore.scaleY = 0;
		txtScore.setOrigin(0.5, 0.5);
		txtScore.visible = false;
		txtScore.text = "OUT";
		txtScore.setStyle({ "align": "center", "backgroundColor": "", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "150px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":3,"shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#2f2f2f", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		body.add(txtScore);

		// btnFrontShot
		const btnFrontShot = this.add.triangle(775, 415, 0, 0, 50, 0, 25, 50);
		btnFrontShot.visible = false;
		btnFrontShot.isFilled = true;
		body.add(btnFrontShot);

		// btnRightShot
		const btnRightShot = this.add.triangle(825, 365, 0, 50, 0, 0, 50, 25);
		btnRightShot.visible = false;
		btnRightShot.isFilled = true;
		body.add(btnRightShot);

		// btnLeftShot
		const btnLeftShot = this.add.triangle(725, 365, 50, 50, 0, 25, 50, 0);
		btnLeftShot.visible = false;
		btnLeftShot.isFilled = true;
		body.add(btnLeftShot);

		// btnIdelPosition
		const btnIdelPosition = this.add.ellipse(775, 365, 50, 50);
		btnIdelPosition.visible = false;
		btnIdelPosition.isFilled = true;
		body.add(btnIdelPosition);

		// yudiz_logo
		const yudiz_logo = this.add.image(749, -455, "yudiz-logo");
		yudiz_logo.scaleX = 0.5;
		yudiz_logo.scaleY = 0.5;
		body.add(yudiz_logo);

		// keeper
		const keeper = this.add.sprite(917, 200, "keeper-1");
		keeper.scaleX = 1.8;
		keeper.scaleY = 1.7;
		keeper.setOrigin(0.57, 0.43);

		// stumps_batsman
		const stumps_batsman = this.add.container(960, 310);

		// stump_2
		const stump_2 = this.add.image(12, 0, "stump");
		stump_2.scaleX = 0.5;
		stump_2.scaleY = 0.55;
		stump_2.setOrigin(0.5, 1);
		stumps_batsman.add(stump_2);

		// stump_1
		const stump_1 = this.add.image(0, 0, "stump");
		stump_1.scaleX = 0.5;
		stump_1.scaleY = 0.55;
		stump_1.setOrigin(0.5, 1);
		stumps_batsman.add(stump_1);

		// stump_0
		const stump_0 = this.add.image(-12, 0, "stump");
		stump_0.scaleX = 0.5;
		stump_0.scaleY = 0.55;
		stump_0.setOrigin(0.5, 1);
		stumps_batsman.add(stump_0);

		// batContainer
		const batContainer = this.add.container(935, 622);
		batContainer.angle = 32;
		batContainer.visible = false;

		// bat
		const bat = this.add.image(0, 57, "bat");
		bat.scaleX = 0.5;
		bat.scaleY = 0.55;
		bat.setOrigin(0.5, 0);
		bat.visible = false;
		batContainer.add(bat);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(12, 31, 128, 128);
		rectangle_1.scaleX = 0.08332133468059993;
		rectangle_1.scaleY = 0.19544466094080526;
		rectangle_1.setOrigin(0.5, 0);
		rectangle_1.isFilled = true;
		batContainer.add(rectangle_1);

		// player
		const player = this.add.sprite(965, 250, "player", 4);
		player.scaleX = 1.5;
		player.scaleY = 1.5;

		// ball1
		const ball1 = this.add.image(822, 200, "ball");
		ball1.name = "ball1";
		ball1.scaleX = 0.25;
		ball1.scaleY = 0.25;
		ball1.visible = false;

		// bowler
		const bowler = this.add.sprite(867, 969, "bowler-54");
		bowler.scaleX = 2;
		bowler.scaleY = 2;

		// umpire
		const umpire = this.add.sprite(965, 798, "umpire-inital", 0);
		umpire.scaleX = 1.2;
		umpire.scaleY = 1.2;

		// popup
		const popup = this.add.container(960, 540);
		popup.scaleX = 0.5;
		popup.scaleY = 0.5;
		popup.visible = false;

		// pop_up
		const pop_up = this.add.image(0, 0, "pop-up");
		pop_up.scaleX = 0.5;
		pop_up.scaleY = 0.45;
		popup.add(pop_up);

		// txtLabelTarget_1
		const txtLabelTarget_1 = this.add.text(62, -20, "", {});
		txtLabelTarget_1.setOrigin(1, 0.5);
		txtLabelTarget_1.text = "Target:";
		txtLabelTarget_1.setStyle({ "color": "#cce5f8ff", "fontFamily": "Verdana", "fontSize": "45px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		popup.add(txtLabelTarget_1);

		// txtTarget_1
		const txtTarget_1 = this.add.text(82, -16, "", {});
		txtTarget_1.setOrigin(0, 0.5);
		txtTarget_1.text = "30";
		txtTarget_1.setStyle({ "color": "#cce5f8ff", "fontFamily": "Verdana", "fontSize": "45px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		popup.add(txtTarget_1);

		// txtLabelOver_1
		const txtLabelOver_1 = this.add.text(62, 80, "", {});
		txtLabelOver_1.setOrigin(1, 0.5);
		txtLabelOver_1.text = "Overs:";
		txtLabelOver_1.setStyle({ "color": "#cce5f8ff", "fontFamily": "Verdana", "fontSize": "45px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		popup.add(txtLabelOver_1);

		// txtOver_1
		const txtOver_1 = this.add.text(82, 85, "", {});
		txtOver_1.setOrigin(0, 0.5);
		txtOver_1.text = "0";
		txtOver_1.setStyle({ "color": "#cce5f8ff", "fontFamily": "Verdana", "fontSize": "45px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		popup.add(txtOver_1);

		// labelStatus
		const labelStatus = this.add.text(-1, -146, "", {});
		labelStatus.setOrigin(0.5, 0.5);
		labelStatus.text = "CONGRATULATIONS";
		labelStatus.setStyle({ "color": "#cce5f8ff", "fontFamily": "Verdana", "fontSize": "50px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		popup.add(labelStatus);

		// btnPlayAgainContainer
		const btnPlayAgainContainer = this.add.container(0, 189);
		popup.add(btnPlayAgainContainer);

		// btnPlayAgain
		const btnPlayAgain = this.add.image(0, 0, "btnPlayAgain");
		btnPlayAgain.scaleX = 0.4;
		btnPlayAgain.scaleY = 0.4;
		btnPlayAgainContainer.add(btnPlayAgain);

		// btnPlayAganText
		const btnPlayAganText = this.add.text(0, 0, "", {});
		btnPlayAganText.setOrigin(0.5, 0.5);
		btnPlayAganText.text = "Play Again";
		btnPlayAganText.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});
		btnPlayAgainContainer.add(btnPlayAganText);

		// dashboard
		const dashboard = this.add.container(960, 1058);

		// pop_up_1
		const pop_up_1 = this.add.image(0, 0, "pop-up");
		pop_up_1.scaleX = 1.45;
		pop_up_1.scaleY = 0.2;
		pop_up_1.flipY = true;
		dashboard.add(pop_up_1);

		// currentOverContainer
		const currentOverContainer = this.add.container(424, -26);
		dashboard.add(currentOverContainer);

		// rectCurrentOver
		const rectCurrentOver = this.add.rectangle(0, 0, 458, 37);
		rectCurrentOver.setOrigin(0, 0.5);
		rectCurrentOver.fillColor = 0;
		rectCurrentOver.fillAlpha = 3;
		rectCurrentOver.isStroked = true;
		rectCurrentOver.strokeColor = 1524132;
		rectCurrentOver.strokeAlpha = 3;
		rectCurrentOver.lineWidth = 3;
		currentOverContainer.add(rectCurrentOver);

		// lblCurrentOver
		const lblCurrentOver = this.add.text(8, 0, "", {});
		lblCurrentOver.setOrigin(0, 0.5);
		lblCurrentOver.text = "Current Over :";
		lblCurrentOver.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#234c91", "shadow.blur":5,"shadow.stroke":true});
		currentOverContainer.add(lblCurrentOver);

		// lblCurrentOverRuns
		const lblCurrentOverRuns = this.add.text(255, 0, "", {});
		lblCurrentOverRuns.setOrigin(0, 0.5);
		lblCurrentOverRuns.text = "W 0 1 2 3 4";
		lblCurrentOverRuns.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#234c91", "shadow.blur":5,"shadow.stroke":true});
		currentOverContainer.add(lblCurrentOverRuns);

		// lblNeedRuns
		const lblNeedRuns = this.add.text(0, 0, "", {});
		lblNeedRuns.setOrigin(0.5, 0.5);
		lblNeedRuns.text = "Need 20 runs in 20 balls";
		lblNeedRuns.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#234c91", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(lblNeedRuns);

		// txtLabelTarget
		const txtLabelTarget = this.add.text(-96, -56, "", {});
		txtLabelTarget.setOrigin(0, 0.5);
		txtLabelTarget.text = "Target:";
		txtLabelTarget.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtLabelTarget);

		// txtTarget
		const txtTarget = this.add.text(37, -53, "", {});
		txtTarget.setOrigin(0, 0.5);
		txtTarget.text = "30";
		txtTarget.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtTarget);

		// txtLabelOver
		const txtLabelOver = this.add.text(-905, -5, "", {});
		txtLabelOver.setOrigin(0, 0.5);
		txtLabelOver.text = "Overs:";
		txtLabelOver.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtLabelOver);

		// txtOver
		const txtOver = this.add.text(-783, -2, "", {});
		txtOver.setOrigin(0, 0.5);
		txtOver.text = "0";
		txtOver.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtOver);

		// txtLabelScore
		const txtLabelScore = this.add.text(-903, -52, "", {});
		txtLabelScore.setOrigin(0, 0.5);
		txtLabelScore.text = "Score:";
		txtLabelScore.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtLabelScore);

		// txtPlayerScore
		const txtPlayerScore = this.add.text(-783, -49, "", {});
		txtPlayerScore.setOrigin(0, 0.5);
		txtPlayerScore.text = "0";
		txtPlayerScore.setStyle({ "color": "#1741a4", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4", "strokeThickness":2,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1741a4", "shadow.blur":5,"shadow.stroke":true});
		dashboard.add(txtPlayerScore);

		this.txtScore = txtScore;
		this.btnFrontShot = btnFrontShot;
		this.btnRightShot = btnRightShot;
		this.btnLeftShot = btnLeftShot;
		this.btnIdelPosition = btnIdelPosition;
		this.keeper = keeper;
		this.stump_2 = stump_2;
		this.stump_1 = stump_1;
		this.stump_0 = stump_0;
		this.batContainer = batContainer;
		this.bat = bat;
		this.player = player;
		this.ball1 = ball1;
		this.bowler = bowler;
		this.umpire = umpire;
		this.popup = popup;
		this.txtLabelTarget_1 = txtLabelTarget_1;
		this.txtTarget_1 = txtTarget_1;
		this.txtLabelOver_1 = txtLabelOver_1;
		this.txtOver_1 = txtOver_1;
		this.labelStatus = labelStatus;
		this.btnPlayAgainContainer = btnPlayAgainContainer;
		this.btnPlayAgain = btnPlayAgain;
		this.btnPlayAganText = btnPlayAganText;
		this.rectCurrentOver = rectCurrentOver;
		this.lblCurrentOver = lblCurrentOver;
		this.lblCurrentOverRuns = lblCurrentOverRuns;
		this.lblNeedRuns = lblNeedRuns;
		this.txtTarget = txtTarget;
		this.txtOver = txtOver;
		this.txtPlayerScore = txtPlayerScore;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txtScore;
	/** @type {Phaser.GameObjects.Triangle} */
	btnFrontShot;
	/** @type {Phaser.GameObjects.Triangle} */
	btnRightShot;
	/** @type {Phaser.GameObjects.Triangle} */
	btnLeftShot;
	/** @type {Phaser.GameObjects.Ellipse} */
	btnIdelPosition;
	/** @type {Phaser.GameObjects.Sprite} */
	keeper;
	/** @type {Phaser.GameObjects.Image} */
	stump_2;
	/** @type {Phaser.GameObjects.Image} */
	stump_1;
	/** @type {Phaser.GameObjects.Image} */
	stump_0;
	/** @type {Phaser.GameObjects.Container} */
	batContainer;
	/** @type {Phaser.GameObjects.Image} */
	bat;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Image} */
	ball1;
	/** @type {Phaser.GameObjects.Sprite} */
	bowler;
	/** @type {Phaser.GameObjects.Sprite} */
	umpire;
	/** @type {Phaser.GameObjects.Container} */
	popup;
	/** @type {Phaser.GameObjects.Text} */
	txtLabelTarget_1;
	/** @type {Phaser.GameObjects.Text} */
	txtTarget_1;
	/** @type {Phaser.GameObjects.Text} */
	txtLabelOver_1;
	/** @type {Phaser.GameObjects.Text} */
	txtOver_1;
	/** @type {Phaser.GameObjects.Text} */
	labelStatus;
	/** @type {Phaser.GameObjects.Container} */
	btnPlayAgainContainer;
	/** @type {Phaser.GameObjects.Image} */
	btnPlayAgain;
	/** @type {Phaser.GameObjects.Text} */
	btnPlayAganText;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectCurrentOver;
	/** @type {Phaser.GameObjects.Text} */
	lblCurrentOver;
	/** @type {Phaser.GameObjects.Text} */
	lblCurrentOverRuns;
	/** @type {Phaser.GameObjects.Text} */
	lblNeedRuns;
	/** @type {Phaser.GameObjects.Text} */
	txtTarget;
	/** @type {Phaser.GameObjects.Text} */
	txtOver;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayerScore;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.btnPlayAgain.setInteractive().on('pointerup', () => {
			const selectedOvers = parseFloat(prompt("Please enter overs"));
			nWickets = 0;
			sCurrentOverRuns = "";
			isNewGame = true;
			nScore = 0;
			nBallRun = 0;
			nTotalOvers = selectedOvers || 5.0;
			nCurrentOvers = 0;
			nTotalBallsLeft = nTotalOvers * 6;
			nTarget = (() => {
				let x = Math.ceil(Math.random() * (nTotalOvers * 10 + 10 - nTotalOvers * 10));
				return x + nTotalOvers * 10;
			})();
			nRunsLeft = nTarget;
			this.scene.restart();
		})

		this.ball1.visible = false;
		this.ball = this.physics.add.image(853, 503, "ball").setVisible(false);
		this.nPlayerTotalScore = nScore;
		//Set score, Overs, Target & Wickets
		this.txtPlayerScore.setText(this.nPlayerTotalScore + "/" + nWickets);
		this.txtOver.setText(nCurrentOvers.toFixed(1));
		this.txtOver_1.setText(nTotalOvers);
		this.txtTarget.setText(nTarget);
		this.txtTarget_1.setText(nTarget);
		this.updateData();

		this.mainCamera = this.cameras.main;
		this.mainCamera.setBounds(0, 0, 1920, 1080);
		this.nBallX = 0;
		this.nBallY = 0;
		this.hitStumpsAnimation;
		this.ballAnimation;
		this.isPlayingShot = false;

		this.oGameManager = new GameManager(this);
		this.randomInRange = this.oGameManager.randomInRange;

		//Popup
		if (isNewGame) {
			this.btnPlayAgainContainer.setVisible(false);
			isNewGame = false;
			this.popup.setVisible(true);
			this.labelStatus.setText("LET'S PLAY");
			this.tweens.add({
				targets: this.popup,
				ease: "Bounce",
				scaleX: 1,
				scaleY: 1,
				duration: 1000,
				onComplete: () => {
					setTimeout(() => {
						this.popup.setVisible(false);
					}, 2000);
					setTimeout(() => {
						this.throwBall();
					}, 3500);
				}
			})
		} else {
			if (nScore >= nTarget) {
				this.btnPlayAganText.setText("Play Again");
				this.btnPlayAgainContainer.setVisible(true);
				this.txtLabelTarget_1.setText("Your Score :");
				this.txtLabelTarget_1.setPosition(75, 0)
				this.txtTarget_1.setText(nScore);
				this.txtTarget_1.setPosition(93, 5)
				this.txtLabelOver_1.setVisible(false);
				this.txtOver_1.setVisible(false);
				this.labelStatus.setText("YOU WON");
				this.popup.setVisible(true);
				this.tweens.add({
					targets: this.popup,
					ease: "Power2",
					scaleX: 1,
					scaleY: 1,
					duration: 1000
				})
			} else {
				setTimeout(() => {
					this.throwBall();
				}, 1500);
			}
		}

		this.umpire.anims.play("umpire", true);
		this.player.anims.play("idlePosition", true);
		this.bowler.setPosition(867, 969);
		this.bowler.setTexture("bowler-54");
		this.keeper.setPosition(937, 220);
		this.keeper.anims.play("keeper-sit", true);

		this.input.keyboard.addKey("SPACE").on("down", ()=>{
			this.playShot("frontShot");
		});

		this.input.on('pointerdown', () => {
			this.playShot("frontShot");
		})

		this.btnIdelPosition.setInteractive().on('pointerdown', () => {
			this.isPlayingShot = false;
			this.player.anims.play("idlePosition", true);
		})

		this.btnFrontShot.setInteractive().on('pointerdown', () => {
			this.playShot("frontShot");
		})

		this.btnLeftShot.setInteractive().on('pointerdown', () => {
			this.playShot("leftShot");
		})

		this.btnRightShot.setInteractive().on('pointerdown', () => {
			this.playShot("rightShot");
		})

	}

	updateData() {
		if (nRunsLeft <= 0) nRunsLeft = 0;
		this.lblNeedRuns.setText(`Need ${nRunsLeft} runs in ${nTotalBallsLeft} balls`);
		this.txtOver.setText(nCurrentOvers.toFixed(1));
		this.lblCurrentOverRuns.setText(sCurrentOverRuns);
		this.rectCurrentOver.displayWidth = this.lblCurrentOverRuns.width + this.lblCurrentOver.width + 20;
		if (sCurrentOverRuns.length == 12) sCurrentOverRuns = "";
	}

	initialBallStupms() {
		this.ball.setVisible(false);
		this.ball.setScale(0.5, 0.5);
		this.ball.setPosition(853, 503);
		this.stump_0.scaleY = 0.55;
		this.stump_0.angle = 0;
		this.stump_1.scaleY = 0.55;
		this.stump_1.angle = 0;
		this.stump_2.scaleY = 0.55;
		this.stump_2.angle = 0;
		this.nBallX = 0;
		this.nBallY = 0;
	}

	initialPlayers() {
		this.keeper.setPosition(937, 220);
		this.keeper.anims.play("keeper-sit", true);
		this.umpire.anims.play("umpire", true);
		this.bowler.setPosition(867, 969);
		this.bowler.setTexture("bowler-54");
	}

	throwBall() {
		this.ball.setPosition(853, 503);
		this.initialPlayers();
		this.initialBallStupms();
		if (nWickets < 10 && nCurrentOvers != nTotalOvers) {
			this.bowler.anims.play("bowler", true);
			this.tweens.add({
				targets: this.bowler,
				y: 669,
				duration: 1200,
				onComplete: () => {
					this.tweens.add({
						targets: this.bowler,
						x: 939,
						y: 619,
						delay: 200,
						duration: 500
					})
				}
			})
			setTimeout(() => {
				this.ball.setVisible(true);
				// this.initialBallStupms();
			}, 1200);
			this.ballAnimation = this.tweens.add({
				// Center On Pitch
				targets: this.ball,
				x: this.randomInRange(874, 985),
				y: this.randomInRange(478, 540),
				delay: 1200,
				scaleX: 0.31,
				scaleY: 0.31,
				duration: this.randomInRange(400, 600),
				onComplete: () => {
					nTotalBallsLeft--;
					nCurrentOvers += 0.10;
					const nDecimalPoint = Math.round((nCurrentOvers.toFixed(1) - Math.floor(nCurrentOvers.toFixed(1))) * 10);
					if (nDecimalPoint == 6) {
						nCurrentOvers = (Math.round(nCurrentOvers));
					}
					// Hit Stumps
					this.nBallX = this.randomInRange(900, 955);
					// this.nBallY = this.randomInRange(220, 230)
					const nDuration = this.randomInRange(550, 750);
					this.hitStumpsAnimation = this.tweens.add({
						targets: this.ball,
						x: this.nBallX,
						y: 220,
						scaleX: 0.20,
						scaleY: 0.20,
						duration: nDuration,
						onComplete: () => {
							this.hitWickets();
						}
					})
				}
			})
		} else {
			this.btnPlayAganText.setText("Try Again");
			this.btnPlayAgainContainer.setVisible(true);
			this.txtLabelTarget_1.setText("Your Score :");
			this.txtLabelTarget_1.setPosition(75, 0)
			this.txtTarget_1.setText(nScore);
			this.txtTarget_1.setPosition(93, 5)
			this.txtLabelOver_1.setVisible(false);
			this.txtOver_1.setVisible(false)
			this.labelStatus.setText("YOU LOST");
			this.popup.setVisible(true);
			this.tweens.add({
				targets: this.popup,
				ease: "Power2",
				scaleX: 1,
				scaleY: 1,
				duration: 1000
			})
		}
	}

	oBallCordinates = [
		{ x: 322, y: 768, scaleX: 0.5, scaleY: 0.5, nDuration: 1100 },
		{ x: 1812, y: 870, scaleX: 0.5, scaleY: 0.5, nDuration: 800 },
		{ x: 27, y: 995, scaleX: 1, scaleY: 1, nDuration: 800 },
		{ x: 1904, y: 1062, scaleX: 1, scaleY: 1, nDuration: 800 },
		{ x: 1160, y: 1050, scaleX: 7, scaleY: 7, nDuration: 600 },
		{ x: 1945, y: 438, scaleX: 1, scaleY: 1, nDuration: 800 },
	]

	hitShot(n) {
		this.tweens.add({
			targets: this.ball,
			x: this.oBallCordinates[n].x,
			y: this.oBallCordinates[n].y,
			scaleX: this.oBallCordinates[n].scaleX,
			scaleY: this.oBallCordinates[n].scaleY,
			duration: this.oBallCordinates[n].nDuration,
			onComplete: () => {
				this.ball.setVisible(false);
			}
		})
	}

	showScore(label) {
		this.updateData();
		this.txtScore.setText(label);
		this.txtScore.setVisible(true);
		this.tweens.add({
			targets: this.txtScore,
			scaleX: 1,
			scaleY: 1,
			duration: 800,
			onComplete: () => {
				if (label == "OUT") {
					nWickets++;
					this.txtPlayerScore.setText(this.nPlayerTotalScore + "/" + nWickets);
				}
				this.txtScore.setVisible(false);
				this.txtScore.setScale(0);
				setTimeout(() => {
					this.bowler.setPosition(867, 969);
					this.ball.setVisible(false);
					this.throwBall();
				}, 800);
			}
		})
		this.ballAnimation.stop();
	}

	hitWickets() {
		this.player.depth = 2;
		this.ball.depth = 1;
		if (this.nBallX < 982 && this.nBallX > 938) {
			if (this.nBallX <= 964 && this.nBallX >= 958) {
				this.stump_0.scaleY = 0.5;
				this.stump_0.angle = -7;
				this.stump_1.scaleY = 0.35;
				this.stump_1.angle = -10;
				this.stump_2.scaleY = 0.5;
				this.stump_2.angle = 7;
			}
			else if (this.nBallX > 972) {
				this.stump_2.scaleY = 0.5;
				this.stump_2.angle = 7;
			} else if (this.nBallX > 965) {
				this.stump_1.scaleY = 0.35;
				this.stump_1.angle = -10;
				this.stump_2.scaleY = 0.5;
				this.stump_2.angle = 7;
			} else if (this.nBallX < 948) {
				this.stump_0.scaleY = 0.5;
				this.stump_0.angle = -7;
			} else {
				this.stump_0.scaleY = 0.5;
				this.stump_0.angle = -7;
				this.stump_1.scaleY = 0.35;
				this.stump_1.angle = -10;
			}
			this.keeper.anims.play("keeper", true);
			this.keeper.setPosition(this.nBallX, 200);
			this.umpire.anims.play("umpireOut", true);
			sCurrentOverRuns += " W";
			this.showScore("OUT");
		} else {
			this.keeper.anims.play("keeper", true);
			this.keeper.setPosition(this.nBallX, 220);
			sCurrentOverRuns += " 0";
			this.showScore(0);
		}
		this.nBallY = 0;
		this.nBallX = 0;
	}

	playShot(shotType) {
		if (!this.isPlayingShot) {
			this.isPlayingShot = true
			switch (shotType) {
				case "frontShot":
					this.playShotAnimation = this.player.anims.play("frontShot", true).add;
					break;
				case "leftShot":
					this.playShotAnimation = this.player.anims.play("leftShot", true);
					break;
				case "rightShot":
					this.playShotAnimation = this.player.anims.play("rightShot", true);
					break;
				default:
					this.playShotAnimation = this.player.anims.play("frontShot", true);
					break;
			}
			if (this.ball.y <= 390 && this.ball.y >= 282) {
				const nBallScore = Math.floor(this.randomInRange(0, 6));
				nBallRun = nBallScore;

				// Field scene
				setTimeout(() => {
					this.hitStumpsAnimation.stop();
					this.hitShot(nBallScore);
				}, 70);
				setTimeout(() => {
					// this.throwBall();
					this.scene.stop('Level');
					this.scene.start('Field');
				}, 800);
			}

			setTimeout(() => {
				this.player.anims.play("idlePosition", true);
				this.isPlayingShot = false;
			}, 800);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
