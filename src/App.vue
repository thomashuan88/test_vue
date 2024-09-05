<template>
    <div class="app">
        <h2 class="title">Routing Test</h2>
        <!-- navigator -->
        <div class="navigate">
            <a href="#" class="active">Home</a>
            <a href="#">News</a>
            <a href="#">About</a>
        </div>
        <!-- content -->
        <div class="main-content">
            will display content base on the route
        </div>
    </div>
</template>

<script lang="ts" setup name="App">

</script>

<style scoped>
.title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10;
    box-shadow: 0 0 2px;
    font-size: 30px;
}

.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}

.navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 'Courier New';
}

.main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}

</style>

