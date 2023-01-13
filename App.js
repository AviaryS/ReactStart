import './App.css';
import React from "react";

function App() {
    // task 1
    // return <div>
    // текст
    // </div>;

    // task 2
    // const text = 'текст';
    // return <div>
    // {text}
    // </div>;

    // task 3
    // const text = <p>текст</p>;
    // return <div>
    // {text}
    // </div>;

    // task 4
    // const text1 = <p>текст1</p>;
    // const text2 = <p>текст2</p>;
    // return <div>
    //     {text1}
    //     <p>!!!</p>
    //     {text2}
    // </div>;

    // task 5
    // const attr = 'block';
    // return <div id={attr}>
    //     текст
    // </div>;

    // task 6
    // const str = 'block';
    // return <div className={str}>
    //     текст
    // </div>;

    // task 7
    //     return (
    //     <div style={{
    //         color: "green",
    //         border: "3px solid black",
    //         borderRadius: "30px"
    //         }}>
    //         текст
    //     </div>
    //     )

    // task 8
    // const show = false;
    // if (!show) {
    //     return <div>текст 2</div>
    // }
    // else {
    //     return <div>текст 1</div>
    // }

    // task 9
    // const arr = ['a', 'b', 'c', 'd', 'e'];
    // const elems = arr.map(elem => <li>{elem}</li>);
    // return (
    //     <ul>
    //         {elems}
    //     </ul>
    // )

    // task 10
    // function getText() {
    //         return <p>dsf</p>
    // }
    //
    // return (
    //     <div>
    //         {getText()}
    //     </div>
    // );

    // task 11
    // const getNum1 = () => 1;
    // const getNum2 = () => 2;
    //
    // return (
    //     <div>
    //         {getNum1() + getNum2()}
    //     </div>
    // )

    // task 12
    const arr = [
        {
          'firstName': 'Alex',
          'lastName': 'Alexev',
          'countWorkDay': 30,
          'moneyPerDay': 100,
        },
        {
          'firstName': 'Ivan',
          'lastName': 'Ivanov',
          'countWorkDay': 15,
          'moneyPerDay': 1000,
        },
        {
          'firstName': 'Ars',
          'lastName': 'Mur',
          'countWorkDay': 2,
          'moneyPerDay': 10000,
        },
    ];

    let sum = 0;
    let elemsWorkers = arr.map(function(val) {
        let wage = val.countWorkDay*val.moneyPerDay;
        sum += wage;
        return (
        <tr>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.countWorkDay}</td>
            <td>{val.moneyPerDay}</td>
            <td>{wage}</td>
        </tr>
        )
    });

    return (
        <div>
            <table border="1px">
                <tr>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Кол-во отр. дней</td>
                    <td>ЗП за день</td>
                    <td>ЗП</td>
                </tr>
                {elemsWorkers}
            </table>
            <p>{sum} затратына зарпату сотрудникам</p>
        </div>
    )
}

export default App;
