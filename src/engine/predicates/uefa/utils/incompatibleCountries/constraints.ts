import { stubTrue } from 'lodash'

import type Tournament from 'model/Tournament'
import type Stage from 'model/Stage'
import { type Country } from 'model/types'

import isInsideInterval from 'utils/isInsideInterval'

interface PartialItem {
  countries: [Country, Country],
  predicate?: (season: number, tournament?: Tournament, stage?: Stage) => boolean,
}

const constraints: PartialItem[] = [
  {
    countries: ['Russia', 'Ukraine'],
    predicate: isInsideInterval(2014, Number.MAX_SAFE_INTEGER),
  },
  {
    countries: ['Azerbaijan', 'Armenia'],
  },
  {
    countries: ['Serbia', 'Kosovo'],
  },
  {
    countries: ['Bosnia & Herzegovina', 'Kosovo'],
  },
  {
    countries: ['Spain', 'Gibraltar'],
  },
]

type OptionalPropertyOf<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

type ItemOptionalProperty = OptionalPropertyOf<PartialItem>

const defaultItem: Required<Pick<PartialItem, ItemOptionalProperty>> = {
  predicate: stubTrue,
}

export default constraints.map(item => ({
  ...defaultItem,
  ...item,
}))
