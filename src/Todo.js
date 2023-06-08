import React, { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd';
import { Input } from 'antd';
import ModalEdit from './ModalEdit'
import './Todo.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown1 from './Dropdown';
import { useRef } from 'react';
import { DeleteFilled,DeleteOutlined } from '@ant-design/icons';
export const Todolist = () => {
    const [show, setShow] = useState(false)
    const s = 0;
    let t= '';
    const inputRef = useRef()
    const [work, setWork] = useState('')
    const [todo, setTodo] = useState(
        [
            { id: 1, title: 'Read a book' },
            { id: 2, title: 'Making video' },
            { id: 3, title: 'Playing game' },
        ]
    )
    const [text, setText] = useState(false)
    const [count, setCount] = useState()
    const handleEdittodo = (item) => {
        let newtodo = [...todo]
        let current =todo;
        current=current.filter((itemcr)=>
        {
            if(item.title===itemcr.title)
            t=item.title
            return item
        })
         if(t===item.title){
            toast.error("Trùng công việc khác, vui lòng nhập lại !!!")
            return ;
         }

        let index = todo.findIndex(item1 => item1.id === item.id)
        newtodo[index].id = item.id
        newtodo[index].title = item.title
        setTodo(newtodo)
        toast.success("Edit success !!!")
    }
    const onChangeWork = (event) => {
        setWork(event.target.value)
        setShow(true)
    }
    const handleonClickAdd = () => {
        const s = Math.floor(Math.random() * 10000);
        let current = todo;
        let a;
        current = current.filter((item) => {
            if (item.title === `${work}`)

                a = item.title
        })

        if (work === '') {
            setShow(false)
            inputRef.current.focus();
            toast.error("Vui lòng không được để trống !!!")
            return;
        }
        else if (work === `${a}`) {
            toast.error("Không được nhập trùng !!!")
            setWork('')
            setShow(false)
            return;
        }
        setTodo([{
            id: s,
            title: `${work}`
        }, ...todo])
        setWork('')
        inputRef.current.focus();
        toast.success("Add success !!!")
        setShow(false)


    }
    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            handleonClickAdd(event)
        }
    }
    const onClickXoa = (item) => {
        let current = todo;
        current = current.filter(itcurrent => itcurrent.id !== item.id)
        setTodo(current)
        toast.success("Delete success !!!!")
    }
    return (
        <>
            <ToastContainer />
            <div className="todo">
                <div className='tdl1'>
                    <div className="title-todo" >Todo List </div>
                    <Input ref={inputRef} style={{ width: '400px',borderRadius:'7px 0px 0px 7px' }} className="todo-input" placeholder="Nhập thêm công việc cần làm !!!"
                        value={work}
                        onKeyDown={(event) => handleEnter(event)}
                        onChange={(event) => onChangeWork(event)}
                    />
                    {show === true ? <Button style={{ marginRight: '20px' ,borderRadius:'0px 10px 10px 0px'}} type="primary" onClick={handleonClickAdd} >Add</Button>
                        : <Button style={{ marginRight: '20px',fontWeight:'bold',borderRadius:'0px 10px 10px 0px' }} type="primary" disabled onClick={handleonClickAdd} >Add</Button>}
                    <div className="todo-list">
                        {todo.map((item, index) => {
                            return (
                                <>
                                    <div className="todo-container" key={item.id}>
                                        <div key={item.id} className="todo-title"  > {index + 1}. {item.title}</div>
                                        <div className="todo-icon">
                                            <span style={{ marginRight: '15px' }}>
                                                <ModalEdit
                                                    handleEdittodo={handleEdittodo}
                                                    item={item}
                                                />
                                            </span>
                                            <DeleteOutlined  style={{ color: '#FEBD69' }} onClick={() => onClickXoa(item)}  /> 
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )

}
