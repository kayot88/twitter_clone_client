import React, { Component, useState } from "react";
import AsyncSelect from "react-select/async";

const AsyncSelectComponent = () => {
  const [options, setOptions] = useState({});
  const fetchData = (inputValue, callback) => {
    setTimeout(() => {
      fetch("http://www.json-generator.com/api/json/get/cpOdfHqyUO?indent=2", {
        method: "GET",
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
              data.forEach((element) => {
                tempArray.push({
                  label: `${element.auto}`,
                  value: element._id,
                });
              });
            } else {
              tempArray.push({
                label: `${data.auto}`,
                value: data._id,
              });
            }
          }
          callback(tempArray);
        })
        .catch((error) => {
          console.log(error, "catch the hoop");
        });
    }, 1000);
  };
  const onSearchChange = (selectedOption) => {
    if (selectedOption) {
      setOptions({
        selectedOption,
      });
    }
  };

  return (
    <div style={{ marginLeft: "40%", width: "200px" }}>
      <AsyncSelect
        value={options}
        loadOptions={fetchData}
        placeholder="Admin Name"
        onChange={(e) => {
          onSearchChange(e);
        }}
        defaultOptions={true}
      />
    </div>
  );
};

export { AsyncSelectComponent };
