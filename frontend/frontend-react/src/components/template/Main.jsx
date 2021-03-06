import './Main.css'
import React, { Component } from 'react'

const items = [
    {
        name: "Quêmia",
        photo: "https://i1.wp.com/www.toppapeldeparede.com.br/wp-content/uploads/2021/04/Cute-Kimetsu-no-Yaiba-Wallpapers-for.png?fit=996%2C1600&ssl=1",
        photoName: "Naruto"
    },
    {
        name: "Quêmia",
        photo: "https://i.pinimg.com/originals/8e/bc/45/8ebc456519f2df51cece20f89d5856c7.jpg",
        photoName: "Naruto"
    },
    {
        name: "Quêmia",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaOfMjrUR-MIBf2nTv_qBWZrTt6rtw5jr_w&usqp=CAU",
        photoName: "Naruto"
    },
    {
        name: "Quêmia",
        photo: "https://wallpaperwaifu.com/wp-content/uploads/2019/09/kochou-shinobu-kimetsu-no-yaiba-thumb-1500x844.jpg",
        photoName: "Naruto"
    }
]

export default class Main extends Component {
    state = { posts: items }

    handle = (e) => {
        e.target.classList.toggle("red");
    } 

    render() {
        return (
            <main>
                <div className="content">
                    <ul>
                        {this.state.posts.map((post, i) => (
                            <li key={i}>
                                <div className="post mt-4">
                                    <div className="up ml-3 my-3">
                                        <div className="up__icon"></div>
                                        <div className="up__name ml-3">{post.name}</div>
                                    </div>
                                    <img src={post.photo} alt={post.photoName}
                                        className="img-fluid shadow-lg" />
                                    <div className="buttons my-3">
                                        <div className="pl-4">
                                            <button onClick={this.handle} className="buttons-heart mr-4">
                                                <i className="icons-main fa fa-heart"/>
                                            </button>
                                            <i className="icons-main fa fa-comment mr-4"/>
                                            <i className="fa fa-paper-plane mr-4"/>
                                            <i className="fa fa-smile-wink mr-4"/>
                                        </div>
                                        <div>
                                            <i className="icons-main fa fa-bookmark mr-4"/>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        )
    }
}
