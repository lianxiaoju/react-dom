import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import style from "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <ul>
                    <li>
                        <NavLink activeClassName={style.act} to="/home">首页</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.act} to="/classify">分类</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.act} to="/find">发现</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.act} to="/shopcar">购物车</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.act} to="/login">未登录</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
