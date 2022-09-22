import React from "react";

export default function Logic() {
  //Cho mảng yêu cầu viết hàm render là giao diện như hình
  const arrCategory = [
    { id: "Fol1", name: "Folder 1", idParent: null },
    { id: "Fol2", name: "Folder 2", idParent: null },
    { id: "Fol3", name: "Folder 3", idParent: null },
    { id: "Fol4", name: "Folder 4", idParent: null },
    { id: "Fol1_1", name: "Folder 1.1", idParent: "Fol1" },
    { id: "Fol1_2", name: "Folder 1.2", idParent: "Fol1" },
    { id: "Fol1_3", name: "Folder 1.3", idParent: "Fol1" },
    { id: "Fol2_1", name: "Folder 2.1", idParent: "Fol2" },
    { id: "Fol2_2", name: "Folder 2.2", idParent: "Fol2" },
    { id: "Fol2_3", name: "Folder 2.3", idParent: "Fol2" },
    { id: "Fol3_1", name: "Folder 3.1", idParent: "Fol3" },
    { id: "Fol3_2", name: "Folder 3.2", idParent: "Fol3" },
    { id: "Fol3_3", name: "Folder 3.3", idParent: "Fol3" },
    { id: "Fol1_1_1", name: "Folder 1.1.1", idParent: "Fol1_1" },
    { id: "Fol1_1_2", name: "Folder 1.1.2", idParent: "Fol1_1" },
    { id: "Fol1_2_2", name: "Folder 1.2.2", idParent: "Fol1_2" },
    { id: "Fol1_2_3", name: "Folder 1.2.3", idParent: "Fol1_2" },
    { id: "Fol2_2_2", name: "Folder 2.2.2", idParent: "Fol2_2" },
    { id: "Fol3_2_2", name: "Folder 3.2.2", idParent: "Fol1_1" },
    { id: "Fol3_2_2_3", name: "Folder 3.2.2.3", idParent: "Fol3_2_2" },
    { id: "Fol3_2_2_3_1", name: "Folder 3.2.2.3.1", idParent: "Fol3_2_2_3" },
    {
      id: "Fol3_2_2_3_1_1",
      name: "Folder 3.2.2.3.1.1",
      idParent: "Fol3_2_2_3_1",
    },
    {
      id: "Fol3_2_2_3_1_1_1",
      name: "Folder 3.2.2.3.1.1.1",
      idParent: "Fol3_2_2_3_1_1",
    },
  ];

  // const demp = () => {
  //   return arrCategory.reduce((array, item) => {
  //     if(item.idParent === null) {
  //       return [...array, item];
  //     }
  //     const parent = array.find((ele) => ele.id === item.idParent)
  //   },[])
  // }

  // const demo = (arrCategory) => {
  //   let newArr = [];
  //   for (let i = 0; i < arrCategory.length; i++) {
  //     for (let j = 1; j < arrCategory.length; j++) {
  //       if (arrCategory[i].id === arrCategory[j].idParent) {
  //         newArr = [...newArr, arrCategory[i], arrCategory[j]];
  //         continue;
  //       }
  //     }
  //   }
  //   return newArr;
  // };

  // const test = demo(arrCategory);
  // // console.log(test);

  // const step1 = test.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // const res2 = demo(step1);
  // const step2 = res2.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // const res3 = demo(step2);
  // const step3 = res3.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // const res4 = demo(step3);
  // const step4 = res4.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // const res5 = demo(step4);
  // const step5 = res5.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // const res6 = demo(step5);
  // const step6 = res6.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);

  // // const cached = {};
  // // const children = [];

  // // for (let i = 0; i < arrCategory.length; i++) {
  // //   const item = {
  // //     id: arrCategory[i].id,
  // //     name: arrCategory[i].name,
  // //     idParent: arrCategory[i].idParent,
  // //     items: arrCategory[i]?.map((ele) => ({ id: ele, items: [] })),
  // //   };

  // //   if (cached[item.idParent]) {
  // //     cached[item.idParent].arrCategory = item.items;
  // //   } else {
  // //     children.push(item);
  // //     cached[item.idParent] = item;
  // //   }

  // //   for (let j = 0; j < item.items.length; j++) {
  // //     cached[item.items[j].idParent] = item.items[j];
  // //   }
  // // }

  // // const result = {
  // //   items: children,
  // // };
  // // console.log(result);

  return (
    <div className="container">
      <div>
        {/* {step6?.map((item, index) => {
          return (
            <ul key={index}>
              <li style={{ listStyle: "none" }}>
                <i className="fa fa-folder">
                  {" "}
                  <span style={{ marginLeft: "10px" }}>{item.name}</span>
                </i>
                <ul>
                  <li style={{ listStyle: "none" }}>
                  <i className="fa fa-folder">
                  {" "}
                  <span style={{ marginLeft: "10px" }}>{}</span>
                </i>
                  </li>
                </ul>
              </li>
            </ul>
          );
        })} */}
      </div>
    </div>
  );
}
