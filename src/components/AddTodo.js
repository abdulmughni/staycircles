import React from 'react'

import styled from 'styled-components'

const AddTodo = ({ onAddTodo, getSelectedList }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onAddTodo(e.target.value);
    }
  }

  const selectedList = e => {
    getSelectedList(e.target.value);
  }

  return (
    <Wrapper>
      <Input
        type='text'
        onKeyPress={handleKeyPress}
        placeholder='Add new todo...'
      />

      <Select onChange={selectedList}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </Select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 40px;
  width: 500px;
  margin-bottom: 16px;
  float: left;

  &::placeholder {
    color: #8d96a8;
  }
`

const Select = styled.select`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 18px;
  height: 60px;
  margin-bottom: 16px;
  float: left;
  margin-left: 10px;

  option {
    font-size: 15px;
  }
`

export default AddTodo
