import { AlcoholClass, WineData, classWiseFlavanoidsType, classWiseGammaType, typeTempObj } from "./types";
import { FlavanoidsAnalysisObject, GammaAnalysisObject } from "./types";
const wineData = require('./data.json')

// classWiseFlavanoids is a filtered object with Key as alcohol class and value as array of flavanoids of each data object
let classWiseFlavanoids:classWiseFlavanoidsType = {};
wineData.forEach((item: WineData) => {
    if (classWiseFlavanoids[item['Alcohol']]) {
        classWiseFlavanoids[item['Alcohol']].push(Number(item["Flavanoids"]))
    } else {
        classWiseFlavanoids[item['Alcohol']] = [Number(item["Flavanoids"])]
    }
})

// classWiseGamma is a filtered object with Key as alcohol class and value as array of gamma of each data object
let classWiseGamma: classWiseGammaType = {};
wineData.forEach((item: WineData) => {
    let gamma = (item.Ash * item.Hue) / item.Magnesium;

    if (classWiseGamma[item['Alcohol']]) {
        classWiseGamma[item['Alcohol']].push(gamma)
    } else {
        classWiseGamma[item['Alcohol']] = [gamma]
    }
})

//sum function returns the sum of given array
const sum = (arr: number[]) => {
    return arr.reduce((acc: number, value: number) => acc + Number(value), 0)
}

// ascSort function returns an ascending sorted array of given array
const ascSort = (arr: number[]) => {
    return arr.sort((a: number, b: number) => a - b)
}
// mean function returns the mean of given array
const mean = (arr: number[]) => {
    return (sum(arr) / arr.length).toFixed(3)
}

//median function will return the median of given array
const median = (arr: number[]) => {
    const sortedArray = ascSort(arr)
    const middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0)
        return ((sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2).toFixed(3)
    else
        return (sortedArray[middleIndex]).toFixed(3);
}

// mode function will return the mode of given array
const mode = (arr: number[]) => {
    let tempObj: typeTempObj = {}
    let mode: number = -1;

    for (let i = 0; i < arr.length; i++) {
        if (tempObj[arr[i]]) {
            tempObj[arr[i]] = tempObj[arr[i]] + 1
        } else {
            tempObj[arr[i]] = 1
        }
    }

    for (let key in tempObj) {
        if (mode < tempObj[key])
            mode = Number(key)
    }

    return mode.toFixed(3);
}

// getFlavanoidMean function returns class wise mean of flavanoids
const getFlavanoidMean = () => {
    let flavanoidMean:AlcoholClass = {}
    for(let key in classWiseFlavanoids){
        flavanoidMean[key] = mean(classWiseFlavanoids[key])
    }
    return flavanoidMean
}

// getFlavanoidMedian function returns class wise median of flavanoids
const getFlavanoidMedian = () => {
    let flavanoidMedian:AlcoholClass = {}
    for(let key in classWiseFlavanoids){
        flavanoidMedian[key] = median(classWiseFlavanoids[key])
    }
    return flavanoidMedian
}

// getFlavanoidMode function returns class wise mode of flavanoids
const getFlavanoidMode = () => {
    let flavanoidMode:AlcoholClass = {}
    for(let key in classWiseFlavanoids){
        flavanoidMode[key] = mode(classWiseFlavanoids[key])
    }
    return flavanoidMode
}

// getGammaMean function returns class wise mean of gamma values
const getGammaMean = () => {
    let gammaMean:AlcoholClass = {}
    for(let key in classWiseGamma){
        gammaMean[key] = mean(classWiseGamma[key])
    }
    return gammaMean
}

// getGammaMedian function returns class wise median of gamma values
const getGammaMedian = () => {
    let gammaMedian:AlcoholClass = {}
    for(let key in classWiseGamma){
        gammaMedian[key] = median(classWiseGamma[key])
    }
    return gammaMedian
}

// getGammaMode function returns class wise mode of gamma values
const getGammaMode = () => {
    let gammaMode:AlcoholClass = {}
    for(let key in classWiseGamma){
        gammaMode[key] = mode(classWiseGamma[key])
    }
    return gammaMode
}

//getFlavanoidAnalysis function returns an array of array consists tabular row formatted data of flavanoid analysis
export const getFlavanoidAnalysis = () => {
    let results:FlavanoidsAnalysisObject = {
        'Flavanoids Mean' : Object.values(getFlavanoidMean()),
        'Flavanoids Median' : Object.values(getFlavanoidMedian()),
        'Flavanoids Mode' : Object.values(getFlavanoidMode())
    }
    let arr:[string , string []][] = Object.entries(results)
    let flatResults:string[][] = arr.map((item:[string , string []])=>item.flat(2))
    return flatResults
}

//getGammaAnalysis function returns an array of array consists tabular row formatted data of gamma analysis

export const getGammaAnalysis = () => {
    let results:GammaAnalysisObject = {
        'Gamma Mean' : Object.values(getGammaMean()),
        'Gamma Median' : Object.values(getGammaMedian()),
        'Gamma Mode' : Object.values(getGammaMode())
    }
    let arr:[string , string []][] = Object.entries(results)
    let flatResults:string[][] = arr.map((item:[string , string []])=>item.flat(2))
    return flatResults
}

//getAlcoholClassList function returns class list of alcohol for table on UI
export const getAlcoholClassList = () =>{
    let result:string[] = []
    result = Object.keys(getFlavanoidMean())
    return result
}
