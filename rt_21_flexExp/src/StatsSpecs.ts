import { ChartType } from './enums'

const testStruct = {
  d0: [
    {
      title: 'T0-0',
      type: ChartType.PIE,
      dataset: 'D0',
      attributes: ['a0'],
      categories: [
        { label: 'L0', values: ['V0'], fill: '#FFBF02' },
      ],
    },
    {
      title: 'T0-1',
      type: ChartType.PIE,
      dataset: 'D0',
      attributes: ['a1', 'a2'],
      rule: 'and',
      categories: [
        { label: 'L1', values: ['V1', 'L2'], fill: '#FFBF02' },
      ],
    },
  ],
  d1: [
    {
      title: 'T1-0',
      type: ChartType.PIE,
      dataset: 'D1',
      attributes: ['a3'],
      categories: [
        { label: 'L2', values: ['V2'], fill: 'green' },
        { label: 'L3', values: ['L3'], fill: 'red' },
      ],
    },
    {
      title: 'T1-1',
      type: ChartType.BAR,
      dataset: 'D1',
      attributes: ['a4'],
      categories: [
        { label: 'L4', values: ['V3'], fill: 'red' },
        { label: 'L5', values: ['V2'], fill: 'green' },
      ],
    },
  ],
  d2: [
    {
      title: 'T2-0',
      type: ChartType.PIE,
      dataset: 'D2',
      attributes: ['a5'],
      categories: [
        { label: 'L6', values: ['V4'], fill: 'green' },
        { label: 'L7', values: ['V5'], fill: 'red' },
        { label: 'L8', values: ['V6'], fill: 'blue' },
        { label: 'L9', values: ['V7'], fill: 'grey' },
        { label: 'L10', values: ['V8'], fill: 'pink' },
        { label: 'L11', values: ['V9'], fill: 'yellow' },
      ],
    },
    {
      title: 'T2-1',
      type: ChartType.BAR,
      dataset: 'D2',
      attributes: ['a6'],
      categories: [
        { label: 'L12', values: ['V10'], fill: 'green' },
        { label: 'L13', values: ['V11'], fill: 'red' },
        { label: 'L14', values: ['V12'], fill: 'blue' },
        { label: 'L13', values: ['V13'], fill: 'grey' },
      ],
    },
    {
      title: 'T2-2',
      type: ChartType.BAR,
      dataset: 'D2',
      attributes: ['a6'],
      categories: [
        { label: 'L12', values: ['V10'], fill: 'green' },
        { label: 'L13', values: ['V11'], fill: 'red' },
        { label: 'L14', values: ['V12'], fill: 'blue' },
        { label: 'L13', values: ['V13'], fill: 'grey' },
      ],
    }
  ],
  d3: [
    {
      title: 'T3-0',
      type: ChartType.PIE,
      dataset: 'D3',
      attributes: ['a1'],
      categories: [
        { label: 'L2', values: ['V2'], fill: 'green' },
        { label: 'L3', values: ['L3'], fill: 'red' },
      ],
    },
    {
      title: 'T3-1',
      type: ChartType.BAR,
      dataset: 'D3',
      attributes: ['a7'],
      categories: [
      ],
    }
  ],
  d4: [
    {
      title: 'T4-0',
      type: ChartType.PIE,
      dataset: 'D4',
      attributes: ['a8'],
      categories: [
        { label: 'L15', values: ['L15'], fill: 'blue' },
      ],
    }
  ]
}

const structs = () => testStruct

export default structs
