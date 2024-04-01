import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const LINKBACKEND = "https://zens-test-interview.onrender.com"

const Content = () => {
    const [jokeData, setJokeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch(`${LINKBACKEND}/joke`)
            .then((response) => response.json())
            .then((data) => setJokeData(data.result));
        } 
        sendRequest();
        for (let i = 0; i < jokeData.length; i++) {
            if (!Cookies.get(jokeData[i]?._id)) {
                setCurrentIndex(i);
                break;
            }
        }
    }, [jokeData]);

    const findCurrentJoke = () => {
        let currentJoke = "END";
        for (let i = 0; i < jokeData.length; i++) {
            if (!Cookies.get(jokeData[i]?._id)) {
                currentJoke = jokeData[i]?.content;
                return currentJoke;
            }
        }
        return currentJoke;
    }

    const handleLike = async (index) => {
        Cookies.set(jokeData[index]._id, "isVotedLIke");
        await fetch(`http://localhost:5000/joke/${jokeData[index]._id}/like`, {
            method: "PATCH",
        })
        setCurrentIndex(currentIndex + 1);
    }

    const handleDislike = async (index) => {
        Cookies.set(jokeData[index]._id, "isVotedDislike");
        await fetch(`http://localhost:5000/joke/${jokeData[index]._id}/dislike`, {
            method: "PATCH",
        })
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <>
            {
                findCurrentJoke() === "END" ? (
                    <>
                        <div className=" flex my-14 mx-[20%] h-52 justify-center items-center">
                            <div>
                                <p className="text-center text-base text-[#615757]">
                                    "That's all the jokes for today! Come back another day!"
                                </p>
                            </div>
                        </div>
                        <div className="border-b-2 h-4 border-stone-200"></div>
                    </>
                ) : (
                    <>
                    <div className="my-14 mx-[20%]">
                        <div>
                            <p className="text-left text-base text-[#615757]">
                                {findCurrentJoke()}
                            </p>
                        </div>
                        <div className="h-12 mx-[10%]" style={{borderBottomWidth: "1px"}}></div>
                        <div className="flex items-center justify-center my-10 space-x-6">
                            <button className="pushable bg-[#0552aa]" onClick={() => {handleLike(currentIndex)}}> 
                                <span className="front bg-[#2c7edb]">
                                    This is Funny!
                                </span>                                                                  
                            </button>
                            <button className="pushable bg-[#039640]" onClick={() => {handleDislike(currentIndex)}}>
                                <span className="front bg-[#29b363]">
                                    This is not Funny!
                                </span>              
                            </button>
                        </div>
                    </div>
                    <div className="border-b-2 h-4 border-stone-200"></div>
                    </>
                )
            }
            
        </>
    )
}

export default Content;