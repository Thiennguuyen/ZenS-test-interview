import React from "react";

const Content = () => {
    return (
        <>
            <div className="my-14 mx-[20%]">
                <div>
                    <p className="text-left text-base text-[#615757]">
                        A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."
                        The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
                        The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."
                    </p>
                </div>
                <div className="h-12 mx-[10%]" style={{borderBottomWidth: "1px"}}></div>
                <div className="flex items-center justify-center my-10 space-x-6">
                    <button className="pushable bg-[#0552aa]"> 
                        <span className="front bg-[#2c7edb]">
                            This is Funny!
                        </span>                                                                  
                    </button>
                    <button className="pushable bg-[#039640]">
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

export default Content;