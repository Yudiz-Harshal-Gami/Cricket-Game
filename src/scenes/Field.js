
// You can write more code here

/* START OF COMPILED CODE */

class Field extends Phaser.Scene {

	constructor() {
		super("Field");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(960, 540);

		// field
		const field = this.add.image(-13, 0, "field");
		field.scaleX = 1.33;
		field.scaleY = 1.05;
		body.add(field);

		// txtScore
		const txtScore = this.add.text(0, -92, "", {});
		txtScore.scaleX = 0;
		txtScore.scaleY = 0;
		txtScore.setOrigin(0.5, 0.5);
		txtScore.visible = false;
		txtScore.text = "6";
		txtScore.setStyle({ "align": "center", "backgroundColor": "", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "200px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":3,"shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#2f2f2f", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		body.add(txtScore);

		// yudiz_logo
		const yudiz_logo = this.add.image(749, -455, "yudiz-logo");
		yudiz_logo.scaleX = 0.5;
		yudiz_logo.scaleY = 0.5;
		body.add(yudiz_logo);

		// wicketKeeper
		const wicketKeeper = this.add.image(961.7373681582562, 321.3515268676617, "wicketKeeper");
		wicketKeeper.scaleX = 0.55;
		wicketKeeper.scaleY = 0.55;
		wicketKeeper.setOrigin(0.5686706767035493, 0.4362155060618912);

		// ball
		const ball = this.add.image(1291, 749, "ball");
		ball.scaleX = 0.25;
		ball.scaleY = 0.25;

		// fielderRightBottom
		const fielderRightBottom = this.add.sprite(1340, 790, "fielder");
		fielderRightBottom.scaleX = 2;
		fielderRightBottom.scaleY = 2;

		// fielderRightMid
		const fielderRightMid = this.add.sprite(1590, 490, "fielder");
		fielderRightMid.scaleX = 2;
		fielderRightMid.scaleY = 2;

		// fielderRightTop
		const fielderRightTop = this.add.sprite(1340, 290, "fielder");
		fielderRightTop.scaleX = 2;
		fielderRightTop.scaleY = 2;

		// fielderLeftBottom
		const fielderLeftBottom = this.add.sprite(580, 790, "fielder");
		fielderLeftBottom.scaleX = 2;
		fielderLeftBottom.scaleY = 2;
		fielderLeftBottom.flipX = true;

		// fielderLeftMid
		const fielderLeftMid = this.add.sprite(669, 490, "fielder");
		fielderLeftMid.scaleX = 2;
		fielderLeftMid.scaleY = 2;
		fielderLeftMid.flipX = true;

		// fielderLeftTop
		const fielderLeftTop = this.add.sprite(580, 290, "fielder");
		fielderLeftTop.scaleX = 2;
		fielderLeftTop.scaleY = 2;
		fielderLeftTop.flipX = true;

		// stumps_batsman
		const stumps_batsman = this.add.container(960, 383);
		stumps_batsman.scaleX = 0.5;
		stumps_batsman.scaleY = 0.5;

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

		this.txtScore = txtScore;
		this.wicketKeeper = wicketKeeper;
		this.ball = ball;
		this.fielderRightBottom = fielderRightBottom;
		this.fielderRightMid = fielderRightMid;
		this.fielderRightTop = fielderRightTop;
		this.fielderLeftBottom = fielderLeftBottom;
		this.fielderLeftMid = fielderLeftMid;
		this.fielderLeftTop = fielderLeftTop;
		this.stump_2 = stump_2;
		this.stump_1 = stump_1;
		this.stump_0 = stump_0;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txtScore;
	/** @type {Phaser.GameObjects.Image} */
	wicketKeeper;
	/** @type {Phaser.GameObjects.Image} */
	ball;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderRightBottom;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderRightMid;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderRightTop;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderLeftBottom;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderLeftMid;
	/** @type {Phaser.GameObjects.Sprite} */
	fielderLeftTop;
	/** @type {Phaser.GameObjects.Image} */
	stump_2;
	/** @type {Phaser.GameObjects.Image} */
	stump_1;
	/** @type {Phaser.GameObjects.Image} */
	stump_0;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.nBallScore = parseInt(sessionStorage.getItem("nBallRun"));
		this.followBall(this.nBallScore);
	}

	chaseBall(fielderName, chaseX, chaseY, chaseTimer) {
		fielderName.anims.play("fielderAnimation", true);
		this.tweens.add({
			targets: fielderName,
			x: chaseX,
			y: chaseY,
			duration: chaseTimer,
			onComplete: () => {
				fielderName.anims.play("throwAnimation", true);
				fielderName.on('animationcomplete', () => {
					if (this.ball.x > 960) {
						this.ball.x += 30;
					}
					else {
						this.ball.x -= 30;
					}
					this.ball.y -= 40;
					this.ball.setScale(0.15);
					fielderName.setTexture("fielder");
					this.throwToKeeper();
				})
			},
		});
	}

	throwToKeeper() {
		this.tweens.add({
			targets: this.ball,
			x: this.wicketKeeper.x,
			y: this.wicketKeeper.y,
			duration: 1000,
			onComplete: () => {
				setTimeout(() => {
					this.scene.stop('Field');
					this.scene.start('Level');
				}, 1000);
			}
		})
	}

	followBall() {
		let nBallX = 0;
		let nBallY = 0;
		let nDuration = 2200;
		let nScaleX = 0.25;
		let nScaleY = 0.25;
		switch (nBallRun) {
			// switch (5) {
			//Hit 1
			case 0:
				this.ball.setPosition(929, 450);
				nBallX = 750;
				nBallY = 572;
				this.chaseBall(this.fielderLeftMid, nBallX, nBallY, nDuration);
				break;
			//Hit 1
			case 1:
				this.ball.setPosition(1047, 438);
				nBallX = 1302;
				nBallY = 547;
				this.chaseBall(this.fielderRightMid, nBallX, nBallY, nDuration);
				break;
			//Hit 2
			case 2:
				this.ball.setPosition(904, 507);
				nBallX = 744;
				nBallY = 683;
				this.chaseBall(this.fielderLeftBottom, nBallX, nBallY, nDuration);
				break;
			//Hit 3
			case 3:
				this.ball.setPosition(1057, 493);
				nBallX = 1291;
				nBallY = 749;
				this.chaseBall(this.fielderRightBottom, nBallX, nBallY, nDuration);
				break;

			//Hit 6
			case 4:
				this.ball.setPosition(986, 511);
				nBallX = 1023;
				nBallY = 969;
				nScaleX = 0.4;
				nScaleY = 0.4;
				nDuration = 2000;
				break;

			//Hit 4
			case 5:
				this.ball.setPosition(1061, 472);
				nBallX = 1711;
				nBallY = 653;
				break;

			default:
				break;
		}

		this.tweens.add({
			targets: this.ball,
			x: nBallX,
			y: nBallY,
			scaleX: nScaleX,
			scaleY: nScaleY,
			duration: nDuration - 300,
			onComplete: () => {
				sessionStorage.removeItem("nBallRun");
				this.showScore(nBallRun);
			}
		})

	}

	oRuns = [1, 1, 2, 3, 6, 4];

	showScore(n) {
		const nRun = this.oRuns[n];
		this.txtScore.setText(nRun);
		nScore += nRun;
		nRunsLeft -= nRun;
		sCurrentOverRuns += " " + nRun;
		this.txtScore.setVisible(true);
		this.tweens.add({
			targets: this.txtScore,
			scaleX: 1,
			scaleY: 1,
			duration: 800,
			onComplete: () => {
				if (nRun > 3) {
					setTimeout(() => {
						this.scene.stop('Field');
						this.scene.start('Level');
					}, 1000);
				}
				this.txtScore.setVisible(false);
				this.txtScore.setScale(0);
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
