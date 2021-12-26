import {
    countCooperationDA,
    getMostFrequentAD,
    getMostFrequentAA,
    getAMostFrequentD,
    countFormatByName,
    countMovieByActor,
    countMovieByDirector,
    countMovieByType,
    countMovieByTime,
    getMovieMoreThanScore,
    getMovieWithPostiveReview,
    getMovieWithNegativeReview,
    getTypeWithActor,
    getMovieWithYearAndType
} from "@/api/index";
import router from "@/router";
import Vue from 'vue';
//引入Vuex
import Vuex from "vuex";


Vue.use(Vuex)
const global = {
    namespaced: true,
    // 准备action---用于响应组件中的动作
    actions: {
        //通过时间查询电影数量的接口
        countMovieByTime(context, data) {

            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countMovieByTime(data).then((result) => {

                if (result.code === 100) {

                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    context.commit("SETCOUNT", {
                        sqlCount: result.data.sqlResult,
                        noSqlCount: result.data.noSqlResult,
                        distributedCount: result.data.distributedResult
                    })

                    router.push({name: "output"});
                } else {
                    alert("数据错误！");
                }

            });

        },
        //通过电影名查询版本数量的接口
        countFormatByName(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countFormatByName(data).then((result) => {
                    if (result.code === 100) {
                        let nosqlTime = 0;
                        let sqlTime = 0;
                        let distributedTime = 0;
                        if (result.data.noSqlTime != null) {
                            nosqlTime = result.data.noSqlTime;
                        }
                        if (result.data.sqlTime != null) {
                            sqlTime = result.data.sqlTime;
                        }
                        if (result.data.distributedTime != null) {
                            distributedTime = result.data.distributedTime;
                        }
                        context.commit("UPDATETIME", {
                            noSqlTime: nosqlTime,
                            sqlTime: sqlTime,
                            distributedTime: distributedTime
                        });
                        let sqlResult = [];
                        let noSqlResult = [];
                        let distributedResult = [];
                        if (result.data.noSqlResult != null) {
                            noSqlResult = result.data.noSqlResult;
                        }
                        if (result.data.sqlResult != null) {
                            sqlResult = result.data.sqlResult;
                        }
                        if (result.data.distributedResult != null) {
                            distributedResult = result.data.distributedResult;
                        }
                        context.commit("SETCOUNT", {
                            sqlCount: sqlResult.length,
                            noSqlCount: noSqlResult.length,
                            distributedCount: distributedResult.length,
                        })

                        //维护电影列表和查询数量
                        let resList = [];
                        for (let item in sqlResult) {
                            resList.unshift({
                                序号: sqlResult.length - item,
                                电影名称: sqlResult[item]['title'],
                                版本数量: sqlResult[item]['version_num']
                            })
                        }
                        context.commit("UPDATEMOVIENUM", resList.length);
                        context.commit("UPDATEMOVILIST", resList);
                        router.push({name: "output"});
                    } else {
                        alert("数据错误！");
                    }
                }
            )
            ;
        },
//通过导演查询电影数量的接口
        countMovieByDirector(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countMovieByDirector(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = [];
                    let noSqlResult = [];
                    let distributedResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult.length,
                        noSqlCount: noSqlResult.length,
                        distributedCount: distributedResult.length,
                    })

                    //维护电影列表和查询数量
                    let resList = [];
                    for (let item in sqlResult) {
                        resList.unshift({
                            序号: sqlResult.length - item,
                            导演名: sqlResult[item]['director_name'],
                            执导电影数量: sqlResult[item]['movie_count']
                        })
                    }
                    context.commit("UPDATEMOVIENUM", resList.length);
                    context.commit("UPDATEMOVILIST", resList);
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        }
        ,

//TODO:Return改名为Result
//通过演员查询电影数量的接口
        countMovieByActor(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countMovieByActor(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = [];
                    let noSqlResult = [];
                    let distributedResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult.length,
                        noSqlCount: noSqlResult.length,
                        distributedCount: distributedResult.length,
                    })

                    //维护电影列表和查询数量
                    let resList = [];
                    for (let item in sqlResult) {
                        resList.unshift({
                            序号: sqlResult.length - item,
                            演员名: sqlResult[item]['actor_name'],
                            参演电影数量: sqlResult[item]['movie_count']
                        })
                    }
                    context.commit("UPDATEMOVIENUM", resList.length);
                    context.commit("UPDATEMOVILIST", resList);
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        }
        ,
//查看演员之间合作的数量的接口
        getAMostFrequentD(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getAMostFrequentD(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });

                    let noSqlResult = [];

                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }

                    context.commit("SETCOUNT", {
                        sqlCount:0,
                        noSqlCount: noSqlResult.length,
                        distributedCount: 0,
                    })
                        context.commit("UPDATEMOVIENUM", noSqlResult.length);
                        context.commit("UPDATEMOVILIST",noSqlResult);

                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        },
