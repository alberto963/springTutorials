This project was copied from rt_03 project

## Table of Contents

- [Introduction](#Introduction)
- [Charts](#Charts)
  - [Pie](#Pie)
  - [Bar](#Bar)

## Introduction

Experimental application on usage of Victory React components with display driven by a json configuration.
Following charts are prototyped:
* pie
* bar

## Charts

t.b.a

### Pie

From victory react ecosystem, something like:

```
  <VictoryPie standalone={false} width={400} height={400} data={pieData1} innerRadius={68} labelRadius={100} style={pieStyle} />
  <VictoryLabel textAnchor='middle' style={{ fontSize: 20 }} x={200} y={200} text='Pie!' />
```

### Bar

From victory react ecosystem, something like:

```
  VictoryBar standalone={false} width={400} height={400} data={data} x="quarter" y="earnings"/>
```
