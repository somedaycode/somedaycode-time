# somedaycode-time

Do you want to know how much time passed from something created?

**LIST OF Fns**

- getTimePassed
- getDiff
- getTextFrom

### HOW TO USE

---

#### getTimePassed()

Parameters

- It must be "yyyy-mm-dd h:m" (string)
- It must be milliseconds like new Date("yyyy-mm-dd h:m").getTime()
- Date.now()
- '2020-07-29T23:24:00' | 'yyyy-mm-ddThh:mm:ss'

```ts
getTimePassed('2018-07-29');
// { dateName: 'year', timePassed: 2 }

// testTime: 2021-07-30 03:58
getTimePassed('2021-07-30 03:05');
getTimePassed('2021-07-30T03:05:00');
// { dateName: 'minute', timePassed: 53 }

const { dateName, timePassed } = getTimePassed(
  new Date('2018-07-29').getTime()
);
// 'year', 3
```

#### getTextFrom()

```ts
const text = getTextFrom('2021-07-30 03:05');
// '1 hour ago'
```

#### getDiff()

```
getDiff(String | Date)
```

To get the difference in milliseconds, use getDiff

```ts
getDiff('2021-07-30', '2021-06-30'); // 2592000000
```

To get the difference another unit of DateType, pass a DateType as the third argument.

```ts
getDiff('2021-07-30', '2021-06-30', 'minute'); // 43200
```

```ts
getDiff('2021-07-30', '2021-06-30', 'hour'); // 720
```

```ts
getDiff('2021-07-30', '2021-06-30', 'day'); // 30
```
