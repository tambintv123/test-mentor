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
  const render = () => {
    return arrCategory?.reduce((prev, next) => {
      //   prev[next.parentId]
      //     ? prev[next.parentId].push(next)
      //     : (prev[next.parentId] = [next]);
      //   console.log(prev[next.id]);
      //   console.log(prev[next.idParent]);

      console.log(next);
      if (prev[next.id] === prev[next.idParent]) {
        return (
          <ul>
            <li style={{ listStyle: "none" }}>
              {prev[next.name]}
              <ul>
                <li style={{ listStyle: "none" }}>{prev[next.name]}</li>
              </ul>
            </li>
          </ul>
        );
      }
    }, []);
  };

  //   const demo = () => {
  //     let newArr = [];
  //     for (let i = 0; i < arrCategory.length; i++) {
  //       for (let j = 1; j < arrCategory.length; j++) {
  //         if (arrCategory[i].id === arrCategory[j].idParent) {
  //           newArr = [...newArr, arrCategory[i].name, arrCategory[j].name];
  //           //   newArr = newArr.push(arrCategory[i].name);
  //           //   newArr = newArr.push(arrCategory[j].name);

  //           //   console.log(newArr);
  //           continue;
  //         }
  //       }
  //     }
  //   };

  return <div>{render()}</div>;
}
