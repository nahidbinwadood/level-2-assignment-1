{
  // Problem:01:==>
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == undefined || toUpper === true) {
      return input.toUpperCase();
    }
    return input.toLowerCase();
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items?.filter((item) => item.rating >= 4);
  }


  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === 'string') {
      return value.length;
    } else if (typeof value === 'number') {
      return value * 2;
    } else {
      throw new Error('Invalid type');
    }
  }

  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    return products.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return 'Weekend';
      default:
        return 'Weekday';
    }
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error('Negative number'));
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }
}
