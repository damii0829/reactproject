import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfoList.css";

const users = [
    {
        name: "Oh Sion",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzytkzeE_NgBhtMTU14KdqQYM93YD4x0FjDGmclufug&s=10",
        comment: "Positive mindset, lucky vibe~"
    },
    {
        name: "Tokuno Yushi",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVm21bXoxOGJYCwHJEjoSUp8t47Y2BlqgU8OvZwQ3QA&s",
        comment: "I think likes me~"
    },
    {
        name: "Maeda Riku",
        avatarUrl: "https://pbs.twimg.com/media/GqUx6cFbAAU_82-?format=webp&name=large",
        comment: "Sleeping is the best!"
    },
]

function UserInfoList() {
    const currentData = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className={"comment"}>
                            <UserInfo user={user}/>
                            <div className={"comment-text"}>
                                {user.comment}
                            </div>
                            <div className={"comment-date"}>
                                {currentData.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default UserInfoList;