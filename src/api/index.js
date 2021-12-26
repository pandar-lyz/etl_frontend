import requests from "@/utils/requests";


export const countMovieByTime = (data) => {
    return requests({
        url: '/api/countMovieByTime',
        method: 'get',
        params: data
    })
}

export const countFormatByName = (data) => {
    return requests({
        url: '/api/countFormatByName',
        method: 'get',
        params: data
    })
}
export const countMovieByActor = (data) => {
    return requests({
        url: '/api/countMovieByActor',
        method: 'get',
        params: data
    })
}
export const getMovieWithYearAndType = (data) => {
    return requests({
        url: '/api/getMovieWithYearAndType',
        method: 'get',
        params: data
    })
}
export const countMovieByDirector = (data) => {
    return requests({
        url: '/api/countMovieByDirector',
        method: 'get',
        params: data
    })
}
//查找演员和导演的合作次数
export const countCooperationDA = (data) => {
    return requests({
        url: '/neo4j/countCooperationDA',
        method: 'get',
        params: data
    })
}
//合作最频繁的演员
export const getMostFrequentAA = () => {
    return requests({
        url: '/neo4j/getMostFrequentAA',
        method: 'get',
    })
}
//合作最频繁的演员导演
export const getMostFrequentAD = () => {
    return requests({
        url: '/neo4j/getMostFrequentAD',
        method: 'get',
    })
}
//合作最频繁的演员导演(参数为person1)
export const getAMostFrequentD = (data) => {
    return requests({
        url: '/neo4j/getAMostFrequentD',
        method: 'get',
        params:data
    })
}


export const countMovieByType = (data) => {
    return requests({
        url: '/api/countMovieByType',
        method: 'get',
        params: data
    })
}
export const getMovieMoreThanScore = (data) => {
    return requests({
        url: '/api/getMovieMoreThanScore',
        method: 'get',
        params: data
    })
}
export const getMovieWithPostiveReview = () => {
    return requests({
        url: '/api/getMovieWithPostiveReview',
        method: 'get',
    })
}
export const getMovieWithNegativeReview = () => {
    return requests({
        url: '/api/getMovieWithNegativeReview',
        method: 'get',
    })
}
export const getTypeWithActor = (data) => {
    return requests({
        url: '/api/getTypeWithActor',
        method: 'get',
        params: data
    })
}
