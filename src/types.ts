export type WineData = {
    Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: string;
  "Nonflavanoid phenols": string;
  Proanthocyanins: string;
  "Color intensity": string;
  Hue: number;
  "OD280/OD315 of diluted wines": string;
  Unknown: number;
  Gamma?: number
}

export type FlavanoidsAnalysisObject = {
  'Flavanoids Mean' ?: string[],
    'Flavanoids Median' ?: string[],
    'Flavanoids Mode' ?: string[]
}

export type GammaAnalysisObject = {
  'Gamma Mean' ?: string[],
    'Gamma Median' ?: string[],
    'Gamma Mode' ?: string[]
}

export type AlcoholClass = {
  [key: string | number] : string 

}

export type typeTempObj = {
  [key:number] : number
}

export type classWiseFlavanoidsType = {
  [key: string | number] : number[]
}

export type classWiseGammaType = {
  [key: string | number] : number[]
}