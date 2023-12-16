const refineData = (data) => {
  let combinedArr = [];
  let key = Object.keys(data[0]);
  for (let i of key) {
    let obj = {};
    obj["id"]=i
    obj["Task"] = data[0][i].name;
    obj["Cost"] = data[1][i].amount;
    obj["Manpower"] = data[2][i].labour;
    obj["TaskDescription"] = data[0][i].desc;
    obj["Time(in_hrs)"] = data[2][i].time;
    combinedArr.push(obj);
}
console.log(combinedArr[0].TaskDescription)
};

refineData()

