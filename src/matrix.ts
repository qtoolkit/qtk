/**
 * 2维矩阵变换
 */
export class Matrix {
	public data : Float32Array;

	constructor() {
		this.data = new Float32Array(6);
		this.identity();
	}

	public identity() {
		var data = this.data;

		data[0] = 1;
		data[1] = 0;
		data[2] = 0;
		data[3] = 1;
		data[4] = 0;
		data[5] = 0;

		return this;
	}

	public clone() : Matrix {
		var other = new Matrix();
		var data = other.data;
		var src = this.data;

		data[0] = src[0];
		data[1] = src[1];
		data[2] = src[2];
		data[3] = src[3];
		data[4] = src[4];
		data[5] = src[5];

		return other;
	}

	public set(a:number, b:number, c:number, d:number, tx:number, ty:number):Matrix {
		var data = this.data;
		
		data[0] = a;
		data[1] = b;
		data[2] = c;
		data[3] = d;
		data[4] = tx;
		data[5] = ty;

    	return this;
	}

	public rotate (rad:number) : Matrix {
		var a = this.data;
		var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
			s = Math.sin(rad),
			c = Math.cos(rad);
		a[0] = a0 *  c + a2 * s;
		a[1] = a1 *  c + a3 * s;
		a[2] = a0 * -s + a2 * c;
		a[3] = a1 * -s + a3 * c;

		return this;
	}

	public scale(sx:number, sy:number) : Matrix {
		var a = this.data;

		a[0] *= sx;
		a[1] *= sx;
		a[2] *= sy;
		a[3] *= sy;

		return this;
	}

	public translate (dx:number, dy:number) {
		var a = this.data;
		var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
		a[4] = a0 * dx + a2 * dy + a4;
		a[5] = a1 * dx + a3 * dy + a5;

		return this;
	};

	public transformPoint(x:number, y:number, out) {
		var p = out || {};
		var a = this.data;

		p.x = a[0] * x + a[2] * y + a[4];
		p.y = a[1] * x + a[3] * y + a[5];
		
		return p;
	};

	public equal(other) : boolean {
		var a = this.data;
		var b = other.data;

		return a[0] === b[0]
			&& a[1] === b[1]
			&& a[2] === b[2]
			&& a[3] === b[3]
			&& a[4] === b[4]
			&& a[5] === b[5];
	}

	public toString() : string {
		var ret = Array.prototype.map.call(this.data, function(iter) {
			return iter.toFixed(2);
		});

		return JSON.stringify(ret);
	}

	public dispose() {
		this.identity();
		Matrix.cache.push(this);
	}

	private static cache = [];
	public static create() : Matrix {
		if(Matrix.cache.length) {
			return Matrix.cache.pop();
		}

		return new Matrix();
	}
};

