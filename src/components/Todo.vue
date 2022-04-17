<template>
    
    <div class="container">
        <div class="todo-container">
            <div>
                
                <img src="../assets/img/check.png" style="width:50px" @click="chkAll">
                Todo_List
                <img src="../assets/img/delete.png" @click="removeAll">
            </div>
            <div class="chk-main">
                <input class="chkbox" type="checkbox"><input class="chktext" type="text" placeholder="할일 입력">
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name : 'Todo',
    methods: {
        removeAll() {
            console.log("리스트 전체 삭제 시킬 것")
        },
        chkAll() {
            console.log("리스트 전체 체크 시킬 것")
        }
    }
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
    cursor: pointer;

}

.chktext {
    margin-left: 10px;
    width: 500px;
}


</style>