<template>
    
    <div class="todo-content">

        <div class="todo-container">
            <div>
                <img src="../assets/img/check.png" style="width:50px" @click="chkAll"><span>Todo_List</span>
                <img src="../assets/img/delete.png" @click="removeAll">
            </div>
            <div class="chk-main">
                <input class="chkbox" type="checkbox"><input v-model="todoItem" @change="setTodoItem" class="chktext" type="text" placeholder="할일 입력"> 
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    name : 'Todo',
    data() {
        return {
            todoItem : '',
            todoItems : [],
        }
    },
    methods: {
        removeAll() {
            console.log("리스트 전체 삭제 시킬 것")
        },
        chkAll() {
            console.log("리스트 전체 체크 시킬 것")
        },
        setTodoItem() {
            // this.item = this.todoItem
            // console.log(this.item)
            sessionStorage.setItem('todo', this.todoItem)


        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Gothic&display=swap');


.todo-container {
    text-align: center;
    
}

.todo-container span {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 50px;
}

.todo-container img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 60px;
}

.chk-main {
    width: 600px;
    height: 50px;
    border: 3px solid black;
    border-radius: 15px;
    margin: 0 auto; /*중앙배치*/
}

.chktext {
    margin-left: 10px;
    width: 500px;
    margin-top: 10px;
    border: 1px solid white;
}


</style>