//查看演员和导演合作的数量的接口
        countCooperationDA(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countCooperationDA(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });

                    let noSqlResult = 0;

                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }

                    context.commit("SETCOUNT", {
                        sqlCount: 0,
                        noSqlCount: noSqlResult,
                        distributedCount: 0,
                    })
                    let data = context.state.input.split('-');
                    context.commit("UPDATEMOVILIST",[{
                        演员名:data[0],
                        导演名:data[1],
                        合作次数:noSqlResult
                    }]);

                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        },
        getMostFrequentAD(context) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMostFrequentAD().then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let noSqlResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }

                    context.commit("SETCOUNT", {
                        sqlCount: 0,
                        noSqlCount: noSqlResult.length,
                        distributedCount: 0,
                    })
                    context.commit("UPDATEMOVIENUM", noSqlResult.length);
                    context.commit("UPDATEMOVILIST",noSqlResult);

                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        },
        getMostFrequentAA(context) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMostFrequentAA().then((result) => {
                console.log(result)
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });

                    let noSqlResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }

                    context.commit("SETCOUNT", {
                        sqlCount: 0,
                        noSqlCount: noSqlResult.length,
                        distributedCount:0,
                    })
                    context.commit("UPDATEMOVIENUM", noSqlResult.length);
                    context.commit("UPDATEMOVILIST",noSqlResult);

                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        },
//通过电影类别查询电影数量的接口
        countMovieByType(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            countMovieByType(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = 0;
                    let noSqlResult = 0;
                    let distributedResult = 0;
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult,
                        noSqlCount: noSqlResult,
                        distributedCount: distributedResult,
                    })
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        }
        ,
//通过电影的评分查询电影信息的接口
        getMovieMoreThanScore(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMovieMoreThanScore(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = [];
                    let noSqlResult = [];
                    let distributedResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult.length,
                        noSqlCount: noSqlResult.length,
                        distributedCount: distributedResult.length,
                    })
                    context.commit("UPDATEMOVIENUM", sqlResult.length);
                    context.commit("UPDATEMOVILIST", sqlResult);

                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        }
        ,
        //通过用户的评分情感分析查询电影信息(名称和分数)
        getMovieWithPostiveReview(context) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMovieWithPostiveReview().then(result => {


                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = [];
                    let noSqlResult = [];
                    let distributedResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult.length,
                        noSqlCount: noSqlResult.length,
                        distributedCount: distributedResult.length,
                    })

                    //维护电影列表和查询数量
                    let resList = [];

                    for (let item in sqlResult) {
                        resList.unshift({
                            序号: sqlResult.length - item,
                            电影名: sqlResult[item]['title'],
                            asin:sqlResult[item]['product_id']
                        })
                    }
                    context.commit("UPDATEMOVIENUM", resList.length);
                    context.commit("UPDATEMOVILIST", resList);
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            })
        },//通过用户的评分情感分析查询电影信息(名称和分数)
        getMovieWithNegativeReview(context) {

            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMovieWithNegativeReview().then(result => {

                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = [];
                    let noSqlResult = [];
                    let distributedResult = [];
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }
                    context.commit("SETCOUNT", {
                        sqlCount: sqlResult.length,
                        noSqlCount: noSqlResult.length,
                        distributedCount: distributedResult.length,
                    })

                    //维护电影列表和查询数量
                    let resList = [];

                    for (let item in sqlResult) {
                        resList.unshift({
                            序号: sqlResult.length - item,
                            电影名: sqlResult[item]['title'],
                            asin:sqlResult[item]['product_id']
                        })
                    }
                    context.commit("UPDATEMOVIENUM", resList.length);
                    context.commit("UPDATEMOVILIST", resList);
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            })
        },

        //通过演员查询电影类型的接口
        getTypeWithActor(context, data) {
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getTypeWithActor(data).then((result) => {
                if (result.code === 100) {
                    let nosqlTime = 0;
                    let sqlTime = 0;
                    let distributedTime = 0;
                    if (result.data.noSqlTime != null) {
                        nosqlTime = result.data.noSqlTime;
                    }
                    if (result.data.sqlTime != null) {
                        sqlTime = result.data.sqlTime;
                    }
                    if (result.data.distributedTime != null) {
                        distributedTime = result.data.distributedTime;
                    }
                    context.commit("UPDATETIME", {
                        noSqlTime: nosqlTime,
                        sqlTime: sqlTime,
                        distributedTime: distributedTime
                    });
                    let sqlResult = {};
                    let noSqlResult = {};
                    let distributedResult = {};
                    if (result.data.noSqlResult != null) {
                        noSqlResult = result.data.noSqlResult;
                    }
                    if (result.data.sqlResult != null) {
                        sqlResult = result.data.sqlResult;
                    }
                    if (result.data.distributedResult != null) {
                        distributedResult = result.data.distributedResult;
                    }

                    context.commit("SETCOUNT", {
                        sqlCount: Object.keys(sqlResult).length,
                        noSqlCount: Object.keys(noSqlResult).length,
                        distributedCount: Object.keys(distributedResult).length,
                    })

                    //维护电影列表和查询数量
                    let resList = [];
                    for (let key in sqlResult) {
                        resList.unshift({
                            演员名: key,
                            参演电影类型: sqlResult[key]
                        })
                    }
                    for(let i=0;i<resList.length;i++){
                        resList[i]['参演电影类型']= Array.from(new Set(resList[i]['参演电影类型']));
                    }
                    context.commit("UPDATEMOVIENUM", resList.length);
                    context.commit("UPDATEMOVILIST", resList);
                    router.push({name: "output"});
                } else {
                    alert('数据错误！');
                }
            });
        },
        getMovieWithYearAndType(context,data){
            context.commit("UPDATEMOVIENUM", 0);
            context.commit("UPDATEMOVILIST", []);
            getMovieWithYearAndType(data).then((result) => {

                    if (result.code === 100) {
                        let nosqlTime = 0;
                        let sqlTime = 0;
                        let distributedTime = 0;
                        if (result.data.noSqlTime != null) {
                            nosqlTime = result.data.noSqlTime;
                        }
                        if (result.data.sqlTime != null) {
                            sqlTime = result.data.sqlTime;
                        }
                        if (result.data.distributedTime != null) {
                            distributedTime = result.data.distributedTime;
                        }
                        context.commit("UPDATETIME", {
                            noSqlTime: nosqlTime,
                            sqlTime: sqlTime,
                            distributedTime: distributedTime
                        });
                        let sqlResult = [];
                        let noSqlResult = [];
                        let distributedResult = [];
                        if (result.data.noSqlResult != null) {
                            noSqlResult = result.data.noSqlResult;
                        }
                        if (result.data.sqlResult != null) {
                            sqlResult = result.data.sqlResult;
                        }
                        if (result.data.distributedResult != null) {
                            distributedResult = result.data.distributedResult;
                        }
                        context.commit("SETCOUNT", {
                            sqlCount: sqlResult.length,
                            noSqlCount: noSqlResult.length,
                            distributedCount: distributedResult.length,
                        })

                        //维护电影列表和查询数量
                        let resList = [];
                        for (let item in sqlResult) {

                            resList.unshift({
                                序号: sqlResult.length - item,
                                title: sqlResult[item]['title'],
                                Asin: sqlResult[item]['product_id']
                            })
                        }
                        context.commit("UPDATEMOVIENUM", resList.length);
                        context.commit("UPDATEMOVILIST", resList);
                        router.push({name: "output"});
                    } else {
                        alert("数据错误！");
                    }
                }
            )
            ;
        }
    },
