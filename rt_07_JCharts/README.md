rt_07: This project was copied from rt_05 project

## Table of Contents

- [Introduction](#Introduction)
- [JSON](#JSON)
- [Components](#Components)
  - [StatsPanel](#StatsPanel)

## Introduction

After more experiments and drills with data updating on an already displayed chart (a line of charts), I try to introduce redux and reselect library.
At the end these custom componenst make use of React Victory and Redux. 
Redux is meant to be an help for initial setup and possible future enhancements (like event handling and command execution).

In order to introduce redux, index.js file is split in different js files, one per custom component.

## JSON

JSON file will provide the following information:
- the type of data to be shown 
  - Univariate frequency tables
- the type of chart (pie/bar)
- involved fields (attributes) of input data to be shown (one chart per field)
- values may be counted as merged (categories)

## Components

### StatsPanel

An array of charts created with input data and configuration data provided through a JSON file.

For terminology and backgrounds I refer to this wiki [here](https://en.wikipedia.org/wiki/Frequency_distribution).

