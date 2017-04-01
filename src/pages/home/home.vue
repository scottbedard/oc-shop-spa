<style lang="scss" scoped>@import 'core';
    .home-page {
        align-items: center;
        display: flex;
        font-weight: 300;
        height: 100%;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

    a {
        font-size: 1.5rem;
        margin: 10px;
    }

    .credentials {
        margin-top: 24px;

        h2 {
            padding: 0;
        }

        a {
            font-size: 18px;
            margin-top: 24px;
            display: block;
        }
    }
</style>

<template>
    <div class="home-page">
        <div>
            <h1>oc-shop-spa</h1>
            <h2>This theme is a work in progress, and is not ready for use by anyone.</h2>
            <a href="https://github.com/scottbedard/oc-shop-plugin">Plugin Repository</a>
            <span>-</span>
            <a href="https://github.com/scottbedard/oc-shop-spa">Theme Repository</a>

            <div class="credentials">
                <h2>Backend credentials</h2>
                <div>Username: <strong>demo</strong></div>
                <div>Password: <strong>demo</strong></div>
                <a href="/backend">Log in to the backend</a>
            </div>
        </div>
    </div>
</template>
