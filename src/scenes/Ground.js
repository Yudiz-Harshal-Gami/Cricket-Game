
// You can write more code here

/* START OF COMPILED CODE */

class Ground extends Phaser.Scene {

	constructor() {
		super("Ground");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// stadium
		const stadium = this.add.image(960, 540, "stadium");
		stadium.scaleX = 1.55;
		stadium.scaleY = 1.55;

		// btnPlayAgain
		const btnPlayAgain = this.add.image(960, 446, "btnPlayAgain");
		btnPlayAgain.scaleX = 0.4;
		btnPlayAgain.scaleY = 0.4;

		// yudiz_logo
		const yudiz_logo = this.add.image(1673, 89, "yudiz-logo");
		yudiz_logo.scaleX = 0.5;
		yudiz_logo.scaleY = 0.5;
		yudiz_logo.tintFill = true;

		// btnPlayAgain_1
		const btnPlayAgain_1 = this.add.image(960, 571, "btnPlayAgain");
		btnPlayAgain_1.scaleX = 0.4;
		btnPlayAgain_1.scaleY = 0.4;

		// btnPlayAganText
		const btnPlayAganText = this.add.text(960, 446, "", {});
		btnPlayAganText.setOrigin(0.5, 0.5);
		btnPlayAganText.text = "LOGIN";
		btnPlayAganText.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});

		// btnPlayAganText_1
		const btnPlayAganText_1 = this.add.text(960, 571, "", {});
		btnPlayAganText_1.setOrigin(0.5, 0.5);
		btnPlayAganText_1.text = "SIGN UP";
		btnPlayAganText_1.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});

		// btnPlayAganText_2
		const btnPlayAganText_2 = this.add.text(960, 199, "", {});
		btnPlayAganText_2.setOrigin(0.5, 0.5);
		btnPlayAganText_2.text = "LOGIN TO YUDIZ CRICKET AND HAVE FUN";
		btnPlayAganText_2.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "50px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness":4,"shadow.offsetX":7,"shadow.offsetY":7,"shadow.color": "#234c91ff", "shadow.blur":7,"shadow.stroke":true});

		this.btnPlayAganText = btnPlayAganText;
		this.btnPlayAganText_1 = btnPlayAganText_1;
		this.btnPlayAganText_2 = btnPlayAganText_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	btnPlayAganText;
	/** @type {Phaser.GameObjects.Text} */
	btnPlayAganText_1;
	/** @type {Phaser.GameObjects.Text} */
	btnPlayAganText_2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
