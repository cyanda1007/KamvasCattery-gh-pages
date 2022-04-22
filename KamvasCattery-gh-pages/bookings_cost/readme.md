# Tests the bookingCost function

We created a function called `bookingCost` (in the `bookings.js` file) that takes in a booking requests to Kamva's Cattery. They need this function to help optimize their booking process.

**Discounts:**

* Wednesday check-ins get 25% discount.
* Friday check-ins get a 15% discount.

The daily cost is `R45` per day.

A booking objects looks like this:

```
{
  check_in_day: 'Monday',
  duration: 3,
  cat_name : 'Snowy'
}
```

This booking should cost: `R45 * 3 = R135.00` and the function should return that if called with this parameter.

```
{
  check_in_day: 'Wednesday',
  duration: 3,
  cat_name : 'Snowy'
}
```

This booking should cost: `R45 * 3 = R135.00 * 0.75 = 101.25` and the function should return that if called with this parameter.

```
{
  check_in_day: 'Friday',
  duration: 3,
  cat_name : 'Snowy'
}
```

This booking should cost: `R45 * 3 = R135.00 * 0.85 = 114.75` and the function should return that if called with this parameter.

## Do this

Write **3 unit tests** using Mocha that tests if `bookingCost` function behaves appropriatly. Use the data provided above.


> **Note:** create 1 `describe` block with 3 `it` blocks.

* Setup mocha in the `index.html` file in this folder.
* Write the mocha test in `./test/bookings.tests.js` fil e.
