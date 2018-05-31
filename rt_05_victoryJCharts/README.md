rt_05: This project was copied from rt_04 project

## Table of Contents

- [Introduction](#Introduction)
- [JSON](#JSON)
- [Components](#Components)
  - [StatsPanel](#StatsPanel)

## Introduction

After experiments and drills with Victory react library in rt_04, I try to implement a reusable component that can display an array of statistic data in the form of pie chars and bar charts.
This component makes use of React Victory and Redux. 
Redux is meant to be an help for initial setup and possible future enhancements (like event handling and command execution)

## JSON

JSON file will provide the following information:
- the tipe of data to be shown 
  - Univariate frequency tables
- the type of the chart (pie/bar)
- involved fields (attributes) of input data to be shown (one chart per field)
- values may be counted as merged (categories)

## Components

### StatsPanel

An array of charts created with input data and configuration data provided through a JSON file.

For terminology and backgrounds I refer to this wiki [here](https://en.wikipedia.org/wiki/Frequency_distribution).

