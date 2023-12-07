import React, { useState, useEffect } from 'react';
import { submitBoard } from '../api';
import './Bingo.css'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

function initCard(){
    // track used to avoid repeats
    let used = [];
    let tempCard  = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    let id = 0
    // loop through array
    for (let row = 0; row < 5; row++) {

        for (let col = 0; col < 5; col++) {
            // get valid number for curr col
            let number = (col*15) + (Math.floor(Math.random() * 15) + 1);
            // check if used
            while(used.includes(number)){
                number = (col*15) + (Math.floor(Math.random() * 15) + 1);
            }
            // Push valid number to 'used' and card
            tempCard[row][col] = {value: number, class_List: 'bingo', id: id};
            used.push(number);
            id++;
        }            
    }
    // Manually override contents of Free space
    tempCard[2][2] = {value: 'Free', class_List: 'bingo Free', id: 12};
    return tempCard;
}

export default function App(){
    const[inputVal, setInputVal] = useState("")

    const sendMessage = () =>{
        socket.emit("send_message", {message: inputVal})
    };

    useEffect(() =>{
        socket.on('recieve_message', (data)=>{
            // alert(data.message)
            setChathistory(data.message)
        })
    }, [socket])



    // use state to control contents of card
    const[board, setBoard] = useState(initCard())
    const[user, setUser ] = useState('CaveMan')
    const[chatHistory, setChathistory] = useState("")

    const updateChathistory = () =>{
        setChathistory([...chatHistory, inputVal])
    }

    // handler for genereting new board
    const handleButtonClick = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.classList.remove('highlight');
        });        
        const newBoard = initCard();
        setBoard(newBoard);
    };

    const checkBoard = () => {
        console.log(submitBoard(board, user));
    };
    
    // Define event handler method handleMouseClick 
    function handleMouseClick(event){
        // Add the className'highlight' to the clicked object
        let classList = event.target.classList
        if(classList.contains('highlight')){
            classList.remove('highlight');
        }else{
            classList.add('highlight');
        }       
    }

    const handlSendMessage = () =>{
        if(inputVal === ""){
            return
        }
        // updateChathistory(inputVal)
        sendMessage()
        setInputVal("")
    }
    
    // Return the element
    return (
        <>
            <h1 className = 'header'>Bingo</h1>
            <div id = 'bingoContainer'>
                <div id = 'board' >
                    {board.map((row, index) => (
                        <div key = {index} className= 'row'>
                        {row.map((tile) => (
                            <div key = {tile.id} className= {tile.class_List} onClick={handleMouseClick}>
                                {tile.value}
                            </div>
                        ))}
                    </div>
                    ))}
                </div>  
            </div>
            
            <div className='btnContainer'>
                <button onClick={handleButtonClick} className='resetButton'>Reset Board</button>
            </div>
            <div className='btnContainer'>
                <button onClick={checkBoard} className='submitBoardButton'>Submit Board</button>
            </div>
            
            <div id ={"chatboxContainer"}>
                {/* {chatHistory.map((message) =>( */}
                    <p>{chatHistory}</p>
                {/* ))} */}
            </div>
            <div>
                <input 
                    value={inputVal}
                    onChange ={(event) =>{
                        setInputVal(event.target.value)
                    }}
                />
                <button onClick = {handlSendMessage}>Send Message</button>
            </div>
        </>
    );
}


