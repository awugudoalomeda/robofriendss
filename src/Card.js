import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Card = ({name, email, id}) => { //destructuring

    return (
        <div className ='tc bg-light-green dib pa3 ma2 grow bw5 shadow-5 br4'>
        <img src='../robopicture.png' alt ='RobotPhoto' width='150px' height='150px'/>
            <div>
                {/* <h3>{props.name}</h3> */}
                <h4>{name}</h4>
                <p className =''>{email}</p>
                <p className =''>{`Has an id of ${id}`}</p>
            </div>
        </div>
    );
}

export default Card;
