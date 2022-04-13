<template>
    <div class="container">

        <div class="todo-container">
            <input class="chkbox" type="checkbox"><input class="chktext" type="text" placeholder="할일 입력">
        </div>

    </div>
    
</template>

<script>
export default {
    name : 'Todo',
    

}
</script>

<style>
    .todo-container {
        margin-top : 50px;
    }
    .chktext {
        margin-left: 10px;
        width: 500px;
    }
</style>