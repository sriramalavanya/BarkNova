import React from 'react';
import Cardcomponent from '../CardComponent/CardComponent';
import './SearchBarComponent.css';

let dogs = [];

let inputChangeHandler = (event) => {
    let filteredDogs = dogs.filter(val => {
        return val.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    Cardcomponent.showDogs(filteredDogs);
}

let callapi = function () {

    return new Promise((resolve, reject) => {
        fetch('https://api.thedogapi.com/v1/breeds?limit=100000&page=0')
            .then((reqresponse) => {
                console.log(reqresponse);
                return reqresponse.json();
            })
            .then((dogresponse) => {
                console.log(dogresponse);
                resolve(dogresponse);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};

const Search = () => {

    callapi().then(
        (val) => {
            dogs = val;
            Cardcomponent.showDogs(dogs);
        }
    ).catch((error) => {
        console.log(error);
    });

    return (
        <div className="mainDiv">

            <div className="searchDiv">
                <input className="searchBar" type="text/searchBar" id="searchinput" placeholder='Search for dog breeds..'
                    onChange={inputChangeHandler} />
                <a class="searchButton" href="#Con">&#128269;</a>
            </div>
        </div>
    )
}

export default Search