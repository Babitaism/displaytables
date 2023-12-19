const dataJoiner = (data) => {
    let key = Object.keys(data[0]);
    let headerKeys = data.map((i) => {
      return Object.keys(i[0])
    });

  let combinedData = key.map((i)=>{
     let name = headerKeys[0][0]
     let desc = headerKeys[0][1]
     let labour = headerKeys[1][0]
     let time = headerKeys[1][1]
     let amount = headerKeys[2][0]
    return({
      name : data[0][i][name],
      amount : data[2][i][amount],
      labour: data[1][i][labour],
      desc : data[0][i][desc],
      time : data[1][i][time],
      id: i
    })
   })
    // for (let i of key) {
    //  let name = headerKeys[0][0]
    //  let desc = headerKeys[0][1]
    //  let labour = headerKeys[1][0]
    //  let time = headerKeys[1][1]
    //  let amount = headerKeys[2][0]
    //   let obj = {};
    //   obj[name] = data[0][i][name];
    //   obj[amount] = data[2][i][amount];
    //   obj[labour] = data[1][i][labour];
    //   obj[desc] = data[0][i][desc];
    //   obj[time] = data[1][i][time];
    //   obj["id"] = i;
    //   combinedData.push(obj);
    // }
    console.log(combinedData,"cc")
    return combinedData;
  };
