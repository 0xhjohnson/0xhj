---
title: 'Reduce Function Explained'
date: 2020-05-16T22:29:22-04:00
tags: [javascript]
draft: false
---

The [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function iterates through an array executing the provided callback function once for each item in the array. Resulting to a single output value.

![Reduce function prototype](images/reduce-prototype.png)

The `callbackFn` above receives four values `(accumulator, current, index, sourceArray)` but often you only need the first two `(accumulator, current)`.

Let's assume we have an array of objects containing a list of baseball players in the shape:

```js
const players = [
  {
    name: 'Ronald Acuna Jr.',
    salary: 12.5,
    status: 'Active',
  },
  {
    name: 'Chris Sale',
    salary: 29,
    status: 'Active',
  },
  {
    name: 'Mike Trout',
    salary: 33,
    status: 'Active',
  },
  {
    name: 'Derek Jeter',
    salary: 12,
    status: 'Inactive',
  },
];
```

To sum up the total salary cap needed from the array of players we just need to pass in a callback function and our initial value for the accumulator. I like to think of the initial value as the **type** of my output value. For example, if we pass in a number as the inital value our output will be of **type** number.

```js
function sumReducer(accumulator, player) {
  return accumulator + player.salary;
}

const total = players.reduce(sumReducer, 0); // total = 86.5
```

If you want a high level abstraction lets bring in Geralt of Rivia (for the Witcher fans). Geralt is going to be our reduce method. You pass him an an array to iterate over and a spell _reducer_ function to cast on each item in the array. You also tell him the output is of **type** number and starts at 0.

![Geralt of Rivia](images/geralt.jpg)

Geralt eagerly awaits your command. Let's figure out how to get the names of all the _Active_ players. We want the output to be an array of strings containing the name of each active player.

```js
function activeReducer(accumulator, player) {
  if (player.status === 'Active') accumulator.push(player.name);

  return accumulator;
}

const activePlayers = players.reduce(activeReducer, []); // ['Ronald Acuna Jr.', 'Chris Sale', ...]
```

By now you can probably see that the reduce function is versatile and can be used in many scenarios. You can normalize an array of objects to a specific shape, sum up values, filter out object properties on specific conditions etc..
