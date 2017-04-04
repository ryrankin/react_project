import React from 'react';
import Person from './person';

/*export default function PersonList(){
	return (
		<div className="person-list">
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
		</div>
	);


export default function PersonList() {
    const people = [];
    for (let i=0; i<5; i++) {
        people.push(<Person />);
    }
    return (
        <div className="person-list">
            {people}
        </div>
    );
} */

/*
export default class PersonList extends React.Component {
    render() {
        const people = [];
        for (let i=0; i<5; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
}
*/


export default function PersonList(){
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Tom_Selleck_-_publicity_-_1980-1.jpg/170px-Tom_Selleck_-_publicity_-_1980-1.jpg"
                job="Male model" />
            <Person name="Donald Knuth"
                imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                job="Clever chap" />
            <Person name="Jim Carrey"
                job="being funny" />
        </div>
    );
}





