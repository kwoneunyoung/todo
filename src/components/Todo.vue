<template>
    <div class="container">
    <font-awesome-icon icon="fas fa-trash-can" />
        <div class="todo-container">
            <p>Todo_List</p>
            <img src="../assets/img/delete.png">
           
            <div class="chk-main">
                <input class="chkbox" type="checkbox"><input class="chktext" type="text" placeholder="할일 입력">
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    name : 'Todo',
    

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Gothic&display=swap');


.todo-container {
    margin-top : 50px;
    text-align: center;
}

.todo-container p {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 50px;
}

.todo-container img {
    width: 30px;
    height: 30px;

}

.chktext {
    margin-left: 10px;
    width: 500px;
}


</style>