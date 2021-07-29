# somedaycode-time

Do you want to know how much time passed from something created?

- `getTimePassed()`: return `Object` which has values of how much time passed `{dateName: string, timePassed: number}`
- `getTextFromTimePassed()`: return `String` like `'1 hour ago'`

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
// 'year', 2
```

#### getTextFromTimePassed()

```ts
// testTime = '2021-07-30 04:06'
const timePassed = getTimePassed('2021-07-30 03:05');
const text = getTextFromTimePassed(timePassed);
// test === '1 hour ago'
```
