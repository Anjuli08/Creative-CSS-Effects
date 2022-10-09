lax.init();

lax.addDriver("scrollDriver", function () {
	return window.scrollY;
});

let easing = "linear";

// piece number + cardinal direction to move. note: the piece number is not the number on the tile, it's the number as if you counted 1, 2, 3, 4, etc from the top left of the grid.
let moves = ["2w", "5n", "6w", "9n", "8e", "7e", "4s", "6w", "5s", "3w", "9n", "8n", "7e", "5s", "3s", "2e", "6n", "4n", "5w", "3s", "8w", "7n"];

let values = moves.map((m, i) => i * 500); // 0, 500, 1000, 2000, 2500, etc...

values.push(moves.length * 500); // idk, it needs an extra move

let pieces = [];

// seed pieces array, which tells the x and y distance to move for each move
for (let i = 0; i < 10; i++) {
	pieces.push({ x: [ 0 ], y: [ 0 ] });
}

// create the array of values to pass into Lax.js. Essentially it's the x and y position for each piece at each interval.
moves.map((m, i) => {
	pieces.forEach((p, j) => {
		let changeX = 0;
		let changeY = 0;
		
		// if the piece to move is the current piece, move by amount in direction
		if (m[0] == j + 1) {
			if (m[1] === "w") {
				changeX = -100;
			}

			if (m[1] === "e") {
				changeX = 100;
			}

			if (m[1] === "n") {
				changeY = -100;
			}

			if (m[1] === "s") {
				changeY = 100;
			}
		}
		
		// otherwise it will be the same as its current position
		p.x.push(p.x[p.x.length - 1] + changeX);
		p.y.push(p.y[p.y.length - 1] + changeY);
	});
});

pieces.forEach((p, i) => {
	lax.addElements(`.piece-${i + 1}`, {
		scrollDriver: {
			translateY: [
				values,
				p.y,
				{
					easing
				}
			],
			translateX: [
				values,
				p.x,
				{
					easing
				}
			]
		}
	});
});