// 准备mutations---用于操作数据
    mutations: {
        SETNUMS(state,data){
            state.movieList[0]['合作次数']=data;
        },

        SETSELECT(state, data) {
            state.select = data;
        }
        ,
        SETINPUT(state, data) {
            state.input = data;
        }
        ,
        UPDATEMOVIENUM(state, data) {
            state.movieNum = data;
        }
        ,
        UPDATEMOVILIST(state, data) {

            state.movieList = data;
        }
        ,
        UPDATETIME(state, data) {

            state.noSqlTime = data.noSqlTime;
            state.sqlTime = data.sqlTime;
            state.distributedTime = data.distributedTime;

        }
        ,
        SETCOUNT(state, data) {
            if (data.sqlCount != null) {
                state.sqlCount = data.sqlCount;
            } else {
                state.sqlCount = 0;
            }
            if (data.noSqlCount != null) {
                state.noSqlCount = data.noSqlCount;
            } else {
                state.noSqlCount = 0;
            }
            if (data.distributedCount != null) {
                state.distributedCount = data.distributedCount;
            } else {
                state.distributedCount = 0;
            }
        }
        ,
        SETRETURN(state, data) {
            if (data.sqlReturn != null) {
                state.sqlReturn = data.sqlReturn;
            } else {
                state.sqlReturn = 0;
            }
            if (data.noSqlReturn != null) {
                state.noSqlReturn = data.noSqlReturn;
            } else {
                state.noSqlReturn = 0;
            }
            if (data.distributedReturn != null) {
                state.distributedReturn = data.distributedReturn;
            } else {
                state.distributedReturn = 0;
            }
        }
    }
    ,
// 准备state---用于存储数据
    state: {
        input: "",
        movieNum: 0,
        movieList: [],
        noSqlTime: 0.05,
        sqlTime: 0.07,
        distributedTime: 0.19,
        select: "",
        sqlCount: 0,
        noSqlCount: 0,
        distributedCount: 0,
        sqlReturn: null,
        noSqlReturn: null,
        distributedReturn: null,
    },

}

export default new Vuex.Store({
    modules: {
        global,
    }
})