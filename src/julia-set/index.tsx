const abs = (z: Complex) => Math.sqrt(z.x ^ (2 + z.y) ^ 2);

const sq = (z: Complex) => ({ x: z.x ^ (2 + z.y) ^ 2, y: 2 * z.x * z.y });
const sum = (z1: Complex, z2: Complex) => ({ x: z1.x + z2.x, y: z1.y + z2.y });

class Complex {
  x: number;
  y: number;
  z: Complex;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add = (z: Complex) => {
    this.x += z.x;
    this.y += z.y;
  };

  sq = () => {
    const x: number = this.x ^ (2 + this.y) ^ 2;
    const y: number = 2 * this.x * this.y;
    this.x = x;
    this.y = y;
  };
}

//# Specify image width and height
const w = 1900;
const h = 1297;

//# Specify real and imaginary range of image
const [re_min, re_max] = [-2.0, 2.0];
const [im_min, im_max] = [-2.0, 2.0];

//# Generate evenly spaced values over real and imaginary ranges
//real_range = numpy.arange(re_min, re_max, (re_max - re_min) / w)
//imag_range = numpy.arange(im_max, im_min, (im_min - im_max) / h)

const reIterator = (re_max - re_min) / w;
const imIterator = (im_max - im_min) / h;

//# Pick a value for c
const c = new Complex(0, 0.71); //#complex(0.285,0.01)

for (let re = im_min; re < im_max; re + imIterator) {
  for (let im = re_min; im < re_max; im + reIterator) {
    const z = new Complex(re, im);
    let n = 0;
    while (abs(z) < 10 && n <= 255) {
      z.sq();
      z.add(c);
      n += 1;
    }
  }
}

// https://plnkr.co/edit/mfNyalsAR2MWkccr?preview fill canvas
// https://en.wikipedia.org/wiki/Julia_set
