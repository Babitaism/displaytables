import { useRef } from "react";
import React, { useEffect } from "react";

function Details() {
  let names, adresses, city;
  let finalvalue;
  const getDetails = async () => {
    let details = await fetch(
      "https://jsonplaceholder.typicode.com/users?_page=1&_limit=2"
    );
    finalvalue = await details.json();

    for (let i in finalvalue) {
      names = finalvalue[i].name;
      adresses = finalvalue[i].address;
      city = finalvalue[i].address.city;
    }
  };

  console.log(finalvalue);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>City</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
}

export default Details;

let obj = {
  value: { columns: [], rows: [] },
  value1: {
    flagValue: false,
    refinedData: { columns: [], rows: [] },
  },
};
